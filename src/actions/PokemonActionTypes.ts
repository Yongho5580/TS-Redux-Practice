export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";

export type PokemonAbilty = {
        ability: {
        name: string,
        url: string
        },
        is_hidden: boolean,
        slot: number
}

export interface pokemonFailDispatch {
    type: typeof POKEMON_FAIL
}

export interface pokemonSuccessDispatch {
    type: typeof POKEMON_SUCCESS
    payload: {
        
    }
}
