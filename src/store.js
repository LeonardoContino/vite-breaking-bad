
import {reactive} from 'vue';


export const store = reactive({
    ListPokemon:[],
    apiUrl:'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=20&page=1'

})