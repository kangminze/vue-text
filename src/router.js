/**
 * Created by kangxzh on 17-6-28.
 */
import Login from '@/components/login/Login';
import Containers from '@/components/containers/views/Containers';
import Index from '@/components/Index';
var routers = [
  {
    path: '/index',
    component: Index,
    children: [
      {
        path:'/containers',
        component: Containers,
        name:'容器管理'
      }
    ]
  },
  {
    path:'/login',
    component: Login
  }
];
export default routers;
