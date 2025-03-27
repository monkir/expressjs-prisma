const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const postRoutes = require('./src/routes/postRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Export the Express app as a serverless function
module.exports = app;

// Run locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}
