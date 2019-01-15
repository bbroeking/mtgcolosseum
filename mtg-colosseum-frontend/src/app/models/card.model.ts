// These objects are going to be inserted into an array of objects
export class CardObject {
    constructor(
        public name: string, 
        public cmc: string,
        public set: string,
        public collector_number: string,
        public rarity: string,
        public image_uris: Object
    ){}
}