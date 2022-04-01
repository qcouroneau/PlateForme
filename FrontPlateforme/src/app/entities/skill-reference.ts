import {ICategory} from "./category-reference";

export interface ISkill {
  id: number,
  name: string,
  categories: ICategory[],
}

