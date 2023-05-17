# vue + typescript メモ

## defineprops への default 値設定

typescript を使用して型のみ宣言して使用する場合は defipeProps にてデフォルト値を指定できない。その場合 withDefaults コンパイラーマクロを使用する

- [link 公式](https://ja.vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration)

上記以外はそのまま記載できる

```js
type Props = {
  message: string,
};

export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'default Value',
      required: true,
      validator: (value) => {
        // returnがfalseならconsole.logにメッセージ出力
        return false;
      },
    },
  },
  setup(props: Props) {
    props.message; //string型として型推論される
  },
});
```

- [参考](https://qiita.com/ryo2132/items/f055679e9974dbc3f977)

## v-model の原型、省略形

v-model は v-bind,v-on を使用した省略形

```html
<template>
  <input
    :value="bindState"
    @update="bindState = $event"
  />
</template>
```

修飾子として、

- lazy を用いると change イベント後に同期する
- numver を用いると数値型へキャストする

```html
<template>
  <input v-model.lazy="bindState" />
</template>
```

## git commit message

semantic commit message が無難？

message 例

- feat: ビルドスクリプトの新機能ではなく、ユーザー向けの新機能
- fix: ビルド スクリプトの修正ではなく、ユーザー向けのバグ修正
- docs: ドキュメントの変更
- style: フォーマット、セミコロンの欠落など; 製品コードの変更なし
- refactor: 本番コードのリファクタリング、変数の名前変更など
- test: 欠落しているテストの追加、テストのリファクタリング、本番コードの変更なし
- chore: 単調なタスクなどの更新; 本番コードの変更なし

- [公式](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- [emoji,Issue Number 付き](https://zenn.dev/itosho/articles/git-commit-message-2023#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88)

## reactive api, ref

- reactive api: object 用
- ref: primitive 用

## package.json コマンド

- `vue-tsc --noEmit`
  - SFC 内のテンプレートを含めた型チェック
- `vite preview`
  - `vite build`で出力したファイルを、ローカルで静的な Web サーバを起動し公開する

## $attrs について

親で指定した属性がオブジェクトとしてすべて入っている

- `inheritAttrs`
  - デフォルトでは`true`
  - `false`を指定するとルート要素への自動バインドをしない

## teleport タグ

- `to`で指定した HTML 要素かクエリセレクターをもつ要素をターゲットにしてマウント
- モーダルなど全画面表示が必要な場面で CSS 衝突を防ぎつつ、親コンポーネントの引数を受け付けることが可能

## デフォルト型引数

型宣言のジェネリクスの T を常に指定して宣言しない。

```typescript
type ExtendWrapper<T = Record<string, unknown>> = VueWrapper<
  ComponentPublicInstance & { [key: string]: unknown } & T
>;
```
