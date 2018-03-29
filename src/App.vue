<template>
  <div>
    <headerVue></headerVue>
    <div class="tab border-1px">
       <div class="tab-item">
        <router-link :to="{name:'goods'}" class="tab-char">商品</router-link>
       </div>
       <div class="tab-item">
        <router-link :to="{name: 'ratings'}" class="tab-char">评论</router-link>
       </div>
       <div class="tab-item">
        <router-link :to="{name: 'seller'}" class="tab-char">商家</router-link>
       </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header/header.vue';
    const ERR_OK = 0;

    export default {
        data() {
            return {

            };
        },
        components: {
          'headerVue': header
        },
        created() {
          this.$http.get('/api/seller').then((response) => {
            response = response.body;
            if (response.errno === ERR_OK) {
              this.seller = response.data;
              console.log(this.seller);
            }
          });
        }
    };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align: center
      & > .tab-char
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.active
          color: rgb(240,20,20)
</style>
