# vue3-json-view

Typescript support a vue3-json-view lib which can better show

## 🦄 Usage

```javascript
import JsonView from "vue3-json-view"
import 'vue3-json-view/lib/style.css'
in vue3
setup () {
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

import { JsonView } from 'vue3-json-view'
import 'vue3-json-view/lib/style.css'
app.use(JsonView)
```

## 📦 Install

```bash
npm i vue3-json-view --save

or

yarn add vue3-json-view --save
```

## 🌸 Thanks

This project is heavily inspired by the following awesome projects.

- [vue-json-view](https://github.com/zhaoxuhui1122/vue-json-view)

## 📄 License

[MIT License](https://github.com/Talljack/vue3-json-view/blob/main/LICENSE) © 2021-PRESENT [caoyugang_1](https://github.com/Talljack)
