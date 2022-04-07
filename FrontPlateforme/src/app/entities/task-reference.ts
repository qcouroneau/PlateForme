import {ICategory} from "./category-reference";

export interface ITask{
  name:string,
  id: number,
  description: string,
  done: boolean,
  categories: ICategory[],
}
