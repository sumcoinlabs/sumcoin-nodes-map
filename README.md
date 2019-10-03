![image](https://miningpoolstats.stream/ico/sumcoin.png)


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


![Map](https://user-images.githubusercontent.com/51257210/66169341-4ba37180-e5fd-11e9-9069-24eae46dc2b6.png)
		


#### Thanks

SumcoinLabs
