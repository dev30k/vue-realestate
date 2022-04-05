<template>
      <div class="px-4 md:px-16 pt-8 pb-4 bg-white">
                <h4 class="w-full md:w-auto text-xl font-heading font-medium">{{comment.username}}</h4>
        <div class="flex flex-wrap">
          
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">{{comment.comment}}</p>
            <div class="-mb-2">
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-dark2 font-heading font-medium">{{comment.best}}</span>
                </div>
              </div>              
            </div>
          </div>
          <!-- <div class="w-full md:w-1/3 text-right">
            <p class="mb-8 text-sm text-gray-300">kkk</p>
          </div> -->
        </div>
      </div>
</template>
<script>
export default {
  name: "comments",
  props: ["comment"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
}
</script>