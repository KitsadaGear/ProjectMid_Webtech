<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm menu-bar"
  >
    <h5 class="my-0 mr-md-auto font-weight-normal icon_name">Pun Fun</h5>

    <router-link to="/home-view">
      <b-button variant="outline-primary" class="header_btn">
        <b-icon icon="house-fill" style="margin-right: 6px"></b-icon>หน้าแรก
      </b-button>
    </router-link>

    <router-link to="/about-view">
      <b-button variant="outline-primary" class="header_btn">
        <b-icon icon="person-fill" style="margin-right: 6px"></b-icon
        >เกี่ยวกับเรา
      </b-button>
    </router-link>
    <router-link to="/detail-view">
      <b-button variant="outline-primary" class="header_btn">
        <b-icon icon="info-square-fill" style="margin-right: 6px"></b-icon
        >บริจาคอะไรได้
      </b-button>
    </router-link>

    <router-link to="/login-view">
      <b-button variant="outline-primary" class="header_btn">
        <b-icon icon="heart-fill" style="margin-right: 8px"></b-icon
        >บริจาคที่นี่
      </b-button>
    </router-link>
    <router-link to="/contact-view">
      <b-button variant="outline-primary" class="header_btn">
        <b-icon icon="chat-left-dots-fill" style="margin-right: 8px"></b-icon
        >ติดต่อเรา
      </b-button>
    </router-link>
    <router-link to="/reference-view">
      <b-button variant="outline-primary" class="header_btn">
        <b-icon icon="file-text-fill" style="margin-right: 6px"></b-icon
        >เอกสารอ้างอิง
      </b-button>
    </router-link>

    <!-- Only Fast Pass -->
    <router-link to="/donate-view">
      <b-button variant="outline-primary" class="header_btn">
        <b-icon icon="person-fill"></b-icon>หน้าบริจาค
      </b-button>
    </router-link>
    <!-- /Only Fast Pass -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-light {
  background-color: #b0c4de !important;
}
.navbar-nav .nav-link {
  font-size: 20px;
  color: black !important;
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
.navbar-light .icon {
  font-size: 50px;
  margin-left: 10px;
}

.mb-3 {
  margin: 0 !important;
}
.menu-bar {
  background-color: #b0c4de !important;
}

.icon_name {
  margin-left: 20px;
}
</style>
