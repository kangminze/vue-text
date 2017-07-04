<template>
  <div class="list_background">
    <div class="operation">
      <Button type="primary" shape="circle" @click="start()">启动</Button>
      <Button type="primary" shape="circle">停止</Button>
      <Button type="primary" shape="circle">重启</Button>
    </div>
    <div>
      <Table border :columns="columnsData" :data="tableData" @on-select="onselect"
             @on-selection-change="onselectionchange" @on-select-all="conselectall"></Table>
    </div>
  </div>
</template>

<script>
  import ContainerService from '../services/containers.js';
  export default ContainerService
</script>

<style>
  .operation {
    text-align: right;
    margin: 10px 0;
  }

  .list_background {
    background-color: #FFFFFF;
    padding: 10px;
  }
</style>
