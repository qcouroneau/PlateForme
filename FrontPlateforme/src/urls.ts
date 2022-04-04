export const urls = {
  project: {
    create: '/project/create',
    get: {
      all: '/project/dto',
      byId: '/project/dto/getById/',
      byName: '/project/dto/getByName/'
    }
  },
  category: {
    get: {
      all: '/category/dto'
    }
  },
  image: {
    create: '/image/create',
    folder: '/project-photos/'
  }
}
