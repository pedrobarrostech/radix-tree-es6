import StringTreeDecorator from '../utils/string-tree.decorator';

class MainController {

	indexAction(){
		const words = [,'romane', 'romanus' , 'romulus' , 'rubens' , 'ruber', 'rubicons', 'rubicundus'];
		const stringTree = new StringTreeDecorator(words);
		return stringTree.draw();
	}
}


export default MainController;