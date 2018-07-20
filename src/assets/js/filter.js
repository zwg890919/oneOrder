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

export function transferTime(val, format = "yyyy-MM-dd hh:mm:ss") {
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
                RegExp.$1, RegExp.$1.length == 1 ?
                date[k] :
                ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

/* 转换融资类型 */
export function transFinanceType(val) {
    return val == 1 ? '抵押' : '信贷';
}

/* 转换产品类型 */
export function transProductType(val) {
    return val == 1 ? '企业经营贷款' : '';
}

/* 转换是否托管 */
export function transIfTrustees(val) {
    return val == 1 ? '是' : '否'
}

/* 转换是否支持提前还款 */
export function transIfPayBackEarly(val) {
    return val == 1 ? '是' : '否'
}

/* 转换产品状态 */
export function transProductStatus(val){
    let map = {
        '1':'未发布',
        '2':'已发布',
        '3':'已暂停',
        '4':'已下架'
    }
    return map[val];
}

/* 转换费用类型 */
export function transProductRateType(val){
    // let costType = JSON.parse(localStorage.cost_type);
    // console.log(costType)
    // return '2222';
}


/* 转换省 */
export function transProvince(val){
    let provinceList = JSON.parse(localStorage.provinceList);
    for(let x in provinceList){
        if(provinceList[x].areaId == val){
            return provinceList[x].areaName;
        }
    }
}

/* 转换市 */
export function transCity(val, pro){
    let provinceList = JSON.parse(localStorage.provinceList);
    for(let x in provinceList){
        if(provinceList[x].areaId == pro){
            for(let y in provinceList[x].cities){
                if(provinceList[x].cities[y].areaId == val){
                    return provinceList[x].cities[y].areaName;
                }
            }
        }
    }
}


const arr = [
    'Number',
    'String',
    'Function',
    'Array',
    'Object',
    'Date'
];
arr.forEach((item, i) => {
    ~(function (str1) {
        window['is' + item] = function (str2) {
            return Object.prototype.toString.call(str2) === str1;
        };
    })('[object ' + item + ']');
});
