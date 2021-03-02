const Queue = require('./Queue');
const Stack = require('./Stack');

const myStack = new Stack();
myStack.push('starTrek');
myStack.push('Kirk');
myStack.push('Spock');
myStack.push('McCoy');
myStack.push('Scotty');

console.log(myStack);
myStack.pop();
myStack.peek();
myStack.isEmpty();
myStack.display();

function is_palindrome(s) {
  const stack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split('');

  const middle = s.length % 2 !== 0 ? Math.floor(s.length / 2) : (Math.floor(s.length / 2) - .5)
  s.forEach((letter, idx) => {
    if (idx < middle) {
      stack.push(letter);
    }
  });


  for (let i = 0; i < s.length; i++) {
    if (i > middle) {
      if (s[i] !== stack.peek()) {
        return false;
      } else if (i === s.length - 1 && s[i] === stack.peek()) {
        stack.pop();
        return true;
      } else if (s[i] === stack.peek()) {
        stack.pop();
      }
    }
  }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function matchingParentheses(str) {
  str = `${str}`;
  const open = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      open.push(str[i]);
    } else if (open.peek() === null && str[i] === ')') {
      return false;
    } else if (str[i] === ')') {
      open.pop();
    }
    if (i === str.length - 1) {
      if (open.peek() === null) {
        return true;
      } else {
        return false;
      }
    }
  }
}



console.log('mp', matchingParentheses('(54 * 12) - 2'));




const myQueue = new Queue();

console.log(myQueue);