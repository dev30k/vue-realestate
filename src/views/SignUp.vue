<template>  
<section class="py-24" style="background-repeat: no-repeat; background-size: cover; z-index: -1;" data-config-id="auto-img-2">
  <div class="container px-4 mx-auto">
    <div class="max-w-sm mx-auto text-center">
      <img class="block mx-auto mb-6" src="../assets/log.svg" alt="" data-config-id="brand-logo">
      <h2 class="text-4xl font-heading mb-2" data-config-id="form-header">Sign Up</h2>
      <p class="leading-8 mb-6" data-config-id="desc1">Please enter your details to proceed.</p>
      <form class="text-left">
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input1">Firstname</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" placeholder="Your username" v-model="firstname">
        </label>
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input1">Lastname</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" placeholder="Your username" v-model="lastname">
        </label>
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input1">Username</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="text" placeholder="Your username" v-model="username">
        </label>
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input1">Email</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="email" placeholder="Your email address" v-model="email" required autofocus/>
        </label>
        <label class="block mb-6">
          <span class="text-sm" data-config-id="input2">Password</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="password" placeholder="Your password" v-model="password" required />
        </label>
         <label class="block mb-6" v-show="error">
          <span class="text-sm" data-config-id="input2">{{this.errorMsg}}</span>
          <input class="mt-2 w-full py-3 px-4 border border-gray-200 outline-none" type="password" placeholder="Confirm password">
        </label>
        <label class="flex items-start mb-6">
          <input class="mr-3" type="checkbox" name="terms" value="1">
          <span class="text-xs">
            <span data-config-id="form-legal">By signing up, you agree to our</span>
            <a class="text-blue-500 hover:underline" href="#" data-config-id="form-legal-links">Terms, Data Policy, and Cookies Policy.</a> 
          </span>
        </label>
       <button class="flex mb-6 items-center justify-center px-6 py-3 w-full text-center text-black font-bold border border-gray-200 hover:border-gray-300" @click.prevent="register">
          <!-- <img class="mr-3" src="../assets/google.svg" alt="" data-config-id="auto-img-1">
          <span data-config-id="secondary-action">Sign Up with Google</span> -->
          signup with google
        </button>
        <p class="text-xs text-center">
          <span data-config-id="extra">Already have have an account?</span>
          <router-link class="text-blue-500 hover:underline" to="/login" data-config-id="extra-action" >Sign In</router-link>
        </p>
      </form>
        
    </div>
  </div>
 </section>
</template>

<script>
import "firebase/auth";
import {db,auth }from "../firebase/config"

export default{
  // components:{
  //   username,
  //   email,
  //   password

  // },
  data(){
    
    return{
      firstname:"",
      lastname:"",
      username:"",
      email:"",
      password:"",
      error:null,
      errorMsg:""
    }
  },
  methods: {
    async register(){
      if (this.firstname !== ""&&
          this.lastname !== ""&&
        this.username !== ""&&
        this.email !== ""&&
        this.password !== ""
      ){
        this.error = false;
        this.errorMsg="";
        const firebaseAuth = await auth.createUserWithEmailAndPassword(this.email,this.password);
        const res = await firebaseAuth;
        const dbs = db.collection("users").doc(res.user.uid);
        await dbs.set({
          username:this.username,
          email:this.email,
          password:this.password,
          firstname:this.firstname,
          lastname:this.lastname,
        })
        this.$router.push({name:"Home"});

        return;
      }
      this.error = true;
      this.errorMsg = "Please fill in all fields to register";
      return;

    }
  },
}
</script>



