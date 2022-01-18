const { MongoClient } = require('mongodb');

const getDB = async () => {
    const uri = 'mongodb+srv://grupo5:estudiante@examen2assr.hoyg3.mongodb.net/AditaCar?retryWrites=true&w=majority';
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = await client.db('AditaCar');
        return db;
    } catch (error) {
        console.log(e);
    }

}

module.exports = getDB;
