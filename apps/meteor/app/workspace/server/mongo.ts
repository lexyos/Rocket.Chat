//import { MongoClient } from 'mongodb';
//import type { Db, Collection, MongoClientOptions, Document } from 'mongodb';

// a map which as mongo_url : Db
let databases : {[key:string] : Db } = {};

/*
function connectDb(mongo_url:string, options?: MongoClientOptions): Promise<MongoClient> {
	const client = new MongoClient(mongo_url, options);

	return client.connect().catch((error) => {
		// exits the process in case of any error
		console.error(error);
		process.exit(1);
	});
}

export const getConnection = ((): ((mongo_url:string, options?: MongoClientOptions) => Promise<Db>) => {
	let client: MongoClient;

	return async (mongo_url, options): Promise<Db> => {

        let db = databases[mongo_url];
		if (db) {
			return db;
		}

        const name = /^mongodb:\/\/.*?(?::[0-9]+)?\/([^?]*)/.exec(mongo_url)?.[1];
		if (client == null) {
			client = await connectDb(mongo_url, options);
			db = client.db(name);
            databases[mongo_url] = db;
		}

		// if getConnection was called multiple times before it was connected, wait for the connection
		return client.db(name);
	};
})();

*/
