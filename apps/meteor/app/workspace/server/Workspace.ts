import type { Timestamp, Db, ChangeStreamDeleteDocument, ChangeStreamInsertDocument, ChangeStreamUpdateDocument } from 'mongodb';
import { getConnection } from "./mongo"

export class Workspace {

    // mongo_url 
    private _url : string;

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

    constructor(url:string) {
        this._url = url;
        this.init();
    }

    async init() : void {
        this._db = await getConnection(this._url);
        await this._db.createCollection("messages").catch((err)=>{ if(err.code!==48) throw e; });
        await this._db.createCollection("settings").catch((err)=>{ if(err.code!==48) throw e; });;
    }
}

new Workspace("mongodb://localhost:27017/test1");
new Workspace("mongodb://localhost:27017/test2");
new Workspace("mongodb://localhost:27017/test3");
new Workspace("mongodb://localhost:27017/test4");
new Workspace("mongodb://localhost:27017/test5");
new Workspace("mongodb://localhost:27017/test1");
