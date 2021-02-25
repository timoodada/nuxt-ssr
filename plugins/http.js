import qs from 'querystring';
import { combinePath } from '~/assets/helpers/utils';

const API_PREFIX = '/api';

/**
* @description Rewrite $axios to context as $http
* @description Prefix will be added when using $http
* @var Vue.prototype.$http
*/
export default function({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const http = $axios.create({
    timeout: 20000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  });

  http.onRequest((request) => {
    request.url = combinePath(API_PREFIX, request.url);
    if (typeof request.data === 'object') {
      request.data = qs.stringify(request.data || {});
    }
    return request;
  });

  http.onError((error) => {
    if (process.server) {
      if (error.response.status === 404) {
        redirect('/404');
      } else {
        redirect('/500');
      }
    }
  });

  inject('http', http);
}
