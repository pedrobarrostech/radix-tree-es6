class Node {

    constructor(x, n) { 
        this.len = n;
        this.key = x;
        this.prev = null;
        this.link = null;
        this.next = null;
    }

    setNode(x, n) { 
        this.key = x.substr(0,n);
        this.len = n;
        this.prev = null;
        this.link = null;
        this.next = null;
    }

}


export default Node;