<template>
<div class="shadow-lg p-3 mb-5 rounded  text-center" id="one">
    <h1 id="two"> เข้าสู่ระบบ </h1>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <form @submit.prevent="handelSubmit">
            <div class="form-group " id="two">
                <label for="Email1"> รหัสผู้ใช้งาน</label>
                
                <center>
                    <input type="Your email" class="form-control rounded-pill col-5 text-center " 
                    id="exampleInputEmail1 "  placeholder="อีเมล์" v-model="form.email" >
                </center>
            </div>
            <div class="form-group " id="two">
                <label for="exampleInputPassword1">รหัสผ่าน</label>
                <center>
                    <input type="password" class="form-control rounded-pill col-5  text-center"
                    id="exampleInputPassword1" placeholder="รหัสผ่าน" v-model="form.password" >
                </center>
            </div>
            <div class="text-center " id="two">
                <button class="btn btn-white bg-light rounded-pill text">
                    <router-link to="/home-view" class="text-secondary">
                        เข้าสู่ระบบ
                    </router-link>
                </button>
                <button type="submit" class="btn btn-white bg-light rounded-pill text" id="two">
                    <router-link to="/register-view" class="text-secondary">
                        ลงทะเบียน
                    </router-link>
                </button>
            </div>
        </form>
    </div>
</div>

</template>

<script>

import{mapState,mapActions} from 'vuex'

export default {
    data(){
        return{
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('account',['login']),
        ...mapActions('alert',['error']),
        handelSubmit(e){
            if(this.form.email && this.form.password){
                this.login(this.form)
            }
        }
    }
}
</script>

<style>
div#one{
    background-color:  #fffff0;
}
div#two{
    color: cadetblue;
}

</style>