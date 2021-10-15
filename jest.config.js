const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  }
};
