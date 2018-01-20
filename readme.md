# aws-xray-trace-id [![CircleCI](https://img.shields.io/circleci/project/github/vladgolubev/aws-xray-trace-id.svg)](https://circleci.com/gh/vladgolubev/aws-xray-trace-id) ![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Get AWS X-Ray Trace Id from Lambda Environment

## Install

```
$ yarn add aws-xray-trace-id
```

## Usage

```js
const getTraceId = require('aws-xray-trace-id');

const {root, parent} = getTraceId();

/*
{
  root: '1-5a63c944-524af1e83d023d4d222d8a3b',
  parent: '533a3da646ba1902'
}
 */
```

## License

MIT © [Vlad Holubiev](http://vladholubiev.com)
