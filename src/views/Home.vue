<template>  
  <Navbar/>  
      
      <section class="bg-white">      
         
        <div class="container mx-auto px-4 pb-16">
          <div class="flex flex-wrap pt-4 pb-10 items-center">         
         
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-8/12 px-4 mb-6 lg:mb-0">
              <div class="relative h-full bg-white overflow-hidden">
                <img class="absolute right-0 top-0 w-1/2 h-full object-cover" src="../assets/one.jpg" alt="">
                <div class="hidden lg:flex absolute right-0 top-1/2 pr-10 transform -translate-y-1/2 flex-col items-center">
                  <span class="mb-5 font-bold font-heading">01</span>
                  <div class="mb-5 h-16 w-px bg-gray-100"></div>
                  <button class="mb-5">
                    <img src="" alt="">
                  </button>
                  <button class="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
                  <button class="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
                  <div class="h-16 w-px bg-gray-100"></div>
                </div>
                <div class="relative max-w-xl pl-6 lg:pl-20 pt-32 pb-24">
                  <span class="px-3 py-1 border border-dark2 rounded-full text-xs text-dark2 font-bold font-heading uppercase">BESTSELLING</span>
                  <h2 class="mt-6 mb-8 text-5xl lg:text-6xl font-bold font-heading">
                    <span>Find the Best property, </span>
                    <span class="text-dark1">Invest </span>
                    <span>in your future</span>
                  </h2>
                  <p class="mb-20 text-lg text-gray-600">Buy or rent comfortable and beautiful houses in many places</p>
                  <router-link class="inline-block bg-dark2  text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200" to="/properties">START EXPLORING</router-link>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <a href="#">
                <img class="mb-6" src="../assets/four.jpg" alt="">
              </a>
              <a href="#">
                <img src="../assets/three.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="py-12 lg:py-24 bg-gray-50">
          <div class="container mx-auto px-4">
            <h4 class="lg:ml-16 mb-6 font-bold font-heading text-gray-500 text-xs">TRUSTED BY BRANDS ALL OVER THE WORLD</h4>
            <div class="flex flex-wrap -mx-3 -mb-3">
              <div class="w-full md:w-1/2 lg:w-1/6 p-3">
                <div class="h-28 flex items-center bg-white shadow-xl">
                  <img class="mx-auto" src="../assets/db.svg" alt="">
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/6 p-3">
                <div class="h-28 flex items-center bg-white shadow-xl">
                  <img class="mx-auto" src="../assets/ing.svg" alt="">
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/6 p-3">
                <div class="h-28 flex items-center bg-white shadow-xl">
                  <img class="mx-auto" src="../assets/fidelity.svg" alt="">
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/6 p-3">
                <div class="h-28 flex items-center bg-white shadow-xl">
                  <img class="mx-auto" src="../assets/jpmorgan.svg" alt="">
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/6 p-3">
                <div class="h-28 flex items-center bg-white shadow-xl">
                  <img class="mx-auto" src="../assets/safaricom.svg" alt="">
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/6 p-3">
                <div class="h-28 flex items-center bg-white shadow-xl">
                  <img class="mx-auto" src="../assets/standard.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-3xl font-bold font-heading" href="#">
                <img class="h-9" src="../assets/logo.svg" alt="" width="auto">
              </a>
              <button class="navbar-close">
                <svg class="h-2 w-2 text-gray-500 cursor-pointer" width="10" height="10" viewbox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
            <div class="flex mb-8 justify-between">
              <a class="inline-flex items-center font-semibold font-heading" href="#">
                <svg class="mr-3" width="32" height="31" viewbox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Sign In</span>
              </a>
              <div class="flex items-center">
                <a class="mr-10" href="#">
                  <svg width="23" height="20" viewbox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
                <a class="flex items-center" href="#">
                  <svg class="mr-3" width="23" height="23" viewbox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span class="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">3</span>
                </a>
              </div>
            </div>
            <input class="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none" type="search" placeholder="Search">
            <ul class="text-3xl font-bold font-heading">
              <li class="mb-8"><a href="#">Category</a></li>
              <li class="mb-8"><a href="#">Collection</a></li>
              <li class="mb-8"><a href="#">Story</a></li>
              <li class="mb-8"><a href="#">Story</a></li>
              <li><a href="#">Photos</a></li>
            </ul>
          </nav>
        </div>
      </section>
        
      <section class="py-10 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading text-center">Featured Properties</h2>
          <div class="flex flex-wrap -mx-3 mb-24">
           <Featured :property="property" v-for="(property,index) in featuredFeed" :key="index" />
          </div>
          <div class="text-center">
            <router-link class="inline-block bg-dark2  text-white font-bold font-heading py-6 px-8 rounded-full uppercase" to="/properties">Show More</router-link>
          </div>
        </div>
      </section>
        
      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading text-center">Finding your home is as easy as 1,2,3</h2>
          <div class="flex flex-wrap -mx-3 justify-evenly">
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div class="relative h-full text-center pt-16 bg-white">
                <div class="pb-12 px-2 ">
                  <span class="inline-flex mb-16 items-center justify-center w-40 h-40 rounded-full">
                    <img class="" src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6195aad60024816f3547af2d_image-1-steps-realtor-template.svg" alt="">    
      
                  </span>
                  <h3 class="mb-4 text-xl font-bold font-heading">1. Search for your favorite house in your location
                  </h3>
                  <p class="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.</p>
                </div>          
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div class="relative  ve h-full text-center pt-16 bg-white">
                <div class="pb-12 px-2 ">
                  <span class="inline-flex mb-16 items-center justify-center w-40 h-40 rounded-full">
                    <img class="" src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6195aad652322920b2108196_image-2-steps-realtor-template.svg" alt="">    
      
                  </span>
                  <h3 class="mb-4 text-xl font-bold font-heading">2. Make a visit appointment with one of our agents
                  </h3>
                  <p class="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.</p>
                </div>          
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div class="relative h-full text-center pt-16 bg-white">
                <div class="pb-12 px-2 ">
                  <span class="inline-flex mb-16 items-center justify-center w-40 h-40 rounded-full">
                    <img class="" src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6195aad652322920b2108196_image-2-steps-realtor-template.svg" alt="">    
      
                  </span>
                  <h3 class="mb-4 text-xl font-bold font-heading">3. Get your dream house in a month, or less
                  </h3>
                  <p class="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.</p>
                </div>          
              </div>
            </div>
      
          </div>
        </div>
      </section>
      <Footer />
  
</template>
<script>
import  Navbar from '@/components/Navbar/Navbar.vue'
import Featured from "../components/Featured";
import Footer from "../components/Footer.vue";
export default{
  components:{
    Featured,
    Footer,
    Navbar
  },
  computed:{
    featuredFeed(){
      return this.$store.getters.featuredFeed;

    }
  }
}


</script>

