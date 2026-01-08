# Route Generation

*This project is currently in a very early stage. We're not sure where this train is heading, but we would love for you to hitch a ride with us!*

Route generation refers to how, visually, we generate the routes that vehicles take. Whether it's a bus line, rail line, or ferry path, we have to take the information that transit agencies provide to us and program something to "draw" the paths that these transit options follow! 

If we're lucky, the agency will provide us with an accurate shape.txt file in their GTFS schedule—a list of coordinate points along which the line lies. However, this data does not always match with reality! For example, the coordinates might not line up with the physical roads, rails, and other real-life boundries. Alternatively, different routes might mark their stop in different areas of the same station, creating weird, overlapping shapes between routes that should be overlapped. Even more difficult are cases where the agency doesn't give us any geographical information at all, except for the stop locations. In this case, our software currently infers the shortest, most direct path of a *straight line* in between stations, thus drawing a single path right across the map, through buildings and everything else. Of course, this is inaccurate and a headache to look at, so we're looking for solutions to these problems right now!

Fortunately for us, there are existing research papers and code about these map-matching, rout generating problems, and we have done research on the topic for a while now. We would love to work on this right away, but there's a lot of higher-priority items on our to-do list as well—and we're short-staffed. 

Reach out to us if you're interested in learning more, or helping out!