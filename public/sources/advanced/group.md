# Group

:::demo
```html
<el-form-renderer ref="form" inline :content="content"></el-form-renderer>
<el-button @click="getVal">getVal</el-button>

<script>
export default {
  data() {
    return {
      content: [
        {
          id: 'person',
          type: 'group',
          items: [
            {
              id: 'name',
              label: 'name',
              type: 'input',
              default: 'evillt'
            },
            {
              id: 'age',
              label: 'age',
              type: 'select',
              default: 18,
              options: [
                {
                  value: 18
                },
                {
                  label: '19',
                  value: 19
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    getVal() {
      console.log(this.$refs.form.getFormValue())
    }
  }
}
</script>
```
:::
