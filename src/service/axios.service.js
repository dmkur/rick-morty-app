import axios from "axios";
import {baseURL, addURL} from "../constants";

const axiosService = axios.create({
    baseURL
});

const getAllCharacters = ({page}) => axiosService.get(addURL.character, {params: {page}})
const getSingleCharacter =(id) => axiosService.get(addURL.character + `/${id}`)
const getAllEpisodes = ({page}) => axiosService.get(addURL.episode, {params: {page}})
const getAllLocations = ({page}) => axiosService.get(addURL.location, {params: {page}})

export {
    getAllCharacters,
    getSingleCharacter,
    getAllEpisodes,
    getAllLocations
}