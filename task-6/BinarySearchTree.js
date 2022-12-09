//for code in hacker rank i dont know the way to write the code
// so the compilor of the site understand it i tried and
// it makes error all the time so the code below is the solution
// even if i searched for direct soultion the result in different languages
//



// code for make binary tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// for insert data in tree
insert(data)
{

    let newNode = new Node(data);
    if (this.root === null)
        this.root = newNode;
    else
        this.insertNode(this.root, newNode);
}