<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- For Icon or Programname -->
      <i class="mdi mdi-home-modern" aria-hidden="true"></i>
      <a class="navbar-brand">ศูนย์กลางการจัดการสิ่งของรับบริจาค</a>

      <!-- /For Icon or Programname -->

      <!-- Navbar item -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li">
            <b-button variant="outline-primary" class="header_btn">
              <b-icon icon="house-fill" style="margin-right: 6px"></b-icon
              >หน้าแรก
            </b-button>
          </router-link>

          <router-link to="/about-view" tag="li">
            <b-button variant="outline-primary" class="header_btn">
              <b-icon icon="person-fill" style="margin-right: 6px"></b-icon
              >เกี่ยวกับเรา
            </b-button>
          </router-link>

          <router-link to="/detail-view" tag="li">
            <b-button variant="outline-primary" class="header_btn">
              <b-icon icon="info-square-fill" style="margin-right: 6px"></b-icon
              >บริจาคอะไรได้
            </b-button>
          </router-link>

          <router-link to="/login-view" tag="li">
            <b-button variant="outline-primary" class="header_btn">
              <b-icon icon="heart-fill" style="margin-right: 8px"></b-icon
              >บริจาคที่นี่
            </b-button>
          </router-link>
          <router-link to="/contact-view" tag="li">
            <b-button variant="outline-primary" class="header_btn">
              <b-icon
                icon="chat-left-dots-fill"
                style="margin-right: 8px"
              ></b-icon
              >ติดต่อเรา
            </b-button>
          </router-link>
          <router-link to="/reference-view" tag="li">
            <b-button variant="outline-primary" class="header_btn">
              <b-icon icon="file-text-fill" style="margin-right: 6px"></b-icon
              >เอกสารอ้างอิง
            </b-button>
          </router-link>
          <!-- Only Fast Pass -->
          <router-link to="/share-view" tag="li">
            <b-button variant="outline-primary" class="header_btn">
              <b-icon icon="person-fill"></b-icon><a>หน้าบริจาค</a>
            </b-button>
          </router-link>

          <!-- /Only Fast Pass -->

          <!-- /Only Fast Pass -->
        </ul>
      </div>
      <!-- /Navbar item -->
    </nav>

    <router-view></router-view>
  </div>
</template>

<script></script>
<style>
#app {
  margin: 0%;
  height: 100%;
}

.bg-light {
  padding: 0.7rem;
  background-color: #b0c4de !important;
}

.navbar-nav .nav-link {
  font-size: 20px;
  color: black !important;
  margin-left: 20px;
}

li a {
  text-decoration: none;
}

.btn-outline-primary {
  margin-left: 10px;
  color: black;
  border-color: #007bff;
  padding: 10px 15px;
}

.header_btn {
  padding: 20.75px;
}
</style>
