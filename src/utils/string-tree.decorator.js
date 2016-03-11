import StringTree from '../models/string-tree';

class StringTreeDecorator {

	constructor(words){
		this.stringTree = new StringTree(words[1]);
		this._decorate(words);
	}

	draw(){
		this.stringTree.show();
		return this.stringTree.draw();
	}

	_decorate(words){
		let i=2;
		while (words[i]) {
			this.stringTree.insert(words[i]);
			i++;
		}
	}
}


export default StringTreeDecorator;