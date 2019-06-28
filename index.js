import docuteDemoCode from 'docute-demo-code'
import ElFormRenderer from '@femessage/el-form-renderer'

Vue.component('ElFormRenderer', ElFormRenderer)

window.CustomComponent = Vue.component('CustomComponent', {
  template: '<button type="button" @click="count++">count: {{ count }}</button>',
  props: ['value'],
  data() {
    return {
      count: this.value
    }
  }
})

new Docute({
  target: '#docute',
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
          title: 'Checkbox Group',
          link: '/basic/checkbox-group'
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
        },
        {
          title: 'Group',
          link: '/advanced/group'
        }
      ]
    }
  ]
})
