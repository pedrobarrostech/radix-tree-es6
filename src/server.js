import express from 'express';
import path from 'path';
import routes from './routes/main.routes';

const app = express();

app.set('view engine', 'ejs');
app.use('/', routes);
app.use(express.static(path.join(__dirname, '../public')));

const server = app.listen(3000, () => {
	const {address, port} = server.address();
	console.log('Example app listening at http://localhost:3000');
});
