import { GET_STYLES } from './stylesConsts'
import axios from 'axios';

const SERVER = 'http://localhost:4002/themes';

export const getStyles = () => async dispatch => {

	try {
		const res = await axios.get(`${SERVER}`);
		dispatch ({
			type: GET_STYLES,
			payload: res.data
		})
	} catch(error) {
		console.log('GET_STYLES', error);
	}

}