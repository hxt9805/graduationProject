import copy from './apis/copy'
import longpress from "./apis/longpress";
import debounce from "./apis/debounce";
import permission from "./apis/permission";
import loading from "./apis/loading";
const directives = {
    copy,
    longpress,
    debounce,
    permission,
    loading
}

export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        })
    },
}