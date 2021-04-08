import JsonPlaceholderInstance from '../apis/JsonPlaceholder.instance';

const ReqInterceptor = JsonPlaceholderInstance.interceptors.request.use(
  (req) => {
    console.log(`${req.method} ${req.url}`);
    // Important: request interceptors **must** return the request.
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    req.headers.authorization = 'my secret token';
    return req;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default ReqInterceptor;
