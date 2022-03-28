<template>
  <div class="fixed z-30 inset-0 overflow-y-auto" v-if="visible">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white bg-center bg-cover bg-no-repeat rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-3xl sm:w-full" style="background-image: url(/images/plumb.jpeg)">
          <div class="bg-gray-800 bg-opacity-80 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h2 class="text-3xl font-bold leading-6 font-medium text-white mb-3" id="modal-title">
                  WE ARE OPEN!
                </h2>
                <div class="mt-2">
                  <p class="text-white text-lg mb-1">
                    Our full menu is available Monday through Friday from <span class="font-bold"> 7:00am-3:00pm</span>, Saturday and Sunday <span class="font-bold"> 8:00am-2:00pm</span>.
                  </p>
                  <p class="text-white text-lg">
                    We are open for takeaway and dine-in service.
                  </p>
                  <p class="text-white text-lg mb-1">
                    BBQ School will soon be at plumb offering classes. To explore more and book your classes, Contact BBQ School <a href="https://www.bbqschool.com.au/pages/bbq-classes-canberra-1" class="text-yellow-600">here</a>.</p>
                  <p class="text-white text-lg mt-2">
                    Book with us on <a class="text-yellow-600 font-bold"  href="tel:0456567248">0456 567 248</a> or via <a class="text-blue-600"  href="https://www.plumbtennant.com.au/booking">Online Ordering</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-900 bg-opacity-90 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <a @click="close()" href="https://www.onlineorderingplumbtennant.com.au/" target="_blank" class="w-full inline-flex justify-center text-center rounded-md border border-transparent shadow-sm px-4 py-2 button sm:ml-3 sm:w-auto sm:text-sm">
              Order now
            </a>
            <button @click="close()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 button button--gray sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['images'],
    data() {
      return {
        visible: false
      }
    },
    mounted () {
      this.show();
    },
    methods: {
      show() {
        if (!localStorage.getItem('isModalVisible')) {
          this.visible = true;
        }
      },
      close() {
        let expires = new Date();
        expires = expires.setHours(expires.getHours() + 24);

        localStorage.setItem('isModalVisible', expires);
        this.visible = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>
