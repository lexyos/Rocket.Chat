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

    constructor(url:string) {
        console.log('in workspace');
        this._db = getConnection(url);
        this.init();
    }

    async init() : void {
        console.log('init');
        //await this._db.createCollection("pet");
    }
}

new Workspace("mongodb://localhost:27017/test1");
new Workspace("mongodb://localhost:27017/test2");
new Workspace("mongodb://localhost:27017/test3");
new Workspace("mongodb://localhost:27017/test4");
new Workspace("mongodb://localhost:27017/test5");
new Workspace("mongodb://localhost:27017/test1");
