import Tweet from "./Tweet";

export default class Result {
    private _status: boolean;
    private _tweet: Tweet | null;

    private constructor(tweet: Tweet | null) {
        this._status = tweet ? true: false;
        this._tweet = tweet;
    }


    public isSuccess() {
        return false;
    }

    public static ok(tweet: Tweet){
        return new Result(tweet);
    }

    public static failed(){
        return new Result(null);
    }

    public getTweet(){
        return this._tweet;
    }
}