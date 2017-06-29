/**
 * Created by kangxzh on 17-6-28.
 */
import Vue from 'vue'
export default {
  mounted(){
  },
  methods: {
    test: function () {
      console.info("点击事件3");
      var params = {};
      console.info(Vue.api.root);
      this.$http({
        method: 'GET',
        url: Vue.api.root + '/containers/test',
        params: params
      }).then(function (response) {
        //成功函数
      }, function () {
        //失败函数
      })
    }
  }
}
