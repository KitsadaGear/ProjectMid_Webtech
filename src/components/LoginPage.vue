<template>
<div class="shadow-lg p-3 mb-5 bg-white rounded ">

    <div class="shadow-lg p-3 mb-5 bg-white rounded ">
        <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white">
            <div class="text-center">
                <h1>Log in</h1>
            </div>
            <p></p>
            <b-card-text>
                <form >
                    <div class="form-group">
                        <label for="exampleInputEmail1">กรอกอีเมล์</label>
                        <input type="email" class="form-control  rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted "></small>
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputPassword1">รหัสผ่าน</label>
                        <input type="password" class="form-control rounded-pill" id="exampleInputPassword1">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary rounded-pill">เข้าสู่ระบบ</button>
                        <button type="Register" class="btn btn-primary rounded-pill"> ลงทะเบียน
                            <router-link to="/register-view">  </router-link>
                        </button>
                    </div>
                    <router-view></router-view>
                    <p></p>
                </form>
            </b-card-text>
        </b-card>
    </div>

    <div class="shadow-lg p-3 mb-5 bg-white rounded ">
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1000"
            img-height="480">
    
            <b-carousel-slide
            caption="First slide"
            img-src="https://picsum.photos/1024/480/?image=10">
            </b-carousel-slide>

            <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12">
            </b-carousel-slide>

            <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22">
            </b-carousel-slide>
        </b-carousel>
    </div>



</div>


</template>

<script>
export default {

}
</script>

<style>

</style>