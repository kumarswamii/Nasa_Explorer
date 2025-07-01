const nasaService = require('./_lib/nasaService');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { start_date, end_date } = req.query;

    if (!start_date || !end_date) {
      return res.status(400).json({ error: 'start_date and end_date are required' });
    }

    const result = await nasaService.getNearEarthObjects(start_date, end_date);

    if (result.success) {
      res.status(200).json(result.data);
    } else {
      res.status(400).json({ error: result.error, details: result.details });
    }
  } catch (error) {
    console.error('NEO API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
