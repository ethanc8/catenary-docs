# General Transit Feed Specification (GTFS)

**General Transit Feed Specification**, or GTFS for short (*please* just abbreviate it whenever you're making code comments or whatnot) is the industry standard for formatting transit data. If you want to learn about the history of the format, take a look on their [official About page](https://gtfs.org/about/), but that is not required knowledge!

GTFS comes in two "flavours": **Realtime**, and **Schedule**. Let's talk a bit about each. More information about this can be found on the official GTFS [documentation page](https://gtfs.org/documentation/overview/), this is just a simple summary! 

## Realtime

The realtime feed is the "live" information that public transit agencies push out. This is the bulk of the information we need to process through our database, as it's constantly updating. For example, if there's a road closure due to a sudden car crash, the bus might take a detour, which changes a lot of things. There may be:

- **Trip updates**, such as route changes, delays, or trip cancellations. We use this data to hydrate (translation: dynamically update) the GTFS Schedule data with new transit information so our users know if their target vehicle is delayed or missing.

- **Service alerts** are messages to humans about an agency's operation, whether they affect stops/stations, routes, or the entire transit network. 

- **Vehicle positions** is what we use to show you exactly where a vehicle is at a point in time. Note: some very reliable transit systems (often automated metros and such) will exclude this information, reasoning that the rider will not care where a vehicle is because it must be somewhere between two stations, to arrive at the next one on time. Fair enough, we say. We decided to leave those agencies alone, but if someone wants to make something for it, go ahead :D

## Schedule

This is the "static" data for a transit network—stuff that doesn't change from a second-to-second basis. Rather than pushing new versions of this data out every second, agencies can might update their Schedule files from anywhere between every 24 hours to every 24 months. The static data is written in a machine-friendly, human-unfriendly format very similar to CSV (comma-seperated values) files, but it's stored as text files (.txt) in a ZIP file. There are a lot of different ways the data is stored, but we don't use every file, all the time. Not all agencies provide every file, either, since many of them are optional! Here's a basic outline of the most significant files that every agency is required to submit:

- **agency.txt** lists the transit agencies that are included in a given dataset—some endpoints where GTFS data is downloaded collect information from multiple agencies in one single ZIP file. 

- **routes.txt** contains the different routes of a network. For example, this might be a single line in a metro system (e.g. Blue Line, F Line, Line 3) or a bus route (e.g. 167, 606, Brown, Southbound). 

- **trips.txt** represents each sequence of stops that a vehicle might take. This distinguishes route variations (for example, a metro line that branches or an express bus that doesn't stop at every station) from one another. Oftentimes, agencies will represent each *physical* trip that a vehicle takes as a seperate GTFS trip, but there are exceptions.

- **stops.txt** lists all of the stations/stops within a network.

- **stoptimes.txt** shows when a vehicle arrives at/departs from a stop, distinguished by its trip id from *trips.txt*.

- **calender.txt**/**calender_dates.txt** (only one of these is required, agencies can pick which one): *calender.txt* contains which days of the week for when an route is active, while *calender_dates.txt* overrides exceptions to the schedule given (any added or canceled trips for a given date).