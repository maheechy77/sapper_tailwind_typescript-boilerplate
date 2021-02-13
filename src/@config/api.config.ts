import axios from 'axios';
import { ENV } from '../@ENV';

const WatsonAxiosInstance = axios.create({
	baseURL: ENV.WATSON_END_POINT,

	// headers: {
	//   'X-Custom-Header': 'foobar'
	// },
});
export const ApiConfig = {
	WatsonAxiosInstance,
};
