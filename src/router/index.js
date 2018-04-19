import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home.vue'
import Blog from '@/components/pages/blog.vue'
import Category from '@/components/pages/category.vue'
import Tags from '@/components/pages/tags.vue'
import Archives from '@/components/pages/archives.vue'
import About from '@/components/pages/about.vue'
import Error404 from '@/components/common/error/404.vue'
import Error500 from '@/components/common/error/500.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',  // 设置活动类名称
  routes: [
    {name: 'Index',     path: '/',          redirect: {name: 'Home'}},	  // 重定向到首页
    {name: 'Home',      path: '/home',      component: Home},					    // 首页
    {name: 'Blog',      path: '/blog',      component: Blog},					    // 博客详情页
    {name: 'Category',  path: '/category',  component: Category},         // 分类页
    {name: 'Tags',      path: '/tags',      component: Tags},             // 标签页
    {name: 'Archives',  path: '/archives',  component: Archives},         // 归档页
    {name: 'About',     path: '/about',     component: About},            // 关于我
    {name: 'Error500',  path: '/500',       component: Error500},         // 500错误
    {name: 'Error404',  path: '/404',       component: Error404}          // 404错误
  ]
})
