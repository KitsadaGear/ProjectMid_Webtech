<template>
  <div class="menubar">
    <a class="menubar_logo">
      <i class="fa fa-headphones" aria-hidden="true"></i> Audio Shop
    </a>
    <div class="menubar-left">
      <a class="homes" href="home.php">
        <i class="fa fa-fw fa-home"></i> Home
      </a>
      <a class="news" href="news.php">
        <i class="fa fa-newspaper-o" aria-hidden="true"></i> News
      </a>
      <div class="dropdown">
        <button class="dropbtn">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i> Product
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="mic.php">
            <i class="fa fa-cog" aria-hidden="true"></i> Microphone
          </a>
          <a href="speaker.php">
            <i class="fa fa-cog" aria-hidden="true"></i> Speaker
          </a>
          <a href="#">
            <i class="fa fa-cog" aria-hidden="true"></i> Power Mix
          </a>
          <a href="#">
            <i class="fa fa-cog" aria-hidden="true"></i> Other
          </a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">
          <i class="fa fa-cogs" aria-hidden="true"></i> Transaction
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">
            <i class="fa fa-credit-card" aria-hidden="true"></i> Payment
          </a>
          <a href="#">
            <i class="fa fa-car" aria-hidden="true"></i> Delivery
          </a>
        </div>
      </div>
      <a class="about" href="about.php">
        <i class="fa fa-user" aria-hidden="true"></i> About us
      </a>
    </div>

    <div class="menubar-rights">
      <div class="setting" id="setting_bar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a id="profile_btn " onclick="document.getElementById('id_profile').style.display='block' ">
          <i class="fa fa-address-card" aria-hidden="true"></i> Profile
        </a>
        <a id="history_btn">
          <i class="fa fa-suitcase" aria-hidden="true"></i> Order history
        </a>
        <a id="change_btn" onclick="document.getElementById('id_change').style.display ='block'">
          <i class="fa fa-history" aria-hidden="true"></i> Change Password
        </a>
        <a id="logout_btn" href="home.php?logout=true">
          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
          Logout
        </a>
      </div>
      <span class="set_bar" onclick="openNav()">&#9776;</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>