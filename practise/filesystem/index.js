const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse request body for POST/PUT requests
app.use(express.json());

// Base directory where the files are stored
const filesDir = path.join(__dirname, 'files');

// 1. List all files in the directory
app.get('/files', (req, res) => {
    fs.readdir(filesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading directory' });
        }
        res.json({ files });
    });
});

// 2. Read the content of a specific file
app.get('/files/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(filesDir, filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.json({ content: data });
    });
});

// 3. Create a new file
app.post('/files', (req, res) => {
    const { filename, content } = req.body;
    const filePath = path.join(filesDir, filename);

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating file' });
        }
        res.json({ message: 'File created successfully' });
    });
});

// 4. Update an existing file
app.put('/files/:filename', (req, res) => {
    const { filename } = req.params;
    const { content } = req.body;
    const filePath = path.join(filesDir, filename);

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating file' });
        }
        res.json({ message: 'File updated successfully' });
    });
});

// 5. Delete a file
app.delete('/files/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(filesDir, filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(404).json({ message: 'File not found or cannot be deleted' });
        }
        res.json({ message: 'File deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
