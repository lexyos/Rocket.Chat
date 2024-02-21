import type { Timestamp, Db, ChangeStreamDeleteDocument, ChangeStreamInsertDocument, ChangeStreamUpdateDocument } from 'mongodb';
import { getConnection } from "./mongo"

export class Workspace {

    // id of workspace in DB
    private _id : string;

    //name of workspace on screen
    private _name : string;

    // DB the workspace using
    private _db : Db;

    // settings the workspace using
    private _setting : {[key:string] : object };
    
    //roster of a worksapce
    private _roster : {[key:string] : object };

    constructor(mongo_url:string, database:Db) {
        if(database)
            this._db = database;
        else
            this._db = await getConnection(mongo_url);
    }
}
