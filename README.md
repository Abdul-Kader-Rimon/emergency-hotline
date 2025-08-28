Question : 1 ::  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 

Answer: 1 :: 
getElementByID == select one element by its unique ID and returns a single element not a list

getElementByClassName == select all elements with specific class name and returns live html collection 

querySelector == this element give me the first thing that matches  the css selector

querySelectorAll == this element give me everything  that matches  the css selector

Question : 2 :: How do you create and insert a new element into the DOM?

Answer : 2 :: 

first create a new html element to using docoment.creatElement() then put text inside  the html element using innerText/innerHTML and then put it somewhere in DOM using appendChild . 
This is the procedure to create and insert a new element into the DOM .


Question: 3 :: What is Event Bubbling and how does it work?

Answer: 3 :: 

Event Bubbling is when an event starts on the innermost element and the bubbles up to its parent elements all the way to the body / html . in other word  the event spreads from child to parent to ancestor element .


Question : 4 :: What is Event Delegation in JavaScript? Why is it useful?

Answer: 4 :: 

Event Delegation in when you attach an event listener to a parent element instead of each child element . 
event delegation  useful because don't need to add separate listeners to every child element . its makes code faster and cleaner and its works  for elements later dynamically .

Question : 5 :: What is the difference between preventDefault() and stopPropagation() methods?

Answer: 5 :: 

preventDefault() stop the default  action of an element . for example clicking a link normally goes to another page but when you using preventDefault() it will stop it from going.

stopPropagation() stops the event from bubbling up to parent elements . 