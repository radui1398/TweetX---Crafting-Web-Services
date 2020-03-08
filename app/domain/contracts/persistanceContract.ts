import Tweet from "../entities/Tweet";

export default interface IDB {
    save: (tweet: Tweet) => void;
}