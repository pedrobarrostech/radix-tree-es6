import Node from './node';

class StringTree {

    constructor(x, targetSize){ 
        this.stringTree='';
        this._target_size = targetSize;
        this._root = this._internalInsert(this._root,x);

    }
    
    insert(x){
        if (this._root){
            this._internalInsert(this._root,x);
        }
        else{
            this._root = this._internalInsert(this._root,x);
        }
    }
    
    show(){
        if (this._root){
            this._redesignPostorder(this._root,this._root,0,0);
            this._internalDisplay(this._root,0);
        }
    }

    find(x){
        if (this._root){
            return this._internalFind(this._root, x, 0) == null ? false : true;
        }
        return false;
    }

    draw(){
        return this.stringTree;
    }

    _countChilds(t){
        let size = 1;
        // Hack for ' ', same keys are stored as len=1 empty strings
        if (t.len == 1 && t.key==" ") {
            size--;
        }

        let iterator = t;

        while (iterator.next){
            if (iterator.next.prev < size){
                iterator.next.prev = size;
            }
            iterator = iterator.next;
            size++;
        }
        return size;
    }

    _redesignPostorder(oldt, t, levelSize,groupSize){
        if (t == null) return;

        this._redesignPostorder(t,t.link,levelSize+1,0);
        this._redesignPostorder(t,t.next,levelSize,groupSize+1);

        if (oldt.link && groupSize==0){
            let numberOf = this._countChilds(oldt);
            let numberOfInternal = this._countChilds(t);
            numberOf+=groupSize;
            numberOf+=oldt.prev;
            if (numberOf<this._target_size && ((numberOf+numberOfInternal)<=this._target_size)){
                this._join(oldt);
            }
        }
    }

    _internalDisplay(t,level){
        if (t == null) return;
        let margin=0;
        for (let i = 0; i < level;i++){
            margin = level*20;
        }
        this.stringTree += "<div class='node' style='margin-left:"+ margin +"px;'>" + t.key + "</div>";
        this._internalDisplay(t.link,level+1);
        this._internalDisplay(t.next,level);
    }

    _internalInsert(t, x, n){

        if( !n ){
            n = x.length+1;
        }

        if( !t ) {
            let node = new Node(x,n);
            return node;
        }

        let k = this._prefix(x,n,t.key,t.len);

        if( k==0 ){
            t.next = this._internalInsert(t.next,x,n);

        }
        else {

            if( k<n ) {
                if( k<t.len ){
                    this._split(t,k);
                }

                t.link = this._internalInsert(t.link,x.substr(k),n-k);
            }
        }
        return t;
    }

    _prefix(x, n, key, m){
        for( let k= 0; k<n; k++ ){
            if( k==m || x[k]!=key[k] ) {
                return k;
            }
        }
        return n;
    }

    _split(t, k) {
        let p = new Node;
        p.setNode(t.key.substr(k),t.len-k);
        p.link = t.link;
        t.link = p;
        let temp = t.key.substr(0,k);
        t.key = temp;
        t.len = k;
    }

    _join(t) {
        let p = t.link;
        let temp = t.key.substr(0,t.len);
        let temp2 = p.key.substr(0,p.len);
        t.key = temp + temp2;
        t.len += p.len;
        t.link = p.link;
        let tempKey = temp;
        let lenghtTemp = t.len;

        while(t.next){
            t=t.next;
        }
        
        t.next = p.next;

        while(p.next){
            let tempKey2 = p.next.key.substr(0,p.next.len);
            let tempKey3 = tempKey + tempKey2;
            p.next.key = tempKey3;
            p.next.len += lenghtTemp;
            p=p.next;
        }
    }
    
    _internalFind(t,x,n) {

        if( !n ) { 
            n = x.length+1; 
        }

        if( !t ) {
            return;
        }

        let k = this._prefix(x,n,t.key,t.len);

        if( k==0 ) {
            return this._internalFind(t.next,x,n); 
        }

        if( k==n ) {
            return t;
        }
        if( k==t.len ) {
            return this._internalFind(t.link,x.substr(k),n-k); 
        }

        return; 
    }
}

export default StringTree;