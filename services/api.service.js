import axios from 'axios';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';

const getWeather = async city => {
	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error('No API key found, set it via -t [API_KEY]');
	}
	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: { q: city, appid: token, lang: 'ru', units: 'metric' }
	});

	return data;
};

export { getWeather };