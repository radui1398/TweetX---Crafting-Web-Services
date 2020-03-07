export default class Tweet {
    private _text: string;

    public constructor(message: string) {
        this._text = message;
    }

    public text(): string {
        return this._text;
    }
}