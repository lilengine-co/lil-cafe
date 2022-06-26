<template>
  <div class="container mx-auto">
    <link href="https://awards.infcdn.net/rect2_n.css" rel="stylesheet"/><div id="rest_rect2" onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.rect_top_title').href);return 0;}"> <a href="https://restaurantguru.com/Plumb-on-Tennant-Majura" class="rect_top_title" target="_blank">Plumb on Tennant</a> <div class="rect_cont"> <div> <div class="rect_star" style="background: url('https://awards.infcdn.net/img/star_white.svg') no-repeat center">&nbsp;</div> <span>Best service</span> </div> </div> <a href="https://restaurantguru.com" target="_blank" class="rect_bot">Restaurant Guru 2022</a></div>
    <div class="text-container">
     <p><b>Please book by calling us on <a href="tel:0456567248" class="font-light hover:text-yellow-500">0456 567 248</a>. Walk-ins welcome</b></p>
     <p><b>Plumb is serving fresh, wholesome, and tasty food for breakfast and lunch, 7 days a week. We are a fully licensed cafe, and our menu offers a variety of gluten-free and vegan friendly options. Explore our full menu below, and book a table for dine in, or order online for pick up at the cafe. Come and join us for a flavourful ride!</b></p>
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
          uri: "/files/Winter-menu-plumb.pdf"
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
.text-container{
  color: #003660;
  text-align: center;
}
</style>
