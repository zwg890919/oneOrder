export function currency(num) {
  if (!isNumber(num))
      num = Number(num) || 0;
  return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

export function toFixed(num, point) {
  point = point || 2;
  if (!isNumber(num))
      num = Number(num) || 0;
  return num.toFixed(point);
}

export function transferTime(val, format = "yyyy-MM-dd") {
  isNumber(val) && (val = new Date(val));
  if (!isDate(val))
      return "";
  var date = {
      "M+": val.getMonth() + 1,
      "d+": val.getDate(),
      "h+": val.getHours(),
      "m+": val.getMinutes(),
      "s+": val.getSeconds(),
      "q+": Math.floor((val.getMonth() + 3) / 3),
      "S+": val.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (val.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
      if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(
              RegExp.$1, RegExp.$1.length == 1
              ? date[k]
              : ("00" + date[k]).substr(("" + date[k]).length));
      }
  }
  return format;
}

const arr = [
  'Number',
  'String',
  'Function',
  'Array',
  'Object',
  'Date'
];
arr.forEach((item, i) => { ~ (function(str1) {
      window['is' + item] = function(str2) {
          return Object.prototype.toString.call(str2) === str1;
      };
  })('[object ' + item + ']');
});
