const express = require('express');

const app = express();
var port=Number(process.env.PORT || 3000); // process.env.Port will assign port allocated to heroku , i have deployed app on heroku so i am using this

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
});
