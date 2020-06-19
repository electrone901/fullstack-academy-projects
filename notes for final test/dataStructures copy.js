HASH TABLES:
    As a data structure, hash tables allow you to get, set, and remove data in O(1) time on average.BUT they take lots of space to_function efficiently

it hasthese methods:
    put - inserts a key - value pair inside the hash table
get - returns the value associated with a given key
remove * -removes the key - value pair from the hash table
keys ** -returns an array of all the keys in a table
values ** -returns an array of all the values in a table


COLLISION: When your hash_function outputs the same memory address(index) for different keys

HOW DO WE HANDLE COLLISIONS ?
    "Separate chaining " : We store the pieces of data using a more sophisticated data structure(a nested array or linked list) This allows us to store multiple key - value pairs at the same index "Linear Probing": We only store one piece of data at each position.When there is a collision, we look forward(or backwards) to an empty slot and place the key - value pair there

WHAT IS OPEN ADDRESING Open addressing, or closed hashing, is a method of collision resolution in hash tables.With this method a hash collision is resolved by probing,
    or searching through alternate locations in the array(the probe sequence) until either the target record is found, or an unused array slot is found, which indicates that there What is separate chaining ? To handle collisions, the hash table has
a technique known as separate chaining.Separate chaining is values are associated with each location within the hash map

    "What makes a hashing_function ?"
A hashing algorithm takes a key and returns a memory address(i.e.an index)
It needs to be fast O(1)
It needs to“ spread” keys across the range of addresses relatively evenly
If the keys are all strings(they could be other data types)
it takes the string and returns a number which represents a valid index in the array
if someone asks about how Objects and Arrays are implemented in JS and you’ re able to speak to the hashing_function and primes, buckets and arrays You are good.

function hash(key, arrLength) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * weirdPrime + value) % arrLength;
    }
    return total;
}

class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
        this.size = size;
    }

    put(key, val) {
        /*
          1. decide where we will put this entry
              hash(key, len) => bucketIdx
          2. check if bucketIdx exist
              if(!h[bucketIdx]) {
                h[bucketIdx] = []
                h[bucketIdx].push([key,val])
              }
              else {
                h[bucketIdx].push([key,val])
              }
          */
        const bucketIdx = hash(key, this.size);

        if (!this.keyMap[bucketIdx]) {
            this.keyMap[bucketIdx] = [];
        }
        this.keyMap[bucketIdx].push([key, val]);

        return this;
    }

    get(key) {
        const bucketIdx = hash(key, this.size);

        if (this.keyMap[bucketIdx]) {
            const found = this.keyMap[bucketIdx];
            return found;
        } else {
            return 'DOES NOT EXIST!';
        }
    }

    remove(key, val) {
        const found = this.get(key);
        const newArr = found.filter((element) => val !== element[1]);
        return newArr;
    }
    keys() {
        return Object.keys(this.keyMap);
    }
    values() {
        return Object.values(this.keyMap);
    }
}
const test = new HashTable(10);
test.put('a', 'Roman');
test.put('a', 'Luis');
test.put('b', 'BB');
test.put('c', 'CC');
console.log('after', test);
// test.get("a")
// test.remove("a","Luis")
// test.keys()
test.values();
// console.log("keys", Object.keys(test))




"ABSTRACT DATA TYPES(ADTs):"
are a way of classifying data structures based on how they are used and the behaviors they provide.They do not specify how the data structure must be implemented but simply provide a minimal expected interface and set of behaviors.

    ADTs:
    stack, Queue, Tree, List.

DATA STRUCTURE:
    LinkedList, BST...is a concrete implementation of a data type.It’ s possible to analyze the time and memory complexity of a Data Structure but not from a data type.The Data Structure can be implemented in several ways and its implementation may vary from language to language.


What is "Big O Notation" ?
    In short, it is : an upper bound(ceiling) for how many steps an algorithm could take to run depending on some characteristic(s) of the input(s), usually called "size "
typically(but not necessarily) assuming the worst_case(i.e.most uncooperative input)


O(1) —  Constant Time:
    it only takes a single step_for the algorithm to accomplish the task.

O(log n) —  Logarithmic Time:
    The number of steps it takes to accomplish_a task are decreased by some factor with each
step.

O(n) —  Linear Time:
    The number of of steps required are directly related(1 to 1).

O(n²) —  Quadratic Time:
    The number of steps it takes to accomplish a task is square of n.

Constant Time Algorithm O(1):
    It doesn 't matter how many items you have in the provided array, the operation is always done in one step.


"TIME COMPLEXITY EXAMPLES":  

Linear Time Algorithm O(n):

    In Linear time, the worst_case time(iterations) grows on par with the number of items.In other words_for N elements we will require up to a multiple of N steps.

const findIndex = (items, match) => {
    for (let i = 0, total = items.length; i < total; i++)
        if (items[i] == m atch) return i;
    return -1;
};

Logarithmic Time Algorithm O(log n):
    Recursive solutions are often logarithmic In mathematics, the logarithm is the inverse operation to exponentiation, just as division is the inverse of multiplication.Thus logarithmic time complexity means that you decrease the amount of work you have to do(roughly by half) with each step.

    function thisOld(num, array) {
        let midPoint = Math.floor(array.length / 2);
        if (array[midPoint] === num) {
            return true;
        } else if (array.length <= 1) {
            return false;
        } else if (array[midPoint] > num) {
            return thisOld(num, array.slice(0, midPoint));
        } else if (array[midPoint] < num) {
            return thisOld(num, array.slice(midPoint));
        }
    }
const sortedAges = [15, 20, 29, 35, 40];
thisOld(29, sortedAges)


"FREQUENCY COUNTER:"
You can do this instead of "if - else"
const arr1Map = {}
for (let values of array1) {
    arr1Map[values] = (arr1Map[values] || 0) + 1;
}





///
// returns true // stacks: // LIFO(last in first out) push and pop to pop checkif it is empty // collections of elements, can be
in order, repeat
let stack = [] stack.push(1) if (stack.length > 0) { stack.pop() }
Queue: Fifo, Methods: enqueue() = push(), dequeue() = shift() Linked List: Singly: has head, value, next Doubly: has head, value, next, prev linkedList videos Review: `https://www.youtube.com/playlist?list=PLx0iOsdUOUmmR3kE0iA2eIYNS_beMg8ti
            `
https: //www.youtube.com/playlist?list=PLx0iOsdUOUmmR3kE0iA2eIYNS_beMg8ti https: //www.youtube.com/watch?v=AV-I3WAAq5Y&list=PLx0iOsdUOUmkvOhyAm1NUJ023D8PyaD-B&index=6