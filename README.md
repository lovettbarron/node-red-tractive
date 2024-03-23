# nodered-contrib-tractive

[Tractive](https://tractive.com/) connectivity for [NodeRed](http://nodered.org), mostly a node-red wrapper for this [lovely library](https://github.com/FAXES/tractive).

### Included Nodes

'getAccountInfo'

#### Pet Info

'getPets' (list)
'getPet' (by id)

#### Get Tracker Info

'getAllTrackers' (list)
'getTracker' (by id)

#### Tracker Specific

- 'getTrackerHistory' (date range)
- 'getTrackerLocation' (Latest report)
- 'getTrackerHardware' (Latest Hardware report)

## BIG Disclaimer

**THIS IS VERY ALPHA** USE AT YOUR OWN RISK.

THIS LIBRARY NOT BE USED IF IT COULD POSSIBLY IMPACT YOUR PET'S HEALTH AND SAFETY.

For example, an automation that uses this tractive node to control temperature, or feeding, or similar.

Until Tractive offers an official API (and tools like this one don't rely on reverse engineering), please use common sense to protect your animal's wellbeing.

For my own use case, I use it exclusively for data logging to merge my own wellness oriented data logging with my animals to see how we affect each other.
