const LinkedList = () =>{
    var head = null;
    var tail = null;
    var size = 0;

    const append = (value) => {
        var newNode = Node(value);
        if (head == null){
            head = newNode;
            tail = newNode;
        } else {
            currentNode = head;
            while(currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
            tail = newNode;
        }
        size++;
    };

    const prepend = (value) =>{
        var newNode = Node(value);
        if (head === null){
            head = newNode;
            tail = newNode;
        } else{
            newNode.nextNode = head;
            head = newNode;
        }
        size++;
    }

    const at = (index) =>{
        currentNode = head;
        count = 0;
        try{
            while(count < index){
                count++;
                currentNode = currentNode.nextNode;
            };
            return currentNode.value
        } catch{
            return false
        }
    }

    const pop = () => {
        currentNode = head;
        count = 1;
        if (size <= 1 ){
            head = null;
            tail = null;
        } else if (size == 2){
            head.nextNode = null;
            tail = head;
        } else {
            while(count < size-1){
                count++;
                currentNode = currentNode.nextNode;
            };
        };
        currentNode.nextNode = null;
        tail = currentNode;
        size--;
    }

    const contains = (value) => {
        currentNode = head;
        count = 0;
        while(count < size){
            if(currentNode.value == value){
                return true;
            }
            count++;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    const find  = (value) =>{
        currentNode = head;
        index = 0;
        while(currentNode){
            if(currentNode.value === value){
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    const toString = () =>{
        currentNode = head;
        string = "";
        if (size > 0){
            while(currentNode){
                string += "("+currentNode.value+") -> ";
                currentNode = currentNode.nextNode;
            }
            string += "null";
            return string;
        };
        return false;
    };
    
    const insertAt = (value,index) =>{
        var newNode = Node(value);
        currentNode = head;
        previousNode = currentNode;
        count = 0;
        try{
            if(index == 0){
                tail = head;
                newNode.nextNode = head;
                head = newNode;
            } else {
                while(count < index){
                    count++
                    previousNode = currentNode;
                    currentNode = currentNode.nextNode;
                };
                previousNode.nextNode = newNode;
                newNode.nextNode = currentNode;
            };
        } catch (err) {
            return null;
        };
    };

    const removeAt = (index) =>{
        currentNode = head;
        previousNode = currentNode;
        temp = currentNode.nextNode;
        count = 0;
        try{
            if(index == 0 && size == 1){
                head = null;
                tail = null;
            } else if (index == 0 && size > 1){
                head = temp;
            }
            while (count < index){
                count++;
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                temp = currentNode.nextNode;
            }
            previousNode.nextNode = temp;
        } catch(err){
            return;
        }
    };

    return {append, prepend, at, pop, contains, find, toString, insertAt, removeAt};
};

const Node = (a,b=null) =>{
    const value = a;
    const nextNode = b;
    return {value, nextNode};
};


const list = LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.pop();
list.append(4);
list.pop();
list.append(5);
list.append(6);
list.append(7);

console.log(list.at(4));
console.log(list.contains(7));
console.log(list.find(7));
console.log(list.toString());
list.insertAt(3,4);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());


