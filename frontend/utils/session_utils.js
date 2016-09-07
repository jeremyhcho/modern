import { receiveCurrentAccount, receiveErrors } from '../actions/session_actions';

export const login = function (account, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: account,
		success,
		error
	});
};

export const signup = function (account, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/account',
		data: account,
		success,
		error
	});
};

export const logout = function (success) {
	$.ajax({
		method: 'DELETE',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};