<template>
  <div class="home">
    <RandomQuoteButton @handleGetQuote="loadQuote"/>
    <div class="quote-container" v-if="quote">
      <QuoteContent class="single-quote" :quote-text="quote?.text" />
      <QuoteDetails :quote-autor="quote?.author" :quote-genre="quote?.genre"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import useApi from "@/composables/useApi";
import Quote from "@/types/Quote";

import QuoteDetails from "@/components/QuoteDetails.vue";
import QuoteContent from "@/components/QuoteContent.vue";
import RandomQuoteButton from "@/components/RandomQuoteButton.vue";

export default defineComponent({
  name: 'Home',
  components: {RandomQuoteButton, QuoteContent, QuoteDetails },
  setup() {
    const { getRandomQuote } = useApi()
    const quote = ref<Quote>()

    const loadQuote = async () => {
      quote.value = await getRandomQuote()
    }

    onMounted(() => loadQuote())

    return { quote, loadQuote }
  }
});
</script>
