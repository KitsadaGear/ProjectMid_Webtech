<template>
  <div>
    <div class="Homepage">
      <!-- Carousel class -->
      <div class="shadow-none p-3 mb-5 bg-light rounded">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            img-width="800"
            img-height="600"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Picture Slider Here -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block w-100 rounded"
                  width="800"
                  height="600"
                  src="https://picsum.photos/1024/480/?image=58"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block rounded w-100"
                  width="800"
                  height="600"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
          <!-- /Picture Slider Here -->
        </div>
      </div>

      <!-- /Carousel class -->

      <!-- News class -->
      <div
        class="container shadow-lg p-3 mb-5 rounded"
        style="background-color:#948E99"
      >
        <div class="card-deck">
          <div class="card">
            <img
              src="../assets/img/flooding.jpg"
              class="card-img-top"
              alt="..."
              width="600px"
              height="400px"
            />
            <div class="card-body">
              <h5 class="card-title">น้ำท่วมที่จังหวัดเลย</h5>
              <p class="card-text">
                จากกรณีเมื่อวานนี้ เกิดฝนตกหนักอิทธิพลของพายุซินลากู
                ทำให้น้ำป่าไหลหลากเข้าท่วมบ้านเรือนประชาชนในพื้นที่ อ.เมือง
                อ.เชียงคาน และ อ.ปากชม จ.เลย ประกอบด้วย อ.เมือง ต.น้ำสวย รวม 7
                หมู่บ้าน อ.เชียงคาน จำนวน 2 ตำบล ได้แก่ ต.เขาแก้ว รวม 2 หมู่บ้าน
                และ ต.ธาตุ รวม 9 หมู่บ้าน และ อ.ปากชม จำนวน 3 ตำบล ได้แก่
                ต.เชียงกลม ต.ห้วยบ่อซืน และ ต.ชมเจริญ
                ซึ่งเป็นพื้นที่ได้รับผลกระทบจากฝนที่ตกหนักตลอดทั้งคืน
              </p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="../assets/img/lebanon.jpg"
              alt="..."
              width="600px"
              height="400px"
            />
            <div class="card-body">
              <h5 class="card-title">
                เหตุระเบิดที่เบรุต ประเทศเลบานอน
              </h5>
              <p class="card-text">
                เกิดขึ้นเมื่อวันที่ 4 สิงหาคม พ.ศ. 2563
                บริเวณท่าเรือเบรุตในเมืองเบรุต
                เมืองหลวงของประเทศเลบานอน[2][3]เป็นเหตุระเบิดของ
                แอมโมเนียมไนเตรตประมาณ 2,750 ตัน (3,030 ตันสั้น; 2,710 ตันยาว)
                ซึ่งเทียบเท่ากับทีเอ็นทีประมาณ 1.2 กิโลตัน (5.0 TJ)
                ซึ่งถูกรัฐบาลเลบานอนยึดจากเรือ MV Rhosus
                ที่ถูกทิ้งร้างแล้วเก็บไว้ในท่าเรือที่ไม่มีมาตรการด้านความปลอดภัยที่เหมาะสมเป็นเวลา
                6 ปี ส่งผลให้มีผู้เสียชีวิตแล้วมากกว่า 200 ราย บาดเจ็บมากกว่า
                6,000 ราย และสูญหายอีกจำนวนมาก
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src=""
              class="card-img-top"
              alt="..."
              width="600px"
              height="400px"
            />
            <div class="card-body">
              <h5 class="card-title">
                Beirut explosion: how you can help victims in Lebanon
              </h5>
              <p class="card-text">
                The Lebanese Red Cross (LRC) is an independent organisation
                focussed on disaster prevention and relief. It is the main
                provider of ambulances in Lebanon, and relies on volunteers. The
                LRC was central to treating people injured in the nationwide
                protests that started in October last year and the coronavirus
                pandemic this year, as well as treating and transporting people
                following the explosion. Its services are provided for free to
                those who need them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- /News class -->

      <!-- Donate info class -->
      <div class="container container_info">
        <h1>ตัวอย่างสิ่งของที่บริจาคได้</h1>
        <hr class="featurette-divider" />
        <div class="row">
          <div class="col-lg-4">
            <img
              src="../assets/img/cropped-shutterstock_54695716-471x313.jpg"
              width="473px"
              height="313px"
            />
            <h2>เสื้อผ้า</h2>
            <p>
              ป็นสิ่งที่มนุษย์สวมใส่เพื่อปกป้องร่างกายจากสภาวะอากาศ สภาพแวดล้อม
              ความปลอดภัย ความสะดวกสบาย ความสุภาพ และเพื่อสะท้อนถึง สังคม ศาสนา
              วัฒนธรรม รวมถึง รสนิยมเฉพาะตัวบุคคลด้วย
              เสื้อผ้าบางชนิดอาจออกแบบให้สวมใส่เฉพาะเพศ
            </p>
            <button>อ่านต่อเลย</button>
          </div>

          <div class="col-lg-4">
            <img
              src="../assets/img/medicine.jpg"
              width="473px"
              height="313px"
            />
            <h2>ยารักษาโรค</h2>
            <p>
              ยา เป็นปัจจัยสำคัญอย่างหนึ่งในการรักษาความเจ็บป่วย การบำบัด
              บรรเทาอาการ และกำจัดสาเหตุของโรค ยามีทั้งคุณและโทษในตัวเอง
              จึงต้องมีความระมัดระวังในการใช้ยา
              เพื่อให้ได้รับประโยชน์สูงสุดและให้ได้รับโทษน้อยที่สุดจากการใช้ยา
            </p>
            <button>อ่านต่อเลย</button>
          </div>

          <div class="col-lg-4">
            <img src="../assets/img/unnamed.jpg" width="473px" height="313px" />
            <h2>ข้าวสารอาหารแห้ง</h2>
            <p>
              อาหารที่ผ่านกระบวนการอบหรือตากแห้ง
              เพื่อให้ส่วนที่เป็นน้ำถูกกำจัดออกไป เช่น ผัก ผลไม้แห้ง เห็ดหอมแห้ง
              กุ้งแห้ง ถั่วลิสง หอม กระเทียม และอื่นๆ อีกมากมาย ที่เป็นอาหารแห้ง
              ที่เราซื้อมาปรุงเป็นอาหาร
              รวมไปถึงข้าวสารที่เป็นอาหารหลักในการดำรงชีวิตของคนไทย
            </p>
            <button>อ่านต่อเลย</button>
          </div>

          <div class="col-lg-4" style="margin-bottom: 30px;">
            <img
              src="../assets/img/โปรโมชั่นเครื่องใช้ไฟฟ้าใน-ShopAt24.jpg"
              width="473px"
              height="313px"
            />
            <h2>เครื่องใช้ไฟฟ้า</h2>
            <p>
              แน่นอนว่า “เครื่องใช้ไฟฟ้า”
              ถือเป็นอีกหนึ่งปัจจัยสำคัญในการดำรงชีวิต
              เพราะทุกบ้านก็ต้องมีสิ่งอำนวยความสะดวกอย่างเครื่องใช้ไฟฟ้าอยู่มากมายหลายประเภท
              ไม่ว่าจะเป็นพัดลม แอร์ โทรทัศน์ ตู้เย็น หม้อหุงข้าว เตารีด
              เครื่องซักผ้า เครื่องฟอกอากาศ หรือแม้กระทั่งไฟส่องสว่าง
            </p>
            <button>อ่านต่อเลย</button>
          </div>

          <div class="col-lg-4">
            <img src="../assets/img/f57ctl.jpg" width="473px" height="313px" />
            <h2>น้ำดื่ม</h2>
            <p>
              น้ำดื่ม(drinking water) คือ น้ำที่สามารถนำมาบริโภค ได้แก่
              เพื่อช่วยกลไกการย่อยสลาย และละลายเหลือแร่ต่างๆ การขับถ่ายของเสีย
              หรือการหล่อลื่นเนื้อหนังข้อต่อต่างๆ ให้ชุ่มชื้น
              โดยไม่ก่อให้เกิดโรคที่เป็นอันตรายต่อสุขภาพอนามัย และสิ่งแวดล้อม
            </p>
            <button>อ่านต่อเลย</button>
          </div>

          <div class="col-lg-4">
            <img src="../assets/img/storage.jpg" width="473px" height="313px" />
            <h2>สิ่งของอื่นๆ</h2>
            <p>
              ลองสำรวจดูรอบๆ ตัวว่าในบ้าน ห้องนอน ตู้เสื้อผ้า ห้องเก็บของ ออฟฟิศ
              ร้านค้า หรือที่อื่นๆ มีสิ่งของที่เราไมได้ใช้แล้ว
              แต่ยังอยู่ในสภาพดีหรือเปล่า? หากเราไม่ได้ใช้แล้ว
              ก็ควรแบ่งปันให้กับผู้ที่ต้องการดีกว่าที่จะปล่อยสิ่งๆนั้นไว้เฉยๆ
              โดยปราศจากการใช้งาน
            </p>
            <button>อ่านต่อเลย</button>
          </div>
        </div>
      </div>

      <!-- Donate info class -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
div#one {
  font-family: "Franklin Gothic Medium", cursive;
  color: cadetblue;
}

.Homepage {
  background-color: #fffff0;
  margin: 0;
}

@media (min-width: 768px) {
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 0 !important;
  }
}

.container_info h1 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

.container_info img {
  margin-top: 20px;
}

.container_info h2 {
  margin-top: 10px;
  text-align: center;
}

.container_info p {
  width: 80%;
  margin-left: 10%;
}

@media (min-width: 1200px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 80%;
  }
}

.container_info .lead {
  margin-top: 20px;
}

.col-md-5 img {
  margin-bottom: 20px;
}

.container_info button {
  margin-left: 170px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  padding: 12px 28px;
}
</style>
