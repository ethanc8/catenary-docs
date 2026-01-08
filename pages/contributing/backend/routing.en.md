# Routing Engine

How do I get from point A to point B? This is the question that our devs at Catenary are currently trying to solve. One highly requested (and essential) map feature is the ability to find routes between locations and plan trips ahead of time. For example, if you were on a trip in an unfamiliar area, you might want to figure out what buses/trains to take or how to walk to the stations. This sort of feature exists in many other map programs, but Catenary has yet to implement one. It's in the works, and we can use your help! 

Now, let's get into the juicy bits. It's going to get a lot more technical from here out, unfortunatly, there's no avoiding it. Ready?


## Graph Algorithms
The routing problem (finding a path between points A and B), is most often associated with graphs in computer science. No, not the y = f(x) kind of graph, we're talking about another kind here—the data structure! 

By itself, it's a pretty simple idea: Each data point is represented as a **node**, and these nodes are connected to related data points by a one-way connection called an **arc**. The idea of a graph is actually even easier to understand when you think of it as a literal transit network—each bus stop, train station, ferry terminal, and etc. can be seen as a node, while the path that the vehicle takes between the stops are the arcs. Sometimes, you may see the word **edge** as well—An edge is simply a two-way arc, where you can travel back and forth along the same line. This isn't common in transit since the return vehicle departs from the opposite direction, but with footpaths (that is to say, if you're walking on a sidewalk) this is usually the case. 

Now, in particular, we want to find the **optimal path** between two locations, which means we'll be using algorithms related to graph traversal and shortest path algorithms. In particular, there's Dijkstra's algorithm, which basically explores all the possible paths coming out of a single node, and picks the shortest one to each other node connected to it. Keep in mind that we aren't always looking for the shortest path by distance, but the path that "costs" the least in some way or another, like least waiting time between transfers or least walking needed to reach a station. Meanwhile, we also need to take into account the schedules of the transit network on hand because unlike with cars, transit vehicles are conformed to stops along certain routes and they only pass through these stops once in a while, so everything has to be timed carefully (including to account for delays!)


## Stuff we read(Literature Review)

### Transfer Patterns (TP)
"Transfer Patterns" is short for *Fast Routing in Very Large Public Transportation Networks using Transfer Patterns*, the [research paper](https://ad.informatik.uni-freiburg.de/files/transferpatterns.pdf). This paper provided us a lot of ideas for how to start writing our own algorithm. 

In this paper, the authors outlined how to compute, from transit data, the optimal transfer(s) to take to get from one point on the map to another. The term "transfer pattern" itself refers to the set of vehicles that a user could take to reach stop B from stop A (e.g. a potential TP in an imaginary transit network would be to take the metro Blue line from Main-Roosevelt to 2nd-Roosevelt, and then take the Green line from 1st-Roosevelt to Central Station). 

The first author, Dr. Hannah Bast, later published another paper with her collegues describing a [scalable version](https://ad-publications.cs.uni-freiburg.de/ALENEX_scalable_tp_BHS_2016.pdf) of this algorithm set as well. In fact, Dr. Bast publicized a [video course series](https://ad-wiki.informatik.uni-freiburg.de/teaching/EfficientRoutePlanningSS2012) that walks the viewer through various routing algorithms and leads up to her having the students implement a few ideas in code from the paper itself.

"Wow, that's exactly what we need!" You exclaim, "It's probably all smooth sailing now that you found somewhere to start, right?"

Yes, and no. While this paper and course are amazing and informative, they don't include any working code—only code skeletons with suggestions at the most, and its taylored for object-oriented C++/Java, rather than Rust synatax. The course doesn't go over a full implementation of the paper either, only a program to count how many optimal transfers it takes to travel from a random station A to all stations B connected to it. For one, we need a working copy of this code. Which means, a lot of coding, testing, coding, testing, etc. But also, we want to implement our own algorithm too, rather than copying existing code!

### How does the Catenary code work?

1) Take a set of GTFS Schedule files (in its ZIP form) and read it. Turn this data into a TimeExpandedGraph (TEG). Basically, rather than creating just one node per stop, it creates *three nodes every single time a vehicle reaches a stop*: One node to represent the vehicle's arrival, one node for its departure, and one node to represent a transition state to make any potential transfers. 

Also, use the GTFS Schedule to create a table of potential transfers between routes that a rider can take, such that given a time and two stations from two different routes, the table will return the transfer station between these routes. This is referred to as a set of DirectConnections (DCs).

Both of these processes are done by [transit_networks.rs](https://github.com/catenarytransit/catenary-routing-engine/blob/main/src/transit_network.rs) in our code. 

2) Generate a TransitDijkstra structure from the TEG created by previous section. This is essentially a wrapper for the TEG, but it also includes a variable, cost_upper_bound, that helps stop Dijkstra searches if the time to reach nodes exceeds said cost. The struct also implements the titular Dijkstra algorithm and its helper functions. The reason why the author did not use an exising library for Dijkstra is due to the unique needs of the data structure as well as the high overhead for other libraries that integrate functions unnessesary for this project.

This code is stored in [transit_dijkstras.rs](https://github.com/catenarytransit/catenary-routing-engine/blob/main/src/transit_dijkstras.rs).

This file also contains the struct PathedNode, which is some version of a linked-list that helps keep track of the path-from-source for each reached node after using the Dijkstra algorithm on a graph.

In addition, there's also a struct called Time Dependent Dijkstra (TDD) that is built off of the previously-mentioned DCs, but we will come back to this later!

3) Now that we have our data organized, it's time to do the preprocessing. This takes up the bulk of the computation involved (high complexity!) and turns our TEG into a much more condensed data struct that uses the transfers the paper is named for, QueryGraph. The conversion is run by the function query_graph_construction function located in [transfers.rs](https://github.com/catenarytransit/catenary-routing-engine/blob/main/src/transfers.rs). Since this process is complicated, let's break it down further:

    1) Firstly, query_graph_construction takes in a two Points (geographic coordinates), to represent the starting and ending points of a journey. Using the start and end points, it calls the function stations_near_points to find their closest stations within a set distance, grouping them as source and target stations accordingly. Then, the program will call hub_selection to select the top 1% of most connected stations in the network. The way hub_selection deteremines connectivity is by running a simple version of Dijkstra (by disregarding timestamps and trips) through the TransitDijkstra struct, tens-of-thousands of times, and selected the nodes that get visited the most. 

    2) Next, the function takes these hubs and run the local version of transfers_from_source from each source station. The local transfers_from_source function (which has a Option-Some value passed in for the hubs field) runs Dijkstra for a node until it finds a hub, and then stops, and stores the paths the algorithm took as a vector with each of the stations where a rider would have to make a transfer. By using hubs, we can reduce the overhead for calculating paths since the local version of transfers_from_source runs smaller searches. To connect the hubs to the targets, though, we will have to use the global version of transfers_from_source (with Option-None value for hubs), so it will take longer. 

    3) Now, we clean up the transfer vectors and string them together to create a new, watered-down graph that gives every possible combination of transfers that a rider can take to get from the start to the end of their journey. This simple graph, along with some other helpful information (source stations, target stations, hubs, etc) is stoped in QueryGraph and returned as the struct. We can also write this struct into a JSON file to manually sanity-check the code up to now—that is what serde-json does!

4) Finally, we run the function query_graph_search to look for the best path the rider should take to get to their destination. Using QueryGraph, we quickly create a Time Dependent Dijkstra struct by comparing the transfers with the Direct Connections to see which transfers take the least amount of time, and then run one last iteration of Dijkstra's algorithm from the source to the target station to find the best departure/arrival times. We report the final path to the user, and that's it!

### [The Code](https://github.com/catenarytransit/catenary-routing-engine)
That above is currently all we have for routing, thus far. The author is working on commenting all of the functions, but everything is a work in progress. Feel free to reach out to the Catenary devs via your prefered mode of contact and ask any questions you have!
