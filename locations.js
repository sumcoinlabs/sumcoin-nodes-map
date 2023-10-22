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
        console.log(`${res.data.result.length} peers found`);
        return res.data.result;
    } catch (e) {
        console.log('Can\'t get peers');
        throw e;
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
        }
    });
});

const getLocations = async () => {
    return getPeers().then(result => Promise.all(result.map(result => {
        const [ip,] = result.addr.split(':');
        return getLocation(ip);
    })));
};

const cacheLocations = async () => {
    const locations = await getLocations();
    cache.set('locations', JSON.stringify(locations), 100)
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
