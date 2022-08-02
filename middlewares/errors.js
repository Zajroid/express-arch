import { nextTick } from 'process';

export let errors = function (req, res, next) {
  if (req.url == '/error') {
    throw new Error('[-] ERRORS!');
  } else {
    next()
  }
};

export let pageNotFound = function (req, res) {
  // if (req.url == res.statusCode)
  res.send(404, 'Page not found');
};
