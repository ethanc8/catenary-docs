Currently, we don't have an interface for our API, but the endpoints are open for public use! The alpha version of our realtime API feed can be accessed from https://birch.catenarymaps.org/get_realtime_locations/ (that link does not lead anywhere!). 

To access a specific agency, format the link like so: https://birch.catenarymaps.org/get_realtime_locations/orangecountytransportationauthority/bus/0/0 
(OCTA, located in California, USA). 

Right now, as you can tell from the URL, it's displaying the feed information for OCTA buses, but you can poke around and try other agencies/modalities, such as:
https://birch.catenarymaps.org/get_realtime_locations/metro~losangeles/metro/0/0 
(LA Metro, California, USA). 

You can locate available agencies from this [map](https://maps.catenarymaps.org/chateausee), the API link is basically organized so that you just have to plug the agency name as spelled from the Chateausee map and its modality (bus, metro, ferry, etc.) into the link and it should give you the desired data:  https://birch.catenarymaps.org/get_realtime_locations/%7Bagency-name%7D/%7Bmodality%7D/0/0.