<template>
    <!-- 顶部导航 -->
    <div class="b-header">
      <nav class="ui inverted attached segment m-padded-mini">
        <div class="ui container">
          <div class="ui inverted secondary stackable menu">
            <h2 class="ui teal header item">Lambda-Blog</h2>
            <router-link :to="{name: 'Home'}" class="m-item item m-mobile-hide">
              <i class="mini home icon"></i>首页
            </router-link>
            <router-link :to="{name: 'Category'}" class="m-item item m-mobile-hide">
              <i class="mini idea icon"></i>分类
            </router-link>
            <router-link :to="{name: 'Tags'}" class="m-item item m-mobile-hide">
              <i class="mini tags icon"></i>标签
            </router-link>
            <router-link :to="{name: 'Archives'}" class="m-item item m-mobile-hide">
              <i class="mini clone icon"> </i>归档
            </router-link>
            <router-link :to="{name: 'About'}" class="m-item item m-mobile-hide">
              <i class="mini info icon"> </i>关于我
            </router-link>

            <div class="right m-item item m-mobile-hide">
              <div class="ui icon inverted transparent input m-margin-tb-tiny">
                <input type="text" placeholder="Search....">
                <i class="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="ui menu toggle black icon button m-right-top m-mobile-show">
          <i class="sidebar icon"></i>
        </a>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "header.vue"
    }
</script>

<style>
  .m-padded-mini {
    padding: 0.2em !important;
  }

  .m-padded-tiny {
    padding: 0.3em !important;
  }
  .m-padded {
    padding: 1em !important;
  }

</style>
