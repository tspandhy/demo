  <template slot="detailsForm">
<!-- // wangEditor富文本编辑器的封装组件 -->
  <div class="editWidth" style="border: 1px solid #ccc;">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="value"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
      @onChange="increase"
    />
  </div>
</template>
<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  name: "WangEditor",
  props: {
    value: {
      type: String,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: null,
      html: "",
      toolbarConfig: {},
      editorConfig: {
        placeholder: "请输入内容...",
        readOnly: false,
        MENU_CONF: {
          uploadImage: {
            server: "https://zhengjiuwang-test.oss-cn-shenzhen.aliyuncs.com/",
            customUpload: ""
          }
        }
      },
      mode: "default" // or 'simple'
    };
  },
  components: {
    Toolbar,
    Editor
  },
  watch: {
    readOnly(newValue) {
      this.editorConfig.readOnly = newValue;
    },
    value(newValue){
        this.html= newValue
        console.log(newValue,"newValues")
    }
  },
  async created() {
  },
  mounted() {
  },
  methods: {
    // 工具栏初始化
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      console.log("我初始化了1", this.value);
      this.html =this.value;
    },
    // 同步更新父组件里的值
    increase() {
      this.$emit("input", this.value);
    }
  }
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
