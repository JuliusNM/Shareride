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
                label="Your origin:" label-for="exampleinput1"
                description="Be sure to confirm your location">
              <b-form-input id="exampleinput1"
                type="text" v-model="form.origin" required
                placeholder="Enter the origin of the ride">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleG2"
              label="Your destination:" label-for="exampleinput2"
              description="Be sure to confirm your destination">
              <b-form-input id="exampleinput2"
              type="text" v-model="form.destination" required
              placeholder="Enter your destination">
              </b-form-input>
            </b-form-group>
             <b-form-group id="exampleG3"
             label="Capacity:" label-for="capacity"
              description="Be sure to confirm the available seats">
              <b-form-select id="password"
              v-model="form.capacity" 
              required
              :options="seats"
              placeholder="Pick number of seats">
              </b-form-select>
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
        origin: '',
        destination: ''
      },
      seats: [
      { text: 'Select One', value: null },
        '1', '2', '3', '4', '5'
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
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
.cab {
margin-top: 60px;
align-items: center;
}
</style>
