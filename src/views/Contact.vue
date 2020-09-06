<template>
  <div>
    <div class="Contact font-Kanit shadow-lg p-3 mb-5 rounded">
      <menu-bar></menu-bar>
      <div class="container">
        <h1>ติดต่อเรา<i class="fas fa-phone-square-alt"></i></h1>
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <h2>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
              ติดต่อฝ่ายบริจาคหรือสอบถามทั่วไป: 02-xxx-xxxx, 08x-xxx-xxxx
            </h2>
            <h2>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
              ติดต่อฝ่ายกิจกรรม: 08x-xxx-xxxx
            </h2>
            <h2>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
              ติดต่อฝ่ายพัฒนา: 08x-xxx-xxxx
            </h2>
            <h2>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
              ติดต่อฝ่ายแฟรนไชน์: 08x-xxx-xxxx
            </h2>
            <h2>
              <i class="fas fa-envelope"></i> ติดต่อชาวแบ่งปันกันได้ที่อีเมล:
              PunFun@xxx.com
            </h2>
          </div>
        </div>

        <h2 class="mt-5">สามารถพูดคุยกันได้ตาม Social Media:</h2>
        <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
          <a href="https://www.facebook.com/"
            ><i class="fab fa-facebook-square fa-5x"></i
          ></a>
          <p>Facebook</p>
        </button>
        <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
          <a href="https://line.me/en/"><i class="fab fa-line fa-5x"></i></a>
          <p>Line</p>
        </button>
        <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
          <a href="https://www.instagram.com/?hl=en"
            ><i class="fab fa-instagram fa-5x"></i
          ></a>
          <p>Instagram</p>
        </button>
        <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
          <a href="https://twitter.com/?lang=en"
            ><i class="fab fa-twitter-square fa-5x"></i
          ></a>
          <p>Twitter</p>
        </button>
        <button type="button" class="btn btn-Warning mr-5 mt-5 mb-5">
          <a href="https://discord.com/login"
            ><i class="fab fa-discord fa-5x"></i
          ></a>
          <p>Discord</p>
        </button>

        <div class="MemberPunFun" style="text-align:center">
          <div class="card" style="width: 100%">
            <div class="card body">
              <h1>Member of PunFun<i class="fas fa-phone-square-alt"></i></h1>
              <h2>นายกฤษดา ศาลาชูพงศ์ Email: kitsada.sal@ku.th</h2>
              <h2>
                นายวิวิธ ลีฬหาล้ำเลิศ Email: vivit.leelahalamlert@gmail.com
              </h2>
              <h2>นางสาววริศรา ถิระเศรษฐกิจ Email: varisara.ti@ku.th</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-bar style="margin-top: 20px;"></footer-bar>
  </div>
</template>
<script>
import MenuBar from "../components/Menubar.vue";
import FooterBar from "../components/Footer.vue";
export default {
  components: {
    MenuBar,
    FooterBar
  }
};
</script>

<style>
.Contact {
  background-color: #fffff0;
  margin: 0;
}

h1,
.h1 {
  font-size: 3.5em;
}
h1 {
  line-height: 4.5;
}

h2,
.h2 {
  font-size: 1.5rem;
}

button.btn.btn-info {
  margin-top: 4.5rem;
}

.card-body {
  background-color: peachpuff;
}
</style>
