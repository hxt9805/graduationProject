<template>
    <main class="container">
        <div class="view" @mouseover="stop" @mouseleave="run">
            <button class="btn_left button iconfont icon-left" @click="move_left" :style="{left:button_left}"></button>
            <button class="btn_right button iconfont icon-right" @click="move_right"
                    :style="{left:button_right}"></button>
            <ul class="ul" ref="ul">
                <li v-for="(pic,index) in pictures" :key="index"><img :src="pic"></li>
            </ul>
        </div>
    </main>
</template>
<script>
    import '../assets/fonts/iconfont.css'
    export default {
        data() {
            return {
                pictures: [require("../assets/images/a.jpg"), require("../assets/images/b.jpg"), require("../assets/images/c.jpg"), require("../assets/images/d.jpg"), require("../assets/images/e.jpg")],
                num: 0,
                timer: '',
                button_left: '',
                button_right: '',
                flag: true,
                picWidth: '',
            }
        },
        methods: {
            move_right() {
                if (this.flag) {
                    this.flag = false;
                    if (this.num == this.pictures.length) {
                        this.num = 0;
                        this.$refs.ul.style.left='0';
                    }
                    this.num++;
                }
            },
            move_left() {
                console.log(this)
                if (this.flag) {
                    this.flag = false;
                    if (this.num == 0) {
                        this.num = this.pictures.length;
                        this.$refs.ul.style.left=-this.num * this.picWidth + 'px';
                    }
                    this.num--;
                }
            },
            stop() {
                this.button_left = '10%';
                this.button_right = '90%';
                clearInterval(this.timer);
            },
            run() {
                this.timer = setInterval(this.move_right, 3000);
                this.button_left = '-10%';
                this.button_right = '110%';
            }
        },
        mounted() {
            this.picWidth = this.$refs.ul.children[0].offsetWidth
            this.timer = setInterval(this.move_right, 3000);
            this.$refs.ul.appendChild(this.$refs.ul.children[0].cloneNode(true));
        },
        watch: {
            num() {
                this.animateLeft(this.$refs.ul, -this.num * this.picWidth, () => this.flag = true);
            }
        },
        destroyed() {
            clearInterval(this.timer)
        },
    }
</script>
<style>
    .icon-left,.icon-right{
        font-size: 30px!important;
    }
    .container {
        width: 100vw;
        margin: 0 auto;
    }

    .view {
        overflow: hidden;
        position: relative;
    }

    .ul img, .view, .ul li {
        width: 100vw;
        height: 100vh;
    }


    .ul {
        position: absolute;
        display: flex;
    }

    .button {
        color: black;
        width: 80px;
        height: 80px;
        outline: none;
        border-radius: 50%;
        border: none;
        color: white;
        background-color: rgba(0, 0, 0, 0.38);
        z-index: 5;
    }

    .btn_left, .btn_right {
        position: absolute;
        top: 50%;
        left:-10%;
        transition: left 0.5s;
        transform: translate(-50%);
    }

    .btn_right {
        left: 110%;
    }
</style>