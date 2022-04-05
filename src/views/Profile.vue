<template>
  <section class="py-10 lg:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-xl mx-auto">

        <div class="p-6 lg:p-12 mb-6 bg-white shadow rounded">
          <div class="mb-6 text-center">
            <h3 class="text-2xl font-bold">Update Profile</h3>
<!--          //  <h3 class="text-2xl font-bold">{{$store.state.profileInitials}}</h3>-->
          </div>
          <div class="text-center">
            <button class="mb-4 w-1/4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">Admin</button>
          </div>
          <form action="">
            <div class="flex flex-wrap -mx-2">
              <div class="mb-3 w-full lg:w-1/2 px-2">
                <input class="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="First Name" v-model="firstname">
              </div>
              <div class="mb-3 w-full lg:w-1/2 px-2">
                <input class="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Last Name" v-model="lastname">
              </div>
            </div>
            <div class="mb-3 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="username" v-model="username">

            </div>
            <div class="mb-3 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" v-model="email">
              <svg class="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
              </svg>
            </div>

            <div class="text-center">
              <button class="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200" @click.prevent="updateProfile">Save Changes</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Profile",
  methods: {
    updateProfile(){
      this.$store.dispatch("updateUserSettings");

    }
  },

  computed: {
    firstname: {
      get() {
        return this.$store.state.firstname;
      },
      set(payload){
        this.$store.commit("changeFirstname",payload);
      }
    },
    lastname: {
        get() {
          return this.$store.state.lastname;
        },
      set(payload){
        this.$store.commit("changeLastname",payload);
      }
    },
    username: {
      get() {
        return this.$store.state.username;
      },
      set(payload){
        this.$store.commit("changeUsername",payload);
      }
    },
    email: {
        get() {
          return this.$store.state.email;
        },
      set(payload){
          this.$store.commit("changeEmail",payload);
      }
    },



    },

  }


</script>

