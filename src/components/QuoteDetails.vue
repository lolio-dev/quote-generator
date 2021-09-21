<template>
  <div class="QuoteDetails" @click="redirectUserToAuthorPage">
    <div class="text">
      <h2 class="quote-author"> {{ quoteAutor }}</h2>
      <h3 class="quote-genre"> {{ quoteGenre }}</h3>
    </div>
    <div class="icon">
      <span class="material-icons-outlined arrow_icon">arrow_right_alt</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { useRouter } from "vue-router";
import Quote from "@/types/Quote";

export default defineComponent({
  name: 'QuoteDetails',
  props: {
    quoteAutor: {
      required: true,
      type: String as PropType<Quote['text']>
    },
    quoteGenre: {
      required: true,
      type: String as PropType<Quote['genre']>
    }
  },
  setup(props) {
    const router = useRouter()

    const redirectUserToAuthorPage = () => {
      router.push({
        name: 'AuthorQuotes',
        params: { author: props.quoteAutor}
      })
    }

    return { redirectUserToAuthorPage }
  }
});
</script>

<style scoped>
.QuoteDetails {
  width: 672px;
}
</style>