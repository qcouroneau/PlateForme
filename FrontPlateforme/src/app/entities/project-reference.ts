import { ICategory } from "./category-reference";
import { ITask } from "./task-reference";

export interface IProject {
    id: number,
    name: string,
    description: string,
    budget: number,
    imagePath: String,
    categories: ICategory[],
    tasks: ITask[],
    urlName?: string
}
