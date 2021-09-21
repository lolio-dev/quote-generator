<template>
  <div class="RandomQuoteBtn">
    <button @click="handleClick">
      <span class="btn-text">Random</span>
      <span class="material-icons-outlined btn-icon">loop</span>
    </button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: 'RandomQuoteButton',
  setup(props, context) {
    const router = useRouter()
    const route = useRoute()

    const handleClick = () => {
      if ( route.name === 'Home' ) {
        context.emit('handleGetQuote')
      } else if (route.name === 'AuthorQuotes') {
        router.push({
          name: 'Home'
        })
      }
    }

    return { handleClick }
  }
});
</script>

<style scoped>

</style>