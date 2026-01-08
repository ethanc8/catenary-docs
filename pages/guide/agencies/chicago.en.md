# Chicago

Catenary is a transit app that helps you see where your bus or train is, anywhere in Chicagoland.  
Watch live departures, explore nearby stops, and check service alerts — all from one place.

[**Launch Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198)

## Supported agencies

With Catenary, you can see all of the bus routes and train lines operated by the following agencies, view upcoming departures, and view their timetables. Also, most of them provide realtime data, so you can know if your train/bus is late and see individual vehicles on the map.

### Rail

* **CTA 'L'** (rapid transit) is supported
  * Realtime train positions, predicted arrival times, and alerts are supported
* **Metra** commuter rail is supported
  * Realtime train positions, predicted arrival times, and alerts are supported
* **NICTD South Shore Line** (commuter rail) is supported
  * Realtime train positions are supported
  * Predicted arrival times and alerts are not supported

### Bus

* **CTA buses** are supported
  * Realtime data is not available
  * Alerts are available
* **Pace buses** are supported
  * Realtime data is available, but it seems to have issues
  * Alerts are not supported
    * No app at all supports alerts for Pace

## Frequently asked questions

### Does Catenary show real-time data in Chicago?
Yes. Catenary provides live train locations and estimated departure times in Chicago.

We also provide live bus locations in the Chicago suburbs, but unfortunately CTA does not provide live bus locations in a format we can use.

### Does Catenary show service alerts in Chicago?

We show service alerts for Metra trains. Unfortunately, CTA, Pace, and NICTD do not provide service alerts in a format we can use.

### Can I see which track my train will be departing from?

No, we do not have this data. The only way you can find out is by viewing the departures board at your station; no app or website at all provides track numbers for upcoming departures in Chicago.

### Do I need to download an app?
No. Catenary runs directly in your browser — just click [**Launch Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198).

### Is Catenary free to use?
Yes. It’s completely free and works on mobile or desktop.

### When does the next bus/train arrive?

[**Launch Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) and search for your stop, or zoom in to find it. After clicking on the stop, the next arrivals will show up.

### Which bus stop or train station is closest to me?

[**Launch Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) and your current location will appear. You can browse the map to find the nearest stop.

### I only care about trains; can I hide the buses?

Yes; in the top-right corner you can click on the "layer" icon...

![alt text](./find-layers-button.png)

... and hide what you don't want to see:

![alt text](./layers-popup.png)

## Diagrams and PDF maps

* [RTA System Map (official)](https://www.rtachicago.org/uploads/images/general/RTA-System-Map.pdf) - Bus and train routes in Cook and the collar counties
* [Railway diagram (official)](https://www.rtachicago.org/uploads/images/general/RTA_Train_Connections.pdf)
  * [CTA 'L' only](https://www.transitchicago.com/assets/1/6/ctamap_Lsystem.pdf)

## How to help out

The progress of adding support for Chicagoland transit operators is tracked at the following spreadsheet:
<https://docs.google.com/spreadsheets/d/15wKbfusysMrV_2lPuMFXCFsSg-TPV31qtbukZi4sEmU/edit>

CTA realtime data is processed by [@catenarytransit/chicago-gtfs-rt](https://github.com/catenarytransit/chicago-gtfs-rt).

If you want to improve our data/maps, [join our Discord](https://discord.gg/bBeDhrzSgz) and head to one of the following threads/channels:

* [#general](https://discord.com/channels/1148092048625385552/1148092049413918772) - for problems unrelated to the specific agency
* [Chicago (CTA)](https://discord.com/channels/1148092048625385552/1160489723463209010)
* [Metra](https://discord.com/channels/1148092048625385552/1390099472788226078)
* [Pace](https://discord.com/channels/1148092048625385552/1388148385323679815)
* [Chicago-area small bus operators](https://discord.com/channels/1148092048625385552/1388199355336491118)

Things we want to work on for Chicago:

* [ ] Get working alerts from Pace (this is rather difficult)
* [x] Get alerts from CTA (there is a good API, that we have to write custom code to connect to)
* [x] Get working alerts from NICTD (there is also a good API we need to connect to)
* [ ] Get realtime data for CTA buses
* [ ] Get arrival time estimates for NICTD
* [ ] Get NICTD to issue valid GTFS so we don't have to fix it ourselves
* [ ] Figure out whether NICTD train 952 exists or not
* [ ] Show the train numbers as ([`trip_short_name`](https://gtfs.org/documentation/schedule/reference/#tripstxt)) for Metra and NICTD trains

