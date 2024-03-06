import{M as e}from"./MyProject-7350f725.js";import{M as t}from"./MarkdownCell-2eec6931.js";import{m as a,z as i,A as o,C as s,B as g,u as n}from"./index-64cee8c8.js";import"./tag-ecb2b4e0.js";const p=`## Introduction\r
\r
This undergraduate course project extends the PL/0 language by adding new data types, control logic, and language features, and includes the design of an interpreter and an IDE. The specific extension points are as follows:\r
\r
Basic feature extensions:\r
\r
1. I/O Functionality Extension: Adds functionality to handle input and output with extended data structures.\r
2. Data Structure Extension: Adds support for real numbers, strings, and custom types.\r
3. Computational Functionality Extension: Adds support for arithmetic operations with real numbers and strings.\r
4. Control Logic Extension: Adds support for "continue" and "break" statements in the "while" loop.\r
\r
Advanced feature extensions:\r
\r
1. Error Handling: Adds error handling for some of the extended features.\r
2. IDE Design: Configures an integrated development environment (IDE) for the extended PL/0 language using a web-based code editor. Includes features such as code folding, code indentation, auto-completion, syntax highlighting, line numbering, error prompts, and other mentioned features.\r
\r
Other feature extensions:\r
\r
1. Functionality Addition: Adds support for functions, including basic function overloading.\r
2. Module Functionality: Adds support for importing and using other PL/0 extended language function libraries.\r
3. Error Handling: Adds error handling for some of the extended features.\r
4. IDE Design: Configures an integrated development environment (IDE) for the extended PL/0 language using a web-based code editor. Includes features such as code folding, code indentation, auto-completion, syntax highlighting, line numbering, error prompts, and other mentioned features.\r
\r
### Issues to Note When Using\r
\r
When using the program for the first time, it requires importing the "matrix" module from a website. However, this import will actually fail without displaying an error message.\r
\r
If the network loading is fast enough, the program should successfully output the result when run for the second time.\r
\r
There's hardly any bug that can discourage 99% of users like this one.\r
\r
### Additional Explanation of Feature Extensions\r
\r
The main theme of this project's extension to the PL/0 language is "modularity." In the original PL/0 language, modularity could be achieved through procedures, but they lacked the ability to accept parameters, making them less user-friendly. Therefore, the project introduces the functionality of functions.\r
\r
To organize a series of functions that implement independent functionalities, the project introduces the import feature, which is a simplified implementation similar to the \\#include in C, import in Python, or using in C#.\r
\r
To support function overloading, a "custom type" similar to a structure is introduced. It is implemented using an array that can store values of any type. This design is not ideal and violates the static nature of the language's semantics. However, it improves code readability in situations where a single person is responsible for the project.\r
\r
The feature extensions have a simple validation goal, which is to implement and use a matrix module in a language that does not have built-in matrix support.\r
\r
## Background\r
\r
This project is one of the most dedicated course projects during xyq's undergraduate studies.\r
\r
Since the experimental report itself is quite comprehensive, there is no need to elaborate further here.\r
\r
This project is the second Angular project, following the "Hello World" project.\r
\r
## Deployment\r
\r
Running "npm install" may encounter issues.\r
\r
Additionally, the installation of ANTLR is required. Run the "grammar update" task in the ".vscode/task.json" file.\r
\r
## Grammar Feature Introduction\r
\r
### Real Numbers\r
\r
Implemented literal conversion, storage, arithmetic operations, and output for real numbers.\r
\r
\`\`\`pascal\r
// Test: declaration, initialization, output\r
var a: Real;\r
begin\r
    a := 3.14;\r
    write(a);\r
end.\r
// Output:\r
// 3.14\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: real number operations\r
var a, b: Real;\r
begin\r
    a := 3.15;\r
    b := -2.00;\r
    // <br> represents a line break\r
    write(a + b + "<br>");\r
    write(a - b + "<br>");\r
    write(a * b + "<br>");\r
    write(a / b + "<br>");\r
end.\r
// Output:\r
// 1.15\r
// 5.15\r
// -6.3\r
// -1.575\r
\`\`\`\r
\r
### Strings\r
\r
Implemented literal conversion, storage, concatenation, modification, length calculation, and formatted output for strings.\r
\r
\`\`\`pascal\r
// Test: declaration, initialization, output\r
var s: String;\r
begin\r
    s := "alice";\r
    write(s);\r
end.\r
// Output:\r
// alice\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: output\r
var s: String;\r
begin\r
    s := "桃子🍑";\r
    write(s);\r
end.\r
// Output:\r
// 桃子🍑\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: modification\r
var s: String;\r
begin\r
    s := "alice";\r
    s[0] := "po";\r
    write(s);\r
end.\r
// Output:\r
// police\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: concatenation\r
begin\r
    write(1 + "+" + 1 + "=" + (1 + 1));\r
end.\r
// Output:\r
// 1+1=2\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: length calculation\r
begin\r
    write(length("love" + "&" + "peace"));\r
end.\r
// Output:\r
// 10\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: HTML formatting\r
begin\r
    write("a<strong>" + "b</strong>c");\r
end.\r
\`\`\`\r
\r
Output: a**b**c\r
\r
\`\`\`pascal\r
// Test: MathJax formatting\r
begin\r
    write("$\\sum_{i=1}^n " + "i = \\frac{n^2+n}{2}$");\r
end.\r
\`\`\`\r
\r
Output:\r
\r
![page3.2.1.png](page3.2.1.png)\r
\r
No escape functionality is implemented.\r
\r
### Control Logic\r
\r
Implemented the \`break\` and \`continue\` statements within a \`while\` loop.\r
\r
\`\`\`pascal\r
// Test: break\r
var i: Integer;\r
begin\r
    i := 0;\r
    while i <> 10 do\r
    begin\r
        if i = 5 then\r
        begin\r
            break\r
        end;\r
        write(i);\r
        i := i + 1\r
    end;\r
end.\r
// Output:\r
// 01234\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: continue\r
var i: Integer;\r
begin\r
    i := 0;\r
    while i < 10 do\r
    begin\r
        i := i + 1;\r
        if i / 2 * 2 = i then\r
        begin\r
            continue\r
        end;\r
        write(i)\r
    end;\r
end.\r
// Output:\r
// 13579\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: break & continue\r
var i: Integer;\r
begin\r
    i := 0;\r
    while i < 10 do\r
    begin\r
        i := i + 1;\r
        if i / 2 * 2 = i then\r
        begin\r
            continue\r
        end;\r
        if i = 7 then\r
        begin\r
            break\r
        end;\r
        write(i);\r
    end;\r
end.\r
// Output:\r
// 135\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: break within nested loops\r
var i, j: Integer;\r
begin\r
    i := 0;\r
    while i < 5 do\r
    begin\r
        i := i + 1;\r
        j := 0;\r
        while j < 5 do\r
        begin\r
            j := j + 1;\r
            if i + j > 5 then\r
            begin\r
                break\r
            end;\r
            write(i + " " + j + "<br>")\r
        end;\r
    end;\r
end.\r
// Output:\r
// 1 1\r
// 1 2\r
// 1 3\r
// 1 4\r
// 2 1\r
// 2 2\r
// 2 3\r
// 3 1\r
// 3 2\r
// 4 1\r
\`\`\`\r
\r
### Functions\r
\r
Implemented function definition, invocation, function overloading, and function chaining. Implicit operator overloading is explained in the next section.\r
\r
\`\`\`pascal\r
// Test: definition and invocation\r
function max(lhs: Integer, rhs: Integer): Integer;\r
begin\r
    if lhs > rhs then\r
    begin\r
        return lhs\r
    end\r
    else\r
    begin\r
        return rhs;\r
    end;\r
end;\r
begin\r
    write(max(2, 3) + " ");\r
    write(max(3, 2));\r
end.\r
// Output:\r
// 3 3\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: parameter passing: by reference\r
var a, b: Integer;\r
// Swap two integers\r
function swap(lhs: Integer, rhs: Integer): Integer;\r
var temp: Integer;\r
begin\r
    temp := lhs;\r
    lhs := rhs;\r
    rhs := temp;\r
    return 0\r
end;\r
begin\r
    a := 2;\r
    b := 4;\r
    write(a + "," + b + "<br>");\r
    swap(a, b);\r
    write(a + "," + b + "<br>");\r
end.\r
// Output:\r
// 2,4\r
// 4,2\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: function overloading\r
// Get the negation of an integer\r
function doSth(value: Integer): Integer;\r
begin\r
    return -value;\r
end;\r
// Real numbers remain the same\r
function doSth(value: Real): Real;\r
begin\r
    return value;\r
end;\r
begin\r
    write(doSth(2) + " ");\r
    write(doSth(0.2));\r
end.\r
// Output:\r
// -2 0.2\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: function chaining\r
var a, b, c: Integer;\r
// Calculate the positive integer power of an integer\r
function pow(lhs: Integer, rhs: Integer): Integer;\r
var temp, res: Integer;\r
begin\r
    temp := 0;\r
    res := 1;\r
    while temp <> rhs do\r
    begin\r
        res := res * lhs;\r
        temp := temp + 1;\r
    end;\r
    return res\r
end;\r
begin\r
    a := 2;\r
    b := 4;\r
    c := 3;\r
    // The following four expressions are equivalent\r
    write(pow(pow(a, b), c));\r
    write("<br>");\r
    write(pow(a.pow(b), c));\r
    write("<br>");\r
    write(a.pow(b).pow(c));\r
    write("<br>");\r
    a.pow(b).pow(c).write();\r
end.\r
// Output:\r
// 4096\r
// 4096\r
// 4096\r
// 4096\r
\`\`\`\r
\r
### Custom Types\r
\r
The essence of a custom type is a (dynamic) array with a type name.\r
\r
\`\`\`pascal\r
// Test: declaration, assignment, length calculation\r
var a: Array;\r
begin\r
    a[0] := 1;\r
    a[1] := 3;\r
    write(a[0]\r
        + "," + a[1]\r
        // Function chaining\r
        + ":" + a.length()\r
        )\r
end.\r
// Output:\r
// 1,3:2\r
\`\`\`\r
\r
\`\`\`pascal\r
// Test: function overloading & implicit operator overloading\r
// Declare a complex number factory (pseudo)\r
// and two complex number variables\r
var Comp: CompFactory;\r
    a, b: Comp;\r
// Overload the toString function\r
function toStr(v: Comp): String;\r
begin\r
    return v[0] + "+" + v[1] + "i";\r
end;\r
// Overload the addition operator\r
function add(lhs: Comp, rhs: Comp): Comp;\r
var res: Comp;\r
begin\r
    res[0] := lhs[0] + rhs[0];\r
    res[1] := lhs[1] + rhs[1];\r
    return res;\r
end;\r
// Create an integer complex number\r
function create(factory: CompFactory, lhs: Integer, rhs: Integer): Comp;\r
var res: Comp;\r
begin\r
    res[0] := lhs;\r
    res[1] := rhs;\r
    return res;\r
end;\r
begin\r
    // Overloaded + function chaining\r
    a := Comp.create(1, 2);\r
    b := Comp.create(2, 4);\r
    // Complex number addition\r
    a := a + b;\r
    write(a.toStr());\r
end.\r
// Output:\r
// 3+6i\r
\`\`\`\r
\r
### Modules\r
\r
Here's an example using an implemented matrix module:\r
\r
\`\`\`pascal\r
// Test: matrix operations & output\r
import matrix;\r
var a, b: Matrix;\r
begin\r
    a := createMatrix(3, 3);\r
    a.set(0, 0, 5.0);\r
    a.set(0, 1, 8.0);\r
    a.set(1, 0, 3.0);\r
    a.set(1, 1, 2.0);\r
    a.set(2, 1, 4.0);\r
    print(a);\r
    print(a + a);\r
    print(a * a);\r
end.\r
\`\`\`\r
\r
Output:\r
\r
![page3.6.1.png](page3.6.1.png)\r
\r
Verification:\r
\r
![page3.6.2.png](page3.6.2.png)\r
\r
## IDE Design\r
\r
### Overall Interface Description\r
\r
The overall interface is as follows, with the red annotations:\r
\r
![page4.1.1.png](page4.1.1.png)\r
\r
Please note that this screenshot was taken on a Windows 10 system with a screen resolution of 1920x1200 and a 100% zoom level in the Edge browser. The layout may vary on different systems, browsers, and screen resolutions, and there is no guarantee that it will always be user-friendly.\r
\r
### Editor\r
\r
#### Some Out-of-the-Box Features\r
\r
The editor is based on the Monaco Editor and comes with many features out of the box, including line numbering, code folding, code indentation, find and replace, column selection, and editing, etc.\r
~~As a programmers, you know what I mean.~~\r
No screenshots are provided here.\r
\r
#### Syntax Highlighting\r
\r
Syntax highlighting based on lexical analysis results has been implemented. The following is the color scheme:\r
\r
| Lexical Type | Color |\r
|--|--|\r
| String | #3b8737 |\r
| Identifier | #344482 |\r
| Keyword | #0c00ed |\r
| Number | #ff944d |\r
| Comment | #3b8737 |\r
| Parentheses | #4db8ff |\r
| Operator | #9933ff |\r
| Unrecognized | #ff0000 |\r
\r
![page4.2.2.1.png](page4.2.2.1.png)\r
\r
Here's a code snippet with all the above color schemes:\r
\r
![page4.2.2.2.png](page4.2.2.2.png)\r
\r
#### Auto Completion\r
\r
When typing a word or after typing a dot or left parenthesis, an auto-completion window will pop up, as shown in the example:\r
\r
![page4.2.3.1.png](page4.2.3.1.png)\r
\r
The icons can be used to distinguish the types of words.\r
\r
As shown in the example above, you can also view the semantic analysis results for variable types in the auto-completion window.\r
\r
In addition, there is parameter hinting for functions that are not overloaded:\r
\r
![page4.2.3.2.png](page4.2.3.2.png)\r
\r
Due to time constraints, the auto-completion feature is limited. For example, the default variable and function candidates only include the outermost symbol table, and the auto-completion context cannot be modified based on semantic analysis results.\r
\r
#### Error Indication\r
\r
The editor highlights error positions with a red underline based on lexical analysis, syntax analysis, and semantic analysis results, as shown in the example:\r
\r
![page4.2.4.1.png](page4.2.4.1.png)\r
\r
When hovering the mouse pointer over the error position, an error message window will appear:\r
\r
![page4.2.4.2.png](page4.2.4.2.png)\r
\r
![page4.2.4.3.png](page4.2.4.3.png)\r
\r
The error types shown in the example are undefined variables and the resulting issue of not finding overloaded functions. For specific error types, please refer to the [Error Window](#error-window) section.\r
\r
### Output Window\r
\r
![page4.3.1.png](page4.3.1.png)\r
\r
#### Code Execution Process Flowchart\r
\r
Before discussing the various parts of the output window, let's first introduce the steps involved in interpreting the program in the editor.\r
\r
There are two main ways to run the code: one is to run the code interactively during the code writing process, which is used to generate semantic analysis results and automatically execute simple programs; the other is to run the code directly according to the main interpretation process. Apart from the **trigger mechanism**, the main difference between these two approaches lies in the **time limit for execution** and the different **code analysis steps**. Let's start with the latter.\r
\r
(1) Flowchart for clicking the run button\r
\r
![page4.3.1.1.png](page4.3.1.1.png)\r
\r
(2) Flowchart for automatic execution when modifying the code\r
\r
Due to the large size of the flowchart, it is divided into an overall flowchart and several sub-flowcharts.\r
\r
(a) Overall flowchart\r
\r
![page4.3.1.2.png](page4.3.1.2.png)\r
\r
(b) Lexical analysis sub-flowchart\r
\r
![page4.3.1.3.png](page4.3.1.3.png)\r
\r
(c) Syntax analysis sub-flowchart\r
\r
![page4.3.1.4.png](page4.3.1.4.png)\r
\r
(d) Semantic analysis sub-flowchart\r
\r
![page4.3.1.5.png](page4.3.1.5.png)\r
\r
(e) Trial execution sub-flowchart\r
\r
![page4.3.1.6.png](page4.3.1.6.png)\r
\r
#### Input and Automatic Input Section\r
\r
Extended PL/0 code allows for input as well. For example, consider the following code:\r
\r
\`\`\`pascal\r
var a: Integer; b: Real; s: String;\r
begin\r
    read(a);\r
    read(b);\r
    read(s);\r
    write(a + s + b);\r
end.\r
\`\`\`\r
\r
After clicking the "Run" button, three input windows will pop up:\r
\r
![page4.3.2.1.png](page4.3.2.1.png)\r
\r
Enter "123", "3.4", and " , " (without the square brackets) sequentially, and the output will be as follows:\r
\r
\`123 , 3.4\`\r
\r
*Note: Custom types can be read by overloading the \`read\` function.\r
\r
When the program contains an input section, it is evident that trial runs without sufficient information cannot produce accurate program results. To facilitate trial runs, an automatic input feature has been implemented. For example, if the following content is entered in the automatic input area:\r
\r
![page4.3.2.2.png](page4.3.2.2.png)\r
\r
At this point, when modifying the code, the trial run feature can be used to instantly confirm the program's execution results.\r
\r
The automatic input feature is also effective for runs initiated by the run button. In addition to reducing the number of repeated inputs, it is possible to specify only a portion of the automatic input. In this case, when starting the run, only the unspecified input items will be requested. For example, if the original program has three inputs and two lines of automatic input are specified, trial runs cannot be performed. However, during the run, only the third input item needs to be manually entered.\r
\r
#### Symbol Table Display\r
\r
As shown in the above flowchart, after both types of runs, a portion of the symbol table will be displayed. The implemented symbol table is a dynamic single symbol table with scopes, and therefore, the displayed content only includes the remaining scopes after the run, which are non-function and non-procedure symbols in the outermost scope. The displayed format is determined by the \`toStr()\` function corresponding to the symbol's type.\r
\r
For example, consider the following sample code:\r
\r
\`\`\`pascal\r
var a: Integer; b: Real; s: String; c: Cat;\r
function toStr(v: Cat): String;\r
begin\r
    return "Cat:" + v[0];\r
end;\r
begin\r
    a := 1 + 1;\r
    b := 3.14 * 2;\r
    s := "xxxxx";\r
    c[0] := "冰糖";\r
end.\r
\`\`\`\r
\r
The displayed symbol table is as follows:\r
\r
![page4.3.2.3.png](page4.3.2.3.png)\r
\r
The specific structure of the symbol table is described in the latter part of the report.\r
\r
This section also has some design issues, such as not handling cases where the displayed content of variables is too long or when there are too many entries crowding the output area.\r
\r
#### Output Area\r
\r
This section does not have any special design elements other than including a scrollbar to prevent the output area from becoming too large.\r
\r
### Menu Bar\r
\r
The menu bar section is not fully implemented and only includes the following functionalities:\r
\r
(1) Collapse button: It can collapse the menu bar to the left.\r
(2) Settings: Clicking on the "Editor Settings" menu item displays the following modal window:\r
\r
![page4.4.1.png](page4.4.1.png)\r
\r
These two parameters are the loop/call count limits mentioned earlier, which are used to limit the program's execution time. The default values of the parameters are set based on the author's situation. If there is noticeable lag in the input or if manual runs get stuck in an infinite loop for too long, these values can be decreased. Setting the automatic run count limit to 0 will not prompt for exceeding the count limit.\r
\r
The parameters are not stored in cookies, so they need to be set again each time the webpage is opened.\r
\r
### Error Window\r
\r
The implementation of the error window is not complicated. It simply displays the errors collected during trial runs. The effect is as follows:\r
\r
Code:\r
\r
\`\`\`pascal\r
begin\r
    404;\r
    not;\r
    found;\r
end.\r
\`\`\`\r
\r
Error Window:\r
\r
![page4.5.1.png](page4.5.1.png)\r
\r
Clicking on any problem in the list will shift the focus to the editor and move the cursor to the start position of the error.\r
\r
Additionally, let's briefly introduce several types of errors that the PL/0 extended language interpreter can detect.\r
\r
#### Lexical Errors\r
\r
Lexical errors mainly include errors where unrecognized characters are input.\r
\r
Test 1:\r
\r
![page4.5.1.1.png](page4.5.1.1.png)\r
\r
Result 1:\r
\r
![page4.5.1.2.png](page4.5.1.2.png)\r
\r
Test 2:\r
\r
![page4.5.1.3.png](page4.5.1.3.png)\r
\r
Result 2:\r
\r
![page4.5.1.4.png](page4.5.1.4.png)\r
\r
Although these are considered lexical errors, the lexical analysis does not actually produce errors because there is a specific lexical rule for "unparsed" characters. Therefore, these lexical errors are manifested as syntax errors.\r
\r
Furthermore, based on the two tests mentioned above, it can be observed that the number of errors that can be found is not fixed and depends on whether recovery from the errors is possible. The author did not implement any special syntax error recovery strategy.\r
\r
#### Syntax Errors\r
\r
Syntax errors include various errors that do not satisfy the syntax rules.\r
\r
Test:\r
\r
![page4.5.2.1.png](page4.5.2.1.png)\r
\r
Result:\r
\r
![page4.5.2.2.png](page4.5.2.2.png)\r
\r
In the result, the syntax analyzer expects a right parenthesis after "x" to make "(x)" an expression. When encountering the right parenthesis after "1", the syntax analyzer expects the "then" keyword. The error messages are not always accurate, for example, in the following classic example:\r
\r
![page4.5.2.3.png](page4.5.2.3.png)\r
\r
![page4.5.2.4.png](page4.5.2.4.png)\r
\r
Clearly, the error is caused by the missing semicolon on the second line, but the syntax analyzer can only detect the missing semicolon when it encounters the "write" on the next line. Therefore, it is reasonable to report the error at that point, but it is not user-friendly for programmers.\r
\r
#### Semantic Errors\r
\r
Semantic errors are detected during semantic analysis of the syntax tree before the trial run.\r
\r
Test 1:\r
\r
![page4.5.3.1.png](page4.5.3.1.png)\r
\r
Result 1:\r
\r
![page4.5.3.2.png](page4.5.3.2.png)\r
\r
This is an error message for using an undefined variable.\r
\r
Test 2:\r
\r
![page4.5.3.3.png](page4.5.3.3.png)\r
\r
Result 2:\r
\r
![page4.5.3.4.png](page4.5.3.4.png)\r
\r
This is an error detection for an indexed statement based on type inference.\r
\r
Test 3:\r
\r
![page4.5.3.5.png](page4.5.3.5.png)\r
\r
Result 3:\r
\r
![page4.5.3.6.png](page4.5.3.6.png)\r
\r
This is an error detection for a conditional statement based on type inference.\r
\r
Test 4:\r
\r
![page4.5.3.7.png](page4.5.3.7.png)\r
\r
Result 4:\r
\r
![page4.5.3.8.png](page4.5.3.8.png)\r
\r
This is a check for the existence of a function based on type inference from the symbol table.\r
\r
Test 5:\r
\r
![page4.5.3.9.png](page4.5.3.9.png)\r
\r
Result 5:\r
\r
![page4.5.3.10.png](page4.5.3.10.png)\r
\r
This is an example of error localization through error handling.\r
\r
Semantic errors also include many other types, such as duplicate definitions and negative subscripts. Error handling also includes preventing duplicate errors and providing error corrections, but the author did not implement these features.\r
\r
## Project Implementation\r
\r
### Overview of Technologies Used\r
\r
The project is an Angular project. The lexical analysis and parsing stages are implemented using ANTLR4, and the editor uses the Monaco Editor. The entire project is compiled into static pages and hosted on Gitee Pages for display. The following provides a brief overview of the work done in each implementation stage.\r
\r
#### ANTLR4\r
\r
ANTLR (ANother Tool for Language Recognition) is a parser generator that can build and traverse syntax trees by generating parsers from grammars. Similar to Lex & Yacc, ANTLR4 can generate code from lexical and grammar rules that resemble EBNF. Unlike recursive descent, ANTLR4 rules support LL(\\*) and direct left recursion.\r
\r
The project uses ANTLR4.8 to reduce the work in the lexical analysis and parsing stages by writing lexical and grammar analysis rules, generating syntax trees. Subsequently, semantic analysis and interpretation are implemented directly on the syntax tree using the visitor pattern. The advantage of this approach compared to recursive descent is that the explicitly written grammar rules directly determine the order of syntax analysis, and only minimal changes are needed to run after modifying the grammar rules.\r
\r
Official website: <https://www.antlr.org/>\r
\r
#### TypeScript\r
\r
TypeScript is an open-source language built on top of JavaScript with rich object-oriented mechanisms. The main reason for choosing this language is that it is considered the most user-friendly object-oriented language for the target platform and the only designated language for Angular. The basics of TypeScript are very easy to learn.\r
\r
Official website: <https://www.typescriptlang.org/>\r
\r
#### Monaco Editor\r
\r
Monaco Editor is a modern web code editor used by Visual Studio Code.\r
\r
Official website: <https://microsoft.github.io/monaco-editor/>\r
\r
#### Angular\r
\r
Angular is an application design framework and development platform used to create efficient, complex, and sophisticated single-page applications using the MVVM approach. This experiment does not use advanced features of Angular and is mainly aimed at rapid development, preview, and debugging in a modular manner, combined with the existing Ant Design component library, to reduce the effort invested in interface implementation.\r
\r
In this step, TypeScript code is compiled into a single-page JavaScript application for easy hosting.\r
\r
Official website: [https://angular.io/](https://angular.io/)\r
\r
#### Gitee Pages\r
\r
Similar to GitHub Pages, Gitee Pages allows the display of static web pages on the public internet. It provides fast access within China. In addition, the project, PL/0 extension language module, and display pages are all hosted on Gitee.\r
\r
### Lexical and Grammar Rules\r
\r
#### Lexical Rules\r
\r
[PL00Lexer.g4](src/antlr/PL00Lexer.g4)\r
\r
#### Grammar Rules\r
\r
[PL00Parser.g4](src/antlr/PL00Parser.g4)\r
\r
#### Grammar Diagram\r
\r
It is recommended to use the ANTLR plugin for VSCode to generate it with one click.\r
\r
### Introduction to Core Classes\r
\r
#### Symbol Class\r
\r
![page5.4.1.1.png](page5.4.1.1.png)\r
\r
#### Symbol Table Class\r
\r
![page5.4.2.1.png](page5.4.2.1.png)\r
\r
The \`push\` and \`pop\` methods are used for entering and exiting scopes, the \`add\` method is used for adding symbols, \`get\` retrieves the most recent symbol by name, \`getFunction\` searches for a function by name and parameter type, \`bindValue\` modifies the symbol value, and \`importModule\` handles module-related operations in the symbol table (not used).\r
\r
#### Evaluator Class\r
\r
![page5.4.3.1.png](page5.4.3.1.png)\r
\r
The evaluator needs to inject the visitor mainly because when performing arithmetic operations on custom types and string concatenation, it needs to find the corresponding function to call (e.g., \`add()\`, \`toStr()\`). In fact, the injection of \`symbolTable\` is not necessary; it was an insignificant early design mistake.\r
\r
#### Visitor Class\r
\r
![page5.4.4.1.png](page5.4.4.1.png)\r
\r
The \`ParseTreeVisitor\` is a class in the ANTLR4 package, \`PL00ParserVisitor\` is a class generated by ANTLR4 based on the lexical and grammar rules, and it can implement syntax parsing by calling methods like \`visitChildren\` in the visit methods of each grammar rule or modify the visit order as needed. \`PL00InterpretVisitor\` is an inherited visitor class used for actual code execution (including trial runs and manual runs), and \`PL00QuickVisitor\` is an inherited visitor class used for semantic analysis. The execution order of these two visitors is different. For example, the latter only checks the loop condition and body once when encountering a loop, without executing the loop repeatedly.\r
\r
### Module Import\r
\r
To facilitate separate updates of the project and modules, the project uses asynchronous downloading when importing specific files using the \`import\` statement from the web.\r
\r
For example, when entering \`import matrix;\`, the project will attempt to download the code file located at the URL <https://xyqlx.gitee.io/pl00-modules/matrix.pl0>, parse the file using the \`functionDefs\` rule, and insert the obtained function definitions into the symbol table.\r
\r
Since module imports are done asynchronously while other parts of the project use synchronous methods, it may cause issues where clicking "Run" after opening the page does not find the imported module (no matching functions). In such cases, simply click "Run" again after the module has finished downloading (usually within 1 second, you can check the network tab in the browser's developer tools to confirm), and it will work normally.\r
\r
### Other Topics\r
\r
#### Testing\r
\r
To expedite completion, no tests were written for this project. Various bugs may occur during project execution, including but not limited to extreme data resulting in abnormal results, frequent error messages in the developer console, and freezing (when manually running programs with many loops, the lack of execution block separation may cause the UI to freeze for a few seconds, which is a normal phenomenon; if there is an abnormal freeze, it can be forcibly closed using the browser's task manager). The author can only guarantee that all test cases presented in this report, as well as similar code, can run correctly.\r
\r
The test cases in this report are far from comprehensive.\r
\r
Feel free to leave a message in the issues.\r
\r
#### Code Versioning, Hosting, and Deployment\r
\r
The project uses Git for version control and is hosted and deployed on Gitee. The following are the links:\r
\r
Project source code: <https://gitee.com/xyqlx/PL00WebIDE>\r
\r
Modules: <https://gitee.com/xyqlx/PL00-Modules>\r
\r
Demo page: <https://xyqlx.gitee.io/pl00-editor-view/>\r
`,A=`## 介绍\r
\r
本科课程设计，在原有PL/0语法和功能的基础上，扩展了数据类型、控制逻辑、语言功能，并完成了解释器和IDE的设计，具体扩展点如下：\r
\r
基础功能扩展：\r
\r
1. I/O的功能扩展：增加输入和输出扩展数据结构的功能\r
2. 数据结构的扩展：增加实数、字符串和自定义类型\r
3. 计算上的功能扩展：增加实数、字符串的运算\r
4. 控制逻辑上的扩展：增加while语句的continue和break语句\r
\r
高级功能扩展：\r
\r
1. 出错处理：增加对于部分扩展功能的错误处理\r
2. IDE设计：完成基于Web代码编辑器的PL/0扩展语言集成开发环境配置，实现代码折叠、代码缩进、自动补全、语法高亮、显示行号、错误提示以及在下文中提到的其它功能\r
\r
其它功能扩展：\r
\r
1. 添加了函数功能，且支持简单的函数重载\r
2. 添加了模块功能，可以导入并使用其它PL/0扩展语言函数库\r
3. 出错处理：增加对于部分扩展功能的错误处理\r
4. IDE设计：完成基于Web代码编辑器的PL/0扩展语言集成开发环境配置，实现代码折叠、代码缩进、自动补全、语法高亮、显示行号、错误提示以及在下文中提到的其它功能。\r
\r
### 使用时需要注意的问题\r
\r
由于第一次运行的时候需要从网址导入matrix模块，它其实是会运行失败的。然而并不会显示错误消息\r
\r
如果网络加载快的话第二次点击运行应该就可以成功输出了\r
\r
能放着这样一个能够劝退99%使用者的bug也是没谁了\r
\r
### 功能扩展部分的补充说明\r
\r
本项目对PL/0语言的扩展主题是"模块化"。在原PL/0语言中，可以通过过程（procedure）实现模块化，但过程不能传参，比较难以使用，因此引入了函数（function）功能。\r
\r
为了组织实现独立功能的一系列函数，引入导入（import）功能是自然而然的，此功能类似于C语言中的\\#include，Python中的import，C\\#中的using等的简化实现。\r
\r
为了利用函数重载，还引入了类似于结构体的"自定义类型"。其底层用存储任意类型的数组实现，这其实是一个糟糕的设计，尤其是它破坏了语义的静态性。但是它改善单人负责项目的情况下代码的可读性。\r
\r
功能扩展有一个简单的验证目标，那就是在语言没有内置矩阵支持的情况下，实现并使用矩阵模块。\r
\r
## 背景\r
\r
因为实验报告本身比较充分，这里就不多说了\r
\r
其实这个项目是除了Hello World外的第二个Angular项目\r
\r
## 部署\r
\r
npm install可能会出问题。\r
\r
另外，需要安装antlr，运行.vscode/task.json里面的grammar update任务\r
\r
## 语法功能介绍\r
\r
### 实数\r
\r
实现了实数的字面量转换、存储、四则运算以及输出。\r
\r
\`\`\`pascal\r
// 测试内容：声明、初始化、输出\r
var a:Real;\r
begin\r
    a:=3.14;\r
    write(a);\r
end.\r
// 输出：\r
// 3.14\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：实数运算\r
var a,b:Real;\r
begin\r
    a:=3.15;\r
    b:=-2.00;\r
    // <br> 表示换行\r
    write(a+b + "<br>");\r
    write(a-b + "<br>");\r
    write(a*b + "<br>");\r
    write(a/b + "<br>");\r
end.\r
// 输出：\r
// 1.15\r
// 5.15\r
// -6.3\r
// -1.575\r
\`\`\`\r
\r
### 字符串\r
\r
实现了字符串的字面量转换、存储、拼接、修改、求长度、修改以及格式化输出。\r
\r
\`\`\`pascal\r
// 测试内容：声明、初始化、输出\r
var s:String;\r
begin\r
    s:="alice";\r
    write(s);\r
end.\r
// 输出：\r
// alice\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：输出\r
var s:String;\r
begin\r
    s:="桃子🍑";\r
    write(s);\r
end.\r
// 输出：\r
// 桃子🍑\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：修改\r
var s:String;\r
begin\r
    s:="alice";\r
    s[0]:="po";\r
    write(s);\r
end.\r
// 输出：\r
// police\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：拼接\r
begin\r
    write(1 + "+"\r
        + 1 + "=" + (1+1));\r
end.\r
// 输出：\r
// 1+1=2\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：求长度\r
begin\r
    write(length("love" \r
        + "&" + "peace"));\r
end.\r
// 输出：\r
// 10\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：HTML格式化\r
begin\r
    write("a<strong>"\r
        + "b</strong>c");\r
end.\r
\`\`\`\r
\r
输出：a**b**c\r
\r
\`\`\`pascal\r
// 测试内容：MathJax格式化\r
begin\r
    write("$$\\sum_{i=1}^n "\r
        + "i = \\frac{n^2+n}{2}$$");\r
end.\r
\`\`\`\r
\r
输出：\r
\r
![page3.2.1.png](page3.2.1.png)\r
\r
没有实现转义功能。\r
\r
### 控制逻辑\r
\r
实现了while中的break和continue语句。\r
\r
\`\`\`pascal\r
// 测试内容：break\r
var i:Integer;\r
begin\r
    i := 0;\r
    while i # 10 do\r
    begin\r
        if i = 5 then\r
        begin\r
            break\r
        end;\r
        write(i);\r
        i := i+1\r
    end;\r
end.\r
// 输出：\r
// 01234\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：continue\r
var i:Integer;\r
begin\r
    i := 0;\r
    while i < 10 do\r
    begin\r
        i := i+1;\r
        if i /2 * 2 = i then\r
        begin\r
            continue\r
        end;\r
        write(i)\r
    end;\r
end.\r
// 输出：\r
// 13579\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：break & continue\r
var i:Integer;\r
begin\r
    i := 0;\r
    while i < 10 do\r
    begin\r
        i := i+1;\r
        if i /2 * 2 = i then\r
        begin\r
            continue\r
        end;\r
        if i = 7 then\r
        begin\r
            break\r
        end;\r
        write(i);\r
    end;\r
end.\r
// 输出：\r
// 135\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：二层循环中的break\r
var i,j:Integer;\r
begin\r
    i := 0;\r
    while i < 5 do\r
    begin\r
        i := i+1;\r
        j := 0;\r
        while j < 5 do\r
        begin\r
            j:=j+1;\r
            if i+j>5 then\r
            begin\r
                break\r
            end;\r
            write(i+" "+j+"<br>")\r
        end;\r
    end;\r
end.\r
// 输出：\r
// 1 1\r
// 1 2\r
// 1 3\r
// 1 4\r
// 2 1\r
// 2 2\r
// 2 3\r
// 3 1\r
// 3 2\r
// 4 1\r
\`\`\`\r
\r
### 函数\r
\r
实现了函数的定义、调用、函数重载、函数链。隐式运算符重载在下一部分介绍。\r
\r
\`\`\`pascal\r
// 测试内容：定义与调用\r
function max(lhs:Integer,\r
    rhs:Integer):Integer;\r
begin\r
    if lhs > rhs then\r
    begin\r
        return lhs\r
    end\r
    else\r
    begin\r
        return rhs;\r
    end;\r
end;\r
begin\r
    write(max(2,3) + " ");\r
    write(max(3,2));\r
end.\r
// 输出：\r
// 3 3\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：传参方式：引用传递\r
var a,b:Integer;\r
// 交换两个整数\r
function swap(lhs:Integer,\r
    rhs:Integer):Integer;\r
var temp:Integer;\r
begin\r
    temp:=lhs;\r
    lhs:=rhs;\r
    rhs:=temp;\r
    return 0\r
end;\r
begin\r
    a:=2;\r
    b:=4;\r
    write(a+","+b+"<br>");\r
    swap(a,b);\r
    write(a+","+b+"<br>");\r
end.\r
// 输出：\r
// 2,4\r
// 4,2\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：函数重载\r
// 对整型求相反数\r
function doSth(value:Integer)\r
    :Integer;\r
begin\r
    return -value;\r
end;\r
// 实型不变\r
function doSth(value:Real):Real;\r
begin\r
    return value;\r
end;\r
begin\r
    write(doSth(2) + " ");\r
    write(doSth(0.2));\r
end.\r
// 输出：\r
// -2 0.2\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：函数链\r
var a,b,c:Integer;\r
// 求整数的正整数幂\r
function pow(lhs:Integer,\r
    rhs:Integer):Integer;\r
var temp,res:Integer;\r
begin\r
    temp:=0;\r
    res:=1;\r
    while temp # rhs do\r
    begin\r
        res:=res*lhs;\r
        temp:=temp+1;\r
    end;\r
    return res\r
end;\r
begin\r
    a:=2;\r
    b:=4;\r
    c:=3;\r
    // 以下四种写法相同\r
    write(pow(pow(a,b),c));\r
    write("<br>");\r
    write(pow(a.pow(b),c));\r
    write("<br>");\r
    write(a.pow(b).pow(c));\r
    write("<br>");\r
    a.pow(b).pow(c).write();\r
end.\r
// 输出：\r
// 4096\r
// 4096\r
// 4096\r
// 4096\r
\`\`\`\r
\r
### 自定义类型\r
\r
自定义类型的本质是一个拥有类型名的（动态）数组。\r
\r
\`\`\`pascal\r
// 测试内容：声明、赋值、求长度\r
var a:Array;\r
begin\r
    a[0]:=1;\r
    a[1]:=3;\r
    write(a[0]\r
        + "," + a[1]\r
        // 函数链\r
        + ":" + a.length()\r
        )\r
end.\r
// 输出：\r
// 1,3:2\r
\`\`\`\r
\r
\`\`\`pascal\r
// 测试内容：函数重载 & 隐式运算符重载\r
// 声明一个复数工厂（伪）\r
// 和两个复数变量\r
var Comp:CompFactory;\r
    a,b:Comp;\r
// 重载转字符串函数\r
function toStr(v:Comp)\r
    :String;\r
begin\r
    return v[0]+"+"\r
        +v[1]+"i";\r
end;\r
// 重载加法运算符\r
function add(lhs:Comp,\r
    rhs:Comp):Comp;\r
var res:Comp;\r
begin\r
    res[0]:=lhs[0]+rhs[0];\r
    res[1]:=lhs[1]+rhs[1];\r
    return res;\r
end;\r
// 创建整数复数\r
function create(\r
    factory:CompFactory,\r
    lhs:Integer,\r
    rhs:Integer):Comp;\r
var res:Comp;\r
begin\r
    res[0]:=lhs;\r
    res[1]:=rhs;\r
    return res;\r
end;\r
begin\r
    // 重载+函数链\r
    a:=Comp.create(1,2);\r
    b:=Comp.create(2,4);\r
    // 复数加法\r
    a:=a+b;\r
    write(a.toStr());\r
end.\r
// 输出：\r
// 3+6i\r
\`\`\`\r
\r
### 模块\r
\r
这里以实现了的矩阵模块为例：\r
\r
\`\`\`pascal\r
// 测试内容：矩阵运算 & 输出\r
import matrix;\r
var a,b:Matrix;\r
begin\r
    a:=createMatrix(3,3);\r
    a.set(0,0,5.0);\r
    a.set(0,1,8.0);\r
    a.set(1,0,3.0);\r
    a.set(1,1,2.0);\r
    a.set(2,1,4.0);\r
    print(a);\r
    print(a+a);\r
    print(a*a);\r
end.\r
\`\`\`\r
\r
输出：\r
\r
![page3.6.1.png](page3.6.1.png)\r
\r
验证：\r
\r
![page3.6.2.png](page3.6.2.png)\r
\r
## IDE设计\r
\r
### 整体界面说明\r
\r
整体界面如下，其中红色为标注：\r
\r
![page4.1.1.png](page4.1.1.png)\r
\r
注意这是在1920\\*1200的屏幕上采用Windows10\r
100%缩放比率在Edge中的截图。在其它系统、浏览器、屏幕分辨率下，布局可能有所不同，并不保证其总是易于使用。\r
\r
### 编辑器\r
\r
#### 一些开箱即用的功能\r
\r
编辑器是基于Monaco Editor制作的。它不需要设置即可使用许多功能，包括显示行号，代码折叠，代码缩进，查找与替换，列选择和编辑等。\r
~~各位都是老程序员了，懂的都懂。~~\r
这里就不放图了。\r
\r
#### 词法着色\r
\r
实现了基于词法分析结果的着色功能。以下为配色方案：\r
\r
![page4.2.2.1.png](page4.2.2.1.png)\r
\r
附一张包含上述所有配色的代码图片：\r
\r
![page4.2.2.2.png](page4.2.2.2.png)\r
\r
#### 自动补全\r
\r
在输入单词，以及键入点号或左括号之后，会弹出自动补全窗口，效果如图：\r
\r
![page4.2.3.1.png](page4.2.3.1.png)\r
\r
可以根据图标来区分单词的类型。\r
\r
如上图所示，还可以在自动补全窗口中查看变量类型的语义分析结果。\r
\r
此外，对于未重载的函数还有参数提示功能：\r
\r
![page4.2.3.2.png](page4.2.3.2.png)\r
\r
限于时间，实现的自动补全是有限的，例如，默认的变量和函数候选项只包括最外层符号表，且无法根据语义分析结果来修改自动补全的上下文。\r
\r
#### 错误标识\r
\r
编辑器根据词法分析、语法分析、语义分析的结果给错误位置加上红色的下划线，效果如图：\r
\r
![page4.2.4.1.png](page4.2.4.1.png)\r
\r
将鼠标指针移至错误位置，弹出错误原因窗口：\r
\r
![page4.2.4.2.png](page4.2.4.2.png)\r
\r
![page4.2.4.3.png](page4.2.4.3.png)\r
\r
图中的错误类型是未定义变量以及由此产生的找不到重载函数问题。关于其它的具体错误类型请参考[错误窗口](#错误窗口)部分。\r
\r
### 输出窗口\r
\r
![page4.3.1.png](page4.3.1.png)\r
\r
#### 运行代码的步骤流程图\r
\r
在讨论输出窗口的各个部分之前，先介绍一下在编辑器中解释程序的各个步骤。\r
\r
主要有两种运行代码的途径，一种是在编写代码过程中试探性的代码运行，它用来生成语义分析结果和完成一些简单程序的自动运行，另一种是按照主要的解释流程直接运行代码。除了**触发机制**外，这两种运行的最大区别主要是**运行时间的限制**和**代码分析步骤**的不同。以下先介绍后一种。\r
\r
(1) 点击运行按钮的流程图\r
\r
![page4.3.1.1.png](page4.3.1.1.png)\r
\r
(2) 修改代码时自动运行的流程图\r
\r
因为流程图过大，这里分成总流程图和几个子流程图\r
\r
(a) 总流程图\r
\r
![page4.3.1.2.png](page4.3.1.2.png)\r
\r
(b) 词法分析子流程图\r
\r
![page4.3.1.3.png](page4.3.1.3.png)\r
\r
(c) 语法分析子流程图\r
\r
![page4.3.1.4.png](page4.3.1.4.png)\r
\r
(d) 语义分析子流程图\r
\r
![page4.3.1.5.png](page4.3.1.5.png)\r
\r
(e) 试运行子流程图\r
\r
![page4.3.1.6.png](page4.3.1.6.png)\r
\r
#### 输入和自动输入部分\r
\r
扩展的PL/0代码也是允许输入的，例如，对于如下代码：\r
\r
\`\`\`pascal\r
var a:Integer;b:Real;s:String;\r
begin\r
    read(a);\r
    read(b);\r
    read(s);\r
    write(a + s + b);\r
end.\r
\`\`\`\r
\r
点击【运行】按钮后，将会弹出三次输入窗口：\r
\r
![page4.3.2.1.png](page4.3.2.1.png)\r
\r
依次输入【123】【3.4】【 , 】（不含方括号）后，输出结果如下：\r
\r
\`123 , 3.4\`\r
\r
\\*注：可以通过重载read函数来实现自定义类型的读取\r
\r
在程序包含输入部分后，显然缺少信息的试探运行是无法试探得到程序运行结果的，为了配合试探运行，设立了自动输入功能，例如在自动输入区输入如下内容：\r
\r
![page4.3.2.2.png](page4.3.2.2.png)\r
\r
那么此时在修改代码时就可以利用试探运行功能，实时确认程序运行结果了。\r
\r
自动输入对于运行按钮启动的运行也是有效的。除了减少重复输入次数以外，还可以仅指定一部分的自动输入，此时启动运行后仅会要求输入没有指定的项。例如，原程序共有三个输入，指定两行自动输入，那么此时是不能试探运行的，但是在启动运行时，仅需要手动输入第三个输入项即可。\r
\r
#### 符号表显示\r
\r
如上述流程图所示，在两种运行结束时输出结果后还会显示符号表的部分内容。实现的符号表是带作用域的动态单符号表，因此显示的内容只包括运行结束后剩余的作用域，即最外层作用域中的非函数、过程符号。显示的格式是由符号对应类型的toStr()函数决定的。\r
\r
例如对于以下样例代码：\r
\r
\`\`\`pascal\r
var a:Integer;b:Real;s:String;c:Cat;\r
function toStr(v:Cat):String;\r
begin\r
    return "Cat:" + v[0];\r
end;\r
begin\r
    a:=1+1;\r
    b:=3.14*2;\r
    s:="xxxxx";\r
    c[0]:="冰糖";\r
end.\r
\`\`\`\r
\r
显示符号表如下：\r
\r
![page4.3.2.3.png](page4.3.2.3.png)\r
\r
具体符号表结构见报告的后半部分。\r
\r
此部分也存在一些设计问题，例如没有处理变量显示内容过长的情况或者表项过多挤占输出区的情况。\r
\r
#### 输出区\r
\r
这一部分除了包含一个避免输出区过大的滚动条以外并没有什么特殊的设计。\r
\r
### 菜单栏\r
\r
菜单栏部分并没有完成，只实现了以下功能：\r
\r
(1) 折叠按钮，可以向左折叠菜单栏\r
(2) 设置：点击编辑器设置菜单项后，出现下图的模态窗口：\r
\r
![page4.4.1.png](page4.4.1.png)\r
\r
这两个参数即上文提到的两种运行方式中的循环/调用次数限制，用于限制程序运行的时间。参数的默认值是根据笔者的情况设定的，如果感觉到输入的明显卡顿或者手动运行时死循环卡死时间过长，可以调小这两个值。将自动运行次数限制调整到0时不会提示超出次数限制。\r
\r
参数并没有记录在Cookie中，所以每次打开网页都需要重新设置。\r
\r
### 错误窗口\r
\r
错误窗口的实现并不复杂，只是显示在试探运行过程中采集到的错误。其效果如下：\r
\r
代码：\r
\r
\`\`\`pascal\r
begin\r
    404;\r
    not;\r
    found;\r
end.\r
\`\`\`\r
\r
错误窗口：\r
\r
![page4.5.1.png](page4.5.1.png)\r
\r
单击问题列表中的任意问题可以将焦点转移到编辑器并且将光标转移到错误发生的开始位置。\r
\r
以下顺带介绍下PL/0扩展语言解释器能够检测到的几种错误。\r
\r
#### 词法错误\r
\r
词法错误主要包括输入了无法被解析的字符的错误。\r
\r
测试1：\r
\r
![page4.5.1.1.png](page4.5.1.1.png)\r
\r
结果1：\r
\r
![page4.5.1.2.png](page4.5.1.2.png)\r
\r
测试2：\r
\r
![page4.5.1.3.png](page4.5.1.3.png)\r
\r
结果2：\r
\r
![page4.5.1.4.png](page4.5.1.4.png)\r
\r
虽然说是词法错误但由于词法规则中专门设置了"未解析"的词法规则，导致词法分析实际上并不会产生错误，所以这些词法错误是以语法错误的形式体现的。\r
\r
另外，根据以上两个测试也可以看到，能够找到的错误数量不是确定的，具体与是否能从错误中恢复有关。笔者并没有编写特殊的语法错误恢复策略。\r
\r
#### 语法错误\r
\r
语法错误包括各种无法不满足语法规则的错误。\r
\r
测试：\r
\r
![page4.5.2.1.png](page4.5.2.1.png)\r
\r
结果：\r
\r
![page4.5.2.2.png](page4.5.2.2.png)\r
\r
结果中，语法分析器希望x之后是一个右括号，以使(x)成为一个表达式。在解析到1之后的右括号时，语法分析器希望遭遇的是then关键字。提示信息并不总是准确的，例如以下的经典例子：\r
\r
![page4.5.2.3.png](page4.5.2.3.png)\r
\r
![page4.5.2.4.png](page4.5.2.4.png)\r
\r
显然这是第2行没有写分号导致的错误，但语法分析器只有在读到下一行的write时才能发现缺少了分号，因此在此设置错误是合理的，但对于程序员来说并不友好。\r
\r
#### 语义错误\r
\r
语义错误是在试运行之前访问语法树执行语义分析所发现的。\r
\r
测试1：\r
\r
![page4.5.3.1.png](page4.5.3.1.png)\r
\r
结果1：\r
\r
![page4.5.3.2.png](page4.5.3.2.png)\r
\r
这是使用未定义变量的错误提示\r
\r
测试2：\r
\r
![page4.5.3.3.png](page4.5.3.3.png)\r
\r
结果2：\r
\r
![page4.5.3.4.png](page4.5.3.4.png)\r
\r
根据类型推断的索引语句错误检测\r
\r
测试3：\r
\r
![page4.5.3.5.png](page4.5.3.5.png)\r
\r
结果3：\r
\r
![page4.5.3.6.png](page4.5.3.6.png)\r
\r
这是根据类型推断的条件句错误检测\r
\r
测试4：\r
\r
![page4.5.3.7.png](page4.5.3.7.png)\r
\r
结果4：\r
\r
![page4.5.3.8.png](page4.5.3.8.png)\r
\r
这是根据类型推断从符号表检查函数是否存在的检测。\r
\r
测试5：\r
\r
![page4.5.3.9.png](page4.5.3.9.png)\r
\r
结果5：\r
\r
![page4.5.3.10.png](page4.5.3.10.png)\r
\r
这是错误局部化处理的一个例子。\r
\r
语义错误还包括很多其它类型，例如重复定义、下标为负等等。错误处理还包括遏制重复错误、提供错误修正等功能，笔者没有实现这些内容。\r
\r
## 工程实现\r
\r
### 使用技术简介\r
\r
项目属于一个Angular项目。其中，词法分析和语法阶段由ANTLR4实现，编辑器采用Monaco Editor。整个项目在编译为静态页面后在Gitee Pages上托管展示。以下简要介绍各个实现阶段所做的工作。\r
\r
#### ANTLR4\r
\r
ANTLR（ANother Tool for Language\r
Recognition）是一种解析器生成器，通过语法生成，它可以构建和遍历语法树的语法分析器。就像Lex&Yacc一样，ANTLR4可以由类似EBNF的词法和语法规则生成代码。与递归下降法不同，ANTLR4的规则支持LL(\\*)和直接左递归。\r
\r
项目使用ANTLR4.8由编写的词法和语法分析规则减少词法分析和语法分析阶段的工作，生成语法树。随后在语法树上直接使用访问者模式实现语义分析和解释执行。使用此方法与递归下降法相比的优点是显式写出的语法规则直接决定了语法分析的顺序，且修改语法规则后只需要很少的改动就可以运行。\r
\r
这里是官网：<https://www.antlr.org/>\r
\r
#### TypeScript\r
\r
TypeScript是在JavaScript基础上建立了丰富面向对象机制的开源语言。选用该语言的主要原因是它是笔者认为目标平台上最好用的面向对象风格语言，也是Angular的唯一指定语言。TypeScript的基础部分非常易于学习。\r
\r
官网：<https://www.typescriptlang.org/>\r
\r
#### Monaco Editor\r
\r
Monaco Editor是Visual Studio Code使用的现代Web代码编辑器。\r
\r
官网：<https://microsoft.github.io/monaco-editor/>\r
\r
#### Angular\r
\r
Angular\r
是一个应用设计框架与开发平台，用于使用MVVM方式创建高效、复杂、精致的单页面应用。本实验并不使用Angular的高级功能，主要是为了能够以模块方式快速开发、预览与调试，结合现有的Ant\r
Design组件库，减少对界面实现的精力投入。\r
\r
在这一步TypeScript代码编译为单页JavaScript页面，便于托管。\r
\r
官网：[https://angular.io/](https://angular.io/)\r
\r
#### Gitee Pages\r
\r
和GitHub\r
Pages类似，能够在公网展示静态页面。在国内访问较快。此外，本实验的项目本体、PL/0扩展语言模块、展示页面都托管在Gitee上。\r
\r
### 词法与语法规则\r
\r
#### 词法规则\r
\r
[PL00Lexer.g4](src/antlr/PL00Lexer.g4)\r
\r
#### 语法规则\r
\r
[PL00Parser.g4](src/antlr/PL00Parser.g4)\r
\r
#### 语法图\r
\r
这里推荐用VSCode的ANTLR插件，一键生成\r
\r
### 核心类介绍\r
\r
#### 符号类\r
\r
![page5.4.1.1.png](page5.4.1.1.png)\r
\r
#### 符号表类\r
\r
![page5.4.2.1.png](page5.4.2.1.png)\r
\r
其中，push和pop方法用于进出作用域，add方法用于添加符号，get按名获得最近符号，getFunction按名和参数类型搜索函数，bindValue修改符号值，importModule负责符号表相关的模块处理（并没有用）\r
\r
#### 运算器类\r
\r
![page5.4.3.1.png](page5.4.3.1.png)\r
\r
运算器需要注入visitor的主要原因是在调用自定义类型的四则运算以及字符串拼接时，需要寻找与调用对应的函数（例如add(),toStr()）。实际上不需要symbolTable的注入，这里是一处影响不大的早期设计失误。\r
\r
#### 访问者类\r
\r
![page5.4.4.1.png](page5.4.4.1.png)\r
\r
其中ParseTreeVisitor是ANTLR4包中的类，PL00ParserVisitor是ANTLR4根据词法语法规则生成的类，可以通过在各语法规则的访问方法中调用visitChildren等来实现语法解析，也可以按照需求修改访问顺序。PL00InterpretVistor是用于实际执行代码（包括试探运行和手动运行）的访问器继承类，PL00QuickVistor是用于语义分析的访问器继承类。这两者的执行顺序并不相同，例如，后者在遇到循环时，只会检查一次循环条件和循环体，而不会循环执行。\r
\r
### 关于模块导入\r
\r
为了方便项目本体和模块能够分别更新，项目采用了从网络导入的方式。也就是将模块托管在公网上、项目使用import语句导入特定文件时，异步下载的方式。\r
\r
例如，在键入import\r
matrix;时，项目将试图下载位于网址<https://xyqlx.gitee.io/pl00-modules/matrix.pl0>的代码文件，并使用functionDefs规则来解析文件，并将得到的函数定义插入到符号表内。\r
\r
因为模块导入采用的是异步方式，但项目的其它部分采用的是同步方式，可能导致在打开页面后点击运行模块未导入（找不到匹配函数）的问题。这时候在模块下载好之后（通常不到1s，可以打开开发者工具的网络选项卡确认）再次点击运行即可正常使用。\r
\r
### 其它话题\r
\r
#### 测试\r
\r
为了尽快完成，本项目没有写测试。项目运行可能出现各种bug，包括不限于极端数据结果异常、开发者选项Console频繁报错、卡死（手动运行循环较多的程序时，由于笔者没有拆分执行块，会导致UI卡死数秒，这属于正常现象，不正常的卡死可以用浏览器的任务管理器强行关闭）等问题。笔者只能保证本报告中出现的所有测试用例以及与其相似的代码是能够正常运行的。\r
\r
本报告中的测试用例也远未达到全面的程度。\r
\r
欢迎在issue留言，\r
~~我什么都不会做的~~\r
。\r
\r
#### 代码版本管理、托管与发布\r
\r
项目采用git进行版本管理，在Gitee上进行托管和发布，以下是地址：\r
\r
项目源代码：<https://gitee.com/xyqlx/PL00WebIDE>\r
\r
模块：<https://gitee.com/xyqlx/PL00-Modules>\r
\r
展示页面：<https://xyqlx.gitee.io/pl00-editor-view/>\r
`,d="data:image/png;base64,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",c="/assets/page3.6.1-94acacee.png",l="/assets/page3.6.2-85b466a2.png",h="/assets/page4.1.1-dc6100bb.png",u="/assets/page4.2.2.1-49e6db9c.png",f="/assets/page4.2.2.2-43a9bf86.png",m="/assets/page4.2.3.1-7e548be0.png",b="/assets/page4.2.3.2-ebd90582.png",w="/assets/page4.2.4.1-57e064ab.png",x="/assets/page4.2.4.2-e8d694af.png",y="/assets/page4.2.4.3-411f0347.png",v="/assets/page4.3.1.1-655de134.png",I="/assets/page4.3.1.2-98b9f3f8.png",E="/assets/page4.3.1.3-cf79c3cb.png",B="/assets/page4.3.1.4-0c33ec0c.png",C="/assets/page4.3.1.5-ba32e522.png",R="/assets/page4.3.1.6-261e4841.png",j="/assets/page4.3.1-ddab4d66.png",Q="/assets/page4.3.2.1-b09661bb.png",M="/assets/page4.3.2.2-01ee153d.png",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAAChCAYAAAH4qZoFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAyZSURBVHhe7d1LcuJKAgXQt01tSsFKpGH3AsSsN1DgwdsAIWpUQ7VSHxA/GzBWkqpzIjIM+FMuRcb1JRHKfxpm56DP7NevXw763C4OepZlwy1+ipkegYMegYMegYMegYP+w8rtcKOph48OehQOegQOegQOegRXDvox8PmuTZMVm6bZVU2+9oc0qsNB3+/3xkzDTI/AQf8B1W64MdFl++DioFva/b5wDLvRHuhwqDdF1tYTf0ijctAjcdBn9k+Y6szHAZ+ZAz6D41q6Az47B3xmDvjMHPCZnRzw6bou31etLpdNzPCZOeAzc8Bn5oDPzAH/IXlWdh/rdX7y0r0DPrPugF97EdT4mWGGz8wBf7Fy8uQxPPGpivzkCaUD/mKH1+t3VXvA82bTHvApB3xmXtOcWXfAPz4+ujuwNGFud5NclLNUYW6b5CyaSc7imeQsnknO4pnkLN6nk/zauVvwLqYn4n9GkrN4JjmLZ5KzeCY5i2eSk6C6KbO8yVbVcH/TNNvycD2bcyY5i2eSs3gmOYtnkrN4Jjlv7vMr0IT3uQXjhVSvXbHGJGfxTHIW7zDJYclMchbt9+/fJjnLZpKzeCY5i2eSsyjjhVWnbk/yXdVk2enF5OCttXP2GknO4pnkLJ5JzuKZ5CyeSc7imeQsnknO4pnkLN7NSR6ugxjebQEpCPM1D5epKC4vSvHpJIcUbIp+roYLgI63p9QVFs8kZ/FMchbPJGfxTHIWzyRn8UxyFs8kZ/FuTvLwXrlrFzSH2MZd3+p13r1oWe2GKyaGt2weLsx/dHOShx907xZyMKcwqYPw6mbYceIQxsNuE+fUFRbPJGfxTHIW7zDJ9/u9YSxySHIWzyRn8UxyFs8k562FF3ymxgt6nrzos6ua/MqLQKObk/za1UFhbtMXJMMLP+O83BT9+znHF3/GF4jKh65q29RXXyKFuYU31IeX77tXN4v+Dcv12RVsu5f424n+2KWbYSFMchbPJGfxTHIWzyQHWIBDkNteHyAtIbdPGrkgB0iLIAdInCAHeEPjLj/dtYS+8FSQb4rhfHWnmgP8oLrJ119H+VNBPr6FIstO35AEwGvcE+Cjp4IcgPchyAESJ8gBEnc1yK9d8NYwDMN4z6GRAyROkAMkTpADJO6pIA/vOALgOdcytCr69+eELSWC8Q2X92x98u0gf+SkdQCO+1JdvDt+Wx42u7r5NVc8HeR5Fq4D4J2dAA9rAztcR6Xbp7C9HT72mXq8vkrY2K3bAG4I9s88FeQAvA9BDpA4QQ6QOEEOkDhBDpA4QQ6QOEEOkDhBDpC454J8V3UnqgNwn00x2Ui5zdByO9xuTd+GH94YNCrvzFmNHCBxghwgcYIcIHGCHCBxghwgcYIcIHGCHCBxghxgLtvT3X6q1enmPJticn9X9RtP3OHpIO93svh6CyKAJbvY7nLY/ad7fLidFZvDXpyjsr0fdlur27jOija0i3GHoPZ72q8Pws8of2qrt1yAA3TON0ce8zEEdXCelyGkQ2gHXSNvw37c2i008npdHv443Lsn8tONHID3IMgBEifIARJ3EeQfHx/DLQBSEHL7JMgBSJMgB0jcIcj//Pkz3ALg3YXMDssqllYAEibIARInyAESJ8gBEifIARInyAESJ8gB3k7dX9L27MqKtwhygHd15+YSTwV594O35d27VwDwuLDxxD2eCvK828Uia6rd8AAALxVy9l6PB/mwm0X4KMgBXm/cQeheTzVyAN6HIAdInCAHSJwgB0icIAdInCAHSJwgB0jcRZDv93vDMAwjoaGRAyROkAMkTpADJE6QAyROkAMkTpADJE6QAyTuiSCvm3I73ATgQXWTFef7q9X9Pg+7qt/nYdiBrV7n/eNfeDLI+41BBTrAYz7fNGIoykOghyC/x7ca+aO7WAD87cI+nOMua+e9PMuG4J7sxHbP3siCHGBGx9w8XabO18dFlOmmy/esfDwX5OvK5ssATwr5mWXlcLv9uOsztRurang83P+xpRUA3okgB0icIAdInCAHSJwgB0icIAdInCAHSJwgB0icIAdInCAHSJwgB0icIAdInCAHSJwgB0icIAdInCAHSNzjQb6r+q2HtvdsQARAv+PP5rCxctgLqN+Aud8lqBw2kAibSoz7dOZhw4lxy7cvPNXI88zGywCPGHf+CUKGjsLWb4ewbovyMVs3J9u/febxIG//QgTTPeUAuK1r3MNqxqFxdyHdt/SufbdCSx/39Jy286881cgBeB+CHCBxghwgcYIcIHGCHCBxghwgcYIcIHEXQb7f7w3DMIyEhkYOkDhBDpA4QQ6QOEEOkDhBDpA4QQ6QOEEOMJN+M4lR3W80MTG9P17a9h6CHOAbsmF3n3C98Qvjjmqjkx1/+t2BRvmqaqpt1dTDng/jdcnv8VSQh38gy7LTXxDgL3MtbEM2hnFyuw300/YdNpSou80jyvbzdfu58Ws3J0G+uStnHw/y878wAH+p2zulDftzXsnL8Hi/80/dVOvJ8kkb4F27F+QAMzpZKmkd8vFGkA8hPW68HL5m3MszbP0W7ufDH4cfX1oJf4XCU4D7tgUFWK7QrvtlkRDSdX+7KPsgb4X7IdD7kK4mL2IeX+wcXwQdg71aHdfd7ynOTwU5AO9DkAMkTpADJE6QAyROkAMkTpADJO4iyP/8+TPcAuDdhczWyAESJ8gBAOANXBTy0NI/Pj6aX79+GYZhGIZhGIbxwhF69rgyfnOFPHwhAADwM0LfVsgBACAShRwAACJSyAEAICKFHAAAIlLIAQAgIoUcAAAiUsgBAOAr27Ipt8Pt1qbImqzYDPe+Z75C3v4nsqz9xYeRr+vhEwAAkJjQbVdV84pGG2mFfNOUWd5Uu+EuAAAkoW6q1etWx4N5CvmuavKsbGv4SCEHACAhF332dWZaIR+eSYynrBSlQg4AQDK6c8Ynp1+PY3pe+bNmKuQAAMA1CjkAAESkkAMAQEQKOQAARKSQAwBARAo5AABEpJADAEBECjkAAESkkAMAQEQKOQAARKSQAwBARAo5AABEpJADAEBECjkAAEQ0UyGvm2qVNeV2uAsAADPaFFmTZcMoNsOjZ7bl8Wvacd5d63U++XzZ3PgpD1PIAQBYrlCyV1XbRh8XSny+7r+zK+PTIr+rmvxFpXzWQp5leVPthoe6/8TkPgAAvFTooG3f3IbeOa5s39k/u9Xys8Ld9dfh59xaZX9C1BXy8ExjfNYBAACvda2Dfn7mRndqy8WK+vXvCV/7ijNA5l0hn/7nrj3rAACAVzrvnNP709tfnILSnbLyQ112pkIOAABco5ADAEBECjkAAESkkAMAQEQKOQAARKSQAwBARAo5AABEdFch3+/3hmEYhmEYhmH8wLBCDgAAESnkAAAQkUIOAAARKeQAABCRQg4AABEp5AAAEJFCDgAAESnkAAAQ0WyFvF7nTZZlwyibzfA4AAB8x6Zo+2VxbJd972z75q5q8ixvqt3wibaBlm0Xzdf1E9/zv+5juR0ebuqmWp3+jGfNU8gv/mMAAPBC27LJVlVTtUU7FO6jvjiX69BHzxaFn/ieUOTz9vHyhd12thXyo/5ZxvHZBQAAfFNYAF6VTRmK9FnPDCW6LPryPa3dz3xPWEnP28cvyv03zLhCPp6ucv4MBAAAnnV56sjh9JOwAn719JN/H/+e//y367PpnrICAABcpZADAEBECjkAAESkkAMAQEQKOQAARKSQAwBARAo5AABEpJADAEBECjkAAESkkAMAQEQKOQAARKSQAwBARAo5AABEpJADAEBECjkAAPHsqibPsiY7jLypdsPnnlY31Spryu1w90T43PV/Y1P0jx8/tj+jKCe/25Wxqtqf+D0KOQAA89uGols2m+Huw7oi/9n3D8V7Oy38oWj3ZT1fjzX6sqCPhbwTfs+i6r7noox/5/efmK2Qh2cYWXH8let19ZL/AAAAqflsBftoU0wK73mBPy/k3f3TYn0ifL5bze4LeD4U7MvfYdOU05/T/bvTEn42klkhD/+RF/yyAAAsQ1isPa5S3/DZ6SxfrpCHYj1+flqyxxXxy5Xx/nNlU4YV8rCyXmyaep03WfvEoDz5Pcbx2b9/v5lWyPtnQVbIAQDoDf3wvNS2RbsMRf18Qbdbqf6kkHf3j58fTzvpCvXJwvBpEe/O4hg+P67IH09ZGYv8+Luej6QKOQAAzCOU8PPV966Yj0X6izM3+kI+Le4KOQAALJZCDgAAESnkAAAQkUIOAAARKeQAABCRQg4AABF9WcjDgx8fH90XGoZhGIZhGIbxuhF69rSM//79u/k/KBbjowE4AvAAAAAASUVORK5CYII=",D="/assets/page4.4.1-10356fd1.png",L="data:image/png;base64,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",G="data:image/png;base64,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",P="/assets/page4.5.1.3-03873836.png",z="/assets/page4.5.1.4-27f04d16.png",H="/assets/page4.5.1-78f6ab57.png",k="data:image/png;base64,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",X="/assets/page4.5.2.2-8d8e412e.png",N="data:image/png;base64,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",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAAA5CAYAAAFmN+2yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAwcSURBVHhe7Z1Lbuy4DobvYoLs7AwOkK3UtNZwkGGWECDowW0EPT/IvHHSg0ZvoFo/KUqkLNuqiitx0j+BD+WHHiRFSq6Hy/87fSH5gsb88/eXYNaY25ubeOzpcDo+uf0dEoyBAc/upB2DIbL/80c493y4Od19/yFGhnq5/Ov9t0Jb9+GnK5+4Te3cHh4n/QupLtp4+N44uOG/EWafETXmi8iXMeYLGdKJuc+IM+TldHf/ItvHm29lGrbpEft3N3la3iHFEMzZtjB65Y1jxxCsAzAaDpiuB3CKOqa8pvUB5VDPryviwGbdqXX9fj0ma5U7/4VC69ef3ROfDU6/lOuJDkon7MjHwUHZIf1BSdcotrT74/L2zh23ywLbPz65ZTkt2bgksKX8LpXBZYKdl3r5rSKWeJx7zcfxllQuBXL59hVLPZZ47PtXHK9lUvmk7126BMFliOia+rOy/pKk1IfdsDFx+udRL12gS7JFj/V0mbZTyuQ6Larr9Ljx6TNlzcBzmXPkEnbhPcrtyoU4p68dooNC2ZVwUHYoHJQdCgdlh8KFfodwUHYIB2WHdAdl7s2Qf7cK5F1x82E7zvfe7ZJxuoNijjXn4uMJf9x+dlDKybvgFzluH2n4AbNvW/BOVrat3Vy/u53alH6f9KMa/02O/CLgoGX9O3octzY8KIM20K99lFPP68cpOI4yXgd7BRKQTqfn3K/9asBeTS/UaYN77Z28MTQo2pEOjHeCL+fLS538CjAQaAN1sW3HK1l5DGIeSDgAdSwA1Jl1UPyrfTQig5VesQ2ek/OOT49OZ9jQOCoH3NE5rLThgsoGBTrB2eZ8GwzoJ3VQPus1N+OswTXlQm4tuJrpews4KDuEg7JDOCg7RAeFsivhoOxQOCgUyoAwUSiUAamJ8sf/T6fffyOEdKiJ0nkHQwhRmCiEDMBEIWSA4USxmwmwjS9F7QtQ8HDIX97aF7XuC+E55IYE+xIW33o331z7L4HxBa7/chbb73LzaO6rPW5fPK+xiY4THV7CPaLLxPtJC0/X8V3/S/51LJb8l/EjyBftPVvCMY0d++L+UsZXlNT50i8kgAU7jvvB9b+yMOCcti0LQA0w/VmMBEpCfmKCxFpIFBuo8iuG3K8er3duA0vSmtxRRylrQdoEq+lpzrd2H76nNpKf7NcTUUe1p/qi3dd22/PTRFHKLzbutQ/oENoS+yxRclvpeC8YzR6rD72Lf2xSyHqEso1ufiLF65yfvJ7QLSSzaxM61LJqg5+g/XiOUGy5gLMuvez3UlAQqwaCG8dtuxoc/1klOqai9bWsJkt0oA2u9eORIExO9U62gbKBsX4tUaSP7CwLBPyjTC1jehzKIFjfltjyE6cmANCPbxt+gi2jiWJtW1ls390/Ltovx11/ePV+rhOB6gxdRcd8PJD8KOeSzigniZ4SXian1Eeo58pi3/tF/JDKmx6tn0wH+62c4YMfWDz1/IVt08cnSi9p/DHvm0vgexRCBmCiEDIAE4WQAWqiUCiUWWGiUCgDwkShUAaEiUKhDAgThUIZECYKhTIgTBQKZUA0Uf761b1ZhRCiaKJgp/MlCyFEYaIQMgAThZABmCiEDMBEIWQAJgohAwwnir8Lze5Ym0dvQdU74ZT2DjR/j3zvtl7DtwHkeHMLKiHXZixR5Jbb+kcFeJJmDXx9bAJuHdXgjbdo9pDbTcutmY+n11K3UpIi4e/ztluA3yNRugns7olfZCMdWx3kvny3v0T7PwBG93bgNzPzRxarWCzF28fXsMm6Z4s/ZrHzVpuHV5R2Zgd2DzPw9yRjG8HflrfzcE57DlgAYvWqK1j8gwSfKPhnmNpmKvek93NjG6/q+Fw/1cExuw9b799OQZ+2tY6Wxbbc6236ZwfLNvpGUoc6dq4mPvaP9zFRzB60h/M2mdh+6Se/SvlGh4Ilq0xgOKY23h5goz46xOy1+9Zlu0k6w///QS2f2kA/WQcbG19Wy2m7+j8BWk70nfNTaj/aU++Ft30p5/yBffOXjdfD2lUN+nf7Ex+eyaaJAsXUkDgg0xVmIVFyElhgITGQEDaDzK8oNaF8ENrxmniqo2wXZ1pdJfTlXgUET95GP1YW/Uqw5kBrdfSJ0tu3dtvzoW8HfP98SL5O5c0eq2v7tqJU2zuzdmOPJJ/zTzkHPZqyUbfqQ9Fj1k/O5kS7QpY2U328Rn/UpPLtDeH0uYTBROkH9lxCtH+JY8cLSeleeygXjhWH1ss5ceRiomgQ4VXrxyTAsZIoqR11XkymyxJFKYmSyl0zUXDc+m8vL6aJEoMxkPqNxx5PR7PJ24o+mrJRt+VEMXvK+bztgx/Yv+IY0R+1rG9vhNjn+QyvKAgqBIEOgr9cyNt5UMBqoiRkgJPRKIs20YYP6OKI5PBJ/Zwok0uvhURBe+gDgzeXKKaHBQp01DZyAmMQmwCQfsT+uiJiG5eBY4mi5a0t6RP18/mqQ20LQFfrL9pb7RN7cuCZjthuscsm+KCWT20kW3GJ4+v5ssEvUideenX9lMpGe9pLL4unvr/MP3i1OmU8He2xng/PYTxRyFV46wBeFRfsm4HkyxOaYf9Ldi2QNNMrkPNgohAyABOFkAGYKIQMwEQhZAAmCiEDaKLg+Y2dk4QQRROFQqEsChOFQhkQJgqFMiBMFAplQJgoFAqFQtlEuKBQKBQKZRPhgkKhUCiUTYQLCoVCoVA2ES4oFAqFQtlE4oKCX9r/+rP7C2NCCCFkibig8B5HQgghF8IFhRBCyCZwQSGEELIJXFAIIYRsAhcUQgghm8AFhRBCyCZsvqDIswLzc/c8x6fHkz1uOZAfx9bWi8/yA/qQzN4zIMeZ0eH7j/J458i3yaPT8JxEPD5tql99FmU4LuXzw0799pZIux1d98LTQXy82aPtFv2oY9wbn48BcbvN2Mw9w3MIjMGeH324wptsHwH+SXGj8wti6Ap5moEtZR4bHZfZclVXnUM/dh7YdEEJEyqSvkwiyWg3oXQn3gCcZI6JCbled4agT2wHA9HXu0HOHZItUx16C6kEjZ/8/PZn5xxb3nVBeWdWddluQYn4HBngUy0oZ9r2ZvRiteZ0naSnZd/OtRYU7Ms89IHj/C4fecHI+M6iHcCEJKabiEvZDBy6MMjTPkbpBE9nAqwDNdV9Moh+klncnksa6JR8YToU35ieqkO11yfgNDme87bomdqxcwjs4O/Wx2k/Jplr19uSkfacH17v89P1pV3XT7antNXpt/q/6TfbNx8L0f7WZu2r+t3OV19G307GtvVvxw/z+HHq9I22st16LsZH1CW2Vc67uJ3qPkfr49h2nQAb2/O4+j5iDKy36+uWeJmzzcqeG0/5/Lwvpv1VYjxcFF9+Lml1v4TWvvac7++d2XxBqcFXj8Gp5zqwtFOSDIM+n7hDfXSTf7ndaVLEgHo+5OD5+XJ6tcD1wen77PbfYxrg8EfVoUmwSXnVsU32WCdRfGv1FtrJFB+3tiwFcudcjZNpHwbsnegMFv3YSfhQf+18wvllrf74mCq1veTrENdot/q+p1c81o4V9nt+jHHUQ9rt1XX9a5nGzu6Ymz0r7S5OfK1tje0D8eRzBUTftUz7K6Cvng1D8dFvtzdHbsaiX6/Pdd+hSLJ9Ox3TpDtxoEtabB/9eRnEdiBqoNZjFQzsuYOEgb09pKvwTrvtBF7pB6zqh/bmgjbhJ5/sm36yTwOx1ScGsi+ftp0Ovtwk+P0YCE07QQfsLywo2S++/fAOZXYCyOfnxlb68bbnfmZjIY7PcsLn8x07S3+NblrenZ/4YQ30n2LVfwyW+sB+9F2rd3usHZ98/qLJpLE54P3V9Cm+8fW0bM3D9Xa78TJnm5VdiScdIzcmOYZaf1ZiTPTOzc0t03GKbckc43XNPuu217Gry0K5qT7vy+bfofjV247DyLkBGQdBFhNXAyf32QTgBAuqRAycabvnMQ3+SE4c0/MDB5tM+egE/NSMToA7IFzAdFg7f30wT4zMQ8vlZA7+KgsKIZ8NLihvYK8LSn4XUFm52CSbwQWFEELIJnBBIYQQsglcUAghhGwCFxRCCCGbwAWFEELIJsQF5a9f+hhgLCyEEELIGcQFhUKhUCiUC4ULCoVCoVA2ES4oFAqFQtlATqd/AZiZmt/WEy5RAAAAAElFTkSuQmCC",O="data:image/png;base64,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",S="/assets/page4.5.3.2-fd3dab6f.png",F="data:image/png;base64,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",U="data:image/png;base64,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",Z="/assets/page4.5.3.5-902e6781.png",W="data:image/png;base64,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",K="data:image/png;base64,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",q="data:image/png;base64,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",V="/assets/page4.5.3.9-b94ba2c2.png",J="/assets/page4.5.3.10-169bb368.png",_="/assets/page5.4.1.1-ced984bf.png",$="/assets/page5.4.2.1-c9c1dff3.png",nn="/assets/page5.4.3.1-9925283f.png",rn="/assets/page5.4.4.1-dabe466e.png",An=a({__name:"PL00WebIDE",setup(en){const r={"page3.2.1.png":d,"page3.6.1.png":c,"page3.6.2.png":l,"page4.1.1.png":h,"page4.2.2.1.png":u,"page4.2.2.2.png":f,"page4.2.3.1.png":m,"page4.2.3.2.png":b,"page4.2.4.1.png":w,"page4.2.4.2.png":x,"page4.2.4.3.png":y,"page4.3.1.1.png":v,"page4.3.1.2.png":I,"page4.3.1.3.png":E,"page4.3.1.4.png":B,"page4.3.1.5.png":C,"page4.3.1.6.png":R,"page4.3.1.png":j,"page4.3.2.1.png":Q,"page4.3.2.2.png":M,"page4.3.2.3.png":T,"page4.4.1.png":D,"page4.5.1.1.png":L,"page4.5.1.2.png":G,"page4.5.1.3.png":P,"page4.5.1.4.png":z,"page4.5.1.png":H,"page4.5.2.1.png":k,"page4.5.2.2.png":X,"page4.5.2.3.png":N,"page4.5.2.4.png":Y,"page4.5.3.1.png":O,"page4.5.3.2.png":S,"page4.5.3.3.png":F,"page4.5.3.4.png":U,"page4.5.3.5.png":Z,"page4.5.3.6.png":W,"page4.5.3.7.png":K,"page4.5.3.8.png":q,"page4.5.3.9.png":V,"page4.5.3.10.png":J,"page5.4.1.1.png":_,"page5.4.2.1.png":$,"page5.4.3.1.png":nn,"page5.4.4.1.png":rn};return(tn,an)=>(i(),o(e,{project:"PL00WebIDE"},{default:s(()=>[g(t,{en:n(p),zh:n(A),urls:r},null,8,["en","zh"])]),_:1}))}});export{An as default};
