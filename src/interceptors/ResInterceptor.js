import JsonPlaceholderInstance from '../apis/JsonPlaceholder.instance';

const ResInterceptor = JsonPlaceholderInstance.interceptors.response.use(
  (res) => {
      debugger

    console.log('res Interceptor : ', res.data.json);
    // Important: response interceptors **must** return the response.
    return res;
  },
  (err) => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);

export default ResInterceptor;
