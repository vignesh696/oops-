const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001']
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend running!' });
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
// Reddit
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
  console.log('Server running on http://localhost:' + PORT);
});