import CreateTweetUC from "../../app/domain/usecase/CreateTweetUC";
import IDB from "../../app/domain/contracts/persistanceContract";
import SpyDB from "./SpyDB";

describe("CreateTweetUC", () => {
    describe("create", () => {
        test("CreateShouldCreateANewInstance", () => {
            const db: IDB = new SpyDB();

            const uc = CreateTweetUC.create(db);

            expect(uc).toBeDefined();
        });
    });

    describe("execute", () => {
        test("ExecuteCallsTheSaveMethodOnTheDatabase", () => {
            const db = new SpyDB();
            const uc = CreateTweetUC.create(db);
            const tweetMessage = "Hello";

            uc.execute(tweetMessage);
            expect(db.saveCalled).toEqual(true);
        });

        test("ExecuteCallsTheSaveMethodOnlyOnce", () => {
            const db = new SpyDB();
            const uc = CreateTweetUC.create(db);
            const tweetMessage = "Hello";

            uc.execute(tweetMessage);

            expect(db.numberOfSaveCalls).toEqual(1);
        });

        test("ExecuteCallsSaveWithTheCorrectTweet", () => {
            const db = new SpyDB();
            const uc = CreateTweetUC.create(db);
            const tweetMessage = "Hello!";

            uc.execute(tweetMessage);
            expect(db.savedTweet).toEqual(tweetMessage);
        });
    });
});