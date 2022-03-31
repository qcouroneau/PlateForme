export interface IProject {
    id: number,
    name: string,
    description: string,
    budget: number,
    image: any,
    tags: tag[],
    categories: ProjectCategory[]
}

interface tag {
  display: string,
  value: string
}

export interface ProjectCategory {
  name: string
}
