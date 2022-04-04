import { ICategory } from "./category-reference";

export interface IProject {
    id: number,
    name: string,
    description: string,
    budget: number,
    imagePath: String,
    categories: ICategory[]
}
