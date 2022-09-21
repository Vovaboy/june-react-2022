import {axiosService} from "./axios.servis";

import {urls} from "../configs";

const carService = {
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars, car),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    updateById:(id, car)=>axiosService.put(`${urls.cars}/${id}`, car),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
}

export {
    carService
}