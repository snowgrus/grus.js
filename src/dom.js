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

/**
 * 获取元素的文本字符串
 * @param  {[Element]} element 你要获取的元素
 * @return {[String]}         元素内包含的字符串
 */
function getInnerText(element) {
    return (typeof element.textContent == "string") ? element.textContent : element.innerText;
}

/**
 * 给 dom 插入文本
 * @param {[element]} element 元素
 * @param {[type]} text    你要插入的文本
 */
function setInnerText(element, text) {
  if (typeof element.textContent == "string") {
      element.textContent = text;
  } else {
      element.innerText = text;
  }
}

/**
 * 把一个可能包含 html 特殊字符的文本中，转换为安全的 HTML 字符串
 * @param  {[type]} text 文本字符串
 * @return {[type]}      安全的 HTML 字符串
 */
function getHtmlFromText(text) {
  var divElem = document.createElement('span');

  setInnerText(divElem, text);
  return divElem.innerHTML;
}