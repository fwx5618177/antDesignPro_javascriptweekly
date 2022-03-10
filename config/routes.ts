/**
 * 2021.03.10
 * 路由文件
 * @author: wenxuan feng
 */

/**
 * 初始路由文件
 */
const initialRoutes = [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
];

/**
 * 新增路由文件
 * @returns {array} router
 */
const queryRoutes = () => {
  return [
    {
      path: '/schedule',
      name: 'schedule',
      icon: 'FieldTime',
      component: './schedule',
    },
  ];
};

/**
 * Error Page
 */
const errorPages = [
  {
    component: './404',
  },
];

const routes = [...initialRoutes, ...queryRoutes(), ...errorPages];

export default routes;
