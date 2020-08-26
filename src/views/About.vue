<template>
  <div>
    <menu-bar></menu-bar>
    <div
      class="shadow-lg p-3 mb-5 rounded font-Taviraj"
      style="background-color: #fffff0;"
    >
      <p></p>

      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/lebanon.jpg"
              class="d-block w-100 rounded"
              alt="..."
              width="300"
              height="500"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/21-1.jpg"
              class="d-block w-100 rounded"
              alt="..."
              width="300"
              height="500"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/22-2.jpg"
              class="d-block w-100 rounded"
              alt="..."
              width="300"
              height="500"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="row row-cols-1 row-cols-md-2 " style=" margin-top: 100px;">
        <div class="col mb-4 ">
          <div class="card rounded">
            <img
              src="../assets/img/Heart.jpg"
              class="card-img-top "
              alt="..."
              width="100"
              height="400"
            />
            <div class="card-body">
              <h5 class="card-title text-center">เราคือใคร</h5>
              <p class="card-text">
                เราคือส่วนกลางในการกระจายสิ่งของบริจาคให้ทั่วถึงทุกภาคส่วน
                เพื่อช่วยเหลือผู้ประสบภัยและผู้ยากไร้ต่างๆ
                เพื่อบรรเทาความโศกเศร้าของผู้ประสบภัย
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card rounded">
            <img
              src="../assets/img/ddd.jpg"
              class="card-img-top rounded"
              alt="..."
              width="100"
              height="400"
            />
            <div class="card-body">
              <h5 class="card-title text-center">หน้าที่ของเรา</h5>
              <p class="card-text">
                หน้าที่ของเราคือการจัดการสิ่งของและการะจายสิ่งของหล่านั้นให้แก่ศูนย์หรือ
                มูลนิธิ ที่ช่วยเหลือผู้ประสบภัย ในพื้นที่ต่างๆ
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card rounded" style=" margin-top: 100px;">
            <img
              src="../assets/img/storage.jpg"
              class="card-img-top rounded"
              alt="..."
              width="100"
              height="400"
            />
            <div class="card-body">
              <h5 class="card-title text-center ">บริจาคอะไรได้บ้าง</h5>
              <p class="card-text">
                สามารถบริจาคสิ่งของทั่วไปเช่น ข้าวสาร-อาหารแห้ง
                อุปกรณ์เครื่องใช้ไฟฟ้า เสื่อผ้า เครื่องนุ่มห่ม เป็นต้น
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4" style=" margin-top: 100px;">
          <div class="card rounded">
            <img
              src="../assets/img/donatt.jpg"
              class="card-img-top rounded"
              alt="..."
              width="100"
              height="400"
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                ใครบ้างที่จะได้รับสิ่งของบริจาคกับเรา
              </h5>
              <p class="card-text">
                จะเป็นองค์กรหรือมูลนิธิ
                ที่ได้รับความไว้วางใจจากบุคคลภายนอกและจะเป็นองค์กรที่ไม่แสงหาผลกำไร
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card  text-white rounded"
        style="background-color: lightblue;   margin-top: 100px;"
      >
        <img src="../assets/img/Thankyou.png" class="card-img" alt="..." />
        <div class="card-img-overlay"></div>
      </div>
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

<style></style>
