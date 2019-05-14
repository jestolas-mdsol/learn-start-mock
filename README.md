### Running the app
* clone this repo
* `npm install`
* `npm run build`
* `npm run start`
* open a browser and navigate to `https://localhost:1337`

### Notes
* The style guide has been hard-coded in the `client/src/stylesheets/shared/_constants.scss` file, with a few additional css variables
* The sign up validation checks for a a valid email based on a regular expression.
  * The email and password fields cannot be blank
* This mock is a SPA that uses react-router to move move to the stories page.
* Stories are temporarily hard-coded since no requests are currently sent to an api to retrieve stories.

### Breakpoints
* mobile phone: `425px and below`
* tablet: `between 426px and 850px`
* desktop: `851px and above`
