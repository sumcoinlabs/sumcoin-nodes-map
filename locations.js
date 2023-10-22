const axios = require('axios');
const CachemanFile = require('cacheman-file');
const geoip = require('geoip-lite');

const cache = new CachemanFile({ tmpDir: '.cache', ttl: 24 * 3600 });

const getPeers = async () => {
    try {
        const params = {
            "method": "getpeerinfo",
            "params": [],
            "id": "foo"
        }
        const res = await axios.post('http://user:password@127.0.0.1:3332/', params);
        if (!res.data.result) throw new Error('Missing peers.');
        console.log(`${res.data.result.length} Sumcoin peers found`);
        return res.data.result.map(peer => {
            const [ip,] = peer.addr.split(':');
            return ip;
        });
    } catch (e) {
        console.log('Can\'t get Sumcoin peers', e);
        return [];
    }
};

const getElectrumIPs = async () => {
    try {
        const res = await axios.get('http://164.92.74.251:5000/get-ips');
        console.log(`${res.data.length} Electrum wallet IPs found`);
        return res.data;
    } catch (e) {
        console.log('Can\'t get Electrum IPs', e);
        return [];
    }
};

const formatLocationData = (geoData) => {
    if (!geoData) return null;
    return {
        country_name: geoData.country,
        region_name: geoData.region,
        city: geoData.city,
        latitude: geoData.ll[0],
        longitude: geoData.ll[1]
    };
};

const getLocation = async (ip) => new Promise((resolve) => {
    cache.get(ip, async (err, value) => {
        if (value) {
            return resolve(value);
        }
        try {
            const geo = geoip.lookup(ip);
            const formattedGeo = formatLocationData(geo);
            cache.set(ip, formattedGeo, 24 * 3600);
            resolve(formattedGeo);
        } catch (e) {
            console.log('Can\'t get location', e);
            resolve(null); // Resolve with null if there's an error
        }
    });
});

const getLocations = async () => {
    const sumcoinPeers = await getPeers();
    const electrumIPs = await getElectrumIPs();

    const allIPs = [...new Set([...sumcoinPeers, ...electrumIPs])]; // Combine and deduplicate IPs
    const locations = await Promise.all(allIPs.map(getLocation));

    console.log(`Total IPs (Sumcoin + Electrum): ${locations.length}`);
    return locations.filter(location => location !== null); // Filter out null locations
};

const cacheLocations = async () => {
    const locations = await getLocations();
    cache.set('locations', JSON.stringify(locations), 100);
};

const getCachedLocations = () => new Promise((resolve) => {
    cache.get('locations', (err, value) => {
        resolve(value ? value : []);
    });
});

module.exports = {
    getCachedLocations,
    cacheLocations,
};
