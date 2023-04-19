import { lazy } from 'react';

const routerList = [
  {
    path: "/", // 路径
    name: "首页", // 名字
    key: 'App',
    exact: true, // 精准匹配
    component: lazy(() => import('@/containers/App/index')) // 懒加载方案
    // component: App,
  },
  {
    path: "/user-management",
    name: "用户管理",
    key: 'UserManagement',
    exact: true,
    component: lazy(() => import('@/containers/UserManagement/index')),
    // component: UserManagement,
    routes: [
      {
        path: "/user-management/detail",
        name: "用户詳細資訊",
        key: 'UserDetail',
        exact: true,
        component: lazy(() => import('@/containers/UserManagement/UserDetail/index')),
        // component: UserDetail,
        // routes: [
        //   {
        //     path: "/user/userList/userDetail",
        //     name: "用户详情",
        //     exact: true,
        //     component: lazy(() => import('../page/user/userList/userDetail/index')),
        //   }
        // ]
      }
    ]
  }
]
export default routerList;
