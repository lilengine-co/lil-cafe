<template>
  <div class="container mx-auto">
    <div class="text-container">
     <p><b>Plumb is serving fresh, wholesome, tasty food for breakfast and lunch 7 days. We are a licensed cafe that offers a variety of vegan and gluten-free options. Explore our full menu and order online. Or come and join us for a flavourful ride!</b></p>
    </div>
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
          uri: "/files/WINTER-MENU-23.pdf"
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
        cover: "/images/food-gallery.jpeg",
        heading: "Plumb's Food Gallery",
        link: {
          uri:
            "https://www.onlineorderingplumbtennant.com.au/gallery"
        }
      },
      {
        cover: "/images/catering.png",
        heading: "Catering",
        link: {
          uri:
            "/files/Plumb_catering_2023.pdf"
        }
      },
      {
        cover: "/images/retail-store.jpeg",
        heading: "Our Retail Store",
        link: {
          uri:
            "https://www.onlineorderingplumbtennant.com.au/retail-store"
        }
      },
      {
        cover: "/images/BBQ.jpeg",
        heading: "Book your BBQ Classes now",
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
.text-container{
  color: #003660;
  text-align: center;
}
</style>
