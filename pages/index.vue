<template>
  <div class="container mx-auto">
    <link href="https://awards.infcdn.net/rect2_n.css" rel="stylesheet"/><div id="rest_rect2" onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.rect_top_title').href);return 0;}"> <a href="https://restaurantguru.com/Plumb-on-Tennant-Majura" class="rect_top_title" target="_blank">Plumb on Tennant</a> <div class="rect_cont"> <div> <div class="rect_star" style="background: url('https://awards.infcdn.net/img/star_white.svg') no-repeat center">&nbsp;</div> <span>Best service</span> </div> </div> <a href="https://restaurantguru.com" target="_blank" class="rect_bot">Restaurant Guru 2022</a></div>
    <div class="text-container">
     <p><b>Plumb is one of the best brunch spots on <a href="https://www.dailytelegraph.com.au/newslocal/canberra/ona-coffee-redbrick-coffee-canberras[…]brunch-spots/news-story/bff2be601a9afb62ec1a235c04ffcbf6" class="font-light hover:text-yellow-500">Daily Telegraph</a>.</b></p>
     <p><b>A big thank you to the team here at Plumb Cafe. We have been working hard over the last year to deliver the best food and coffee, a cozy atmosphere, and the best service in Fyshwick.
           We’re very proud of what we have been able to accomplish, especially in the tough covid times. We look forward to you all dining with us soon!</b><br>
           Rosie, Jordan, and the Plumb Cafe Team</p>
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
