<template>
  <section class="py-10 lg:py-20 bg-gray-50">
    <div class="container mx-auto px-4" v-if="user">
      <div class="max-w-xl mx-auto">
        <div class="mb-6 lg:mb-10 p-6 lg:p-12 bg-white shadow rounded">
          <div class="mb-6 center">
            <span class="text-gray-500 text-center uppercase">Upload Property</span>


          </div>
          <form action="">
            <div class="mb-3 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="Name of Property" v-model="Property.propertyName">
            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
            <textarea class=" form-control block w-full px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding
                             border border-solid border-gray-300
                             rounded
                             transition
                             ease-in-out
                             m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                             " id="exampleFormControlTextarea1" rows="3" placeholder="Detailed Description" v-model="Property.description"></textarea>

            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="number" placeholder=" Number of bedrooms" v-model="Property.bedrooms">
            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="number" placeholder="Number of Baths" v-model="Property.baths">
            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="Price" v-model="Property.price">
            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="Location" v-model="Property.location" >
            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="Square Feet" v-model="Property.squarefeet" >
            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
              <input
                  class="form-control block w-full py-1.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="formFileLg" type="file"  @change="uploadImage">
            </div>
<!--            <div class="form-group d-flex">-->
<!--              <div class="p-1" v-for="(image, index) in Property.images" v-bind:key>-->
<!--                <div class="img-wrapp">-->
<!--                  <img :src="image" alt="" width="80px">-->
<!--                  <span class="delete-img" @click="deleteImage(image,index)">X</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

            <div class="text-center">
              <button class="mb-4 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50" v-if="user" @click="addProperty()">
                Upload
              </button>
              <router-link class="mb-4 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50" v-if="!user"  to="/signup">
                Register to Upload
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>



  </section>
</template>

<script>
import {db,storage} from "../../firebase/config";
import firebase from "firebase/app";

export default {
  
  data (){
    const database = db.collection("properties").doc();
    return{
      Property:{
        propertyId:database.id,        
        propertyName:"",
        description:"",
        bedrooms:"",
        baths:"",
        price:"",
        location:"",
        squarefeet:"",
        images:[],
        uploadedOn: firebase.firestore.Timestamp.now(),
       


      },

    }


  },

  methods:{


    deleteImage(img,index){
      let image = storage.refFromURL(img);
      this.Property.images.splice(index,1);
      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred',error.message);
      });
    },
    addProperty(){
      db.collection("properties").add(this.Property).then(()=>{

      })
    },
    uploadImage(e){
      if(e.target.files[0]){
        let file = e.target.files[0];
        let storageRef = storage.ref("properties/"+file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on('state_changed',()=>{

        },(error) => {
          console.log(error.message);
        },()=>{
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.Property.images.push(downloadURL);
            console.log("File found at ",downloadURL)
          });

        })

      }


    }


  },
  computed: {
    user() {
      return this.$store.state.user;

    },

  }






}

</script>

<style scoped>
                         .img-wrapp{
                           position: relative;
                         }
.img-wrapp span.delete-img{
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

</style>

