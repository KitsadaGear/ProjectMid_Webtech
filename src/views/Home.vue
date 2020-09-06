<template>
  <div>
<<<<<<< HEAD
    <menu-bar></menu-bar>
    <div class="Homepage">
      <div class="jumbotron" v-if="user">
        <h4 class="display-9 text-center">Welcome {{ user.displayName }}</h4>
      </div>
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
                  src="../assets/img/04-Itani-secondimage-mobileMasterAt3x.jpg"
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
                  src="../assets/img/511410.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
          <!-- /Picture Slider Here -->
=======
    <div class="Homepage font-Kanit shadow-lg p-3 mb-5 rounded" style="background-color: #fffff0;">
      <menu-bar></menu-bar>

      <div>
        <div class="jumbotron" v-if="user" style="margin-bottom:20px; margin-top:20px">
          <h4
            class="display-9 text-center"
          >ยินดีต้อนรับ {{ user.displayName }} เข้าสู่เว็บไซต์ของเรา</h4>
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
        </div>
        <!-- Carousel class -->
        <div class="shadow-none p-3 mb-5 bg-light rounded">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
                    src="../assets/img/04-Itani-secondimage-mobileMasterAt3x.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

<<<<<<< HEAD
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
              <h5 class="card-title">น้ำท่วมที่จังหวัดเลย ประเทศไทย</h5>
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
              <h5 class="card-title">เหตุการณ์ระเบิดที่เบรุต ประเทศเลบานอน</h5>
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
              src="../assets/img/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY0NS84MjI5NjYyL2ZpcmUoNCkuanBn.jpg"
              class="card-img-top"
              alt="..."
              width="600px"
              height="400px"
            />
            <div class="card-body">
              <h5 class="card-title">ไฟไหม้บ้านซอยตากสิน 23 ประเทศไทย</h5>
              <p class="card-text">
                เมื่อวันที่ 12 ส.ค.63 เมื่อเวลา 19.52 น.
                เกิดเหตุเพลิงไหม้บ้านเรือนประชาชน ภายในซอยสมเด็จพระเจ้าตากสิน 23
                มีการระดมกำลัง เจ้าหน้าที่ดับเพลิงและกู้ภัยจากพื้นที่ต่างๆ
                ไปที่เกิดเหตุ โดยที่เกิดเหตุเป็นลักษณะตึกแถว 2 ชั้น
                เป็นชุมชนในซอยย่อยห่างจากปากซอยประมาณ 200 เมตร ในชุมชนดังกล่าว
                แบ่งออกเป็น 4 ย่อย มีประชาชนอาศัยประมาณ 80 หลังคาเรือน
                มีบ้านเรือนถูกไฟไหม้ 76 หลังคาเรือน และหลายหลังมีการทรุดตัว
              </p>
            </div>
=======
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block rounded w-100"
                    width="800"
                    height="600"
                    src="../assets/img/511410.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
            </b-carousel>
            <!-- /Picture Slider Here -->
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
          </div>
        </div>

        <!-- /Carousel class -->

        <!-- News class -->
        <div class="container shadow-lg p-3 mb-5 rounded" style="background-color:#948E99">
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
                <h5 class="card-title">น้ำท่วมที่จังหวัดเลย ประเทศไทย</h5>
                <p class="card-text">
                  จากกรณีเมื่อวานนี้ เกิดฝนตกหนักอิทธิพลของพายุซินลากู
                  ทำให้น้ำป่าไหลหลากเข้าท่วมบ้านเรือนประชาชนในพื้นที่ อ.เมือง
                  อ.เชียงคาน และ อ.ปากชม จ.เลย ประกอบด้วย อ.เมือง ต.น้ำสวย รวม 7
                  หมู่บ้าน อ.เชียงคาน จำนวน 2 ตำบล ได้แก่ ต.เขาแก้ว รวม 2
                  หมู่บ้าน และ ต.ธาตุ รวม 9 หมู่บ้าน และ อ.ปากชม จำนวน 3 ตำบล
                  ได้แก่ ต.เชียงกลม ต.ห้วยบ่อซืน และ ต.ชมเจริญ
                  ซึ่งเป็นพื้นที่ได้รับผลกระทบจากฝนที่ตกหนักตลอดทั้งคืน
                </p>
              </div>
            </div>
