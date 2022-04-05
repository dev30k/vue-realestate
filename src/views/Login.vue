<template>  
<section class="py-24" style=" background-repeat: no-repeat; background-size: cover; z-index: -1;" data-config-id="auto-img-2">
  <div class="container px-4 mx-auto">
    <div class="max-w-sm mx-auto text-center">
      <img class="block mx-auto mb-4" src="../assets/log.svg" alt="" data-config-id="brand-logo">
      <h2 class="text-4xl font-heading mb-2" data-config-id="form-header">Sign In</h2>
      <p class="leading-8 mb-3" data-config-id="desc1">Please enter your details to proceed.</p>
      <form class="text-left" action="">       
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input1">Email</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="email" placeholder="Your email address" v-model="email">
        </label>
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input2">Password</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="password" placeholder="Your password" v-model="password">
        </label> 
        <label class="flex items-start mb-6" v-show="error">
          <span class="text-xs text-center">
          {{this.errorMsg}}
       </span>
        </label>
               

        <label class="flex items-start mb-6">
          <p class="text-xs text-center">
          <span data-config-id="extra">Forgot your password ?</span>
          <a class="text-blue-500 hover:underline" href="#" data-config-id="extra-action"> reset password</a>
        </p>
        </label>
        <button class="inline-block mb-4 w-full px-8 py-3 text-center text-white font-bold bg-black hover:bg-gray-900"  data-config-id="primary-action" @click.prevent="login">Sign In</button>
        <a class="flex mb-6 items-center justify-center px-6 py-3 w-full text-center text-black font-bold border border-gray-200 hover:border-gray-300" href="#">
          <img class="mr-3" src="../assets/google.svg" alt="" data-config-id="auto-img-1">
          <span data-config-id="secondary-action">Sign In with Google</span>
        </a>
        <p class="text-xs text-center">
          <span data-config-id="extra">Do not have an account?</span>
          <router-link class="text-blue-500 hover:underline" to="/signup" data-config-id="extra-action"> Sign Up</router-link>
        </p>
      </form>
    </div>
  </div>
</section>
</template>
<script>


import {auth} from "../firebase/config";

export default{
  data(){
    return {
      email:"",
      password:"",
      error:null,
      errorMsg:""
    }
  },
  methods:{
    login() {
      auth.signInWithEmailAndPassword(this.email,this.password).then(()=>{
        this.$router.push({name:"Home"})
        this.error = false;
        this.errorMsg = "";
        console.log(auth.currentUser.uid);


      }).catch((err)=>{
        this.error=true;
        this.errorMsg = err.message;
      })
    }
    }
}


</script>

