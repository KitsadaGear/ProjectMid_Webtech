<template>
  <div class="menubar font-Taviraj">
    <div v-if="!user">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="bg-light">
          <b-navbar-brand href="#" class="icon_name">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <router-link to="/home-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="house-fill" style="margin-right: 6px"></b-icon>หน้าแรก
                </b-button>
              </router-link>

              <router-link to="/about-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="person-fill" style="margin-right: 6px"></b-icon>เกี่ยวกับเรา
                </b-button>
              </router-link>
              <router-link to="/detail-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="info-square-fill" style="margin-right: 6px"></b-icon>บริจาคอะไรได้
                </b-button>
              </router-link>

              <router-link to="/login-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="heart-fill" style="margin-right: 8px"></b-icon>บริจาคที่นี่
                </b-button>
              </router-link>
              <router-link to="/contact-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="chat-left-dots-fill" style="margin-right: 8px"></b-icon>ติดต่อเรา
                </b-button>
              </router-link>
              <router-link to="/reference-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="file-text-fill" style="margin-right: 6px"></b-icon>เอกสารอ้างอิง
                </b-button>
              </router-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>

    <div v-else>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="bg-light">
          <b-navbar-brand href="#" class="icon_name">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <router-link to="/home-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="house-fill" style="margin-right: 6px"></b-icon>หน้าแรก
                </b-button>
              </router-link>

              <router-link to="/about-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="person-fill" style="margin-right: 6px"></b-icon>เกี่ยวกับเรา
                </b-button>
              </router-link>
              <router-link to="/detail-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="info-square-fill" style="margin-right: 6px"></b-icon>บริจาคอะไรได้
                </b-button>
              </router-link>

              <div>
                <router-link to="/donate-view">
                  <b-button variant="outline-primary" class="header_btn">
                    <b-icon icon="person-fill"></b-icon>บริจาคที่นี่
                  </b-button>
                </router-link>
              </div>

              <router-link to="/contact-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="chat-left-dots-fill" style="margin-right: 8px"></b-icon>ติดต่อเรา
                </b-button>
              </router-link>
              <router-link to="/reference-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="file-text-fill" style="margin-right: 6px"></b-icon>เอกสารอ้างอิง
                </b-button>
              </router-link>

              <router-link to="/logout-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="person-fill"></b-icon>ออกจากระบบ
                </b-button>
              </router-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("account", ["user"]),
  },
};
</script>


<style>
.menubar .bg-light {
  background-color: #b0c4de !important;
}
.navbar-nav .nav-link {
  font-size: 20px;
  color: black !important;
}

.btn-outline-primary {
  margin-left: 10px;
  color: black;
  border-color: #007bff;
  padding: 20px 35px;
  font-size: 20px;
}

.menubar .icon_name {
  font-size: 50px;
  color: black !important;
}
.menubar .navbar-dark .navbar-toggler {
  color: black !important;
  border-color: black;
}
</style>
