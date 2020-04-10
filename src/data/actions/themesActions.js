import { GET_THEMES } from './themesConsts'
import axios from 'axios';

const SERVER = 'http://localhost:5001/adminapp-themes';

export const getThemes = () => async dispatch => {

	try {
    const res = await axios.get(`${SERVER}`);
		dispatch ({
			type: GET_THEMES,
			payload: res.data
		})
	} catch(error) {
		console.log('GET_THEMES', error);
	}

}