<<<<<<< HEAD
            <h2>เสื้อผ้า</h2>
            <p>
              เป็นสิ่งที่มนุษย์สวมใส่เพื่อปกป้องร่างกายจากสภาวะอากาศ สภาพแวดล้อม
              ความปลอดภัย ความสะดวกสบาย ความสุภาพ และรวมถึง สังคม วัฒนธรรม
              รสนิยมเฉพาะตัวบุคคลด้วย เสื้อผ้าบางชนิดอาจออกแบบให้สวมใส่เฉพาะเพศ
            </p>
            <div style="text-align: center;">
              <router-link to="/detail-view" tag="div">
                <button type="button" class="btn btn-outline-info">
                  อ่านต่อที่นี่
                </button>
              </router-link>
            </div>
          </div>

          <div class="col-lg-4">
            <div style="text-align: center;">
              <img
                src="../assets/img/medicine.jpg"
                width="473px"
                height="313px"
              />
            </div>
            <h2>ยารักษาโรค</h2>
            <p>
              ยา เป็นปัจจัยสำคัญอย่างหนึ่งในการรักษาความเจ็บป่วย การบำบัด
              บรรเทาอาการ และกำจัดสาเหตุของโรค ยามีทั้งคุณและโทษในตัวเอง
              จึงต้องมีความระมัดระวังในการใช้ยา
              เพื่อให้ได้รับประโยชน์สูงสุดและให้ได้รับโทษน้อยที่สุด
            </p>
            <div style="text-align: center;">
              <button type="button" class="btn btn-outline-info">
                อ่านต่อที่นี่
              </button>
=======
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/lebanon.jpg"
                alt="..."
                width="600px"
                height="400px"
              />
              <div class="card-body">
                <h5 class="card-title">เหตุการณ์ระเบิดที่เบรุต ประเทศเลบานอน</h5>
                <p class="card-text">
                  เกิดขึ้นเมื่อวันที่ 4 สิงหาคม พ.ศ. 2563
                  บริเวณท่าเรือเบรุตในเมืองเบรุต
                  เมืองหลวงของประเทศเลบานอนเป็นเหตุระเบิดของ
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
                src="../assets/img/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY0NS84MjI5NjYyL2ZpcmUoNCkuanBn.jpg"
                class="card-img-top"
                alt="..."
                width="600px"
                height="400px"
              />
              <div class="card-body">
                <h5 class="card-title">ไฟไหม้บ้านซอยตากสิน 23 ประเทศไทย</h5>
                <p class="card-text">
                  เมื่อวันที่ 12 ส.ค.63 เมื่อเวลา 19.52 น.
                  เกิดเหตุเพลิงไหม้บ้านเรือนประชาชน ภายในซอยสมเด็จพระเจ้าตากสิน
                  23 มีการระดมกำลัง เจ้าหน้าที่ดับเพลิงและกู้ภัยจากพื้นที่ต่างๆ
                  ไปที่เกิดเหตุ โดยที่เกิดเหตุเป็นลักษณะตึกแถว 2 ชั้น
                  เป็นชุมชนในซอยย่อยห่างจากปากซอยประมาณ 200 เมตร ในชุมชนดังกล่าว
                  แบ่งออกเป็น 4 ย่อย มีประชาชนอาศัยประมาณ 80 หลังคาเรือน
                  มีบ้านเรือนถูกไฟไหม้ 76 หลังคาเรือน และหลายหลังมีการทรุดตัว
                </p>
              </div>
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
            </div>
          </div>
        </div>

<<<<<<< HEAD
          <div class="col-lg-4">
            <div style="text-align: center;">
              <img
                src="../assets/img/unnamed.jpg"
                width="473px"
                height="313px"
              />
            </div>
            <h2>ข้าวสารอาหารแห้ง</h2>
            <p>
              อาหารที่ผ่านกระบวนการอบหรือตากแห้ง
              เพื่อให้ส่วนที่เป็นน้ำถูกกำจัดออกไป เช่น ผัก ผลไม้แห้ง
              ถั่วลิสงและอื่นๆ อีกมากมาย ที่เป็นอาหารแห้ง
              ที่เราซื้อมาปรุงเป็นอาหาร
              รวมไปถึงข้าวสารที่เป็นอาหารหลักในการดำรงชีวิตของคนไทย
            </p>
            <div style="text-align: center;">
              <button type="button" class="btn btn-outline-info">
                อ่านต่อที่นี่
              </button>
            </div>
          </div>
