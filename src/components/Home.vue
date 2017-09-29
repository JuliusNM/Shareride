<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="cab"> <img src="/static/images/logo.png" alt="Shareride" /></div>
      </b-col>
      <b-col>
        <div class="advert">
          <h1>Save Money,</h1>
          <h2>Make Friends</h2><br>
          <router-link to="/register"> <button type="button" class="btn btn-outline-success">Get Started</button></router-link>        
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.advert, .cab{
   margin-top: 100px;
   align-content: center;
}
</style>
