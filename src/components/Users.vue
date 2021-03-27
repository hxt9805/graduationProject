<template>
    <div>
        username:{{username}}
        age:{{age}}
    </div>
</template>

<script>
    export default {
        name: "User",
        props:['username','age'],
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
