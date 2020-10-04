<template>
  <div id="editor">
    <mavon-editor style="height: 100%"/>
  </div>
</template>

<script>
  var mavonEditor = require('mavon-editor')
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'Editor',
    components: {
      'mavon-editor': mavonEditor.mavonEditor
    }
  }
</script>

<style scoped>
  #editor {
    margin: auto;
    width: 80%;
    height: 580px;
  }
</style>
