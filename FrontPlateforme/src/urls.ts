export const urls = {
  project: {
    create: '/project/create',
    get: {
      all: '/project/dto',
      byId: '/project/dto/getById/',
      byName: '/project/dto/getByName/'
    },
  },
  skill:{
    get :{
      all: '/skill/dto'
    }
  },
  task:{
    get :{
      all: '/task/dto'
    }
  },
  user:{
    get :{
      all: '/user/dto'
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
