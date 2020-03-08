import Tweet from '../../app/Tweet';

describe("Tweet", () => {
    describe("create", ()=>{
       test("CreateShouldReturnAFailedResultIfAnEmptyStringIsPassed", () => {
            const result = Tweet.create("");

            expect(result.isSuccess()).toEqual(false);
            expect(result.getTweet()).toBeNull();
       });

       test("CreateShouldReplaceAllInstancesOfBadWordsWithTheCensoredVersion", () => {
            const result = Tweet.create("I don't give a fuck fuck no Fuck.");

            expect(result.getTweet()!.text()).toEqual("I don't give a f**k f**k no F**k.");
       });
    });

    describe("text", () => {
        test("TextShouldReturnTheOriginalMessage", () => {
           const input = "Hello from Romania";
           const result = Tweet.create(input);

           expect(result.getTweet()!.text()).toEqual(input);
        });

        test("TextShouldReturnNoMoreThan100Characters", () =>{
           const input = "ASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWSD";
           const result = Tweet.create(input);

           expect(result.getTweet()!.text()).toEqual("ASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWASDQWEFFDQWA...");
        });

        test("TextShouldHaveANullFullTextIfThePassedStringHasALengthLowerThan100", ()=>{
            const input = "Hello! ";
            const result = Tweet.create(input);

            expect(result.getTweet()!.fullText()).toBeNull();
        });
    });
});

// Given an [empty string]
// When creating [a new Tweet]
// Then an [error] should be returned