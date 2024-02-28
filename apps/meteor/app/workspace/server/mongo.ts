import { MongoClient } from 'mongodb';
import type { Db, Collection, MongoClientOptions, Document } from 'mongodb';


// a map which as mongo_url : Db
let databases : { self:MongoClient, dbs: { [key:string]:Db} } = {};

function connectDb(mongo_url:string, options?: MongoClientOptions) : Promise<MongoClient> {
	const client = new MongoClient(mongo_url, options);

	return client.connect().catch((error) => {
		// exits the process in case of any error
		console.error(error);
		process.exit(1);
	});
}

export async function getConnection(mongo_url:string, options?: MongoClientOptions) {

    const name = /^mongodb:\/\/.*?(?::[0-9]+)?\/([^?]*)/.exec(mongo_url)?.[1];
    const host = mongo_url.replace(/\/[^\/]*$/, '/'); 
    
    let client = databases[host];
    if(client) {
        let db = client.dbs[name];
        if(db)
            return db;
        else 
            client.dbs[name] = client.self.db(name);
            
    } else {
        console.log(`connection ${host}`);
        client = await connectDb(host, options);
        console.log(`client is ${client}`);
        if(databases[host]) {
            client = databases[host].self;
        } else {
            databases[host] =  {self:client, dbs: {} };
        }
        let db = client.db(name);
        databases[host].dbs[name] = db;
        return db;
    }
}

