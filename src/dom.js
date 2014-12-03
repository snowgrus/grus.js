/**
 * dom.js Dom元素操作相关函数
 */
var gruis = {};

function getValueByName(name) {
  var elems = document.getElementsByName(name),
      len = elems.length,
      i;

  for (i = 0; i < len; i++) {
    if(elems[i].checked) {
      return elems[i].value;
    }
  }
}

function setValueByName(name, val) {
  var elems = document.getElementsByName(name),
      len = elems.length,
      i;

  for (i = 0; i < len; i++) {
    if(elems[i].name == name) {
      elems[i].value = val;

      return elems[i];
    }
  }
}