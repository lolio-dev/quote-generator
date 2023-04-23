import Quote from "../types/Quote";
import useFetch from "./useFetch";

const useApi = () => {

    const getRandomQuote = async () : Promise<Quote>=> {
        const data = await useFetch('https://quote-garden.onrender.com/api/v3/quotes/random');

        const text = data[0]['quoteText']
        const author = data[0]['quoteAuthor']
        const genre = data[0]['quoteGenre']

        return { text: text, author: author, genre: genre}
    }

    const getRandomsQuotesFromAuthor = async (count: number, author: string) : Promise<Array<Quote>> => {
        const url = `https://quote-garden.onrender.com/api/v3/quotes/random?author=${author}&count=${count}`
        const data = await useFetch(url)

        return data.map((quote: any) => {
            return { text: quote.quoteText, author: quote.quoteAutor, genre: quote.quoteGenre, id: quote._id }
        })
    }

    return { getRandomQuote, getRandomsQuotesFromAuthor }
}

export default useApi
