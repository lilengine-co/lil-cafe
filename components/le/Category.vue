<template>
  <div class="card-block">
    <ul class="py-4 grid lg:grid-cols-2 lg:gap-6 lg:gap-x-32">
      <li v-for="item in items" :key="item.id">
        <NuxtLink class="grid grid-cols-2 py-2 place-items-stretch hover:text-yellow-700 text-xl" :to="'/product/' + item.id" event="">
          <span class="text-left">
            {{ item.itemData.name }}
          </span>
          <template v-for="variation in item.itemData.variations">
            <span v-if="variation.itemVariationData.priceMoney" class="text-right opacity-70">
              ${{ variation.itemVariationData.priceMoney.amount }}
            </span>
          </template>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>