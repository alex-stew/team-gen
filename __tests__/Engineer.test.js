const Engineer = require("../lib/Engineer");

// setting
test('Can set github through constructor arg', () => {
    const testVal = "github";
    const a = new Engineer("FOO", 1, "test@test.com", testVal);
    expect(a.github).toBe(testVal);
})

// getting
test('Can get github through getGithub()', () => {
    const testVal = "test@test.com";
    const a = new Engineer("FOO", 1, "test@test.com", testVal);
    expect(a.getGithub()).toBe(testVal);
})

test('\"Engineer\" returned through getRole()', () => {
    const testVal = "Engineer";
    const a = new Engineer("FOO", 1, "test@test.com", "gitHubName");
    expect(a.getRole()).toBe(testVal);
})