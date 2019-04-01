import Docute from 'docute'
import docuteDemoCode from 'docute-demo-code'
import 'element-ui/lib/theme-chalk/index.css'
import Elm from 'element-ui'
import ElFormRenderer from '@femessage/el-form-renderer/src'

Vue.use(Elm)
Vue.component('ElFormRenderer', ElFormRenderer)

window.CustomComponent = Vue.component('CustomComponent', {
  template: '<button type="button" @click="inc">count: {{ count }}</button>',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    inc() {
      this.count++
    }
  }
})

new Docute({
  target: '#app',
  darkThemeToggler: true,
  sourcePath: '/sources',
  plugins: [
    docuteDemoCode()
  ],
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/FEMessage/el-form-renderer'
    }
  ],
  sidebar: [
    {
      title: 'basic',
      links: [
        {
          title: 'Input',
          link: '/basic/input'
        },
        {
          title: 'Select',
          link: '/basic/select'
        },
        {
          title: 'Radio Group',
          link: '/basic/radio-group'
        },
        {
          title: 'Date Picker',
          link: '/basic/date-picker'
        }
      ]
    },
    {
      title: 'Advanced',
      links: [
        {
          title: 'Custom Component',
          link: '/advanced/custom-component'
        },
        {
          title: 'Rules',
          link: '/advanced/rules'
        },
        {
          title: 'Update Form',
          link: '/advanced/update-form'
        },
        {
          title: 'Format',
          link: '/advanced/format'
        },
        {
          title: 'Next Tick',
          link: '/advanced/nexttick'
        },
        {
          title: 'At Change',
          link: '/advanced/at-change'
        },
        {
          title: 'Slot',
          link: '/advanced/slot'
        }
      ]
    }
  ]
})
