<template>
  <div>
    <!--顶部导航-->
    <blog-header></blog-header>

    <router-view></router-view>

    <!--底部-->
    <blog-footer></blog-footer>
  </div>
</template>

<script>
  import BlogHeader from '@/components/common/header.vue'
  import BlogFooter from '@/components/common/footer.vue'
  export default {
    name: 'app',
    components: {
      BlogHeader,
      BlogFooter
    }
  }
</script>

<style>
  @import 'assets/css/index.css'; /*引入公共样式*/

  .toc-list {
    list-style: none;
    padding-left:20px;
  }
  .toc-list-item a {
    color: #666;
    display: block;
    padding: 4px 0;
    font-weight: 300;
  }
  .toc-list-item a:hover{
    color:#00b5ad;
  }
  .toc-list-item a:active{
    color:#00b5ad;
  }
  .is-active-link {
    font-weight: 700 !important;
    color: teal !important;
  }
</style>
