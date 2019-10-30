var CircularNode = /** @class */ (function () {
    function CircularNode(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return CircularNode;
}());
var CircularLinkedList = /** @class */ (function () {
    function CircularLinkedList() {
        this.count = 0;
        this.head = null;
    }
    CircularLinkedList.prototype.insertElement = function (ele) {
        var newNode = new CircularNode(ele);
        if (this.head == null) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        }
        else {
            if (this.head.next == null) {
                this.head.next = newNode;
                newNode.prev = this.head;
                newNode.next = this.head;
                this.head.prev = newNode;
            }
            else {
                var current = this.head;
                while (current.next != null) {
                    current = current.next;
                }
                current.next = newNode;
                newNode.prev = current;
                newNode.next = this.head;
                this.head.prev = newNode;
            }
        }
        this.count++;
    };
    CircularLinkedList.prototype.deleteFront = function () {
        if (this.count == 0) {
            console.log("THERE IS NOTHING TO DELETE !! ");
        }
        else {
            var nodeDeleted = this.head;
            this.head = this.head.next;
            console.log("NODE DELETED IS : " + nodeDeleted.data);
        }
    };
    return CircularLinkedList;
}());

let cll = new CircularLinkedList() ; 
cll.insertElement(123) ; 
cll.insertElement(999) ; 
cll.insertElement(123) ; 
cll.insertElement(990123) ; 
console.log ( cll ) ; 
cll.deleteFront() ; 
console.log(cll) ; 
cll.deleteFront() ;
console.log(cll) ; 
