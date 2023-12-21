//Server-Side Code


const express = require('express');
const cors = require('cors')
const localtunnel = require('localtunnel');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const email = req.body.emails;

  // Process the email address here

  console.log('Email:', email);

  res.sendStatus(200);
});

app.get('/', (req, res) => {
  // Handle the request here
  const email = req.body.emails;
  res.send('Email submitted');
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


(async () => {
  const tunnel = localtunnel(port, (err, tunnel) => {
    if (err) {
      console.error('Error creating tunnel:', err);
    } else {
      console.log('Tunnel URL:', tunnel.url);
    }
  });
  // tunnel.on('close', () => {
  //    console.log('Tunnel closed'); // tunnels are closed
  // });
  // tunnel.on('error', (err) => {
  //   console.error('Tunnel error:', err);
  // })
})();