type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item} as Node<T>;
        // this is called book keeping
        this.length++;
        
        if(!this.head) {
            this.head = node;
            return;
        }
        
        // update head
        node.prev = this.head;
        this.head = node;
    }
    
    pop(): T | undefined {
        // manually update the length
       this.length = Math.max(0, this.length - 1);
       
       if(this.length === 0){
           const head = this.head;
           this.head = undefined;
           return head?.value;
       }
       
        const head = this.head as Node<T>;
        this.head = head.prev;
        
        return head.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
}