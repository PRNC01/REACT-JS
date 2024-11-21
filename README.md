<h1>REACT JS</h1>
<hr>
<h1>01basicreact</h1>
This 01basicreact is created by <b>Node Package eXecute (npx)</b> <u>npx create-react-app</u> this will take time and it is not a fast method it very bulky utility it give some things that we not need. 
<h1>01vitereact</h1>
This 01basicreact is created by <b>Node Package Manager</b> <u>npm create vite@latest</u> This is the fastest way to make react project project.
**NOTE :-** 
1. In 01vitereact you can see that we have crearted a hello.jsx file to print HELLO PRINCE you have to remember that you can only name function with **UPPER CASE LETTER** otherwise it will not work. Remember you have to make a file with .jsx because it is a configration of vite. 
2. You can only return a single element in so you have to use a fregment (<> </>). inside this fregment you can use multiple element.
3. In 01basicreact you also have to apply same rule that you have to name a function with upper case and use fregment 

# NOTE:- 
We have to delete some file that we don't need
# 01basicreact
1. setupTests.JS
2. reportWebVitals.JS
3. logo.svg
4. index.css
5. App.test.JS
Now, We have only two file index.js and App.js 

# 01vitereact
1. asset folder
2. App.css
3. index.css
Now, We only have 2 file index.jsx and App.jsx 
<hr>

# CustomReact
In CoustomReact file we created a customReact.js which is like a personal react we see how react work how element are renders in it this is not like original react it is a personalize mini verson in which we can understand under the hood. In which we created a object reactElement in which we have created a type a element it's attribute and then we created a function customRender to asign reactElement. But in react we don'nt create element like this because we can not render by this method because we cannot render an object in react all the element are render by render method and render method don'nt take object as a argument to create element in react we use React.createElement as you can see in 01vitereact. 
NOTE :- React.createElement Argument
1. First we give element name or type 
2. Second we give it a attribute in a object. In createElement object is denoted or use to set attribute value
3. Then we give a innerHTML
4. We have created a anotherUser in global variable and we directly use this global variable in createElement without any curly braces.

NOTE-2 :- EVALUATED EXPRESION {}
1. We use evaluated expresion using curly braces {} this evaluated expresion is similar to (`${}`)
In this we understand how react element are made   
2. In this evaluated expression we can not give logical if else expresion we have to make this in fuction outside return
3. We have created a anotherUser in global variable and we directly use this global variable in createElement without any curly braces. 

# 02counter (HOOKS)
In 02counter we learnt about (HOOKS) in which we see ui updation is controlled by react. We cannot use global or normal variable to update ui to update ui we have use hooks in 02counter project we use useState hooks. THis is not single use there are so many type of hooks eg:- useState, useEffect hooks. In 02counter project we use useStare hook which will update ui in this hook we have to give value in useState we give random 0 value which will display to you so, we have put this useState in a variable this variable is in the format of <b>ARRAY</b> in which we have given a variable name which we update at 0th index and at 1st index we have given a function which will control the variable (at 0th index). Now we created a hook to unow to update the variable(at 0th index) you have to use function (at 1st index) to update the variable you just have to pass the name or you can (add subtract) in this function only.  



# SOME IMPORTANT NOTE
1. To import jsx directly using import {jsx as _jsx} from "react/jsx-runtime.js"