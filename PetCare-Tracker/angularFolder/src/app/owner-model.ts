import {Owner} from "./owner";

export class OwnerModel implements Owner {
  constructor(
  public id: number,
  public firstName: string,
  public lastName: string,
  public email: string ,
  public noTel: string,
  public password: string,
  public role: string ,
  public animals:  Set<number>
  ) {}

}
