<template>
    <div v-show="see">
        <div class="spinner" >
            <div class="re1"></div>
            <div class="re2"></div>
            <div class="re3"></div>
            <div class="re4"></div>
            <div class="re5"></div>
        </div>
        <div class="mask" ></div>
    </div>

</template>

<script>
    export default {
        name: "Loading",
        data() {
            return {
            }
        },
        props: ['see'],
    }
</script>

<style scoped>
    .spinner {
        position: fixed;
        top: 5%;
        left: 50%;
        transform: translate(-50%);
        margin: 100px auto;
        width: 100px;
        height: 60px;
        text-align: center;
        font-size: 10px;
        z-index: 3000;
    }

    .mask{
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.1);
        top: 0;
        left: 0;
        z-index: 3000;

    }

    .spinner > div {
        background-color: #67CF22;
        position: relative;
        height: 100%;
        width: 6px;
        display: inline-block;
        margin: 5px;
        z-index: 99;
        -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
        animation: stretchdelay 1.2s infinite ease-in-out;
    }

    .spinner .re2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .spinner .re3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .spinner .re4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .spinner .re5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    @-webkit-keyframes stretchdelay {

        0%,
        40%,
        100% {
            -webkit-transform: scaleY(0.4)
        }

        20% {
            -webkit-transform: scaleY(1.0)
        }
    }

    @keyframes stretchdelay {

        0%,
        40%,
        100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }

        20% {
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
        }
    }
</style>
