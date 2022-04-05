<template>  
<section class="py-24" style=" background-repeat: no-repeat; background-size: cover; z-index: -1;" data-config-id="auto-img-2">
  <div class="container px-4 mx-auto">
    <div class="max-w-sm mx-auto text-center">
      <img class="block mx-auto mb-6" src="../assets/log.svg" alt="" data-config-id="brand-logo">
      <h2 class="text-4xl font-heading mb-2" data-config-id="form-header">Forgot Password</h2>
      <p class="leading-8 mb-6" data-config-id="desc1">Please enter your email to proceed.</p>
      <form class="text-left">       
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input1">Email</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="email" placeholder="Your email address" v-model="email" required autofocus/>
        </label>
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input1" v-show="error">{{ errorMsg }}</span>
        </label>
         
       <button class="flex mb-6 items-center justify-center px-6 py-3 w-full text-center text-black font-bold border border-gray-200 hover:border-gray-300" @click.prevent="forgot">
          Send Email
        </button>
      
      </form>
        
    </div>
  </div>
 </section>
</template>

<script>
import {auth} from "../firebase/config";

export default {
  data () {
    return{
      email: "",
      error: null,
      errorMsg:"",
    }
  },
  methods: {
    forgot(){
      auth.sendPasswordResetEmail(this.email).then(()=>{
        this.$router.push({name: "Login"})

      }).catch((err)=>{
        this.error = true;
        this.errorMsg = err.message;
      })
    }
  }



}
</script>



 