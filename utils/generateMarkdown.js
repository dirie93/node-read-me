// Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      "Apache-2.0":
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      Boost:
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      Unlicense:
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    };

    return badges[license] || "";
  }
  return "";
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const sections = {
      "Apache-2.0":
        "This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).",
      Boost:
        "This project is licensed under the [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt).",
      MIT: "This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).",
      Unlicense:
        "This project is released under the [Unlicense](http://unlicense.org/) and is free and open-source software with no restrictions.",
    };

    return sections[license] || "";
  }
  return "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

## License

${licenseSection}

For more information about the license, please refer to the corresponding license URL.

## Contact

For any questions or inquiries, please reach out to me via the following:

GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
