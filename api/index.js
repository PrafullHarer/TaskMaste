let app;

try {
  app = require('../server/api/index.js');
} catch (err) {
  // If the server fails to load, return the actual error instead of crashing
  app = (req, res) => {
    res.status(500).json({
      error: 'Function failed to load',
      message: err.message,
      stack: err.stack,
    });
  };
}

module.exports = app;
