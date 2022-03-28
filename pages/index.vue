<template>
  <div class="container mx-auto">
    <div class="block-space">
      <ul
        class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <li class="card__item" v-for="item in menus" :key="item.id">
          <le-card :card="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Plumb café",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    };
  },
  data: () => ({
    menus: [
      {
        cover: "/images/Dining.jpeg",
        heading: "All Day Dining",
        link: {
          uri: "/files/Plumb-menu-weekday.pdf"
        }
      },
      {
        cover: "/images/le-pickup.jpg",
        heading: "Online Ordering",
        link: {
          uri:
            "https://www.onlineorderingplumbtennant.com.au/"
        }
      },
      {
        cover: "/images/BBQ.jpeg",
        heading: "BBQ School will soon be at Plumb",
        link: {
          uri: "https://www.bbqschool.com.au/pages/bbq-classes-canberra-1"
        }
      }
    ]
  })
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
