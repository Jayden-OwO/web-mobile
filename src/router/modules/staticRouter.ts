import type {RouteRecordRaw} from 'vue-router' /**
 * @description 📚 路由参数配置简介
 * @param path ==> 路由菜单访问路径
 * @param name ==> 路由 name
 * @param redirect ==> 路由重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 路由菜单元信息
 // * @param meta.icon ==> 菜单和面包屑对应的图标
 * @param meta.title ==> 路由标题 (用作 document.title || 菜单的名称)
 * @param meta.isLink ==> 路由外链时填写的访问地址
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isHide ==> 是否在菜单中隐藏 (通常列表详情页需要隐藏)
 * @param meta.isKeepAlive ==> 当前路由是否缓存
 * */

/**
 * @description 📚 路由参数配置简介
 * @param path ==> 路由菜单访问路径
 * @param name ==> 路由 name
 * @param redirect ==> 路由重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 路由菜单元信息
 // * @param meta.icon ==> 菜单和面包屑对应的图标
 * @param meta.title ==> 路由标题 (用作 document.title || 菜单的名称)
 * @param meta.isLink ==> 路由外链时填写的访问地址
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isHide ==> 是否在菜单中隐藏 (通常列表详情页需要隐藏)
 * @param meta.isKeepAlive ==> 当前路由是否缓存
 * */

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          isKeepAlive: true
        }
      }
      // {
      //     path: '/course',
      //     name: 'course',
      //     component: () => import('@/views/course/lms-course/index.vue'),
      //     meta: {
      //         title: '我的课程',
      //         isKeepAlive: true,
      //     },
      // },
      // {
      //     path: '/course/detail/:id',
      //     name: 'course-detail',
      //     component: () => import('@/views/course/lms-course/detail.vue'),
      //     meta: {
      //         title: '课程详情',
      //         isKeepAlive: true,
      //         activeMenu: '/course',
      //     },
      // },
      // {
      //     path: '/course/interactive_detail/:id',
      //     name: 'course-detail',
      //     component: () => import('@/views/course/lms-course/interactive-detail.vue'),
      //     meta: {
      //         title: '课程详情',
      //         isKeepAlive: true,
      //         activeMenu: '/course',
      //     },
      // },
      //
      // {
      //     path: '/exam',
      //     name: 'exam',
      //     component: () => import('@/views/exam/index.vue'),
      //     meta: {
      //         title: '我的考试',
      //         isKeepAlive: true,
      //     },
      // },
      // {
      //     path: '/exam/start/:id',
      //     name: 'exam-start-exam',
      //     component: () => import('@/views/exam/start.vue'),
      //     meta: {
      //         title: '开始考试',
      //         isKeepAlive: true,
      //         activeMenu: '/exam',
      //     },
      // },
      // {
      //     path: '/exam/result/:id',
      //     name: 'exam-result',
      //     component: () => import('@/views/exam/result.vue'),
      //     meta: {
      //         title: '考试结果',
      //         isKeepAlive: true,
      //         activeMenu: '/exam',
      //     },
      // },
      //
      // {
      //     path: '/person_center',
      //     name: 'person-center',
      //     component: () => import('@/views/person-center/index.vue'),
      //     meta: {
      //         title: '个人中心',
      //         isKeepAlive: true,
      //     },
      // },
      // {
      //     path: '/login',
      //     name: 'login',
      //     component: () => import('@/views/login/index.vue'),
      //     meta: {
      //         title: '登录',
      //         isKeepAlive: true,
      //     },
      // },
      // {
      //     path: '/password',
      //     name: 'password',
      //     component: () => import('@/views/password/index.vue'),
      //     meta: {
      //         title: '密码',
      //         isKeepAlive: true,
      //     },
      // },
    ]
  }
  // 不需要layout的路由
  // {
  //   path: '/campaign_course',
  //   name: 'campaign-course',
  //   component: () => import('@/views/course/campaign-course/index.vue'),
  //   meta: {
  //     title: '演练课程',
  //     isKeepAlive: true,
  //     isHide: false
  //   }
  // },
  // {
  //   path: '/campaign_course/detail/:id',
  //   name: 'campaign-course-detail',
  //   component: () => import('@/views/course/campaign-course/detail.vue'),
  //   meta: {
  //     title: '演练课程详情',
  //     isKeepAlive: true,
  //     isHide: true
  //   }
  // }
]

/**
 * errorRouter (错误页面路由) 暂时没写
 */
// export const errorRouter = [
//   {
//     path: "/403",
//     name: "403",
//     component: () => import("@/components/ErrorMessage/403.vue"),
//     meta: {
//       title: "403页面"
//     }
//   },
//   {
//     path: "/404",
//     name: "404",
//     component: () => import("@/components/ErrorMessage/404.vue"),
//     meta: {
//       title: "404页面"
//     }
//   },
//   {
//     path: "/500",
//     name: "500",
//     component: () => import("@/components/ErrorMessage/500.vue"),
//     meta: {
//       title: "500页面"
//     }
//   },
//   // Resolve refresh page, route warnings
//   {
//     path: "/:pathMatch(.*)*",
//     component: () => import("@/components/ErrorMessage/404.vue")
//   }
// ];
