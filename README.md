![image](https://cdn.qwertycoin.org/images/press/other/qwc-github-3.png)
#### Master Build Status
[![Build Status](https://travis-ci.org/qwertycoin-org/qwertycoin-nodes-map.svg?branch=master)](https://travis-ci.org/qwertycoin-org/qwertycoin-nodes-map) [![Build status](https://ci.appveyor.com/api/projects/status/78ot0ppti2e16ur9/branch/master?svg=true)](https://ci.appveyor.com/project/Qwertycoin/qwertycoin-nodes-map/branch/master)


# Qwertycoin nodes map

Visualizes Qwertycoin nodes on the map.

## What you need
You need a running qwertycoind on the same system on Port 8197 or change line 8
in location.js

## How to run
install and run freegeoip
```
cd ~
wget https://github.com/fiorix/freegeoip/releases/download/v3.2/freegeoip-3.2-linux-amd64.tar.gz
tar xvfz freegeoip-3.2-linux-amd64.tar.gz
cd freegeoip-3.2-linux-amd64
chmod +x freegeoip
./freegeoip --quota-max 0
```
and run
`npm i`
`sudo node app.js`
Open http://your-website.com:8195.

It's caching nodes' ips every 24 hrs into `.cache` folder.

![Map](https://cdn.qwertycoin.org/images/other/qwcnodesogimage.png)
		
## Donate

```
QWC: QWC1K6XEhCC1WsZzT9RRVpc1MLXXdHVKt2BUGSrsmkkXAvqh52sVnNc1pYmoF2TEXsAvZnyPaZu8MW3S8EWHNfAh7X2xa63P7Y
```
```
BTC: 1DkocMNiqFkbjhCmG4sg9zYQbi4YuguFWw
```
```
ETH: 0xA660Fb28C06542258bd740973c17F2632dff2517
```
```
BCH: qz975ndvcechzywtz59xpkt2hhdzkzt3vvt8762yk9
```
```
XMR: 47gmN4GMQ17Veur5YEpru7eCQc5A65DaWUThZa9z9bP6jNMYXPKAyjDcAW4RzNYbRChEwnKu1H3qt9FPW9CnpwZgNscKawX
```
```
ETN: etnkJXJFqiH9FCt6Gq2HWHPeY92YFsmvKX7qaysvnV11M796Xmovo2nSu6EUCMnniqRqAhKX9AQp31GbG3M2DiVM3qRDSQ5Vwq
```

#### Thanks

Cryptonote Developers, Bytecoin Developers, Monero Developers, Karbo Developers, Qwertycoin Community
