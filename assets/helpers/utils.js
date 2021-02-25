export function combinePath(...str) {
  let ret = str.map(v => v.replace(/^\/|\/$/, '')).filter(v => !!v).join('/');
  if (ret.indexOf('http') !== 0 && ret.indexOf('/') !== 0) {
    ret = `/${ret}`;
  }
  return ret;
}
export function debounce(func, delay) {
  let timer;
  return (...args) => {
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function combineClassNames(...args) {
  const classNames = [];
  args.forEach((item) => {
    if (typeof item !== 'string') {
      return;
    }
    item = item.trim();
    if (!item) {
      return;
    }
    item.split(' ').forEach((className) => {
      if (!classNames.includes(className)) {
        classNames.push(className);
      }
    });
  });
  return classNames.join(' ');
}
