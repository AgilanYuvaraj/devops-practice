const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Tell Express to serve the colorful HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Success! View your colorful page at http://localhost:${PORT}`);
});