=======
        <!-- /News class -->
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca

        <!-- Donate info class -->
        <div class="container container_info">
          <h1>ตัวอย่างสิ่งของที่บริจาคได้</h1>
          <hr class="featurette-divider" />
          <div class="row">
            <div class="col-lg-4">
              <div style="text-align: center;">
                <img
                  src="../assets/img/cropped-shutterstock_54695716-471x313.jpg"
                  width="473px"
                  height="313px"
                />
              </div>
              <h2>เสื้อผ้า</h2>
              <p>
                เป็นสิ่งที่มนุษย์สวมใส่เพื่อปกป้องร่างกายจากสภาวะอากาศ
                สภาพแวดล้อม ความปลอดภัย ความสะดวกสบาย ความสุภาพ และรวมถึง สังคม
                วัฒนธรรม รสนิยมเฉพาะตัวบุคคลด้วย
                เสื้อผ้าบางชนิดอาจออกแบบให้สวมใส่เฉพาะเพศ
              </p>
            </div>
<<<<<<< HEAD
            <h2>เครื่องใช้ไฟฟ้า</h2>
            <p>
              แน่นอนว่า “เครื่องใช้ไฟฟ้า”
              ถือเป็นอีกหนึ่งปัจจัยสำคัญในการดำรงชีวิต
              เพราะทุกบ้านก็ต้องมีสิ่งอำนวยความสะดวกอย่างเครื่องใช้ไฟฟ้าอยู่มากมายหลายประเภท
              ไม่ว่าจะเป็นพัดลม แอร์ โทรทัศน์ ตู้เย็น หม้อหุงข้าว เตารีด
              เครื่องซักผ้า
            </p>
            <div style="text-align: center;">
              <button type="button" class="btn btn-outline-info">
                อ่านต่อที่นี่
              </button>
=======

            <div class="col-lg-4">
              <div style="text-align: center;">
                <img src="../assets/img/medicine.jpg" width="473px" height="313px" />
              </div>
              <h2>ยารักษาโรค</h2>
              <p>
                ยา เป็นปัจจัยสำคัญอย่างหนึ่งในการรักษาความเจ็บป่วย การบำบัด
                บรรเทาอาการ และกำจัดสาเหตุของโรค ยามีทั้งคุณและโทษในตัวเอง
                จึงต้องมีความระมัดระวังในการใช้ยา
                เพื่อให้ได้รับประโยชน์สูงสุดและให้ได้รับโทษน้อยที่สุด
              </p>
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
            </div>

<<<<<<< HEAD
          <div class="col-lg-4">
            <div style="text-align: center;">
              <img
                src="../assets/img/f57ctl.jpg"
                width="473px"
                height="313px"
              />
            </div>
            <h2>น้ำดื่ม</h2>
            <p>
              น้ำดื่ม(drinking water) คือ น้ำที่สามารถนำมาบริโภค ได้แก่
              เพื่อช่วยกลไกการย่อยสลาย และละลายเหลือแร่ต่างๆ การขับถ่ายของเสีย
              หรือการหล่อลื่นเนื้อหนังข้อต่อต่างๆ ให้ชุ่มชื้น
              โดยไม่ก่อให้เกิดโรคที่เป็นอันตราย
            </p>
            <div style="text-align: center;">
              <button type="button" class="btn btn-outline-info">
                อ่านต่อที่นี่
              </button>
=======
            <div class="col-lg-4">
              <div style="text-align: center;">
                <img src="../assets/img/unnamed.jpg" width="473px" height="313px" />
              </div>
              <h2>ข้าวสารอาหารแห้ง</h2>
              <p>
                อาหารที่ผ่านกระบวนการอบหรือตากแห้ง
                เพื่อให้ส่วนที่เป็นน้ำถูกกำจัดออกไป เช่น ผัก ผลไม้แห้ง
                ถั่วลิสงและอื่นๆ อีกมากมาย ที่เป็นอาหารแห้ง
                ที่เราซื้อมาปรุงเป็นอาหาร
                รวมไปถึงข้าวสารที่เป็นอาหารหลักในการดำรงชีวิตของคนไทย
              </p>
            </div>

            <div class="col-lg-4">
              <div style="text-align: center;">
                <img
                  src="../assets/img/โปรโมชั่นเครื่องใช้ไฟฟ้าใน-ShopAt24.jpg"
                  width="473px"
                  height="313px"
                />
              </div>
              <h2>เครื่องใช้ไฟฟ้า</h2>
              <p>
                แน่นอนว่า “เครื่องใช้ไฟฟ้า”
                ถือเป็นอีกหนึ่งปัจจัยสำคัญในการดำรงชีวิต
                เพราะทุกบ้านก็ต้องมีสิ่งอำนวยความสะดวกอย่างเครื่องใช้ไฟฟ้าอยู่มากมายหลายประเภท
                ไม่ว่าจะเป็นพัดลม แอร์ โทรทัศน์ ตู้เย็น หม้อหุงข้าว เตารีด
                เครื่องซักผ้า
              </p>
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
            </div>

