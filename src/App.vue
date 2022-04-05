<template>
<div v-if="this.$store.state.postLoaded">
    <router-view />
</div>

</template>

<script>


import {auth} from "./firebase/config";

export default {
  created() {
    auth.onAuthStateChanged((user)=>{
      this.$store.commit("updateUser",user);
      if (user){
        this.$store.dispatch("getCurrentUser");
        console.log(this.$store.state.email);
      }

    });
    this.$store.dispatch("getProperties")
    this.$store.dispatch("getComments")
   
  }




}



</script>