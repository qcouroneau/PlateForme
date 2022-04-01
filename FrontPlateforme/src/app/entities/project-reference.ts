import { ICategory } from "./category-reference";

export interface IProject {
    id: number,
    name: string,
    description: string,
    budget: number,
    image: any,
    categories: ICategory[]
}
