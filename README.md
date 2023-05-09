# Tweet Collection

Tweet Collection is a simple training web application to view users tweets loaded from API (https://mockapi.io/ was used) .

## Installation

To install the application just run:

### `npm install`

## Usage

Create a user in Mockapi with the following fields: id, user, tweets, followers, avatar as follows:
[
{
"user": "Deborah Pouros II",
"tweets": 15262,
"followers": 36183,
"avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/143.jpg",
"id": "1"
},
{
and adds the API endpoint link to the axios.defaults.baseURL in user-api.js in services folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://license.com/fakelicense/)
