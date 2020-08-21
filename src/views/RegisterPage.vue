<template> 

<div class="shadow-lg p-3 mb-5 bg-white rounded ">
    <h1 class="text-center">Register</h1>
    <p></p>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">First name</span>
        </div>
        <input type="text" aria-label="First name" class="form-control">
        <div class="input-group-prepend">
            <span class="input-group-text">Last name</span>
        </div>
        <input type="text" aria-label="Last name" class="form-control">
</div>
<p></p>

<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>

    <div class="form-group">
        <label for="exampleInputPassword1">Recheck Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    
    <button type="submit" class="btn btn-primary rounded-pill">ยืนยัน</button>

    <button type="submit" class="btn btn-white bg-light rounded-pill text">
        <router-link to="/login-view" class="text-secondary">
            ย้อนกลับ
        </router-link>
    </button>
</form>


</div>

</template>

<script>
export default {};
</script>

<style></style>
