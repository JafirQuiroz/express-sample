const { config } = require('./../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPass);
const DB_NAME = encodeURIComponent(config.dbName);

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}`

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI);
    }
    connect() {
        return new Promise((resolve,reject)=> {
            this.client.connect(error => {
                if(err) {
                    reject(err);
                }
                console.log('connected');
                resolve(this.client.db(this.dbName));
            })
        });
    }
    getAll(collection, query) {

    }
}