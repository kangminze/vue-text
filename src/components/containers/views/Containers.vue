<template>
  <div>
    <Table border :columns="columnsData" :data="tableData"></Table>
    <Button type="success" @click="test()" long>确认提交</Button>
  </div>
</template>

<script>
  import ContainerService from '../services/containers.js';
  export default ContainerService
</script>
