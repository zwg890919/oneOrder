export default {
  install(Vue, options) {
      Vue.prototype.GMTToStr = function (time, format = 'YYYY-MM-dd hh:mm:ss') {
          if (time) {
              let dateInt = new Date(time)
              let dateObj = {
                  "M+": dateInt.getMonth() + 1,
                  "d+": dateInt.getDate(),
                  "h+": dateInt.getHours(),
                  "m+": dateInt.getMinutes(),
                  "s+": dateInt.getSeconds(),
                  "q+": Math.floor((dateInt.getMonth() + 3) / 3),
                  "S+": dateInt.getMilliseconds()
              };
              if (/(y+)/i.test(format)) {
                  format = format.replace(RegExp.$1, (dateInt.getFullYear() + '').substr(4 - RegExp.$1.length));
              }
              for (var k in dateObj) {
                  if (new RegExp("(" + k + ")").test(format)) {
                      format = format.replace(RegExp.$1, RegExp.$1.length == 1
                          ? dateObj[k] : ("00" + dateObj[k]).substr(("" + dateObj[k]).length));
                  }
              }
              return format;
          } else {
              return ''
          }

      }
  }
}
