/**
 * Created by kangxzh on 17-6-28.
 */
import Vue from 'vue'
export default {
  data() {
    return {
      columnsData: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '标识',
          key: 'short_id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '镜像',
          key: 'image'
        },
        {
          title: '状态',
          key: 'status'
        }
      ],
      tableData: [],
      selection: []
    }
  },
  mounted(){
    this.list()
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
    },
    list: function () {
      // 列表数据
      this.$http({
        method: 'GET',
        url: Vue.api.root + '/containers/json'
      }).then(function (response) {
        console.info(response.data);
        this.tableData = response.data.data
      }, function (response) {

      })
    },
    start: function () {
      if (this.selection.length === 0){
        console.info("没有选中不能提交")
        return;
      }
      var params = {};
      let containerIds = [];
      this.selection.forEach(item => {
        containerIds.push(item.id);
      });
      params["ids"] = containerIds;
      this.$http.post(Vue.api.root + "/containers/start",
        params
      ).then(function (response) {
        console.info(response.data)
      }, function (response) {

      })

    },
    onselect: function (selection, row) {
      this.selection = selection
    },
    onselectionchange: function (selection) {
      console.info(selection);
      this.selection = selection
    },
    conselectall: function (selection) {
      this.selection = selection
    }

  }
}
