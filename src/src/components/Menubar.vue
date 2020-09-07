<template>
  <div class="menubar font-Kanit">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" class="bg-light">
        <b-navbar-brand href="#" class="icon_name">PunFun</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/home-view">
              <b-button variant="outline-primary" class="header_btn">
                <b-icon icon="house-fill" style="margin-right: 6px"></b-icon
                >หน้าหลัก
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
                <b-icon
                  icon="info-square-fill"
                  style="margin-right: 6px"
                ></b-icon
                >บริจาคอะไรได้
              </b-button>
            </router-link>

            <div v-if="!user">
              <router-link to="/login-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="heart-fill" style="margin-right: 8px"></b-icon
                  >บริจาคที่นี่
                </b-button>
              </router-link>
            </div>
            <div v-else-if="user.displayName != 'Admin'">
              <router-link to="/donate-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="person-fill"></b-icon>บริจาคที่นี่
                </b-button>
              </router-link>
            </div>
            <div v-else-if="user.displayName == 'Admin'">
              <router-link to="/admin-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="person-fill"></b-icon>ควบคุมการทำงาน
                </b-button>
              </router-link>
            </div>
            <div v-if="user">
              <div v-if="user.displayName != 'Admin'">
                <router-link to="/request-view">
                  <b-button variant="outline-primary" class="header_btn">
                    <b-icon icon="person-fill"></b-icon>แจ้งความต้องการ
                  </b-button>
                </router-link>
              </div>
            </div>

            <router-link to="/contact-view">
              <b-button variant="outline-primary" class="header_btn">
                <b-icon
                  icon="chat-left-dots-fill"
                  style="margin-right: 8px"
                ></b-icon
                >ติดต่อเรา
              </b-button>
            </router-link>
            <router-link to="/reference-view">
              <b-button variant="outline-primary" class="header_btn">
                <b-icon icon="file-text-fill" style="margin-right: 6px"></b-icon
                >เอกสารอ้างอิง
              </b-button>
            </router-link>
            <div v-if="user">
              <router-link to="/logout-view">
                <b-button variant="outline-primary" class="header_btn">
                  <b-icon icon="person-fill"></b-icon>ออกระบบ
                </b-button>
              </router-link>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("account", ["user"])
  }
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
  color: black;
  border-color: #007bff;
  padding: 20px 35px;
  font-size: 20px;
  display: block;
  width: 100%;
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
