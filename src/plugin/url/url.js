/**
 * Created by kangxzh on 17-6-28.
 */

export default {
  install: function plugin(Vue) {
    var location = window.location;
    var host = location.host;
    var port = "80";
    var root = "http://" + host + ":" + port + "/api";

    Vue.api = {
      root: root
    }
  }
}
