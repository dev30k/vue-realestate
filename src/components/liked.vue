<template>
    <section class="py-20 bg-gray-100" >
  <div class="container mx-auto px-4">
    <div class="p-8 lg:p-20 bg-white">
      <h2 class="mb-20 text-5xl font-bold font-heading">Your Favourite Properties </h2>
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
          <div class="hidden lg:flex w-full">
            <div class="w-full lg:w-3/6">
              <h4 class="mb-6 font-bold font-heading text-gray-500">Description</h4>
            </div>
            <div class="w-full lg:w-1/6">
              <h4 class="mb-6 font-bold font-heading text-gray-500">Price</h4>
            </div>           
            <div class="w-full lg:w-1/6 text-right">
              <h4 class="mb-6 font-bold font-heading text-gray-500">Action</h4>
            </div>
          </div>
          <div class="mb-12 py-6 border-t border-b border-gray-200" >
            <div class="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
              <router-link class="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0" :to="{name:'propertyinfo',params:{propertyId:this.uniques.id}}">
                <div class="flex -mx-4 flex-wrap items-center">
                  <div class="w-full md:w-1/3 px-4 mb-3">
                    <div class="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img class="h-full object-contain" :src="this.uniques.image" alt="">
                    </div>
                  </div>
                  <div class="w-2/3 px-4">
                    <h3 class="mb-2 text-xl font-bold font-heading"></h3>
                    <p class="text-gray-500">{{this.uniques.name}}</p>
                  </div>
                </div>
              </router-link>
              <div class="hidden lg:block lg:w-2/12 px-4">
                <p class="text-lg text-dark3 font-bold font-heading">{{this.uniques.price}}</p>
              </div>            
              <div class="w-auto md:w-1/6 lg:w-2/12 px-1 text-right">
                <button class="inline-block bg-dark1 hover:bg-orange-400 text-white font-bold font-heading py-1 px-4 rounded-md uppercase transition duration-200" @click="clearStorage">REMOVE</button>
              </div>
            </div>
          
          </div>
         
        </div>      
      </div>
    </div>
  </div>
</section>
</template>
<script>
import {db} from "../firebase/config";

export default{
    name:"liked",
    data(){
      return{    
        uniques:[],       

      }
        
    },
    created(){
      this.uniques = JSON.parse(localStorage.getItem("allLiked") || '[]')
      console.log("data",this.uniques.image)
    },
    methods:{
      async clearStorage(){
        localStorage.clear()
        this.$router.push("/");

        
        


      },
      async getData(){
        var localData = JSON.parse(localStorage.getItem("allLiked"));
        console.log("here",localData);

      },
   

      async getLiked(){
     
      const dbs = await db.collection("likedItems").where('userid','==',this.$store.state.profileId);     
      const results = await dbs.get();      
      results.forEach((doc) => { 
        console.log(doc.id, '=>', doc.data());
        console.log("The docs are here",doc.data().propertyid)
        
        this.$data.arrayss.push(doc.data().propertyid)

        
        
      })
     

     

    }
   
  
    },

    
    beforeMount(){
      this.getLiked();
      // this.ret();
      this.getData();

      
    },
   
    
    
    
}
</script>
