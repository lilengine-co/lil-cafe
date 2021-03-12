<template>
  <div class="container mx-auto">
    <div class="block-space">
      <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li class="card__item" v-for="item in menus" :key="item.id">
          <le-card :card="item"/>
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
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  data: () => (
    {
      menus: [
        {
          cover: '/images/le-cafe.jpg',
          heading: 'Order a coffee',
          link: {
            uri: 'https://lil-cafe.square.site/?location=11eb7c15bf5521048122ac1f6bbba82c#2'
          }
        },
        {
          cover: '/images/le-pickup.jpg',
          heading: 'Takeaway',
          link: {
            uri: 'https://lil-cafe.square.site/?location=11eb7c15bf5521048122ac1f6bbba82c#5'
          }
        },
        {
          cover: '/images/le-drink.jpg',
          heading: 'Dine in',
          link: {
            uri: '/dinein'
          }
        },
        {
          cover: '/images/le-drink.jpg',
          heading: 'Catering',
          link: {
            uri: '/catering'
          }
        },
        {
          cover: '/images/le-venue.jpg',
          heading: 'Venue',
          link: {
            uri: '/coming'
          }
        },
        {
          cover: '/images/le-pantry.jpg',
          heading: 'Pantry',
          link: {
            uri: '/coming'
          }
        },
      ],
    }
  ),
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>