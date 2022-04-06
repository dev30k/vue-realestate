<template>
        <!-- <div class="w-full lg:w-3/4 px-6 py-2 mx-auto container hover:scale-150">
        <div class="flex flex-wrap -mx-4"> -->
          <router-link class="w-full md:w-1/2 lg:w-2/5 px-3 mb-6 lg:mb-10"  :class="{'no-user':!user}" :to="{name:'propertyinfo',params:{propertyId:this.details.propertyId}}">
              <div class="relative h-full bg-gray-50">
                <span class="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-gray rounded-full text-gray">For Sale </span>
                <a class="block" href="#">
                  <img class="w-full h-64 object-cover" :src="details.images" alt="">
                </a>
                <div class="px-6 pb-8 mt-8 divide-y text-justify">
                  <a class="block px-2 mb-6" href="#">
                    <p class="text-lg font-bold font-heading text-black">
                      <span>{{details.price}}</span>                           
      
                    </p>
                    <h3 class="mb-2 text-xl font-bold font-heading hover:text-dark2">
                      {{details.propertyName}}</h3>              
                    <span class="text-xs flex text-right   text-gray-500  font-semibold font-heading">
                      <img class="px-0" src="src/assets/location.svg" alt="">
      
                      {{details.location}}</span>
                  </a>
                  <div class="text-right py-0 ">
                    <div class="flex py-2 justify-between">
                      <span class="flex row-auto px-3 mr-2 shadow-md py-2 rounded-full">
                        <img class="px-2" src="src/assets/square.svg" alt="">
                       {{details.squarefeet}}<p class="mx-1">sqft</p></span>
                      <span class="flex row-auto px-4 shadow-md  mr-2 py-2 rounded-full">
                        <img class="px-2" src="src/assets/bed.svg" alt="">           
                       {{details.bedrooms}}beds</span>
                      <span class="flex row-auto px-4 shadow-md mr-2 py-2 rounded-full">
                        <img class="px-2" src="src/assets/bath.svg" alt="">   
                       {{details.baths}}baths</span>
      
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
        <!-- </div>
      </div> -->
</template>
<script>
export default{
   
        name:"Details",
        props:["details"],
   
    computed: {
    user() {
      return this.$store.state.user;
    },
  },

}
</script>
