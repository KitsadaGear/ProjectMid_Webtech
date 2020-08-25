<template>
<div class="container">
    <div class="rounded text-center " style=" background-color: #fffff0;">
        <figure class="figure">
            <img src="../assets/img/sm.png" class="figure-img img-fluid rounded" alt="...">
            <h4> Login </h4>
            <form @submit.prevent ="handelSubmit">
                <div class="form-group">
                    <label for="" >Email Address </label>
                    <input type ="text" class="form-control" placeholder="You Email " v-model="form.email" >
                </div>
                <div class= "form-group">
                    <label for =""> Password </label>
                    <input type = "password" class="form-control" placeholder="Your password " v-model="form.password">
                </div>
                <div class="from-group">
                    <button class="btn btn-primary">
                        Login
                    </button>
                </div>
                <p></p>
                <router-link :to="{ name: 'RegisterPage'}"
                    class="btn btn-primary">
                    Register
                </router-link>
            </form>
        <!-- <figcaption class="figure-caption text-right"></figcaption> -->
            </figure>
        </div>
        
</div>
</template>


<script>

import { mapState, mapActions } from 'vuex'


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

div#two{
    color: cadetblue;
}



</style>