<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/">
            <li class="nav-item">
              <a class="nav-link">หน้าแรก</a>
            </li>
          </router-link>
          <router-link to="/about-view">
            <li class="nav-item">
              <a class="nav-link">เกี่ยวกับเรา</a>
            </li>
          </router-link>
          <router-link to="/detail-view">
            <li>
              <a class="nav-link">บริจาคอะไรได้บ้าง</a>
            </li>
          </router-link>
          <router-link to="/login-view">
            <li>
              <a class="nav-link">บริจาคที่นี่</a>
            </li>
          </router-link>
          <router-link to="/contact-view">
            <li class="nav-item">
              <a class="nav-link">ติดต่อเรา</a>
            </li>
          </router-link>
          <router-link to="/reference-view">
            <li class="nav-item">
              <a class="nav-link">เอกสารการอ้างอิง</a>
            </li>
          </router-link>
          <!-- Only Fast Pass -->
          <router-link to="/share-view">
            <li class="nav-item">
              <a class="nav-link">Fast pass</a>
            </li>
          </router-link>

          <!-- Only Fast Pass -->
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
#app {
  margin: 0%;
  height: 100%;
}

.bg-light {
  padding: 1rem;
  background-color: #b0c4de !important;
  overflow: auto;
}

.navbar-nav {
  margin: 0 auto;
}

.navbar-nav .nav-link {
  font-size: 25px;
  color: black !important;
}
</style>
