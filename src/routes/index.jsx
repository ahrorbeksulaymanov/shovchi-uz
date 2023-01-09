
import Chat from '../components/chat'
import LoginPage from '../components/login'
import MainPage from '../components/main-page/index'
import RegisterPage from '../components/reagister'
import UserView from '../components/viewUser'

export const public_routes = [
    {
        title: "Main page",
        path: "/",
        component: MainPage,
        exact: true,
        config: {
          showLink: false,
          structure: "clientLayout",
        },
    },
    {
      title: "User page",
      path: "/user/:id",
      component: UserView,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
  },
  {
    title: "Chat",
    path: "/chat",
    component: Chat,
    exact: true,
    config: {
      showLink: false,
      structure: "clientLayout",
    },
},
    {
        title: "Login page",
        path: "/signin",
        component: LoginPage,
        exact: true,
        config: {
          showLink: false,
          structure: "noneLayout",
        },
    },
    {
        title: "Register page",
        path: "/signup",
        component: RegisterPage,
        exact: true,
        config: {
          showLink: false,
          structure: "noneLayout",
        },
    },
]

export const private_rotes = []