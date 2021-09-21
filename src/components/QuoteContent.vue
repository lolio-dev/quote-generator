<template>
  <div class="QuoteContent">
    <h2 class="quote__text">"{{ quoteText }}"</h2>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import Quote from "@/types/Quote";

export default defineComponent({
  name: 'QuoteContent',
  props: {
    quoteText: {
      required: true,
      type: String as PropType<Quote['text']>
    },
  },
  setup() {

    return {}
  }
});
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
</style>