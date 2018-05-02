(function(){
	'use strict';

	// Creating the module and factory we referenced int he beforeEach blocks in our test file
	angular.module('api.users', [])
	.factory('Users', function(){
		var Users = {};

		// Defining all to make our test pass
		Users.all = function(){
			return userList;
		}
		return Users;
	})
})();