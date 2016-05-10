# A Look At Champion Mastery
 
Entry for the 3rd Riot Games API Challenge.
 
Check out the website here: [A Look At Champion Mastery](www.championmastery.herokuapp.com). **For best viewing experience, use Chrome on a desktop**.
 
For this challenge, I had a bunch of questions I wanted to answer about champion mastery broadly defined over 3 groups: 1) champions, 2) summoners, and 3) champion mastery as a whole. Among many other questions, I wanted to see how champion mastery correlated with win rates, which champs tended to get mastered together, and what champs mid mains mastered at ADC (because I’m a mid main trying to find a champ for ADC). This site is my attempt to answer these questions.
 
### Data
The core datasets in this app are:
* [Champion Mastery endpoint](https://developer.riotgames.com/api/methods#!/1071/3696), naturally.
* ~600,000 summoner ids over 10 regions. To do this I used the provided [list of 10,000 matches]( https://developer.riotgames.com/discussion/announcements/show/2lxEyIcE) from the 2nd Riot API Challenge and used the [Match endpoint](https://developer.riotgames.com/api/methods#!/1064) to get all the summoner ids. Note: the matches, especially for smaller regions, often had duplicate summoner ids.
* Summoner rank, which was acquired via the [League endpoint](https://developer.riotgames.com/api/methods#!/985/3356)
* Win rate data was found via the [Stats endpoint](https://developer.riotgames.com/api/methods#!/1080/3725) which provided the ranked champ stats for all of Season 6.
* Getting a summoner’s main role was tricky. To do that I used the [Match History endpoint](https://developer.riotgames.com/api/methods#!/1069/3683) and retrieved every summoner’s last 40 ranked games. All roles a summoner played over 35% of the time were considered a “main” role.
* [Static Data](https://developer.riotgames.com/docs/static-data) was used to get all the champion data and images.
 
### Data Methodology / Challenges
 
Please take a look at the _Data Methodology / Chart Descriptions_ for each section of the site for complete methodology and its pros/cons.
 
### Technologies Used
 
#### VueJS
I used VueJS as the JavaScript front-end framework. There were a few things I wanted in a JavaScript framework. The app experience I felt was best suited as a single-page, slideshow-like app with URL navigation (to allow linking to specific slides). I also wanted a framework dexterous with representing data state. VueJS made the most sense for these requirements.
 
#### Back-End
The back-end is run on a small Express.js service. The app functionality is overwhelmingly front-end.
 
#### Visualizations
Given that my summoner name is d3js and my fondness for D3.js, I tried pretty hard (probably to my detriment) to involve D3.js. But most of the visuals were better produced using a mix of HTML/CSS styling and [VueJS directives/rendering](https://vuejs.org/guide/custom-directive.html) (like AngularJS directives). The only chart I used d3.js for was the win rates / champion mastery line graph.
 
### Running the App
 
#### Taken straight from VueJS’s Webpack boilerplate template. See [docs for vue-loader](http://vuejs.github.io/vue-loader) for more.
 
## Build Setup
 
``` bash
# install dependencies
npm install
 
# serve with hot reload at localhost:8080
npm run dev
 
# build for production with minification
npm run build
```
 
### Resources (Thanks To…)
* My roommate for keeping the living room clean the week of the API Challenge
* [VueJS](http://vuejs.org)
* [D3.js](http://d3js.org)
* [Express.js](http://expressjs.com)
* [Riot Games](http://riotgames.com)