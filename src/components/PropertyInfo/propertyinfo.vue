<template>
<Navbar /> 
  <section class="py-20" v-if="currentProperty">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4 mb-24">
        <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div class="relative mb-10" style="height: 564px;">
            <a class="absolute top-1/2 left-0 ml-8 transform translate-1/2" href="#">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z" fill="#1F40FF"></path>
              </svg>
            </a>
            <img class="object-cover w-full h-full" :src="this.currentProperty[0].images[1]" alt="">
            <a class="absolute top-1/2 right-0 mr-8 transform translate-1/2" href="#">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z" fill="#1F40FF"></path>
              </svg>
            </a>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="w-1/2 sm:w-1/4 p-2">
              <a class="block border border-blue-300" href="#">
                <img class="w-full h-32 object-cover" :src="this.currentProperty[0].images[0]" alt="">
              </a>
            </div>
            <div class="w-1/2 sm:w-1/4 p-2">
              <a class="block border border-transparent hover:border-gray-400" href="#">
                <img class="w-full h-32 object-cover" :src="this.currentProperty[0].images[2]" alt="">
              </a>
            </div>
            <div class="w-1/2 sm:w-1/4 p-2">
              <a class="block border border-transparent hover:border-gray-400" href="#">
                <img class="w-full h-32 object-cover" :src="this.currentProperty[0].images[3]" alt="">
              </a>
            </div>
            <div class="w-1/2 sm:w-1/4 p-2">
              <a class="block border border-transparent hover:border-gray-400" href="#">
                <img class="w-full h-32 object-cover" :src="this.currentProperty[0].images[4]" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-4">
          <div class="lg:pl-20">
            <div class="mb-10 pb-10 border-b">
              <span class="text-gray-500">Uploaded on: {{this.currentProperty[0].uploadedOn.toDate().toDateString()}}</span>
              <h2 class="mt-2 mb-2 max-w-xl text-2xl md:text-2xl font-bold font-heading">{{ this.currentProperty[0].propertyName}}</h2>
              <div class="mb-8">
                <button>
                  <img src="yofte-assets/elements/star-gold.svg" alt="">
                </button>
                <button>
                  <img src="yofte-assets/elements/star-gold.svg" alt="">
                </button>
                <button>
                  <img src="yofte-assets/elements/star-gold.svg" alt="">
                </button>
                <button>
                  <img src="yofte-assets/elements/star-gold.svg" alt="">
                </button>
                <button>
                  <img src="yofte-assets/elements/star-gray.svg" alt="">
                </button>
              </div>
              <p class="inline-block mb-8 text-2xl font-bold font-heading text-dark1">
                <span>${{this.currentProperty[0].price}}</span>
              </p>
              <p class="max-w-md text-gray-500">{{this.currentProperty[0].description.slice(0,208)}} </p>
            </div>
            <div class="flex mb-6">
              <div class="text-right py-2">
                <div class="flex py-2 justify-between">
                      <span class="flex row-auto px-4 shadow-md py-2 rounded-full mx-3">
                        <img class="px-2" src="../../assets/square.svg" alt="">
                        {{this.currentProperty[0].squarefeet}}<p class="mx-1">sqft</p></span>
                  <span class="flex row-auto px-6 shadow-md py-2 rounded-full mx-3">
                        <img class="px-2" src="../../assets/bed.svg" alt="">
                       {{this.currentProperty[0].bedrooms}}</span>
                  <span class="flex row-auto px-6 shadow-md py-2 rounded-full mx-3">
                        <img class="px-2" src="../../assets/bath.svg" alt="">
                        {{this.currentProperty[0].baths}}</span>
                </div>
              </div>


            </div>
            <div class="flex flex-wrap -mx-4 mb-14 items-center">
              <!-- <div class="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                <router-link class="inline-block bg-dark2  text-white font-bold font-heading py-4 px-6 rounded-md uppercase transition duration-200" :to="{name:'cart',params:{propertyId:this.currentProperty.propertyId}}">BUY NOW</router-link>
              </div> -->
              <div>
    <router-link to="/checkout" class="bg-dark2 text-white active:bg-pink-600 my-4 mt-4 font-bold uppercase text-sm px-4 mb-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
      Proceed to Payment
    </router-link>

  </div>
              
              <div class="w-full xl:w-1/3 px-4 mt-4">
                <a class="ml-auto sm:ml-0 flex-shrink-0 inline-flex mr-4 items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500" @click="addEntry">
                  <svg class="w-6 h-6" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
                <a class="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500" href="https://www.facebook.com/">
                  <svg class="w-6 h-6" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z" fill="black" stroke="black" stroke-width="0.35"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-dark1 bg-white': openTab !== 1, 'text-white bg-dark1': openTab === 1}">
            Description
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-dark1 bg-white': openTab !== 2, 'text-white bg-dark1': openTab === 2}">
            Customer Reviews
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-dark1 bg-white': openTab !== 3, 'text-white bg-dark1': openTab === 3}">
            Post a comment
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                  
            <div class="px-4 md:px-16 pt-8 pb-12 bg-white">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">I haretra neque non mi aliquam, finibus hart bibendum molestie. Morbi facilisis neque in condimentum malesuada. Vestibulum suscipit sagittis dignissim mauris.</p>         
          </div>        
        </div>
      </div>
                 
            </div>


            
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <comments :comment="comment" v-for="(comment,index) in featuredComments" :key="index" />

          
    </div>




            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
             <form class="text-left" action="">      
      
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input2">Post a comment</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" placeholder="Post a comment " v-model="comment">
        </label> 
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input2">Best thing</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" placeholder="Best thing about property " v-model="best">
        </label> 
           

        <button class="inline-block mb-4 w-1/2 px-8 py-3 text-center m-auto text-white font-bold bg-black hover:bg-gray-900"  data-config-id="primary-action" @click.prevent="addToLiked">Post</button>
        
      </form>
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
import {db} from "../../firebase/config"
import firebase from "firebase/app";
import comments from "../comments.vue";
import Navbar from "../Navbar/Navbar.vue"
export default {
  components:{
    comments,
    Navbar
  },

  data () {
    return {
     currentProperty:null,
     showModal:false,
     openTab: 1,
     comment:"",
     best:""
  
    }
  },
  computed:{
    featuredComments(){
      return this.$store.getters.featuredComments;

    }
  },

  methods:{    
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    async addEntry() {  
    var image = this.currentProperty[0].images[0];
    var name = this.currentProperty[0].propertyName;  
    var price= this.currentProperty[0].price;
    var id= this.$route.params.propertyId;
    
    var entry = {
        "image": image,
        "name": name,
        "price":price,
        "id":id
        
    };  
    await localStorage.setItem("allLiked", JSON.stringify(entry));
    this.$router.push("/liked")
    
},
    addToLiked(){
      db.collection("comments").add({
        username:this.$store.state.username,
        comment:this.comment,
        best:this.best,
        uploadedOn: firebase.firestore.Timestamp.now()
       
      }).then(
        
        alert("Added Successfully"))
      .catch(err=>console.log(err.message))
      
    },
    
       
    close: function() {
      console.log("Payment closed");
    },

     toggleModal: function(){
      this.showModal = !this.showModal;
    },
  },
  async mounted (){
    
    this.currentProperty = await this.$store.state.properties.filter(property =>{
      return property.propertyId  === this.$route.params.propertyId
      
    });  
  },


  }
</script>