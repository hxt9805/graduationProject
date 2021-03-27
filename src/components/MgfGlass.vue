<template>
    <div class="container">
        <div class="box_"
             @mousemove="mouseInit($event)"
             ref="box_"
             @mouseover="seen=true"
             @mouseleave="seen=false"
        >
            <div class="cover_" :style="cover" v-show="seen" ref="cover_"></div>
        </div>
        <div class="large_" :style="large" ref="large_" v-show="seen"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                cover: {
                    left: 0,
                    top: 0
                },
                large: {
                    backgroundPositionX: 0,
                    backgroundPositionY: 0
                },
                x: null,
                y: null,
                seen: false,
                multiple: 2
            }
        },
        methods: {
            mouseInit(event) {
                this.x = event.pageX - this.$refs.box_.offsetLeft - this.$refs.cover_.offsetWidth / 2;
                this.y = event.pageY - this.$refs.box_.offsetTop - this.$refs.cover_.offsetHeight / 2;
            }
        },
        watch: {
            x() {
                if (this.x < 0) {
                    this.cover.left = 0 + 'px';
                } else if (this.x > this.$refs.box_.offsetWidth - this.$refs.cover_.offsetWidth) {
                    this.cover.left = this.$refs.box_.offsetWidth - this.$refs.cover_.offsetWidth + 'px';
                } else {
                    this.cover.left = this.x + 'px';
                    this.large.backgroundPositionX = -this.x * this.multiple + 'px';
                }
            },
            y() {
                if (this.y < 0) {
                    this.cover.top = 0 + 'px';
                } else if (this.y > this.$refs.box_.offsetHeight - this.$refs.cover_.offsetHeight) {
                    this.cover.top = this.$refs.box_.offsetHeight - this.$refs.cover_.offsetHeight + 'px';
                } else {
                    this.cover.top = this.y + 'px';
                    this.large.backgroundPositionY = -this.y * this.multiple + 'px';
                }
            }
        },
        // updated() {
        //     this.multiple = this.$refs.large_.offsetWidth / this.$refs.cover_.offsetWidth;
        // },
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    .box_ {
        width: 300px;
        height: 500px;
        float: left;
        position: relative;
        background: url("../assets/images/d.jpg") #c14c39 no-repeat;
        background-size: 300px 500px;
        margin-left: 100px;
    }

    .large_ {
        width: 300px;
        height: 500px;
        float: left;
        margin-left: 100px;
        background: url("../assets/images/d.jpg") #c14c39 no-repeat;
        background-size: 600px 1000px;
    }

    .cover_ {
        position: absolute;
        width: 150px;
        height: 250px;
        background-color: #ff6700;
        opacity: .4;
        cursor: move;
    }
</style>
