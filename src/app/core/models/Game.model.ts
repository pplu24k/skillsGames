import { Theme } from "./Theme.model";

export class Game{


    constructor(public id: number, public image: string, public title: string, public description: string, public positives:number, public negatives:number, public themes:Theme[], public createdBy:number){
    }


}