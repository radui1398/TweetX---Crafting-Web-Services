import IDB from "../contracts/persistanceContract";
import Tweet from "../entities/Tweet";

export default class CreateTweetUC {
    private _db : any;

    public static create(db: IDB) {
        return new CreateTweetUC(db);
    }

    public execute(input: string){
        const result = Tweet.create(input);
        this._db.save(result.getTweet()!);
        // sends mail
    }

    private constructor(db: IDB) {
        this._db = db;
    }
}