![image](https://avatars3.githubusercontent.com/u/37975862?s=460&v=4)
#### Master Build Status
[![Build Status](https://travis-ci.org/qwertycoin-org/qwertycoin-nodes-map.svg?branch=master)](https://travis-ci.org/qwertycoin-org/qwertycoin-nodes-map) [![Build status](https://ci.appveyor.com/api/projects/status/78ot0ppti2e16ur9/branch/master?svg=true)](https://ci.appveyor.com/project/Qwertycoin/qwertycoin-nodes-map/branch/master)


# Sumcoin nodes map

Visualizes Sumcoin nodes on the map.

## What you need

Sumcoind

You need a running sumcoind on the same system you want to run sumcoin-nodes-map on Port 3332 

## Clone the repo:

```
git clone https://github.com/sumcoinlabs/sumcoin-nodes-map.git
```

## Get Free GEO IP (this populates IP data)

* install and run freegeoip   *Source https://github.com/fiorix/freegeoip
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
## Get Node
```
npm i
```
## To Run
```
sudo node app.js`
```

## Open http://your-website.com. (default port is 80)

It's caching Sumcoin Node IP's every 24 hrs into `.cache` folder.

![Map](https://github.com/sumcoinlabs/sumcoin-nodes-map/images/Sumcoin-map.png)
		


#### Thanks

SumcoinLabs
