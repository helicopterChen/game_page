
var isWechat = /micromessenger/i.test(navigator.userAgent),
    isWeibo = /weibo/i.test(navigator.userAgent),
    isQQ = /qq\//i.test(navigator.userAgent),
    isIOS = /(iphone|ipod|ipad|ios)/i.test(navigator.userAgent),
    isAndroid = /android/i.test(navigator.userAgent);

function getQueryParam(paramName) {
    var reg = new RegExp("[?&]" + paramName + "=([^?&#]*)[&#]?", "i"),
        match = window.location.href.match(reg);
    if (!match || !match[1]) {
        return "";
    }
    return decodeURIComponent(match[1]);
}

var yingyongbaoLink = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wangwango.strategylegion";
var appLink = isIOS ? "https://itunes.apple.com/app/id972581001" : yingyongbaoLink;

var isSupportTouch = function () {
    return "ontouchstart" in document.documentElement;
}();
