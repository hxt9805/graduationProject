<template>
    <div>
        <ul  class="nav">
            <li>
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/addUs">加入我们</router-link>
            </li>
            <li><router-link to="/login">登录</router-link>/<router-link to="/register">注册</router-link>
            </li>
        </ul>
    </div>

</template>
<script>
    export default {
        components: {},

        data() {
            return {

            }
        },

    }
</script>
<style>
    .nav {
        position: fixed;
        width: 100vw;
        height: 60px;
        line-height: 60px;
        background-color: rgba(0, 0, 0, 0.56);
        left: 0;
        top: 0;
        z-index: 999;
    }
    .nav li{
        width: 150px;
    }

</style>