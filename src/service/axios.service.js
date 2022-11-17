import axios from "axios";
import {baseURL, addURL} from "../constants";

const axiosService = axios.create({
    baseURL
});

const getAllCharacters = axiosService.get(addURL.character)
const getAllEpisodes = axiosService.get(addURL.episode)
const getAllLocations = axiosService.get(addURL.location)

export {
    axiosService,
    getAllCharacters,
    getAllEpisodes,
    getAllLocations
}