const { Router } = require("express");
const getDB = require('./database.js');

const router = Router();

router.get('/24h_city_stations', async (req, res) => {
    try {
        const db = await getDB();
        const result = await db.collection('Stations').find({ "Access Days Time": { $regex: "24 hours" } }).toArray();
        let resultByCities = {};
        for (let o of result) {
            let city = o['City'];
            if (!(city in resultByCities)) {
                resultByCities[city] = [];
            }
            resultByCities[city].push(o)
        }
        res.json(resultByCities);
    } catch (e) {
        console.error(e);
        res.json(null);
    }
});

router.get('/public_stations', async (req, res) => {
    try {
        const db = await getDB();
        const result = await db.collection('Stations').find({ "Access Code": "public" }).toArray();
        res.json(result);
    } catch (e) {
        console.error(e);
        res.json(null);
    }
});

router.get('/private_stations', async (req, res) => {
    try {
        const db = await getDB();
        const result = await db.collection('Stations').find({ "Access Code": "private" }).toArray();
        res.json(result);
    } catch (e) {
        console.error(e);
        res.json(null);
    }
});

module.exports = router;

