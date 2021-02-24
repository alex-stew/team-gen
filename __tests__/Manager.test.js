const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// setting
test('Can set office num through constructor arg', () => {
    const testVal = "10";
    const a = new Manager("FOO", 1, "test@test.com", testVal);
    expect(a.officeNum).toBe(testVal);
})

// getting
test('Can get office num through getOfficeNum()', () => {
    const testVal = "10";
    const a = new Manager("FOO", 1, "test@test.com", testVal);
    expect(a.getOfficeNum()).toBe(testVal);
})

test('\"Manager\" returned through getRole()', () => {
    const testVal = "Manager";
    const a = new Manager("FOO", 1, "test@test.com", 10);
    expect(a.getRole()).toBe(testVal);
})