<template>
  <div class="menubar">
    <div v-if="!user">
      <div
        class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm font-Taviraj menu-bar"
      >
        <h5 class="my-0 mr-md-auto font-weight-normal icon_name">Pun Fun</h5>

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
      </div>
    </div>

    <div v-else>
      <div
        class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm font-Taviraj menu-bar"
      >
        <h5 class="my-0 mr-md-auto font-weight-normal icon_name">Pun Fun</h5>

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
.bg-light {
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
  padding: 10px 15px;
}
.header_btn {
  padding: 20.75px;
  font-size: 20px;
  color: black;
}
.mb-3 {
  margin: 0 !important;
}
.menu-bar {
  background-color: #b0c4de !important;
}

.icon_name {
  margin-left: 20px;
  font-size: 50px;
}
</style>
