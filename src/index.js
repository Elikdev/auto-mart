import app from './app.js';
import dbConnect from './config/dbConnect.js';
import { PORT } from './config/index.js';
import http from 'http';


const startServer = () => {
  const server = http.createServer(app);
  const normalizePort = val => {
    const port = parseInt(val, 10);

    if (Number.isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }

    return false;
  };

  const port = normalizePort(PORT);
  app.set('port', port);

  const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${port}`;
    switch (error.code) {
      case 'EACCES':
        console.log(`${bind} requires elevated privileges.`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.log(`${bind} is already in use.`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  server.on('error', errorHandler);
  server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? `pipe ${address}` : `port ${port}`;
    console.log(`Listening on ${bind}`);
  });

  server.listen(port, () => {
    console.log('Express server listening on port', port);
  });

  process.on('SIGINT', () => {
    console.log('Bye bye!');
    process.exit();
  });
};

try {
  startServer();
  dbConnect();
} catch (error) {
  // handle errors here
  console.log(error.message);
  process.exit(-1);
}