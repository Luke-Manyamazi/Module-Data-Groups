const parseQueryString = require("../parse-query-string");

test("given a query string with no query parameters, returns an empty object", () => {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};

    expect(currentOutput).toEqual(targetOutput);
})