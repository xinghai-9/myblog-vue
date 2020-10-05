import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home');
const Detail = () => import('views/detail/Detail');
const Types = () => import('views/types/Types');
const Tags = () => import('views/tags/Tags');
const Chart = () => import('views/chart/Chart');
const About = () => import('views/about/About');

const BlogsInput = ()=> import('views/admin/blogs-input/BlogsInput');
const BaseEdit = ()=> import('components/content/admin/base-edit/BaseEdit');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/types',
    component: Types
  },
  {
    path: '/tags',
    component: Tags
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/admin',
    component: BlogsInput,
    children: [
      {
        path: '/types',
        component: BaseEdit
      }
    ]
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
