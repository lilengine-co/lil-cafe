<template>
  <div class="container mx-auto">
     <link href="https://awards.infcdn.net/circle_v2.css" rel="stylesheet">
    <div id="circle_v2" onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.sq_center').href);return 0;}" style="margin: 0 auto;margin-bottom: 20px;"> <div class="arc-heading "> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160"> <defs> <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path> </defs> <text class="arc-heading__heading f14" fill="#000" text-anchor="middle"> <textPath startOffset="50%" xlink:href="#heading-arc">Best service</textPath> </text> </svg> </div> <div class="sq_year">2024</div> <a href="https://restaurantguru.com/Plumb-on-Tennant-Majura" class="sq_center f11" target="_blank">Plumb Cafe &amp; Eatery</a> <div class="arc-heading arc-heading__bottom"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 120 120"> <defs> <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0"></path> </defs> <text class="arc-heading__subheading" fill="#000" text-anchor="middle"> <textPath startOffset="50%" xlink:href="#subheading-arc"><a href="https://restaurantguru.com" target="_blank">Restaurant Guru</a></textPath> </text> </svg> </div></div>
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
          uri: "/files/Menu2024.pdf"
        }
      },
      {
        cover: "/images/Grab&go.jpg",
        heading: "Takeaway Menu",
        link: {
          uri: "/files/Menu2024.pdf"
        }
      },
       {
        cover: "/images/Grab.jpg",
        heading: "Grab & Go",
        link: {
          uri: "/files/Grab&Go.pdf"
        }
      },
      {
        cover: "/images/Roll.jpeg",
        heading: "Bacon & Egg Roll with Coffee",
        link: {
          uri: "/files/B&E-ROLL.pdf"
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
        cover: "/images/catering.png",
        heading: "Catering",
        link: {
          uri:
            "/files/Plumb_catering_2023.pdf"
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
