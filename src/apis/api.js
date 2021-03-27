let apis = {
    animateScroll(from, to,callback) {
        let timer = setInterval(function () {
            from = from + (to - from) / 10;
            from = to - from > 0 ? Math.ceil(from) : Math.floor(from);
            if (from == to) {
                clearInterval(timer);
                if(typeof callback=="function")callback()
            }
            document.documentElement.scrollTop = from + 1;
        }, 11.1);
    },
    animateLeft(obj, target,callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            let step = obj.offsetLeft + (target - obj.offsetLeft) / 15;
            step = target - step > 0 ? Math.ceil(step) : Math.floor(step);
            if (step == target) {
                clearInterval(obj.timer);
                if(typeof callback=="function")callback()
            }
            obj.style.left = step + 'px';
        }, 11.1);
    }
}
export default {
    install(Vue) {
        Object.keys(apis).forEach((key) => {
            Vue.prototype[key]=apis[key]
        })
    }
}



