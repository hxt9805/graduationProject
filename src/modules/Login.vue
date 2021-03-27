<template>
    <div class="login">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend" size="25"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend" size="25"></Icon>
                </Input>
            </FormItem>
            <Checkbox class="rem_pwd" v-model="single">记住密码</Checkbox>
            <FormItem>
                <Button class="submit" type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
        </Form>
    </div>

</template>
<script>
    import {userLogin} from "../requests/login";

    export default {
        data() {
            return {
                single: false,
                formInline: {
                    user: localStorage.getItem('user'),
                    password: localStorage.getItem('pwd')
                },
                ruleInline: {
                    user: [
                        {required: true, message: '请填入用户名', trigger: 'blur'},
                        {type: 'string', min: 4, message: '密码长度不能小于4位', trigger: 'blur'},
                        {type: 'string', max: 10, message: '密码长度不能超过10位', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填入密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'},
                        {type: 'string', max: 12, message: '密码长度不能超过12位', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Loading.start();

                        userLogin({username: this.formInline.user, password: this.formInline.password})
                            .then(res => {
                                if(res.code){
                                    this.$Message.success('登陆成功!');
                                    this.$Loading.config({
                                        height: 5
                                    });
                                    this.$Loading.finish();
                                    setTimeout(()=>this.$router.push({path:'/home'}),1000)
                                    if(this.single){
                                        localStorage.setItem('user',res.infor.username)
                                        localStorage.setItem('pwd',res.infor.password)
                                    }
                                }else {
                                    this.$Message.error('用户名或密码错误!');
                                }
                            })
                    } else {
                        this.$Message.error('登陆失败!');
                    }
                })
            }
        }
    }


</script>
<style>
    .login {
        width: 600px;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%);
        font-size: 20px;
    }

    .login input {
        height: 60px;
        font-size: 20px;
    }

    .submit {
        width: 100%;
        height: 60px !important;
        font-size: 20px !important;
    }

    .rem_pwd {
        margin-bottom: 10px;
    }

</style>
