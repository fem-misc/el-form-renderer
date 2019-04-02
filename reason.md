[egoist]:https://github.com/egoist
[@pikapkg/web]:https://github.com/pikapkg/web

# 关于代码与示例并存的替代方案

> 目前使用 StoryBook(官方简称SB) 的另一替代方案,但并不是认为 SB 不够好!

## 我想要的

我们写文档的时候,大部分都倾向于使用 .md 撰写

我想要的核心关注点在 .md 文件,
仅仅更新 .md 文件,即可立马看得到变更,无论是在线上还是本地

无需任何构建过程!

这也是 [@pikapkg/web] 正在做的事情,返璞归真,以原始的方式编写 HTML + JS + CSS!

> View Source is back!

## 结果

受限于目前 el-form-renderer 的构建文件,需要依靠 lodash 等模块,
因此为了便捷把 js-bundler 也搬了上来,用于捆绑 el-form-renderer 以及他所需的模块,
构建出正常的 JavaScript 文件.

**但核心依然不变:更新 .md 文件即可立马看得到变更!**

在这里你可能会反驳:既然把 js-bundler 都搬了上来,
为什么不使用那些比较主流的系统?再依靠一些 serverless 相关的企业或者服务,
例如 zeit, netlify 之类的,
把构建过程交给他们,核心关注点也仅仅在 .md 文件了

> 确实我现在使用的正是 zeit/now 来自动构建这个示例网站,上述疑点确实在理,  
> 但**如果**我不是使用这样的服务,单纯的依靠一个 gh-page/cdn 来展示,  
> 这可能意味着我每次修改一个 .md 文件,都要在本地构建出整个应用,才能在实际上有变化,  
> 再次推送到 gh-page/cdn .  
> **而现在,我只需要修改或新增一个 .md 文件,并修改 sidebar 或者 nav 即可华丽转变!**


----------------------------------分割线----------------------------------


## 因此我的选择

> 我是小众派

### 📚[Docute](https://docute.org)

Docute 是一个完全由运行时驱动的 Vue 单页应用,因不涉及服务端组件,这意味着没有构建过程.

**你只需创建一个 HTML 文件和一堆 Markdown 文档,你的网站就差不多完成了!**

####  故事:

我从 docute v3 的时候就用他制作过一个文档,如果你用过早期(一年半前)的 vux ,
你就会发现两者竟如此相似.

另外 docute 的作者 [egoist] 是我偶像/精神领袖,所以他的东西我一向都喜欢!

~~**粉丝护主以及情怀秒杀一切**~~  
~~**粉丝护主以及情怀秒杀一切**~~  
~~**粉丝护主以及情怀秒杀一切**~~

贴一个某北京大神对 egoist 的评价 https://zhuanlan.zhihu.com/p/54036326

### 🔥[Docute-Demo-Code](https://github.com/evillt/docute-demo-code)

这是一个鄙人写的一个 docute 插件,通过一些手段,吧代码块运行起来!
(但插件本身也有限制,目前代码块必须是 vue 单文件组件字符串,所以,不来写几个建议或者点几个star用于后续的迭代吗?🤗前提是如果大家也喜欢 docute)

受限于完全由运行时驱动,所以他/浏览器没有 vue 文件概念,模块`type="module"`也不广泛.

不过鉴于目前几个组件使用 SB 的方式来看,只展示 demo 的同时也展示 代码 已经足够了.

如果有兴趣,可以康一下关键实现 [utils.ts](https://github.com/evillt/docute-demo-code/blob/master/src/utils.ts)

## 为什么不选用/参考...?

### StoryBook 5

不久前 v5 面世!雄厚的技术,实用的扩展!
**但几乎没用过,所以不好评价!(简言:不感冒)**

### VuePress

VuePress 从预览版本开始就是一个专门为技术文档而生的,但随着版本迭代,用户需求以社区贡献,
现在已经支持更多更丰富的插件了,例如以前大家都希望能有 VuePress 官方博客系统.

#### 故事:

早前也用 VuePress 搭建过一个完整的文档,确实很优秀, vue 驱动,完全支持 vue 单文件组件.

但就展示 demo 以及 代码 而言,可能会显得有些庞大,
更好的展示还是需要扩展
markdown-it 生态,以及编写相关 loader 实现.

这里有一个社区插件 [vuepress-plugin-demo-code](https://github.com/BuptStEve/vuepress-plugin-demo-code)

### 参考 Element-UI

由于我们目前大部分项目都在使用 Element-UI,
所以一定程度上他起了模范作用,文档,组件,规范...

文档: markdown + .vue 组合,配合特别编写的 md-loader 处理 .md 文件,
提取出 markdown 代码块内代码,
拼装成符合 vue 单文件组件标准的字符串,再交给 vue-loader 处理,
注册组件`<demo{number}/>`,
最终使用该组件展示在页面上.

### 参考 Vuetify

> 尤大推荐的PC,移动端的一套国外的响应式组件库(Material-Design)

文档: .json + .vue 组合,完善的 layout 通过 json 决定页面内容,
demo + 代码展示区域通过 fetch 获取 .vue 文件内容当做字符串处理.

### 参考 Hey-UI

> 上海一漂亮小姐姐几乎独立制作的一套 UI 库,优雅!

文档: 纯 .vue ,demo + 代码展示区域实现同上

### 参考 Ant-Design-Vue

> Ant-Design 的 Vue 衍生版本

文档: markdown + .vue 组合,demo + 代码展示区域实现原理大致同 Element-UI,
只是组件 demo 与文档目录分开,找起来稍微吃力,但重点还是展示出好的文档!

## Related

- [egoist]
- [Docute](https://github.com/egoist/docute)
- [Docute-Demo-Code](https://github.com/evillt/docute-demo-code)
- [zeit](https://zeit.co)
- [netlify](https://netlify.com)
- [@pikapkg/web]
- [VuePress](https://github.com/vuejs/vuepress)
- [Element-UI](https://github.com/ElemeFE/element)
- [Vuetify](https://github.com/vuetifyjs/vuetify)
- [Hey-UI](https://github.com/heyui/heyui)
- [Ant-Design-Vue](https://github.com/vueComponent/ant-design-vue)
