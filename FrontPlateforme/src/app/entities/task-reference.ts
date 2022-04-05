import {ICategory} from "./category-reference";

export interface ITask{
  name:string,
  id: number,
  category: ICategory[],
  description: string,
}
