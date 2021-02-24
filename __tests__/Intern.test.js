const Intern = require("../lib/Intern");

// setting
test('Can set school through constructor arg', () => {
    const testVal = "Trilogy";
    const a = new Intern("FOO", 1, "test@test.com", testVal);
    expect(a.school).toBe(testVal);
})

// getting
test('Can get school through getSchool()', () => {
    const testVal = "Trilogy";
    const a = new Intern("FOO", 1, "test@test.com", testVal);
    expect(a.getSchool()).toBe(testVal);
})

test('\"Intern\" returned through getRole()', () => {
    const testVal = "Intern";
    const a = new Intern("FOO", 1, "test@test.com", "Trilogy");
    expect(a.getRole()).toBe(testVal);
})