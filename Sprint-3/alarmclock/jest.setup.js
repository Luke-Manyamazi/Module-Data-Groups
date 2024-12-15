require("@testing-library/jest-dom");

global.HTMLMediaElement.prototype.play = jest.fn();
