<template>
  <div class="container-fluid">
    <form @submit="submitform">

      <div style="border: 1px solid #DDD; border-bottom: none">
        <!-- Component A -->
        <LogisticDetail />
  
        <!-- Component B -->
        <div v-if="orders.data" class="mt-5">
          <CostDetail :orders="orders" />
        </div>
      </div>

      <!-- BUTTON -->
      <div class="d-flex justify-content-end align-items-center mt-5">
        <div>
            <button type="button" class="btn btn-light py-3">Cancel</button>
        </div>
        <div class="px-4">
            <button style="width: 180px" type="button" class="btn btn-outline-secondary py-3">Save as Draft</button>
        </div>
        <div>
            <button type="submit" style="background-color: DarkTurquoise; width: 250px" class="btn btn-block text-white py-3">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LogisticDetail from './components/LogisticDetail.vue'
import CostDetail from './components/CostDetail.vue'
import getOrders from '../composables/getOrders'

export default {
  name: 'App',
  components: {
    CostDetail,
    LogisticDetail
  },
  setup() {
    const { orders, error, load } = getOrders()

    load()

    return { orders, error }
  },
  methods : {
    submitform(){
      alert("Submit Success")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
}
</style>
