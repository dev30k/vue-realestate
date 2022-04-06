<template>
  <router-link class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0" :class="{'no-user':!user}" :to="{name:'propertyinfo',params:{propertyId:this.property.propertyId}}">
    <div class="relative h-full bg-gray-50">
      <span class="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-gray rounded-full text-gray">For rent </span>
      <a class="block" href="#">
        <img class="w-full h-64 object-cover" :src="property.images" alt="">
      </a>
      <div class="px-6 pb-8 mt-8 divide-y text-justify">
        <a class="block px-2 mb-6" href="#">
          <p class="text-lg font-bold font-heading text-black">
            <span>{{property.price}}</span>

          </p>
          <h3 class="mb-2 text-xl font-bold font-heading hover:text-dark1" >
            {{ property.propertyName }}</h3>
          <span class="text-xs flex text-right   text-gray-500  font-semibold font-heading">
                      <img class="px-0" src="../assets/locations.svg" alt="">

                      {{ property.location }}</span>
        </a>
        <div class="text-right py-2">
          <div class="flex py-2 justify-between">
                      <span class="flex row-auto px-3 shadow-md py-2 rounded-full">
                        <img class="px-2" src="../assets/square.svg" alt="">
                        {{ property.squarefeet }}<p class="mx-1">sqft</p></span>
            <span class="flex row-auto px-4 shadow-md py-2 rounded-full">
                        <img class="px-2" src="../assets/bed.svg" alt="">
                        {{ property.bedrooms }}</span>
            <span class="flex row-auto px-4 shadow-md py-2 rounded-full">
                        <img class="px-2" src="../assets/bath.svg" alt="">
                       {{ property.baths }}</span>
          </div>

        </div>
      </div>
    </div>
  </router-link>

</template>

<script>
export default {
  name: "Featured",
  props: ["property"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
}
</script>

<style scoped>

</style>