<<<<<<< HEAD
          <div class="col-lg-4">
            <div style="text-align: center;">
              <img
                src="../assets/img/storage.jpg"
                width="473px"
                height="313px"
              />
            </div>
            <h2>สิ่งของอื่นๆ</h2>
            <p>
              ลองสำรวจดูรอบๆตัวว่าในบ้าน ห้องนอน ตู้เสื้อผ้า ห้องเก็บของ
              หรือที่อื่นๆ มีสิ่งของที่เราไม่ได้ใช้แล้ว แต่ยังอยู่ในสภาพที่ดี
              หากเราไม่ได้ใช้แล้ว
              ก็ควรแบ่งปันให้กับผู้ที่ต้องการดีกว่าที่จะปล่อยสิ่งๆนั้นไว้เฉยๆ
              โดยไม่มีการใช้งาน
            </p>
            <div style="text-align: center;">
              <button type="button" class="btn btn-outline-info">
                อ่านต่อที่นี่
              </button>
=======
            <div class="col-lg-4">
              <div style="text-align: center;">
                <img src="../assets/img/f57ctl.jpg" width="473px" height="313px" />
              </div>
              <h2>น้ำดื่ม</h2>
              <p>
                น้ำดื่ม(drinking water) คือ น้ำที่สามารถนำมาบริโภค ได้แก่
                เพื่อช่วยกลไกการย่อยสลาย และละลายเหลือแร่ต่างๆ การขับถ่ายของเสีย
                หรือการหล่อลื่นเนื้อหนังข้อต่อต่างๆ ให้ชุ่มชื้น
                โดยไม่ก่อให้เกิดโรคที่เป็นอันตรายต่อสุขภาพอนามัย
              </p>
            </div>

            <div class="col-lg-4">
              <div style="text-align: center;">
                <img src="../assets/img/storage.jpg" width="473px" height="313px" />
              </div>
              <h2>สิ่งของอื่นๆ</h2>
              <p>
                ลองสำรวจดูรอบๆตัวว่าในบ้าน ห้องนอน ตู้เสื้อผ้า ห้องเก็บของ
                หรือที่อื่นๆ มีสิ่งของที่เราไม่ได้ใช้แล้ว แต่ยังอยู่ในสภาพที่ดี
                หากเราไม่ได้ใช้แล้ว
                ก็ควรแบ่งปันให้กับผู้ที่ต้องการดีกว่าที่จะปล่อยสิ่งๆนั้นไว้เฉยๆ
                โดยไม่มีการใช้งานสิ่งของเหล่านั้น
              </p>
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
            </div>
          </div>
        </div>

        <!-- Donate info class -->
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import MenuBar from "../components/Menubar.vue";
<<<<<<< HEAD

import { mapState, mapActions } from "vuex";

=======
import { mapState, mapActions } from "vuex";
import FooterBar from "../components/Footer.vue";
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
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
  },
  components: {
<<<<<<< HEAD
    MenuBar
  },
  computed: {
    ...mapState("account", ["user"])
  }
=======
    MenuBar,
    FooterBar,
  },
  computed: {
    ...mapState("account", ["user"]),
  },
>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
};
</script>

<style>
.Homepage {
  background-color: #fffff0;
  margin: 0;
}
@media (min-width: 768px) {
  .Homepage .mb-md-5,
  .Homepage .my-md-5 {
    margin-bottom: 0 !important;
  }
}
.Homepage .container .card .card-body h5 {
  font-size: 30px;
}
.Homepage .container .card .card-body p {
  font-size: 20px;
}
.Homepage .container_info h1 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.Homepage .container_info img {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
}
.Homepage .container_info h2 {
  margin-top: 10px;
  text-align: center;
}
.Homepage .container_info p {
  width: 80%;
  margin-left: 10%;
  font-size: 20px;
}
@media (min-width: 1200px) {
  .Homepage .container,
  .Homepage .container-sm,
  .Homepage .container-md,
  .Homepage .container-lg,
  .Homepage .container-xl {
    max-width: 80%;
  }
}
.container_info .lead {
  margin-top: 20px;
}
.container_info button {
  color: black;
  padding: 12px 28px;
  max-width: 100%;
}
.card-body .card-title {
  font-size: 20px;
}

.mb-5,
.my-5 {
  margin-bottom: 0 !important;
}
</style>
