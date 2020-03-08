import IDB from "../../app/domain/contracts/persistanceContract";
import Tweet from "../../app/domain/entities/Tweet";

export default class SpyDB implements IDB {
    public saveCalled : boolean = false;
    public savedTweet : string | null = null;
    public numberOfSaveCalls : number = 0;

    public save(tweet: Tweet) {
        this.numberOfSaveCalls += 1;
        this.saveCalled = true;
        this.savedTweet = tweet.text();
    }
}
