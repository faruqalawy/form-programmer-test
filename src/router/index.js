import { createRouter, createWebHistory } from "vue-router";
import Form from "../pages/Form.vue";
import FormPreview from "../pages/FormPreview.vue";

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/preview',
    name: 'FormPreview',
    component: FormPreview
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
