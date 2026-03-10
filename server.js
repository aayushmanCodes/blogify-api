const http = require('http');
const greet = require('./utils');
const PORT = 3000;
const fs = require('fs').promises;

const server = http.createServer((req,res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(greet('Kalvian'));
});

server.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});

async function readFileContent(filePath){
    try {
        const data = await fs.readFile('./data.txt', 'utf-8');
        console.log('File content:', data);
    }

    catch (error){
        console.error('Error reading file:', error);
    }
};

readFileContent();