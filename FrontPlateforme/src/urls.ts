export const urls = {
  project: {
    create: '/project/create',
    edit: '/project/edit',
    get: {
      all: '/project/dto',
      byId: '/project/dto/getById/',
      byIdWithTasks: '/project/getProjectDTOWithTasks/',
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
      all: '/task/dto',
      byProjectId: '/task/getByIdProject/',
    }
  },
  user:{
    get :{
      all: '/user/dto',
      projectsByUsername: '/user/getProjectsByUsername/'
    },
    register: '/user/signup',
    connection: '/user/signin'
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
