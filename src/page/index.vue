<template>
  <div id="app">
    <!-- <button @click="dialogVisible = !dialogVisible">show/hide</button>
    <hr>-->

    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="editor"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <my-editor></my-editor>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>-->

    <!-- <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <my-editor></my-editor>
    </el-card>-->

    <!-- <my-editor></my-editor> -->
    <WangEditor v-model="ruleForm.value" :readOnly="false"></WangEditor>
    <!-- <MyEditorWithFormula></MyEditorWithFormula> -->
    <!-- <my-editor-with-mention></my-editor-with-mention> -->
  </div>
</template>

<script>
// import MyEditor from './components/MyEditor.vue'
import WangEditor from "@/components/wangEditor/wangEditorTest";
// import MyEditorWithFormula from './components/MyEditorWithFormula'
// import MyEditorWithMention from './components/MyEditorWithMention'

export default {
  name: "App",
  components: {
    WangEditor
    // MyEditor,
    // MyEditorWithFormula,
    // MyEditorWithMention
  },
  data() {
    return {
      ruleForm: {
        value: `
    <img src=https://file.hezhenjiu.com/app/im/1658816258011.png />  
        `,
        list: []
      }
    };
  },
  watch: {
    "ruleForm.value": {
      handler(newName, oldName) {
        console.log(newName + "111", oldName + "222", "obj.a changed");
      },
      deep: true
    }
  },
  created() {
    this.changeData();
  },
  mounted() {
    this.changeData();
  },
  methods: {
    changeData() {
      for (let i = 0; i < 5; i++) {
        this.ruleForm.list.push({
          value: i
        });
      }
      console.log(this.ruleForm.list,"this.ruleForm.list")
    }
  }
};
</script>

<style>
.box-card {
  width: 800px;
}
</style>
