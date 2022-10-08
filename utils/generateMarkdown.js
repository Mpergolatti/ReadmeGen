// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

class markDown {

  static renderLicenseBadge(license) {
    const badge = {
      'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
      'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
      'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'Boost': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      'Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    }
    return badge[license]
  }

  static renderLicenseLink(license) {
    const licenseLink = {
      'GNU AGPLv3': '[GNUAPGLv3](https://www.gnu.org/licenses/agpl-3.0)',
      'GNU GPLv3': '[GNUGPLv3](https://www.gnu.org/licenses/gpl-3.0)',
      'GNU LGPLv3': '[GNULGPLv3](https://www.gnu.org/licenses/lgpl-3.0)',
      'Mozilla': '[MOZILLA](https://opensource.org/licenses/MPL-2.0)',
      'MIT': '[MIT](https://opensource.org/licenses/MIT)',
      'Apache': '[APACHE](https://opensource.org/licenses/Apache-2.0)',
      'Boost': '[BOOST](https://www.boost.org/LICENSE_1_0.txt)',
      'Unlicense': '[UNLICENSE](http://unlicense.org/)'
    }
    return licenseLink[license]
  }

  static renderLicenseSection(license) {
    if(license){
      return `Licensed under the ${this.renderLicenseLink(license)} license.`
    } else {
      return ''
    }
  }

  static generateReadMe(data) {
    return `
    
# ${data.title}

${this.renderLicenseBadge(data.license)}

## Contents
  1. [About](#about)
      1. [User Story](#user%20story)
      2. [Acceptance criteria](#acceptance%20criteria)
      3. [Visuals](#visuals)
      4. [Build](#build)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
---
## About
 ### ${data.description}
---
## Usage Info
  ### ${data.usage}
---
## Installation:
  Click the link below to go to the repository and clone the project

  To clone the repo:
  
      git clone ${data.clone}
  
---
## License
  License used for this project - ${data.license}

  License: ${this.renderLicenseSection(data.license)}

  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---
## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.

  Additional info below
  ${data.contribution}
---
## Tests:
  ${data.test}
  
---
## Questions and Comments:
* GitHub Username: ${data.github}
* GitHub Email: ${data.email}

`
  }
}

module.exports = markDown