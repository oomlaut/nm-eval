# Northwestern Mutual Full-Stack Engineer Programming Evaluation

## Description

You’ll be working with a cross-functional engineering team to deliver PoC’s and experiments; you’ll be the lead engineer. To demonstrate excellence in modern development tools and frameworks, we ask that you complete the following challenge. Please use this test to show off your skill set and what you can bring to the team. You will be critiqued on your quality, completeness, creativity, and technologies. If we proceed forward in the interviewing process, you will be asked to walk through your code. Choose _modern_ technologies that exercise the breadth of approach and ones that you’re comfortable developing with.

When you have completed the following challenge, place your code in a code repository, ex. github, bitbucket, dropbox, etc

## Mission/Challenge

Create a responsive (phone, tablet, desktop) web application that allows the user to quick filter a list of things. The top of the page will have a search input field and then below that a list of things in response to the filter. The things should be sorted alphabetically. The things could be anything, but should be AJAX pulled from a backend service that you write and should ultimately be pulled from an open public API.

Here’s an [example list of API’s curated on GitHub](https://github.com/toddmotto/public-apis),  but feel free to use any public API you wish.

### Interpreted Requirements

#### MUST: Minimum Viable Product (MVP)

* Use modern framework (e.g. React, Angular, Vue, etc).
* Perform a request to an API for initial data set.
* Filter data pulled from an API based on user input.
* NOT required to form the API request using dynamic inputs. (custom route/service)
* Be consumed on multiple viewport sizes.

#### SHOULD: Expectations for a scalable interface system

* Use components or hooks to compartmentalize functionality.
* Use [BEM](http://getbem.com/introduction/) notation for specificity and system-building.
* Include responsive/mobile-first styling.

#### COULD: Nice-to-have

* Display loading animation/graphic during Ajax request
* UI sugar
* Use Jest unit testing

#### WOULD: Long-term improvements and considerations

* Abstract API request functionality to a custom route || node/express service

## Approach

Find a suitable API to work with. For simplicity, let's go with one that does not require an OAuth or API key at this time.
> It's Milwaukee, so how about [Breweries](https://www.openbrewerydb.org/)

NM uses React extensively, so let's try our hand at that!
> While most of my experience in the last few years has been .NET and then a bit of Angular before that, I found React to be well-docuumented with a good number of resources. While I have to imagine there are a ton of nuances and patterns yet to be learned, the idea of passing data down from an App to Components was very familiar.

### Application Struture

To separate concerns and keep the component hierarchy clean, I have broken up functionality as follows:

```
Root
- App wrapper
  - Filter text box
    - Results indicator
  - Data set item wrapper
    - Variable renderings based on request status
    - Iteration of items
```

### `TODO`s

Intermittently throughout the code you may see comment blocks containing `/* TODO: ... */`

These are handy placemarkers to indicate where additional revisions, refactoring, or iteration may be beneficial. However in the sake of creating a Minimally Viable Product (MVP) and without a formal sprint
that I'm working in I had to draw the line somewhere in terms of features and functionality.

### Branching Strategy

Every commit has been made directly against the `master` branch, which is not ideal but considering there are no other developers collaborating on it, and it is more-or-less a proof of concept, this
was the most efficient way to get things done correctly.

Ideally the master branch would remain pristine unless modified by Pull Request or part of the CI/CD process. A `feature/` branch would be created to represent the discrete work of a single user story or
feature to be added in to the application for the sprint. Depending on the number of environments or the established workflow of the team, there would additionally be a `dev` or `development` branch that could aggregate changes, or the features would be merged back into master to be deployed to production.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
