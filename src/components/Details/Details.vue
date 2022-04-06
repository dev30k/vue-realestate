<template>
<Navbar/>  
<section class="py-20 bg-gray-100">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4 mb-20 items-center justify-between">
      <div class="w-full lg:w-auto px-4 mb-12 xl:mb-0">
        <h2 class="text-2xl font-bold font-heading">
          <span>Found {{this.$store.state.properties.length}} properties that are available</span>
          
        </h2>
      </div>
      <div class="w-full lg:w-auto px-4 flex flex-wrap items-center">
        <div class="w-full sm:w-auto mb-4 sm:mb-0 mr-5">
          <select class="pl-8 py-4 px-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="" id="">
            <option value="1">Sort by latest</option>
            <option value="2">Sort by price</option>
          </select>
        </div>
       
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-24">
      <div class="w-full lg:hidden px-3">
        <div class="flex flex-wrap -mx-2">
          <div class="w-1/2 md:w-1/3 px-2 mb-4">
            <div class="py-6 px-2 text-center bg-gray-50">
              <a class="font-bold font-heading" href="#">Category</a>
              <ul class="hidden text-left mt-6">
                <li class="mb-4"><a href="#">Condo</a></li>
                <li class="mb-4"><a href="#">Activewear</a></li>
                <li class="mb-4"><a href="#">Hoodies &amp; Sweatshirts</a></li>
                <li class="mb-4"><a href="#">Jackets</a></li>
                <li class="mb-4"><a href="#">Multipacks</a></li>
                <li class="mb-4"><a href="#">Bags</a></li>
                <li class="mb-4"><a href="#">Sports</a></li>
                <li class="mb-4"><a href="#">Gifts</a></li>
                <li><a href="#">Notes</a></li>
              </ul>
            </div>
          </div>
         
          <!-- <div class="w-1/2 md:w-1/3 px-2 mb-4">
            <div class="py-6 px-4 text-center bg-gray-50">
              <a class="font-bold font-heading" href="#">Price</a>
              <div class="hidden mt-6">
                <input class="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer" type="range" min="1" max="100" value="50">
                <div class="flex justify-between">
                  <span class="inline-block text-lg font-bold font-heading text-blue-300">$0</span>
                  <span class="inline-block text-lg font-bold font-heading text-blue-300">$289</span>
                </div>
              </div>
            </div>
          </div> -->
          
          <!-- <div class="w-1/2 md:w-1/3 px-2 mb-4">
            <div class="py-6 px-4 text-center bg-gray-50">
              <a class="font-bold font-heading" href="#">Location</a>
              <div class="hidden mt-6">
                <label class="flex mb-3 items-center text-lg">
                  <input type="checkbox">
                  <span class="ml-2">Standard</span>
                </label>
                <label class="flex items-center text-lg">
                  <input type="checkbox">
                  <span class="ml-2">Next day (yes!)</span>
                </label>
              </div>
            </div>
          </div> -->
          <div class="w-1/2 md:w-1/3 px-2 mb-4">
            <div class="py-6 px-4 text-center bg-gray-50">
              <a class="font-bold font-heading" href="#">Location</a>
              <input class="hidden mt-6 w-full px-8 py-4 bg-white border rounded-md" type="serach" placeholder="City">
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block w-1/4 px-3">
        <div class="mb-6 py-10 px-12 bg-gray-50">
          <h3 class="mb-8 text-2xl font-bold font-heading">Category</h3>
          <ul>
            <li class="mb-4"><a class="text-lg" href="#">Apartment</a></li>
              <li class="mb-4"><a class="text-lg" href="#">Condo</a></li>
                <li class="mb-4"><a class="text-lg" href="#">Bungalow</a></li>
           
          </ul>
        </div>
       
        <div class="mb-6 py-10 px-12 bg-gray-50">
          <h3 class="mb-8 text-2xl font-bold font-heading">Price</h3>
          <div>
            <input class="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer" type="range" min="1" max="100" value="50">
            <div class="flex justify-between">
              <span class="inline-block text-lg font-bold font-heading text-dark2">$10000</span>
              <span class="inline-block text-lg font-bold font-heading text-dark1">$289000</span>
            </div>
          </div>
        </div>
        <!-- <div class="mb-6 py-12 pl-12 pr-6 bg-gray-50">
          <h3 class="mb-8 text-2xl font-bold font-heading">Size</h3>
          <div class="flex flex-wrap -mx-2 -mb-2">
            <button class="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">36</button>
            <button class="relative mb-2 mr-1 w-16 border rounded-md">
              37
              <span class="absolute bottom-0 left-0 w-full py-px bg-blue-300"></span>
            </button>
            <button class="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">38</button>
          
          </div>
          <div class="mt-4 text-right">
            <a class="inline-flex underline text-blue-300 hover:text-blue-400" href="#">
              <span class="mr-2">Show all</span>
              <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z" fill="#3C60D9"></path>
              </svg>
            </a>
          </div>
        </div> -->
        <div class="mb-6 py-10 px-12 bg-gray-50">
          <h3 class="mb-6 text-2xl font-bold font-heading">Location</h3>
          <label class="flex mb-3 items-center text-lg">
            <input type="checkbox">
            <span class="ml-2">Nairobi</span>
          </label>
          <label class="flex items-center text-lg">
            <input type="checkbox">
            <span class="ml-2">Nakuru</span>
          </label>
        </div>
        <div class="mb-6 py-10 px-12 bg-gray-50">
          <h3 class="mb-6 text-2xl font-bold font-heading">Location</h3>
          <input class="w-full px-8 py-4 bg-white border rounded-md" type="serach" placeholder="City">
        </div>
      </div>

 
  <div class="w-full lg:w-3/4 px-3">
        <div class="flex flex-wrap -mx-3">  
          
           <Details :details="details" v-for="(details,index) in featuredDetails " :key="index"/>
       
  </div>
    </div>
    <div class="text-center">
      <a class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase" href="#">Show More</a>
    </div>
  </div>
  </div>
</section>
</template>

<script>
import firebase from "firebase";
import { computed, onMounted, reactive, ref } from "vue";
import Details from '../details.vue';
import Navbar from "../Navbar/Navbar.vue"
export default{
  components:{
    Details,Navbar

  },
  

    computed:{
    featuredDetails(){
      return this.$store.getters.featuredDetails;

    }
  },
 
    setup() {
    const properties = reactive([]);
    const searchQuery = ref("");
    console.log("here",properties)
    const searchedProducts = computed(() => {
      console.log("sert",searchedProducts);
      return properties.filter((property) => {       
        
             property.location
               
      });
    });
    console.log("searched",searchedProducts)
    onMounted(async () => {
      try {
        const productsSnap = await firebase
          .firestore()
          .collection("properties")
          .get();
        productsSnap.forEach((doc) => {
          let property = doc.data();
          console.log("searched",property)
          property.id = doc.id;
          properties.push(property);
        });
      } catch (e) {
        console.log("Error Loading Products",e.message);
      }
    });
    return { searchedProducts, searchQuery };
  },
}
</script>
