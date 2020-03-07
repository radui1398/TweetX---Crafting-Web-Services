import Tweet from '../../app/Tweet';

describe("Tweet", () => {
    describe("create", ()=>{
       test("CreateShouldReturnAFailedResultIfAnEmptyStringIsPassed", () => {
            const result = Tweet.create("");

            expect(result.isSuccess()).toEqual(false);
            expect(result.getTweet()).toBeNull();
       });
    });

    describe("text", () => {
        test("TextShouldReturnTheOriginalMessage", () => {
           const input = "Hello from Romania";
           const result = Tweet.create(input);

           expect(result.getTweet()!.text()).toEqual(input);
        });
    });
});

// Given an [empty string]
// When creating [a new Tweet]
// Then an [error] should be returned