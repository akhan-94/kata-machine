type Node<T> = {
    value: T,
    next?: Node<T>,
}

// remember this is first in, first out
export default class Queue<T> {
    public length: number;
    
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        
        // create node object
        const node = { value: item } as Node<T>;
        
        // manually update the size of the queue
        this.length++;
        
        // if there is no tail, this must be an empty queue and
        // we should update the tail as well as the head.
        if(!this.tail){
            
            this.tail = this.head = node;
            return;
        }
        
        // there is a queue, so let's just update the tail
      
        this.tail.next = node;
        this.tail = node;
        
    }
    
    deque(): T | undefined {
        
        // guard clause
        if(!this.head) { 
            return undefined;
        };
        
        this.length--;
        
        // set temporary value for this method
        const head = this.head;
        
        // update head to the next node in the queue
        this.head = this.head.next;
        
        // free up memory / do garbage collection
        // this is not necessary with javascript since javascript
        // has it's own automatic garbage collector
        head.next = undefined;
        if(this.length === 0){
            this.tail = undefined
        }
        
        // return the value of the dequeued node
        return head.value;
    }
    
    // should return the first node cause first in, first out
    peek(): T | undefined {
        return this.head?.value;
    }
    
}