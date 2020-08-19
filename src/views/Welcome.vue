<template>
  <div class="Homepage">
    <div class="bgimg-1">
      <div class="caption">
        <span class="border">ยินดีต้อนรับสู่ Punfun</span><br />
        <span>
          <router-link to="/home-view">
            <b-button variant="btn btn-primary" class="header_btn">
              เข้าสู่เว็บไซต์
            </b-button>
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
body,
html {
  height: 100%;
}
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
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

.header_btn {
  margin-top: 50px;
}
</style>
