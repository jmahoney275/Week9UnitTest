function square(a) {
	
	return a*a;
	
}
function multiply(a, b) {
	
	return a*b;
	
}
function add(a, b) {
	
	return a+b;
	
}
function subtract(a, b) {
	
	return a-b;
	
}
function divide(a, b) {
	
	return a/b;
	
}
test("Test01" , function(){
	
	ok(true, true);
	
});
test("TestSquare", function(){
	
var expected=25;
var actual = square(5);
equal( actual, expected);
	
});
test("TestMultiply", function () {
var expected=25;
var actual = multiply(5,5);
equal( actual, expected);
	
});


test("TestAdd", function () {
var expected=11;
var actual = add(6,5);
equal( actual, expected);
	
});
test("TestSubtract", function () {
var expected=1;
var actual = subtract(6,5);
equal( actual, expected);
	
});
test("TestDivide", function () {
var expected=4;
var actual = divide(12,3);
equal( actual, expected);
	
});
