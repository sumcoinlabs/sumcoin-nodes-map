![image](https://avatars3.githubusercontent.com/u/37975862?s=460&v=4)
#### Master Build Status
[![Build Status](https://travis-ci.org/qwertycoin-org/qwertycoin-nodes-map.svg?branch=master)](https://travis-ci.org/qwertycoin-org/qwertycoin-nodes-map) [![Build status](https://ci.appveyor.com/api/projects/status/78ot0ppti2e16ur9/branch/master?svg=true)](https://ci.appveyor.com/project/Qwertycoin/qwertycoin-nodes-map/branch/master)


# Sumcoin nodes map

Visualizes Sumcoin nodes on the map.

## What you need

You need a running sumcoind on the same system on Port 3333 or change line 8
in location.js

## How to run

* install and run freegeoip
```
cd ~ wget https://github.com/fiorix/freegeoip/releases/download/v3.2/freegeoip-3.2-linux-amd64.tar.gz
```
```
tar xvfz freegeoip-3.2-linux-amd64.tar.gz
```
```
cd freegeoip-3.2-linux-amd64
```
```
chmod +x freegeoip
```
```
./freegeoip --quota-max 0
```
## Run
`npm i`
`sudo node app.js`

## Open http://your-website.com:3333.

It's caching nodes' ips every 24 hrs into `.cache` folder.

![Map](https://cdn.qwertycoin.org/images/other/qwcnodesogimage.png)
		


#### Thanks

SumcoinLabs
