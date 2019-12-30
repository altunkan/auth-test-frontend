import Login from "../views/login/Login.vue";
import MainLayout from "../components/MainLayout.vue";
import Profile from "../views/profile/Profile.vue";

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: MainLayout,
    redirect: "/profile",
    children: [
      {
        path: "/profile",
        component: Profile
      }
    ]
  }
];

export default routes;
