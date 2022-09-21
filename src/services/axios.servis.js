import axios from "axios";

import {baseURl} from "../configs";

const axiosServis = axios.create({baseURL});

export {
    axiosServis
}