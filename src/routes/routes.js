import routers from '../../config/routers';
import MainPage from '../Layout/MainPage/MainPage';
import Login from '../Layout/Login/Login';
import Register from '../Layout/Register/Register';

//Public
const publicRouter = [
  { path: routers.mainpage, component: MainPage },
  { path: routers.login, component: Login },
  { path: routers.register, component: Register },
];

const privateRouter = [];

export { publicRouter, privateRouter };
