const Employee = require('../lib/Employee');

// testing for the setting of values
test("Can instantiate Employee", () => {
    const a = new Employee();
    expect(typeof(a)).toBe("object");
});

test('Can set name through constructor arg', () => {
    const name = "Alex";
    const a = new Employee(name);
    expect(a.name).toBe(name);
})

test('Can set id through constructor arg', () => {
    const testVal = 10;
    const a = new Employee("FOO", testVal);
    expect(a.id).toBe(testVal);
})

test('Can set email through constructor arg', () => {
    const testVal = "test@test.com";
    const a = new Employee("FOO", 1, testVal);
    expect(a.email).toBe(testVal);
})

// testing for the getting of values
test('Can get name through getName()', () => {
    const testVal = "Alex";
    const a = new Employee(testVal);
    expect(a.getName()).toBe(testVal);
})

test('Can get id through getId()', () => {
    const testVal = 10;
    const a = new Employee("FOO", testVal);
    expect(a.getId()).toBe(testVal);
})

test('Can get email through getEmail()', () => {
    const testVal = "test@test.com";
    const a = new Employee("FOO", 1, testVal);
    expect(a.getEmail()).toBe(testVal);
})

test('\"Employee\" returned through getRole()', () => {
    const testVal = "Employee";
    const a = new Employee("Alex", 1, "test@test.com");
    expect(a.getRole()).toBe(testVal);
})