import StringTreeDecorator from '../utils/string-tree.decorator';

class MainController {

	indexAction(){
		const words = [,'amazon', 'amazon-adsystem', 'amazonwebapps','amazon','amazon-adsystem','amazonwebapps', 'aol', 'apple',
		'google','google-analytics','googledrive', 'googlesyndication',  'googlesyndication','googlevideo',
		 'nexthink', 'nexthink-website', 'netflix'];
		const stringTree = new StringTreeDecorator(words);
		return stringTree.draw();
	}
}


export default MainController;