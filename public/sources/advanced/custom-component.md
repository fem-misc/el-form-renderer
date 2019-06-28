# Custom Component

:::demo
```html
<el-form-renderer ref="form" :content="content" inline></el-form-renderer>
<button @click="log">log my value</button>

<script>
import CustomComponent from './custom-component.vue'

export default {
  name: 'custom-component',
  data() {
    return {
      content: [
        {
          id: 'button',
          component: CustomComponent,
          default: 233,
          label: '按钮'
        }
      ]
    }
  },
  methods: {
    log() {
      console.log(this.$refs.form.getFormValue())
    }
  }
}
</script>
```
:::
