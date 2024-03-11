import { Db } from 'mongodb';
import { getConnection } from "./mongo"
import { MongoInternals } from 'meteor/mongo';
const { db } = MongoInternals.defaultRemoteCollectionDriver().mongo;

export class Workspace {

    // mongo_url 
    private _url : string;

    // id of workspace in DB
    private _id : ObjectId;

    //name of workspace on screen
    private _name : string;

    // DB the workspace using
    private _db : Db;

    // settings the workspace using
    private _setting : {[key:string] : object };
    
    //roster of a worksapce
    private _roster : {[key:string] : object };

    constructor(id:string) {
        //this._id = new ObjectId(id);
        this.init();
    }

    async init() : void {
        let col = db.collection('rocketchat_workspace');
        let doc = await col.findOne({name:'test1'});
        console.log(doc);
        this._url = doc.url;
        this._db = await getConnection(this._url);
        await this._db.createCollection("messages").catch((err)=>{ if(err.code!==48) throw e; });
        await this._db.createCollection("settings").catch((err)=>{ if(err.code!==48) throw e; });
    }
}

new Workspace("65e98f437377750b5b45a323");
new Workspace("65e98f437377750b5b45a324");
new Workspace("65e98f437377750b5b45a325");
