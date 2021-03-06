# timespan-nodejs
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TimeSpan</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description`


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

<!-- USAGE EXAMPLES -->
## Usage

Copy this file to project dir. Or subfolder. There is no npm package to install. 
First import Timespan.
```javascript
const TimeSpan = require('./timespan');
```
Then reference the Timespan. Every methods returns the class itself. So you can chain mathods.
```javascript
const timespan = new TimeSpan();
```
Constructor gets a boolean parameter to define if it will work or not. Passing the parameter false, TimeSpan only allocates private properties and doesn't work. When TimeSpan referenced, time starts to count. If you want to start time in place use:
```javascript
timespan.setStart();
```
To record laps use: ```timspan.lap()``` This will reset the timer and adds the current elapsed time to laps. You can use ```getLaps()```or ```logLaps()``` ind this state.
```javascript
timespan.lap();
```
To stop the counter simply use ```stop()``` method. This will stop the timer and add laps data to log. If you continue using this. Every laps will be stored ing log.

Example usage:
```node
const TimeSpan = require('./timespan');

const timespan = new TimeSpan();

//USING FOR ONCE
timespan.setStart() //reset the start time
SomeLongOperation()
timespan.stop().logLaps().reset() // Sample Output: [ "8.102 s" ]

//CONTINUOUS USE
timespan.setStart() //reset the start time
SomeLongOperation()
timespan.lap()
SomeOtherLongOperation()
timespan.lap()
SomeOtherLongOperation()
timespan.stop().logLaps() // Sample Output: [ '0.117 s', '5.007 s', '8.146 s' ]

SomeOtherOperation()

timespan.setStart()
SomeOtherLongOperation()
timespan.lap()
SomeOtherLongOperation()
timespan.stop().logLog().reset() 
// Sample Output: [ [ '0.117 s', '5.007 s', '8.146 s' ], [ '5.007 s', '8.146 s' ] ]
// OR
timespan.stop().getLog(console.log).reset() //Or don't reset and go on...
// Sample Output: [ [ '0.117 s', '5.007 s', '8.146 s' ], [ '5.007 s', '8.146 s' ] ]

```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mstytn/timespan-nodejs/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

-->

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

<!-- Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email -->

Project Link: [https://github.com/mstytn/timespan-nodejs](https://github.com/mstytn/timespan-nodejs)



<!-- ACKNOWLEDGEMENTS
## Acknowledgements

* []()
* []()
* []()
-->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mstytn/timespan-nodejs.svg?style=for-the-badge
[contributors-url]: https://github.com/mstytn/timespan-nodejs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mstytn/timespan-nodejs.svg?style=for-the-badge
[forks-url]: https://github.com/mstytn/timespan-nodejs/network/members
[stars-shield]: https://img.shields.io/github/stars/mstytn/timespan-nodejs.svg?style=for-the-badge
[stars-url]: https://github.com/mstytn/timespan-nodejs/stargazers
[issues-shield]: https://img.shields.io/github/issues/mstytn/timespan-nodejs.svg?style=for-the-badge
[issues-url]: https://github.com/mstytn/timespan-nodejs/issues
[license-shield]: https://img.shields.io/github/license/mstytn/timespan-nodejs.svg?style=for-the-badge
[license-url]: https://github.com/mstytn/timespan-nodejs/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username



