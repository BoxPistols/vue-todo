# vue-todo

Created with CodeSandbox

Use
https://bootstrap-vue.org/docs/components/form-checkbox#form-checkbox-inputs

### vuejs-dialog

```html
<button class="open" @click="onAlert()">Open</button>
```

```js
onAlert: function () {
  this.$dialog
vuejs-dialog
onAlert: function () {
  this.$dialog
    .confirm(
      {
        title: '最終確認',
        body: '本当に削除してもよろしいですか？',
      },
      {
        okText: 'はい',
        cancelText: 'キャンセル',
      }
    )
    .then(function () {
      console.log('実行しました');
    })
    .catch(function () {
      console.log('実行はキャンセルされました');
    });
},
```
