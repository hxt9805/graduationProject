<template>
    <div class="container">
        <div class="mark">
        <span class="iconfont icon-xingxing"
              v-for="single in 5"
              :data-id="single"
              @click="makeMark(single,$event)"
              :key="single"></span>
        </div>
        <p class="markText">{{mark+'分'}} {{dec[mark-1]}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dec:['体验非常差!','体验较差!','一般','很不错!','太棒啦!'],
                mark:5,
            }
        },
        methods: {
            makeMark(num, e) {
                this.mark=num;
                let dom =[...e.target.parentElement.children] ;
                dom.forEach(item=>item.style.color=item.getAttribute('data-id')>num?'#d4d4d4':'#f6ea00')
            }
        }
    }
</script>
<style>
    @import "../assets/fonts/iconfont.css";
    .icon-xingxing {
        color: #f6ea00;
        font-size: 100px;
    }
    .mark{
        width: 495px;
        margin: 0 auto;
    }
    .markText{
        font-size:30px;
        color: #000;
        text-align: center;
    }

</style>