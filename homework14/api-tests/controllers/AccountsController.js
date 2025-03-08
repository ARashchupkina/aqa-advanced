const BaseController = require(`./BaseController`);
const usersList = require('../test-data/users');

class AccountsController extends BaseController {
	async getAuthToken(
		userName = usersList.mainUser.userName,
		userPassword = usersList.mainUser.password,
	) {
		const response = await this.axiosInstance.post(
			`/Account/v1/GenerateToken`,
			{
				userName: userName,
				password: userPassword,
			},
		);
		return response.data.token;
	}

	async getUserId(
		userName = usersList.mainUser.userName,
		userPassword = usersList.mainUser.password,
	) {
		const response = await this.axiosInstance.post(`/Account/v1/Login`, {
			userName: userName,
			password: userPassword,
		});
		return response.data.userId;
	}

	async createNewUser(userName, userPassword) {
		return this.axiosInstance.post(`/Account/v1/User`, {
			userName: userName,
			password: userPassword,
		});
	}
}

module.exports = new AccountsController();
