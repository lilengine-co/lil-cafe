<template>
  <div class="fixed z-30 inset-0 overflow-y-auto" v-if="visible">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white bg-center bg-cover bg-no-repeat rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" style="background-image: url(/images/plumb.jpeg)">
          <div class="bg-gray-800 bg-opacity-80 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h2 class="text-3xl font-bold leading-6 font-medium text-white" id="modal-title">
                  WE ARE OPEN!
                </h2>
                <div class="mt-2">
                  <p class="text-white text-lg">
                    Our full menu is avaiable Monday through <span class="font-bold">Friday from 8:00am-2:00pm</span> for takeaway. <br>
                    Order online for curbside pickup and we will be opening for dine-ins from <span class="font-bold">Friday 15th of October</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-900 bg-opacity-90 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <a @click="close()" href="https://online-ordering.plumbtennant.com.au" target="_blank" class="w-full inline-flex justify-center text-center rounded-md border border-transparent shadow-sm px-4 py-2 button sm:ml-3 sm:w-auto sm:text-sm">
              Order now
            </a>
            <button @click="close()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 button button--gray sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
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