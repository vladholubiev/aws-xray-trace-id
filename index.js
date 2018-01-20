'use strict';

const XRAY_ENV_NAME = '_X_AMZN_TRACE_ID';
const TRACE_ID_REGEX = /^Root=(.+);Parent=(.+);/;

module.exports = () => {
  const tracingInfo = process.env[XRAY_ENV_NAME] || '';
  const matches = tracingInfo.match(TRACE_ID_REGEX) || ['', '', ''];

  return {
    root: matches[1],
    parent: matches[2]
  };
};
