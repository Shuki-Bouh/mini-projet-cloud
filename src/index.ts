import { helloWorld } from './hello-world';
import { getSystemInformation} from './getSystemInformation';
import http from 'http';
const port = 3000;




const server = http.createServer(async(req, res) => {
    if (req.url == "/api/v1/sysinfo") {
        try {
            const sysInfo = await getSystemInformation();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(sysInfo));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur lors de la récupération des informations système');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
  });


  
const greet = helloWorld();
console.log(greet);

server.listen(port, () => {
    console.log(`Server is running on : ${port}`);
  });
