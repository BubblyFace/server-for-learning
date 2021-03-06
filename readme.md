## Keywords

- Vue
- Express
- Nodemon
- Webpack
- Npm


## Structure

```
.
├── LICENSE
├── README.md
├── index.js
├── nodemon.json
├── package.json
├── src
│   ├── client
│   │   ├── App.vue
│   │   ├── components
│   │   │   └── Hello.vue
│   │   └── index.js
│   └── server
│       ├── index.js
│       ├── public
│       │   └── favicon.ico
│       ├── router.js
│       └── views
│           ├── error.jade
│           └── index.jade
└── webpack.config.js
```

## 使用

1. 环境需求

   node v6.9+

2. 部署
   在根目录，src/client src/server 三个目录中执行
   `npm install`

3. 运行

   `npm run dev`

## References


- [Eslint guide](http://eslint.org/docs/user-guide/getting-started)
- [Express generator](http://expressjs.com/en/starter/generator.html)
- [Vue template](https://github.com/vuejs-templates/webpack)
- [Nodemon doc](https://github.com/remy/nodemon#nodemon)
- [Babel register](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- [webpack-dev-middleware-boilerplate](https://github.com/madole/webpack-dev-middleware-boilerplate/tree/master/src)
- [how-can-i-use-webpack-with-express](http://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express)
- [The-ultimate-webpack-setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
