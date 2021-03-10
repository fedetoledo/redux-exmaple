// import settings from "../settings"

const baseUrl = 'https://api.pokemontcg.io/v1/cards?setCode=hgss1';
export const get = () => fetch(baseUrl)
    .then(res => res.json())
    .then(res => {
        return res;
    })
    .catch(error => console.log(error));

