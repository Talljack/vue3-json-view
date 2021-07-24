# vue3-json-view

Typescript support a vue3-json-view lib which can better show

## 🦄 Usage

```
It is recommended to use this way

import JsonView from "vue3-json-view"
in vue3

<template>
    <json-view :data="data"/>
</template>

setup () {
  components: {
    JsonView
  },
  const data = reactive({
    name: 'yugang.cao',
    age: 23,
    home: 'my home'
  })
  return {
    data
  }
}
or

in main.js
import { JsonView } from 'vue3-json-view'
app.use(JsonView)
```

## 📦 Install

```bash
npm i vue3-json-view --save

or

yarn add vue3-json-view --save
```

## 相关配置说明

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 传入的 json 数据（必填） | Object | - |
| closed | 是否折叠全部 | Boolean | false |
| deep | 展开深度,越大渲染速度越慢,建议不超过 5 | Number | 3 |
| icon-style | 折叠按钮样式，可选值为 square、circle、triangle | String | square |
| icon-color | 两个折叠按钮的颜色 | Array | theme=vs-code 时，['#c6c6c6', '#c6c6c6']，其他情况为['#747983', '#747983'] |
| theme | 可选主题样式,可选值为 one-dark、vs-code，不选时为默认的白色主题 | String | - |
| json-key | 显示对象的 key 值 | String | '' |
| font-size | 字体大小,单位 px | Number | 14 |
| line-height | 行高，单位 px | Number | 24 |

## 🌸 Thanks

This project is heavily inspired by the following awesome projects.

- [vue-json-view](https://github.com/zhaoxuhui1122/vue-json-view)

## 📄 License

[MIT License](https://github.com/Talljack/vue3-json-view/blob/main/LICENSE) © 2021-PRESENT [caoyugang_1](https://github.com/Talljack)
