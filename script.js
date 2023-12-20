//Server-Side Code


const express = require('express');
const cors = require('cors')

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

app.post('/submit-email', (req, res) => {
  const email = req.body.emails;

  // Process the email address here

  console.log('Email:', email);

  res.sendStatus(200);
});

app.get('/submit-email', (req, res) => {
  // Handle the request here
  const email = req.body.emails;
  res.send('Email submitted');
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
