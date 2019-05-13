export const defaultDuration = 500;
export const cacheFunctionWrapper = func => {
  let result;
  return function() {
    if (typeof result === 'undefined') {
      result = func();
    }
    return result;
  };
};
export const supportsTouchDetector = cacheFunctionWrapper(() => 'ontouchstart' in window);
export const handledEvents = supportsTouchDetector()
  ? { down: 'touchstart', move: 'touchmove', up: 'touchend' }
  : { down: 'mousedown', move: 'mousemove', up: 'mouseup' };
export const supportsPassiveDetector = cacheFunctionWrapper(() => {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
  return supportsPassive;
});
export const supportsTransitionsDetector = cacheFunctionWrapper(() => {
  var b = document.body || document.documentElement,
    s = b.style,
    p = 'transition';
  if (typeof s[p] == 'string') {
    return true;
  }
  // Tests for vendor specific prop
  var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
  p = p.charAt(0).toUpperCase() + p.substr(1);
  for (var i = 0; i < v.length; i++) {
    if (typeof s[v[i] + p] == 'string') {
      return true;
    }
  }
  return false;
});
