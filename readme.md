# aws-xray-trace-id [![CircleCI](https://img.shields.io/circleci/project/github/vladgolubev/aws-xray-trace-id.svg)](https://circleci.com/gh/vladgolubev/aws-xray-trace-id)

> Get AWS X-Ray Trace Id from Lambda Environment

## Install

```
$ yarn add aws-xray-trace-id
```

## Usage

```js
const getTraceId = require('aws-xray-trace-id');

getTraceId(); // => '1-5a63c88d-176c0efa66455ccd4847370c'
```

## License

MIT © [Vlad Holubiev](http://vladholubiev.com)
