<template> 

    <div class="register bg-dark">
        
        <div class="card container font-Taviraj" style="background-color: #fffff0;">
            <div class="card text-white">
                <img src="../assets/img/hand.jpg" class="card-img" alt="..." width="500" height="400">
                <div class="card-img-overlay">
                    <h1 class="card-title text-center">Register</h1>
                </div>
                </div>

            <div class="card-body ">            
                <div class="rounded-pill">
                <form @submit.prevent="handleSubmit()">
                    
                    <div class="form-group ">
                        <label for="" >Email Address *</label>
                        <input type ="text" class="form-control rounded-pill"
                            placeholder="You Email *" v-model="form.email">
                    </div>
                    <div class= "form-group">
                        <label for =""> Password *</label>
                        <input type = "password" class="form-control rounded-pill"
                            placeholder="Your password *" v-model="form.password">
                    </div>
                    <div class= "form-group">
                        <label for =""> Displat Name *</label>
                        <input type = "text" class="form-control rounded-pill"
                            placeholder="Your name *" v-model="form.displayName">
                    </div>
                    <div class="from-group ">
                        <button class="btn btn-success rounded-pill">
                            สมัครสมาชิก
                        </button>
                         
                         
                    <router-link :to="{ name: 'Home'}"
                        class="btn btn-danger rounded-pill">
                        ยกเลิก
                    </router-link>

            
                    </div>
                   
                    <img src="../assets/img/Thankyou.png" class="card-img-bottom" alt="...">
                </form>

                </div>
            </div>
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
                password: '',
                displayName: ''
            }
        }
    },
    methods: {
        ...mapActions('account', ['register']),
        ...mapActions('alert',['error']),
        handleSubmit(){
            if(this.form.email && this.form.password && this.form.displayName){
                this.register(this.form)
            }
            else{
                this.error("All fields are required")
            }
        } 
    }
}
</script>
<style>

</style>