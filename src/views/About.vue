<template>
<div class="shadow-lg p-3 mb-5 rounded font-Kanit" style="background-color: #fffff0;">
    <menu-bar></menu-bar>
    <p></p>
    <div class="shadow-lg p-1 mb-5 rounded " style="background:-webkit-linear-gradient(#e1eec3,#f05053);">
      <h1 class="text-center" style="margin-top 100px;"> เกี่ยวกับเรา </h1>
    
   
        <div id="carouselExampleFade" class="carousel slide carousel-fade " data-ride="carousel" >
            <div class="carousel-inner rounded-pill">
                <div class="carousel-item active">
                <img src="../assets/img/1587.jpg" class="d-block w-100 rounded" alt="..." width="300" height="500">
                </div>
                <div class="carousel-item">
                <img src="../assets/img/660.jpg" class="d-block w-100 rounded" alt="..." width="300" height="500">
                </div>
                <div class="carousel-item">
                <img src="../assets/img/fd.jpg" class="d-block w-100 rounded" alt="..." width="300" height="500">
                </div>
                <div class="carousel-item">
                <img src="../assets/img/Doi.jpg" class="d-block w-100 rounded" alt="..." width="300" height="500">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
      

    
        <div class="row row-cols-1 row-cols-md-2 " style=" margin-top: 50px;">
          <div class="col mb-4 ">
            <div class="card rounded">
              <img src="../assets/img/343717.jpg" class="card-img-top " alt="..." width="100" height="400">
              <div class="card-body">
                <h5 class="card-title text-center">เราคือใคร</h5>
                    <p class="card-text" style="text-indent: 4em;">เราคือ "Punfun" เป็นส่วนกลางในการรับบริจาคสิ่งของเพื่อกระจายสิ่งของบริจาคไปยังพื้นที่ต่างๆให้ทั่วถึงทุกภาคส่วน เพื่อช่วยเหลือผู้ประสบภัยและเพื่อบรรเทาความโศกเศร้าของผู้ประสบภัย  </p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card rounded">
              <img src="../assets/img/ddd.jpg" class="card-img-top rounded" alt="..." width="100" height="400">
              <div class="card-body">
              <h5 class="card-title text-center">หน้าที่ของเรา</h5>
                    <p class="card-text" style="text-indent: 4em;">หน้าที่ของเราคือการจัดการสิ่งของและการะจายสิ่งของหล่านั้นให้แก่ศูนย์หรือ มูลนิธิ ที่ช่วยเหลือผู้ประสบภัย ในพื้นที่ต่างๆ</p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card rounded" style=" margin-top: 100px;">
              <img src="../assets/img/CHEF.jpeg" class="card-img-top rounded" alt="..." width="100" height="400">
              <div class="card-body">
                <h5 class="card-title text-center ">บริจาคอะไรได้บ้าง</h5>
                      <p class="card-text" style="text-indent: 4em;">สามารถบริจาคสิ่งของทั่วไปเช่น ข้าวสาร-อาหารแห้ง อุปกรณ์เครื่องใช้ไฟฟ้า เสื่อผ้า รองเท้า กระเป๋า น้ำดื่ม เครื่องนุ่มห่ม เป็นต้น</p>
              </div>
            </div>
          </div>
          <div class="col mb-4" style=" margin-top: 100px;">
            <div class="card rounded"> 
              <img src="../assets/img/donatt.jpg" class="card-img-top rounded" alt="..." width="100" height="400">
              <div class="card-body">
                <h5 class="card-title text-center">ใครบ้างที่จะได้รับสิ่งของบริจาคกับเรา</h5>
                      <p class="card-text" style="text-indent: 4em;">จะเป็นองค์กรหรือมูลนิธิ ที่ได้รับความไว้วางใจจากบุคคลภายนอกและจะเป็นองค์กรที่ไม่แสงหาผลกำไรเพื่อนำไปมอบให้แก่ผู้ประสบภัยตามพื้นที่ต่างๆ</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 rounded">
            <img src="../assets/img/fooddonate.jpeg" class="card-img-top " alt="..."  width="400" height="500">
            <div class="card-body">
              <h5 class="card-title">การบริจาคของคุณจะทำให้ผู้ประสบภัยอิ่มท้อง</h5>
              <p class="card-text">เพียงทำการลงทะเบียนเพื่อบริจาคสิ่งของเท่านั้น</p>  
            </div>
          </div>
    

    <div class="card  text-white  rounded-pill" style="background-color: lightblue;   margin-top: 100px; margin-bottom:100px ;">
      <img src="../assets/img/Thankyou.png" class="card-img"  alt="...">
        <div class="card-img-overlay">

          
        </div>
    </div>
</div>
</div>
</template>

<script>
import MenuBar from "../components/Menubar.vue";

export default {
  components: {
    MenuBar,
  }
};
</script>


<style>



</style>
