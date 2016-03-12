import express from 'express';
const router = express.Router();
import StringTree from '../models/string-tree';
import MainController from '../controllers/main.controller.js';


router.get('/', (req, res) => {
	const mainCtrl = new MainController();
    res.render('index.ejs', { tree : mainCtrl.indexAction() });
});

export default router;
