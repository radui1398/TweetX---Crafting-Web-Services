import Result from "../../Result";

export default class Tweet {
    private readonly _text: string;
    private readonly _fullText: string | null = null;

    public static create(message: string) {
        if (!message) {
            return Result.failed();
        }

        message = message.replace(/Fuck/g, "F**k").replace(/fuck/g, "f**k");

        return Result.ok(new Tweet(message));
    }

    private constructor(message: string) {
        const cleanMessage = message.trim();

        if (cleanMessage.length === 0) {
            console.log('Send: Your message is empty');

            this._text = 'Empty tweet.';
            return;
        }

        if(cleanMessage.length > 100){
            this._fullText = cleanMessage;
            this._text = cleanMessage.slice(0,100) + '...';
            return;
        }

        this._text = message;
    }


    public text(): string {
        return this._text;
    }

    public fullText(): string | null{
        return this._fullText;
    }
}