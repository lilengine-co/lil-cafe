<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="container mx-auto">
    <nav class="flex items-center md:p-3 flex-wrap">
      <NuxtLink to="/" class="p-2 mr-4 inline-flex items-center">
        <img
          class="h-14 md:h-24 w-auto mr-2 logo"
          src="/logo.svg"
          alt="LilEngine website"
        />
      </NuxtLink>
      <DruxtMenu
        name="cafe-menu"
        class="inline-flex lg:flex-grow top-navbar ml-auto relative lg:w-auto"
      />
      <!-- <a href="https://square.site/book/LCAKHXCCVB9CG/plumb-on-tennant-fyshwick-act" target="_blank" class="button p-2 inline-flex items-center" title="Booking a table" style="margin: 0; margin-left: 10px;">
        <font-awesome-icon icon="calendar-alt" style="font-size: 15px" />
        <span>Booking</span>
      </a>-->
      <NuxtLink
        to="/booking"
        class="button p-2 inline-flex items-center"
        title="Booking a table"
        style="margin: 0; margin-left: 10px;"
      >
        <font-awesome-icon icon="calendar-alt" style="font-size: 15px" />
        <span>Booking</span>
      </NuxtLink>
    </nav>
  </div>
</template>
<style lang="scss">
.logo {
  transform: scale(1.5);
}
* {
  box-sizing: border-box;
}
</style>
