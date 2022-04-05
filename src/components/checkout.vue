<template>
    <section class="pt-12 pb-24 bg-blueGray-100">
  <div class="container px-4 mx-auto">
    <ul class="flex flex-wrap items-center mb-10 xl:mb-0">
      <li class="mr-6">
        <a class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
          <span>Home</span>
          <svg class="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
          </svg>
        </a>
      </li>
      <li class="mr-6">
        <a class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
          <span>Properties</span>
          <svg class="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
          </svg>
        </a>
      </li>
      <li><a class="text-sm font-medium text-dark2 hover:text-dark2" href="#">Complete Payments</a></li>
    </ul>
    <div class="mb-12 pb-8 border-b border-gray-200 border-opacity-40">
      <h1 class="text-center text-6xl xl:text-6xl font-heading font-medium">Checkout </h1>
    </div>
    <div class="py-2 mb-14 xl:mb-20 bg-white rounded-3xl">
      <button class="block w-full py-10 border-b border-gray-200 border-opacity-40">
        <div class="flex px-6 md:px-20 lg:px-40 items-center text-left">
          <img class="mr-3 md:mr-10" src="uinel-assets/images/ecommerce-cart/number1.svg" alt="">
          <h2 class="text-xl font-heading font-medium">General information</h2>
          <svg class="ml-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white" stroke="#4560FF"></rect>
            <path d="M13.4534 22L8 16.6758L8.72022 15.9726L13.4534 20.5937L23.2798 11L24 11.7032L13.4534 22Z" fill="#136EFC"></path>
          </svg>
        </div>
      </button>     
      <div class="py-10 px-6 md:px-20 lg:px-40">
        <div class="flex items-center mb-12">
          <img class="mr-3 md:mr-10" src="uinel-assets/images/ecommerce-cart/number3.svg" alt="">
          <h2 class="text-xl font-heading font-medium">Payment</h2>
        </div>
        <div class="max-w-xl mx-auto">
          <div class="mb-12">            
          </div>
          <div class="flex flex-wrap mb-6 items-center">
            <div class="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
              <label class="text-lg text-darkBlueGray-400">Name on card:</label>
            </div>
            <div class="w-full md:w-2/3">
              <input class="w-full px-6 py-4 leading-7 bg-white border-2 border-dark2 rounded-3xl outline-none" type="text" v-model="cardHolder">
            </div>
          </div>
          <div class="flex flex-wrap mb-6 items-center">
            <div class="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
              <label class="text-lg text-darkBlueGray-400">Credit card number:</label>
            </div>
            <div class="w-full md:w-2/3">
              <input class="w-full px-6 py-4 leading-7 bg-white border-2 border-dark2 rounded-3xl outline-none" type="text" v-model="cardNumber">
            </div>
          </div>
          <div class="flex flex-wrap mb-6 items-center">
            <div class="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
              <label class="text-lg text-darkBlueGray-400">Expiration:</label>
            </div>
            <div class="w-full md:w-2/3">
              <input class="w-full px-6 py-4 leading-7 bg-white border-2 border-dark2 rounded-3xl outline-none" type="text" v-model="expiration">
            </div>
          </div>
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
              <label class="text-lg text-darkBlueGray-400">CVV:</label>
            </div>
            <div class="w-full md:w-2/3">
              <div class="md:w-36">
                <input class="w-full px-6 py-4 leading-7 bg-white border-2 border-dark2 rounded-3xl outline-none" type="text" v-model="cvv">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex xl:items-center">
      <div class="mb-10 xl:mb-0 lg:w-2/12 xl:w-1/12">
        <h3 class="text-xl font-heading font-medium">Totals</h3>
      </div>
      <div class="sm:flex sm:flex-wrap lg:justify-end lg:w-10/12 xl:w-11/12">
        <div class="sm:pr-3 lg:px-3 mb-6 xl:mb-0 w-full sm:w-1/2 lg:w-4/12 xl:w-3/12">
          <div class="relative flex items-center justify-between py-4 px-10 leading-8 bg-white bg-opacity-50 font-medium rounded-3xl">
            <div class="absolute left-3 flex justify-center items-center w-20 h-20 bg-white rounded-full">
              <div class="flex justify-center items-center w-11 h-11 text-xl text-white font-bold bg-dark2 rounded-full">3</div>
            </div>
            <span class="ml-16">Properties</span>
          </div>
        </div>    
        <div class="sm:pr-3 lg:px-3 mb-10 sm:mb-0 w-full sm:w-1/2 lg:w-4/12 xl:w-3/12">
          <div class="flex items-center justify-between py-4 px-10 leading-8 bg-white font-heading font-medium rounded-3xl">
            <span>Total</span>
            <span class="flex items-center text-dark2">
              <span class="mr-3 text-sm">$</span>
              <span class="text-xl">720,70</span>
            </span>
          </div>
        </div>
        <div class="sm:pl-3 w-full sm:w-1/2 lg:max-w-max lg:ml-auto xl:ml-0"><a class="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center text-white bg-dark2  focus:ring-2 focus:ring-opacity-50 rounded-xl">Checkout</a></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default{
    
}
</script>
