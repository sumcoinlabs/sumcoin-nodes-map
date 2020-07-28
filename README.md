![image](https://miningpoolstats.stream/ico/sumcoin.png)


# Sumcoin nodes map

Visualizes Sumcoin nodes on the map.

## What you need

Sumcoind

You need a running sumcoind on the same system you want to run sumcoin-nodes-map on Port 3332 



## Get Free GEO IP (this populates IP data)

* install and run freegeoip   *Source https://github.com/fiorix/freegeoip
```
wget https://github.com/fiorix/freegeoip/releases/download/v3.4.1/freegeoip-3.4.1-linux-amd64.tar.gz
```
```
tar xvfz freegeoip-3.4.1-linux-amd64.tar.gz
```
```
cd freegeoip-3.4.1-linux-amd64
```
```
chmod +x freegeoip
```
```
./freegeoip --quota-max 0
```

## TMUX Session Option to run freegeoip
* Create tmux session named freegeoip
* Start using 
```
./freegeoip --quota-max 0
```
## Open http://your-website.com. (default port is 80)

It's caching Sumcoin Node IP's every 24 hrs into `.cache` folder.



## Clone the node map repo and navigate into it:

```
git clone https://github.com/sumcoinlabs/sumcoin-nodes-map.git
cd sumcoin-nodes-map
```

## Get Node
```
npm i
```
## To test run - (still in your sumcoin-nodes-map dir_
```
sudo node app.js
```
## Run using forever
```
forever start app.js
```

You should now have a working map that shows other nodes talking to yours.  Expand options in your sumcoin.conf file


![Map](https://user-images.githubusercontent.com/51257210/66169341-4ba37180-e5fd-11e9-9069-24eae46dc2b6.png)
		


#### Thanks

SumcoinLabs
