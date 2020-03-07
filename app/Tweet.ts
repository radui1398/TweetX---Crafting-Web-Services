import Result from "./Result";

export default class Tweet {
    private readonly _text: string;

    public static create(message: string){
        if(!message){
            return Result.failed();
        }

        message = message.replace(/Fuck/g, "F**k").replace(/fuck/g, "f**k");

        return Result.ok(new Tweet(message));
    }

    private constructor(message: string) {
        const cleanMessage = message.trim();

        if(cleanMessage.length === 0){
            console.log('Send: Your message is empty');

            this._text = 'Empty tweet.';
            return;
        }

        this._text = message;
    }


    public text(): string {
        return this._text;
    }
}