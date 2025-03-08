const axios = require('axios');

class BaseController {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://bookstore.toolsqa.com',
			validateStatus: function (status) {
				return true;
			},
		});
	}
}
module.exports = BaseController;
