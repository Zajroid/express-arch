/**
 * If the URL is '/error', throw an error, otherwise, call the next function
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to move on to the next middleware.
 */
export let errors = function (req, res, next) {
  if (req.url == '/error') {
    throw new Error('[-] ERRORS!');
  } else {
    next();
  }
};

export let pageNotFound = function (req, res) {
  if (req.url == (res.statusCode == 200)) {
    res.send(404, 'Page not found');
  } else {
    console.log('ok')
  }
};

export let testMiddleware = function (req, res, next) {
  console.log(`Test middleware`);
  next();
};

export let testMiddleware2 = function(req, res, next) {
  console.log(`Test middleware 2`);
  next();
};