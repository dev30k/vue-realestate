<template>
<section>
  <div class="skew skew-top mr-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
    </svg>
  </div>
  <div class="skew skew-top ml-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
    </svg>
  </div>
  <div class="py-20 bg-gray-50 radius-for-skewed">
    <div class="container mx-auto px-4">
      <div class="mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold font-heading">Request a quote</h2>
           </div>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-16 lg:mb-0">
         <form action="">             
              <div class="mb-4">
                <input class="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none" type="text" placeholder="Subject">
              </div>
              <div class="mb-4">
                <input class="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none" type="text" placeholder="Name">
              </div>
              <div class="mb-4">
                <input class="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none" type="email" placeholder="name@example.com">
              </div>
              <div class="mb-4"><textarea class="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none" type="text" placeholder="Message..."></textarea></div>
            
              <div class="flex justify-between items-center">                
                <button class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-dark1 hover:bg-dark2 text-gray-50 font-bold leading-loose transition duration-200">Send</button>
              </div>
            </form>
         
        </div>
        <div class="w-full lg:w-1/2">
          <div class="max-w-md lg:mx-auto">
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="skew skew-bottom mr-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
    </svg>
  </div>
  <div class="skew skew-bottom ml-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
    </svg>
  </div>
</section>
</template>

<script>
export default{
    
}
</script>
