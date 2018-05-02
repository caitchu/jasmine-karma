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
	var userList = [
		{
			id: '1',
			name: 'Jane',
			role: 'Designer',
			location: 'New York', 
			twitter: 'gijane'
		},
		{
			id: '2',
			name: 'Bob',
			role: 'Developer',
			location: 'New York', 
			twitter: 'billybob'
		},
		{
			id: '3',
			name: 'Jim',
			role: 'Developer',
			location: 'Chicago', 
			twitter: 'jimbo'
		},
		{
			id: '4',
			name: 'Bill',
			role: 'Designer',
			location: 'LA', 
			twitter: 'dabill'
		}
	]
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

	// Set of tests for Users.all().method 
	describe('.all()', function(){
		// A simple test to verify the method all exists 
		it('should exist', function(){
			expect(Users.all).toBeDefined();
		})

		// A test to verify that calling all() returns the array of users from above
		it ('should return a hard-coded list of users', function(){
			expect(Users.all()).toEqual(userList);
		})
	})

	describe('.findById()', function(){
		it('should exist', function(){
			expect(Users.findById).toBeDefined();
		})
	})
})
