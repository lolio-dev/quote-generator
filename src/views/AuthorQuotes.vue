<template>
  <div class="AuthorQuotes">
    <RandomQuoteButton />
    <div class="quote-container" v-if="quotes">
      <h1 class="author-quote__title">{{ author }}</h1>

      <div class="author-quote__container quote-container">
        <div v-for="quote in quotes" :key="quote.id">
          <QuoteContent :quote-text="quote.text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, onMounted, ref} from 'vue';
import useApi from "@/composables/useApi";
import Quote from "@/types/Quote";
import QuoteContent from "@/components/QuoteContent.vue";
import RandomQuoteButton from "@/components/RandomQuoteButton.vue";

export default defineComponent({
  name: 'AuthorQuotes',
  components: {RandomQuoteButton, QuoteContent},
  props: {
    author: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const { getRandomsQuotesFromAuthor } = useApi()
    const quotes = ref<Quote[]>()

    const loadQuotes = async () => {
      quotes.value = await getRandomsQuotesFromAuthor(3, props.author)
    }

    onMounted(() => loadQuotes())

    return { quotes }
  }
});
</script>

<style scoped>

</style>