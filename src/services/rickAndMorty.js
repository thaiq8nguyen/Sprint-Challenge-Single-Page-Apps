import axios from "axios";

const client = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

export default {
    getAllCharacters() {
        return client.get("/character");
    },
    getAllLocations() {
        return client.get("/location");
    },
    getAllEpisodes() {
        return client.get("/episode");
    },
    getCharacter(characterName) {
        return client.get("/character/?name="+characterName);
    }


}