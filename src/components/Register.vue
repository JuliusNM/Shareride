<template>
  <div class="cab">
    <b-container class="">
    <b-row class="cab">
      <b-col>
       <h2>Get started with a free account</h2>
       <p>Create a free Shareride account and start sharing rides.</p>
     <img src="/static/images/logo.png"alt="Kitchen" />
      </b-col>
      <b-col>
        <div>
          <b-form @submit="onSubmit">
            <b-form-group id="exampleG1"
                label="Email address:" label-for="exampleinput1"
                description="We will not share your email.">
              <b-form-input id="exampleinput1"
                type="email" v-model="form.email" required
                placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleG2"
              label="Your Name:" label-for="exampleinput2"
              description="">
              <b-form-input id="exampleinput2"
              type="text" v-model="form.name" required
              placeholder="Enter name">
              </b-form-input>
            </b-form-group>
             <b-form-group id="exampleG3"
             label="Your Password:" label-for="password"
              description="">
              <b-form-input id="password"
              type="password" v-model="form.password" required
              data-toggle="password"
              placeholder="Enter password">
              </b-form-input>
            </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>   
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default {
  props: ['name'],
  data () {
    return {
      form: {
        email: 'john@doe.com',
        name: 'John Doe',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      var router = new VueRouter()
      this.$router.push('/info')
      router.go()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.cab{
  margin-top: 60px;
  align-items: center;
}
</style>
