<template>
  <div class="contact_page font-Kanit">
    <menu-bar></menu-bar>
    <div class="container">
      <h1>
        ติดต่อเรา
        <i class="fas fa-phone-square-alt"></i>
      </h1>
      <div class="card" style="width: 50rem;height: 15rem;">
        <div class="card-body">
          <h2>ติดต่อฝ่ายบริจาคหรือสอบถามทั่วไป: 02-xxx-xxxx, 08x-xxx-xxxx</h2>
          <h2>ติดต่อฝ่ายกิจกรรม: 08x-xxx-xxxx</h2>
          <h2>ติดต่อฝ่ายพัฒนา: 08x-xxx-xxxx</h2>
          <h2>ติดต่อฝ่ายแฟรนไชน์: 08x-xxx-xxxx</h2>
          <h2>
            <i class="fas fa-envelope"></i> ติดต่อชาวแบ่งปันกันได้ที่อีเมล:
            PunFun@xxx.com
          </h2>
        </div>
      </div>

      <h2 class="mt-5">สามารถพูดคุยกันได้ตาม Social Media:</h2>
      <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
        <a href="https://www.facebook.com/">
          <i class="fab fa-facebook-square fa-5x"></i>
        </a>
        <p>Facebook</p>
      </button>
      <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
        <a href="https://line.me/en/">
          <i class="fab fa-line fa-5x"></i>
        </a>
        <p>Line</p>
      </button>
      <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
        <a href="https://www.instagram.com/?hl=en">
          <i class="fab fa-instagram fa-5x"></i>
        </a>
        <p>Instagram</p>
      </button>
      <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
        <a href="https://twitter.com/?lang=en">
          <i class="fab fa-twitter-square fa-5x"></i>
        </a>
        <p>Twitter</p>
      </button>
      <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
        <a href="https://discord.com/login">
          <i class="fab fa-discord fa-5x"></i>
        </a>
        <p>Discord</p>
      </button>
    </div>
  </div>
</template>

<script>
import MenuBar from "../components/Menubar.vue";
export default {
  components: {
    MenuBar
  }
};
</script>

<style>
.contact_page button.btn.btn-info {
  margin-top: 4.5rem;
}
.contact_page .container .card-body {
  background-color: peachpuff;
}
.contact_page .container h1 {
  font-size: 4em;
  line-height: 4.5;
}
.contact_page .container h2 {
  font-size: 1.5rem;
}
</style>
