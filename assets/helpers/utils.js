export function combinePath(...str) {
  let ret = str.map(v => v.replace(/^\/|\/$/, '')).filter(v => !!v).join('/');
  if (ret.indexOf('http') !== 0 && ret.indexOf('/') !== 0) {
    ret = `/${ret}`;
  }
  return ret;
}
