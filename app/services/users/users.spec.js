// 'Test suite' - Jasmine term for a grouping of tests 
// Jasmine's global describe function: takes two params (a string + function)
// String serves as a title, function that implements the tests
// describe('Users factory', function(){
// 	// Adding specs here
// 	it('has a dummy spec to test 2 + 2', function(){
// 		expect(2 + 2).toEqual(4); // expect is an 'actual', chained to a 'Matcher' function toEqual()
// 							 // expected output of the code being tested 
// 	})
// });
describe('Users factory', function(){
	var Users;
	// Before each test, load our api.users module 
	beforeEach(angular.mock.module('api.users'));

	// Before each test, set our injected Users factory(_Users) to our local Users variable
	beforeEach(inject(function(_Users_){
		Users = _Users_;
	}));

	// A simple test to verify the Users factory exists
	it('should exist', function(){
		expect(Users).toBeDefined();
	})

	// Summary: Before each of my tests, load the module api.users and then inject the Users service(wrapped with underscores) and set it to the Users variable I defined locally
})
