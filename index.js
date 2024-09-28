const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/index'); 

const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');


app.use(express.json());

app.use('/', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));