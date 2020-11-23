import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home");
const Detail = () => import("views/detail/Detail");
const Types = () => import("views/types/Types");
const Tags = () => import("views/tags/Tags");
const Video = () => import("views/video/Video");
const Chart = () => import("views/chart/Chart");
const About = () => import("views/about/About");


const Login = () => import("components/common/login/Login");

const BlogsInput = () => import("views/admin/blogs-input/BlogsInput");
const TypesEdit = () => import("views/admin/blogs/TypesEdit");
const TagsEdit = () => import("views/admin/blogs/TagsEdit");

const Test = () => import("components/common/test/Test");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/types",
    component: Types
  },
  {
    path: "/tags",
    component: Tags
  },
  {
    path: "/video",
    component: Video
  },
  {
    path: "/chart",
    component: Chart
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/admin",
    redirect: "/admin/blogs"
  },
  {
    path: "/admin/blogs",
    component: BlogsInput
  },
  {
    path: "/admin/types",
    component: TypesEdit
  },
  {
    path: "/admin/tags",
    component: TagsEdit
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Login
  },
  {
    path: "/test",
    component: Test
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
