import {ICategory} from "./category-reference";

export interface ITask{
  id: number,
  name:string,
  description: string,
  categories: ICategory[]
}
