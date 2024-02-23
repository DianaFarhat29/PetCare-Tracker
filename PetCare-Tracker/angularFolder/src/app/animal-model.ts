import {Animal} from "./animal";

export class AnimalModel implements Animal {
  constructor(
    public id: number,
    public owner: number,
    public name: string,
    public race: string,
    public gender: string,
    public birthday: Date,
    public weight: number,
    public height: number,
    public healthCondition: string,
    public lastVisit: Date,
    public notes: string,
    public picture: string
  ) {}

}
