import express from 'express';
const router = express.Router();
import StringTree from '../models/string-tree';
import StringTreeDecorator from '../utils/string-tree.decorator.js';


router.get('/', (req, res) => {
	const words = [,'amazon', 'amazon-adsystem', 'amazonwebapps','amazon','amazon-adsystem','amazonwebapps', 'aol', 'apple',
	'google','google-analytics','googledrive', 'googlesyndication',  'googlesyndication','googlevideo',
	 'nexthink', 'nexthink-website', 'netflix'];

	const stringTree = new StringTreeDecorator(words);
    res.render('index.ejs', { tree : stringTree.draw() });
});

export default router;
