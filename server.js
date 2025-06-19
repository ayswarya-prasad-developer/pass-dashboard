// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'my_secret_key';

app.use(cors());
app.use(bodyParser.json());

const users = [
  { email: 'admin@pass.com', password: 'admin', role: 'admin' },
  { email: 'user@pass.com', password: 'user', role: 'user' },
];


/*LOGIN API*/
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, role: user.role });
});
/*CHART API*/
app.get('/api/chart-data', (req, res) => {
  res.json({
    label: 'Sales',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [100, 200, 150, 300, 250]
  });
});
/*TABLE API*/
app.get('/api/table-data', (req, res) => {
  res.json({
    label: 'Sales',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [100, 200, 150, 300, 250]
  });
});
app.listen(PORT, () => {
  console.log(`Mock API is running at http://localhost:${PORT}`);
});
