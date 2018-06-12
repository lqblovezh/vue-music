function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function shuffle(arr) { /* 数据洗牌 */
    let _arr = arr.slice();
    for (var i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i);
        let t = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = t;
    }
    return _arr;
}

export function debounce(func, delay) { /* 节流函数 */
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
