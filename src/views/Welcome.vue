<template>
  <div class="Homepage">
    <div class="bgimg-1">
      <div class="caption">
        <span class="border">ยินดีต้อนรับสู่ Punfun</span>
        <br />
        <span>
          <router-link to="/home-view">
            <b-button variant="btn btn-primary" class="enter_btn"
              >เข้าสู่เว็บไซต์</b-button
            >
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bgimg-1 {
  background-image: url(../assets/img/people-donating-sanitary-material_23-2148520837.jpg);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}

.caption {
  position: absolute;
  left: 0;
<<<<<<< HEAD

  top: 35%;

=======
  top: 35%;
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
<<<<<<< HEAD
  padding: 22px 200px;

=======
  padding: 30px;
  padding: 22px 200px;
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
  font-size: 25px;
  letter-spacing: 10px;
}

.enter_btn {
  margin-top: 250px;
  padding: 25px 120px;
  font-size: 25px;
}
</style>
