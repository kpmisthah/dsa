class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Push an element into the heap
    push(val) {
        this.heap.push(val);  // Add the value to the end of the heap
        this.bubbleUp();      // Restore heap property by bubbling up
    }

    // Pop the root element (largest element) from the heap
    pop() {
        const max = this.heap[0];  // The root element (largest)
        const end = this.heap.pop(); // Remove the last element
        if (this.heap.length > 0) {
            this.heap[0] = end;  // Move the last element to the root
            this.bubbleDown();   // Restore heap property by bubbling down
        }
        return max;  // Return the root element
    }

    // Peek at the root (largest element)
    peek() {
        return this.heap[0];
    }

    // Bubble up to restore the heap property (max-heap: parent >= child)
    bubbleUp() {
        let index = this.heap.length - 1;  // Start at the last index
        let parentIndex = Math.floor((index - 1) / 2);  // Parent index
        
        // Keep bubbling up until the element is at the correct position
        while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];  // Swap with parent
            index = parentIndex;  // Update index
            parentIndex = Math.floor((index - 1) / 2);  // Recalculate parent index
        }
    }

    // Bubble down to restore the heap property
    bubbleDown() {
        let index = 0;  // Start from the root
        const length = this.heap.length;
        
        // Keep bubbling down until the heap property is restored
        while (true) {
            let leftChildIdx = 2 * index + 1;  // Left child index
            let rightChildIdx = 2 * index + 2; // Right child index
            let largest = index;  // Assume current element is the largest
            
            // Check left child
            if (leftChildIdx < length && this.heap[leftChildIdx] > this.heap[largest]) {
                largest = leftChildIdx;
            }
            
            // Check right child
            if (rightChildIdx < length && this.heap[rightChildIdx] > this.heap[largest]) {
                largest = rightChildIdx;
            }
            
            // If no swap is needed, break the loop
            if (largest === index) break;
            
            // Swap the current element with the largest child
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;  // Move down to the swapped child's position
        }
    }

    // For debugging: Get the heap array
    getHeap() {
        return this.heap;
    }
}

// Test Max-Heap
const maxHeap = new MaxHeap();
maxHeap.push(5);
maxHeap.push(3);
maxHeap.push(7);
maxHeap.push(1);
console.log(maxHeap.getHeap()); // [7, 3, 5, 1]
console.log(maxHeap.pop());     // 7
console.log(maxHeap.getHeap()); // [5, 3, 1]