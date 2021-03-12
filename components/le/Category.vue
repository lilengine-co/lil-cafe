<template>
  <div class="card-block max-w-screen-md mx-auto">
    <ul class="py-4">
      <li v-for="item in items" :key="item.id">
        <a class="grid grid-cols-2 py-2 place-items-stretch hover:text-yellow-700 text-xl" :href="'https://checkout.square.site/buy/' + item.id" target="_blank">
          <span class="text-left">
            {{ item.itemData.name }}
          </span>
          <template v-for="variation in item.itemData.variations">
            <span v-if="variation.itemVariationData.priceMoney" class="text-right opacity-70">
              {{ currencyFormat(variation.itemVariationData.priceMoney.amount) }}
            </span>
          </template>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    currencyFormat(value) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });
      return formatter.format(value/100);
    }
  }

}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>