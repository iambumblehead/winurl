// Filename: winurl.js  
// Timestamp: 2016.02.17-12:42:52 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

var winurl = module.exports = (function (win, url) {
  
  function isexist (o) {
    return /^(?:function|object|unknown)$/.test(typeof o);
  }
  
  if (win) {
    if (isexist(win.URL))
      url = win.URL;
    else if (isexist(win.webkitURL))
      url = win.webkitURL;
  }

  return url;
  
}(typeof window === 'object' && window, null));
