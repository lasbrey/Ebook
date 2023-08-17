import { lazy } from "react";
const Faq = lazy(() => import("../pages/Static/faq"));
const Blog = lazy(() => import("../pages/Static/blog"));
const About = lazy(() => import("../pages/Static/about"));
const Contact = lazy(() => import("../pages/Static/contact"));
const Categories = lazy(() => import("../pages/categories/categories"));
const Single = lazy(() => import("../pages/categories/single"));


const routes = [
  {
    path: "/categories", // url
    component: Categories, // Component to render
  },
  {
    path: "/single", // url
    component: Single, // Component to render
  },
  {
    path: "/blog", // url
    component: Blog, // Component to render
  },
  {
    path: "/faq", // url
    component: Faq, // Component to render
  },
  {
    path: "/about", // url
    component: About, // Component to render
  },
  {
    path: "/contact", // url
    component: Contact, // Component to render
  },
];

export default routes;
