const http = require('http');
const app = require('./server/api/server');
const logger = require('./server/config/winston.config');

const port = process.env.PORT || 4000;

const httpServer = http.createServer(app);

httpServer.listen(port, () => logger.info(`Application started on http://localhost:${port}`));
