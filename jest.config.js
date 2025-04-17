module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@adobe/css-tools)/)"
    ],
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
  };
  