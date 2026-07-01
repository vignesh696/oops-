const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, email: 'founder@dashboard.com', password: 'founder123', role: 'founder' },
  { id: 2, email: 'analyst@dashboard.com', password: 'analyst123', role: 'analyst' }
];

app.get('/', (req, res) => {
  res.json({ message: 'Backend running!' });
});

app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'mysecretkey123',
    { expiresIn: '24h' }
  );
  res.json({ token, role: user.role, email: user.email });
});

app.get('/api/stocks', async (req, res) => {
  try {
    const key = process.env.ALPHAVANTAGE_KEY;
    const response = await axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=' + key);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed' });
  }
});

app.get('/api/weather', async (req, res) => {
  try {
    const key = process.env.OPENWEATHER_KEY;
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=17.385&lon=78.4867&appid=' + key + '&units=metric');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed' });
  }
});

app.get('/api/news', async (req, res) => {
  try {
    const key = process.env.NEWSAPI_KEY;
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=' + key);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed' });
  }
});

app.get('/api/economics', async (req, res) => {
  try {
    const key = process.env.FRED_KEY;
    const response = await axios.get('https://api.stlouisfed.org/fred/series/observations?series_id=CPIAUCSL&api_key=' + key + '&file_type=json&limit=5&sort_order=desc');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed' });
  }
});

app.get('/api/reddit', async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.reddit.com/r/Entrepreneur/top.json?limit=5&t=day',
      { headers: { 'User-Agent': 'OperationsDashboard/1.0' } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed' });
  }
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});