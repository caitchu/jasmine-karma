// 'Test suite' - Jasmine term for a grouping of tests 
// Jasmine's global describe function: takes two params (a string + function)
// String serves as a title, function that implements the tests
describe('Users factory', function(){
	// Adding specs here
	it('has a dummy spec to test 2 + 2', function(){
		expect(2 + 2).toEqual(4); // expect is an 'actual', chained to a 'Matcher' function toEqual()
							 // expected output of the code being tested 
	})
});