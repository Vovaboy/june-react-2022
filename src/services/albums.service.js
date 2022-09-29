import {axiosService} from "react";
import {urls} from "../config/urls";

const albumsService ={
    getAll: () => axiosService.get(urls.album)
}

export {
    albumsService
}