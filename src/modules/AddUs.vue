<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div @click="aaa">adsfasdfa</div>

    </div>

</template>

<script>
    export default {
        name: "",
        data() {
            return {}
        },
        methods:{
            aaa(){
                console.log(1)
                this.$Loading.start();
                setTimeout(()=>this.$Loading.finish(),2000)
            }
        },
        component: {}
    }
</script>

<style scoped>

</style>
