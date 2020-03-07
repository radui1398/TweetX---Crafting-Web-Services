import Tweet from '../../app/Tweet';

describe("Tweet", () => {
    describe("text", () => {
        test("TextShouldReturnTheOriginalMessage", () => {
           const input = "Hello from Romania";
           const tweet = new Tweet(input);

           expect(tweet.text()).toEqual(input);
        });
    });
});