## Introduction

This undergraduate course project extends the PL/0 language by adding new data types, control logic, and language features, and includes the design of an interpreter and an IDE. The specific extension points are as follows:

Basic feature extensions:

1. I/O Functionality Extension: Adds functionality to handle input and output with extended data structures.
2. Data Structure Extension: Adds support for real numbers, strings, and custom types.
3. Computational Functionality Extension: Adds support for arithmetic operations with real numbers and strings.
4. Control Logic Extension: Adds support for "continue" and "break" statements in the "while" loop.

Advanced feature extensions:

1. Error Handling: Adds error handling for some of the extended features.
2. IDE Design: Configures an integrated development environment (IDE) for the extended PL/0 language using a web-based code editor. Includes features such as code folding, code indentation, auto-completion, syntax highlighting, line numbering, error prompts, and other mentioned features.

Other feature extensions:

1. Functionality Addition: Adds support for functions, including basic function overloading.
2. Module Functionality: Adds support for importing and using other PL/0 extended language function libraries.
3. Error Handling: Adds error handling for some of the extended features.
4. IDE Design: Configures an integrated development environment (IDE) for the extended PL/0 language using a web-based code editor. Includes features such as code folding, code indentation, auto-completion, syntax highlighting, line numbering, error prompts, and other mentioned features.

### Issues to Note When Using

When using the program for the first time, it requires importing the "matrix" module from a website. However, this import will actually fail without displaying an error message.

If the network loading is fast enough, the program should successfully output the result when run for the second time.

There's hardly any bug that can discourage 99% of users like this one.

### Additional Explanation of Feature Extensions

The main theme of this project's extension to the PL/0 language is "modularity." In the original PL/0 language, modularity could be achieved through procedures, but they lacked the ability to accept parameters, making them less user-friendly. Therefore, the project introduces the functionality of functions.

To organize a series of functions that implement independent functionalities, the project introduces the import feature, which is a simplified implementation similar to the \#include in C, import in Python, or using in C#.

To support function overloading, a "custom type" similar to a structure is introduced. It is implemented using an array that can store values of any type. This design is not ideal and violates the static nature of the language's semantics. However, it improves code readability in situations where a single person is responsible for the project.

The feature extensions have a simple validation goal, which is to implement and use a matrix module in a language that does not have built-in matrix support.

## Background

This project is one of the most dedicated course projects during xyq's undergraduate studies.

Since the experimental report itself is quite comprehensive, there is no need to elaborate further here.

This project is the second Angular project, following the "Hello World" project.

## Deployment

Running "npm install" may encounter issues.

Additionally, the installation of ANTLR is required. Run the "grammar update" task in the ".vscode/task.json" file.

## Grammar Feature Introduction

### Real Numbers

Implemented literal conversion, storage, arithmetic operations, and output for real numbers.

```pascal
// Test: declaration, initialization, output
var a: Real;
begin
    a := 3.14;
    write(a);
end.
// Output:
// 3.14
```

```pascal
// Test: real number operations
var a, b: Real;
begin
    a := 3.15;
    b := -2.00;
    // <br> represents a line break
    write(a + b + "<br>");
    write(a - b + "<br>");
    write(a * b + "<br>");
    write(a / b + "<br>");
end.
// Output:
// 1.15
// 5.15
// -6.3
// -1.575
```

### Strings

Implemented literal conversion, storage, concatenation, modification, length calculation, and formatted output for strings.

```pascal
// Test: declaration, initialization, output
var s: String;
begin
    s := "alice";
    write(s);
end.
// Output:
// alice
```

```pascal
// Test: output
var s: String;
begin
    s := "桃子🍑";
    write(s);
end.
// Output:
// 桃子🍑
```

```pascal
// Test: modification
var s: String;
begin
    s := "alice";
    s[0] := "po";
    write(s);
end.
// Output:
// police
```

```pascal
// Test: concatenation
begin
    write(1 + "+" + 1 + "=" + (1 + 1));
end.
// Output:
// 1+1=2
```

```pascal
// Test: length calculation
begin
    write(length("love" + "&" + "peace"));
end.
// Output:
// 10
```

```pascal
// Test: HTML formatting
begin
    write("a<strong>" + "b</strong>c");
end.
```

Output: a**b**c

```pascal
// Test: MathJax formatting
begin
    write("$\sum_{i=1}^n " + "i = \frac{n^2+n}{2}$");
end.
```

Output:

![page3.2.1.png](page3.2.1.png)

No escape functionality is implemented.

### Control Logic

Implemented the `break` and `continue` statements within a `while` loop.

```pascal
// Test: break
var i: Integer;
begin
    i := 0;
    while i <> 10 do
    begin
        if i = 5 then
        begin
            break
        end;
        write(i);
        i := i + 1
    end;
end.
// Output:
// 01234
```

```pascal
// Test: continue
var i: Integer;
begin
    i := 0;
    while i < 10 do
    begin
        i := i + 1;
        if i / 2 * 2 = i then
        begin
            continue
        end;
        write(i)
    end;
end.
// Output:
// 13579
```

```pascal
// Test: break & continue
var i: Integer;
begin
    i := 0;
    while i < 10 do
    begin
        i := i + 1;
        if i / 2 * 2 = i then
        begin
            continue
        end;
        if i = 7 then
        begin
            break
        end;
        write(i);
    end;
end.
// Output:
// 135
```

```pascal
// Test: break within nested loops
var i, j: Integer;
begin
    i := 0;
    while i < 5 do
    begin
        i := i + 1;
        j := 0;
        while j < 5 do
        begin
            j := j + 1;
            if i + j > 5 then
            begin
                break
            end;
            write(i + " " + j + "<br>")
        end;
    end;
end.
// Output:
// 1 1
// 1 2
// 1 3
// 1 4
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 4 1
```

### Functions

Implemented function definition, invocation, function overloading, and function chaining. Implicit operator overloading is explained in the next section.

```pascal
// Test: definition and invocation
function max(lhs: Integer, rhs: Integer): Integer;
begin
    if lhs > rhs then
    begin
        return lhs
    end
    else
    begin
        return rhs;
    end;
end;
begin
    write(max(2, 3) + " ");
    write(max(3, 2));
end.
// Output:
// 3 3
```

```pascal
// Test: parameter passing: by reference
var a, b: Integer;
// Swap two integers
function swap(lhs: Integer, rhs: Integer): Integer;
var temp: Integer;
begin
    temp := lhs;
    lhs := rhs;
    rhs := temp;
    return 0
end;
begin
    a := 2;
    b := 4;
    write(a + "," + b + "<br>");
    swap(a, b);
    write(a + "," + b + "<br>");
end.
// Output:
// 2,4
// 4,2
```

```pascal
// Test: function overloading
// Get the negation of an integer
function doSth(value: Integer): Integer;
begin
    return -value;
end;
// Real numbers remain the same
function doSth(value: Real): Real;
begin
    return value;
end;
begin
    write(doSth(2) + " ");
    write(doSth(0.2));
end.
// Output:
// -2 0.2
```

```pascal
// Test: function chaining
var a, b, c: Integer;
// Calculate the positive integer power of an integer
function pow(lhs: Integer, rhs: Integer): Integer;
var temp, res: Integer;
begin
    temp := 0;
    res := 1;
    while temp <> rhs do
    begin
        res := res * lhs;
        temp := temp + 1;
    end;
    return res
end;
begin
    a := 2;
    b := 4;
    c := 3;
    // The following four expressions are equivalent
    write(pow(pow(a, b), c));
    write("<br>");
    write(pow(a.pow(b), c));
    write("<br>");
    write(a.pow(b).pow(c));
    write("<br>");
    a.pow(b).pow(c).write();
end.
// Output:
// 4096
// 4096
// 4096
// 4096
```

### Custom Types

The essence of a custom type is a (dynamic) array with a type name.

```pascal
// Test: declaration, assignment, length calculation
var a: Array;
begin
    a[0] := 1;
    a[1] := 3;
    write(a[0]
        + "," + a[1]
        // Function chaining
        + ":" + a.length()
        )
end.
// Output:
// 1,3:2
```

```pascal
// Test: function overloading & implicit operator overloading
// Declare a complex number factory (pseudo)
// and two complex number variables
var Comp: CompFactory;
    a, b: Comp;
// Overload the toString function
function toStr(v: Comp): String;
begin
    return v[0] + "+" + v[1] + "i";
end;
// Overload the addition operator
function add(lhs: Comp, rhs: Comp): Comp;
var res: Comp;
begin
    res[0] := lhs[0] + rhs[0];
    res[1] := lhs[1] + rhs[1];
    return res;
end;
// Create an integer complex number
function create(factory: CompFactory, lhs: Integer, rhs: Integer): Comp;
var res: Comp;
begin
    res[0] := lhs;
    res[1] := rhs;
    return res;
end;
begin
    // Overloaded + function chaining
    a := Comp.create(1, 2);
    b := Comp.create(2, 4);
    // Complex number addition
    a := a + b;
    write(a.toStr());
end.
// Output:
// 3+6i
```

### Modules

Here's an example using an implemented matrix module:

```pascal
// Test: matrix operations & output
import matrix;
var a, b: Matrix;
begin
    a := createMatrix(3, 3);
    a.set(0, 0, 5.0);
    a.set(0, 1, 8.0);
    a.set(1, 0, 3.0);
    a.set(1, 1, 2.0);
    a.set(2, 1, 4.0);
    print(a);
    print(a + a);
    print(a * a);
end.
```

Output:

![page3.6.1.png](page3.6.1.png)

Verification:

![page3.6.2.png](page3.6.2.png)

## IDE Design

### Overall Interface Description

The overall interface is as follows, with the red annotations:

![page4.1.1.png](page4.1.1.png)

Please note that this screenshot was taken on a Windows 10 system with a screen resolution of 1920x1200 and a 100% zoom level in the Edge browser. The layout may vary on different systems, browsers, and screen resolutions, and there is no guarantee that it will always be user-friendly.

### Editor

#### Some Out-of-the-Box Features

The editor is based on the Monaco Editor and comes with many features out of the box, including line numbering, code folding, code indentation, find and replace, column selection, and editing, etc.
~~As a programmers, you know what I mean.~~
No screenshots are provided here.

#### Syntax Highlighting

Syntax highlighting based on lexical analysis results has been implemented. The following is the color scheme:

| Lexical Type | Color |
|--|--|
| String | #3b8737 |
| Identifier | #344482 |
| Keyword | #0c00ed |
| Number | #ff944d |
| Comment | #3b8737 |
| Parentheses | #4db8ff |
| Operator | #9933ff |
| Unrecognized | #ff0000 |

![page4.2.2.1.png](page4.2.2.1.png)

Here's a code snippet with all the above color schemes:

![page4.2.2.2.png](page4.2.2.2.png)

#### Auto Completion

When typing a word or after typing a dot or left parenthesis, an auto-completion window will pop up, as shown in the example:

![page4.2.3.1.png](page4.2.3.1.png)

The icons can be used to distinguish the types of words.

As shown in the example above, you can also view the semantic analysis results for variable types in the auto-completion window.

In addition, there is parameter hinting for functions that are not overloaded:

![page4.2.3.2.png](page4.2.3.2.png)

Due to time constraints, the auto-completion feature is limited. For example, the default variable and function candidates only include the outermost symbol table, and the auto-completion context cannot be modified based on semantic analysis results.

#### Error Indication

The editor highlights error positions with a red underline based on lexical analysis, syntax analysis, and semantic analysis results, as shown in the example:

![page4.2.4.1.png](page4.2.4.1.png)

When hovering the mouse pointer over the error position, an error message window will appear:

![page4.2.4.2.png](page4.2.4.2.png)

![page4.2.4.3.png](page4.2.4.3.png)

The error types shown in the example are undefined variables and the resulting issue of not finding overloaded functions. For specific error types, please refer to the [Error Window](#error-window) section.

### Output Window

![page4.3.1.png](page4.3.1.png)

#### Code Execution Process Flowchart

Before discussing the various parts of the output window, let's first introduce the steps involved in interpreting the program in the editor.

There are two main ways to run the code: one is to run the code interactively during the code writing process, which is used to generate semantic analysis results and automatically execute simple programs; the other is to run the code directly according to the main interpretation process. Apart from the **trigger mechanism**, the main difference between these two approaches lies in the **time limit for execution** and the different **code analysis steps**. Let's start with the latter.

(1) Flowchart for clicking the run button

![page4.3.1.1.png](page4.3.1.1.png)

(2) Flowchart for automatic execution when modifying the code

Due to the large size of the flowchart, it is divided into an overall flowchart and several sub-flowcharts.

(a) Overall flowchart

![page4.3.1.2.png](page4.3.1.2.png)

(b) Lexical analysis sub-flowchart

![page4.3.1.3.png](page4.3.1.3.png)

(c) Syntax analysis sub-flowchart

![page4.3.1.4.png](page4.3.1.4.png)

(d) Semantic analysis sub-flowchart

![page4.3.1.5.png](page4.3.1.5.png)

(e) Trial execution sub-flowchart

![page4.3.1.6.png](page4.3.1.6.png)

#### Input and Automatic Input Section

Extended PL/0 code allows for input as well. For example, consider the following code:

```pascal
var a: Integer; b: Real; s: String;
begin
    read(a);
    read(b);
    read(s);
    write(a + s + b);
end.
```

After clicking the "Run" button, three input windows will pop up:

![page4.3.2.1.png](page4.3.2.1.png)

Enter "123", "3.4", and " , " (without the square brackets) sequentially, and the output will be as follows:

`123 , 3.4`

*Note: Custom types can be read by overloading the `read` function.

When the program contains an input section, it is evident that trial runs without sufficient information cannot produce accurate program results. To facilitate trial runs, an automatic input feature has been implemented. For example, if the following content is entered in the automatic input area:

![page4.3.2.2.png](page4.3.2.2.png)

At this point, when modifying the code, the trial run feature can be used to instantly confirm the program's execution results.

The automatic input feature is also effective for runs initiated by the run button. In addition to reducing the number of repeated inputs, it is possible to specify only a portion of the automatic input. In this case, when starting the run, only the unspecified input items will be requested. For example, if the original program has three inputs and two lines of automatic input are specified, trial runs cannot be performed. However, during the run, only the third input item needs to be manually entered.

#### Symbol Table Display

As shown in the above flowchart, after both types of runs, a portion of the symbol table will be displayed. The implemented symbol table is a dynamic single symbol table with scopes, and therefore, the displayed content only includes the remaining scopes after the run, which are non-function and non-procedure symbols in the outermost scope. The displayed format is determined by the `toStr()` function corresponding to the symbol's type.

For example, consider the following sample code:

```pascal
var a: Integer; b: Real; s: String; c: Cat;
function toStr(v: Cat): String;
begin
    return "Cat:" + v[0];
end;
begin
    a := 1 + 1;
    b := 3.14 * 2;
    s := "xxxxx";
    c[0] := "冰糖";
end.
```

The displayed symbol table is as follows:

![page4.3.2.3.png](page4.3.2.3.png)

The specific structure of the symbol table is described in the latter part of the report.

This section also has some design issues, such as not handling cases where the displayed content of variables is too long or when there are too many entries crowding the output area.

#### Output Area

This section does not have any special design elements other than including a scrollbar to prevent the output area from becoming too large.

### Menu Bar

The menu bar section is not fully implemented and only includes the following functionalities:

(1) Collapse button: It can collapse the menu bar to the left.
(2) Settings: Clicking on the "Editor Settings" menu item displays the following modal window:

![page4.4.1.png](page4.4.1.png)

These two parameters are the loop/call count limits mentioned earlier, which are used to limit the program's execution time. The default values of the parameters are set based on the author's situation. If there is noticeable lag in the input or if manual runs get stuck in an infinite loop for too long, these values can be decreased. Setting the automatic run count limit to 0 will not prompt for exceeding the count limit.

The parameters are not stored in cookies, so they need to be set again each time the webpage is opened.

### Error Window

The implementation of the error window is not complicated. It simply displays the errors collected during trial runs. The effect is as follows:

Code:

```pascal
begin
    404;
    not;
    found;
end.
```

Error Window:

![page4.5.1.png](page4.5.1.png)

Clicking on any problem in the list will shift the focus to the editor and move the cursor to the start position of the error.

Additionally, let's briefly introduce several types of errors that the PL/0 extended language interpreter can detect.

#### Lexical Errors

Lexical errors mainly include errors where unrecognized characters are input.

Test 1:

![page4.5.1.1.png](page4.5.1.1.png)

Result 1:

![page4.5.1.2.png](page4.5.1.2.png)

Test 2:

![page4.5.1.3.png](page4.5.1.3.png)

Result 2:

![page4.5.1.4.png](page4.5.1.4.png)

Although these are considered lexical errors, the lexical analysis does not actually produce errors because there is a specific lexical rule for "unparsed" characters. Therefore, these lexical errors are manifested as syntax errors.

Furthermore, based on the two tests mentioned above, it can be observed that the number of errors that can be found is not fixed and depends on whether recovery from the errors is possible. The author did not implement any special syntax error recovery strategy.

#### Syntax Errors

Syntax errors include various errors that do not satisfy the syntax rules.

Test:

![page4.5.2.1.png](page4.5.2.1.png)

Result:

![page4.5.2.2.png](page4.5.2.2.png)

In the result, the syntax analyzer expects a right parenthesis after "x" to make "(x)" an expression. When encountering the right parenthesis after "1", the syntax analyzer expects the "then" keyword. The error messages are not always accurate, for example, in the following classic example:

![page4.5.2.3.png](page4.5.2.3.png)

![page4.5.2.4.png](page4.5.2.4.png)

Clearly, the error is caused by the missing semicolon on the second line, but the syntax analyzer can only detect the missing semicolon when it encounters the "write" on the next line. Therefore, it is reasonable to report the error at that point, but it is not user-friendly for programmers.

#### Semantic Errors

Semantic errors are detected during semantic analysis of the syntax tree before the trial run.

Test 1:

![page4.5.3.1.png](page4.5.3.1.png)

Result 1:

![page4.5.3.2.png](page4.5.3.2.png)

This is an error message for using an undefined variable.

Test 2:

![page4.5.3.3.png](page4.5.3.3.png)

Result 2:

![page4.5.3.4.png](page4.5.3.4.png)

This is an error detection for an indexed statement based on type inference.

Test 3:

![page4.5.3.5.png](page4.5.3.5.png)

Result 3:

![page4.5.3.6.png](page4.5.3.6.png)

This is an error detection for a conditional statement based on type inference.

Test 4:

![page4.5.3.7.png](page4.5.3.7.png)

Result 4:

![page4.5.3.8.png](page4.5.3.8.png)

This is a check for the existence of a function based on type inference from the symbol table.

Test 5:

![page4.5.3.9.png](page4.5.3.9.png)

Result 5:

![page4.5.3.10.png](page4.5.3.10.png)

This is an example of error localization through error handling.

Semantic errors also include many other types, such as duplicate definitions and negative subscripts. Error handling also includes preventing duplicate errors and providing error corrections, but the author did not implement these features.

## Project Implementation

### Overview of Technologies Used

The project is an Angular project. The lexical analysis and parsing stages are implemented using ANTLR4, and the editor uses the Monaco Editor. The entire project is compiled into static pages and hosted on Gitee Pages for display. The following provides a brief overview of the work done in each implementation stage.

#### ANTLR4

ANTLR (ANother Tool for Language Recognition) is a parser generator that can build and traverse syntax trees by generating parsers from grammars. Similar to Lex & Yacc, ANTLR4 can generate code from lexical and grammar rules that resemble EBNF. Unlike recursive descent, ANTLR4 rules support LL(\*) and direct left recursion.

The project uses ANTLR4.8 to reduce the work in the lexical analysis and parsing stages by writing lexical and grammar analysis rules, generating syntax trees. Subsequently, semantic analysis and interpretation are implemented directly on the syntax tree using the visitor pattern. The advantage of this approach compared to recursive descent is that the explicitly written grammar rules directly determine the order of syntax analysis, and only minimal changes are needed to run after modifying the grammar rules.

Official website: <https://www.antlr.org/>

#### TypeScript

TypeScript is an open-source language built on top of JavaScript with rich object-oriented mechanisms. The main reason for choosing this language is that it is considered the most user-friendly object-oriented language for the target platform and the only designated language for Angular. The basics of TypeScript are very easy to learn.

Official website: <https://www.typescriptlang.org/>

#### Monaco Editor

Monaco Editor is a modern web code editor used by Visual Studio Code.

Official website: <https://microsoft.github.io/monaco-editor/>

#### Angular

Angular is an application design framework and development platform used to create efficient, complex, and sophisticated single-page applications using the MVVM approach. This experiment does not use advanced features of Angular and is mainly aimed at rapid development, preview, and debugging in a modular manner, combined with the existing Ant Design component library, to reduce the effort invested in interface implementation.

In this step, TypeScript code is compiled into a single-page JavaScript application for easy hosting.

Official website: [https://angular.io/](https://angular.io/)

#### Gitee Pages

Similar to GitHub Pages, Gitee Pages allows the display of static web pages on the public internet. It provides fast access within China. In addition, the project, PL/0 extension language module, and display pages are all hosted on Gitee.

### Lexical and Grammar Rules

#### Lexical Rules

[PL00Lexer.g4](src/antlr/PL00Lexer.g4)

#### Grammar Rules

[PL00Parser.g4](src/antlr/PL00Parser.g4)

#### Grammar Diagram

It is recommended to use the ANTLR plugin for VSCode to generate it with one click.

### Introduction to Core Classes

#### Symbol Class

![page5.4.1.1.png](page5.4.1.1.png)

#### Symbol Table Class

![page5.4.2.1.png](page5.4.2.1.png)

The `push` and `pop` methods are used for entering and exiting scopes, the `add` method is used for adding symbols, `get` retrieves the most recent symbol by name, `getFunction` searches for a function by name and parameter type, `bindValue` modifies the symbol value, and `importModule` handles module-related operations in the symbol table (not used).

#### Evaluator Class

![page5.4.3.1.png](page5.4.3.1.png)

The evaluator needs to inject the visitor mainly because when performing arithmetic operations on custom types and string concatenation, it needs to find the corresponding function to call (e.g., `add()`, `toStr()`). In fact, the injection of `symbolTable` is not necessary; it was an insignificant early design mistake.

#### Visitor Class

![page5.4.4.1.png](page5.4.4.1.png)

The `ParseTreeVisitor` is a class in the ANTLR4 package, `PL00ParserVisitor` is a class generated by ANTLR4 based on the lexical and grammar rules, and it can implement syntax parsing by calling methods like `visitChildren` in the visit methods of each grammar rule or modify the visit order as needed. `PL00InterpretVisitor` is an inherited visitor class used for actual code execution (including trial runs and manual runs), and `PL00QuickVisitor` is an inherited visitor class used for semantic analysis. The execution order of these two visitors is different. For example, the latter only checks the loop condition and body once when encountering a loop, without executing the loop repeatedly.

### Module Import

To facilitate separate updates of the project and modules, the project uses asynchronous downloading when importing specific files using the `import` statement from the web.

For example, when entering `import matrix;`, the project will attempt to download the code file located at the URL <https://xyqlx.gitee.io/pl00-modules/matrix.pl0>, parse the file using the `functionDefs` rule, and insert the obtained function definitions into the symbol table.

Since module imports are done asynchronously while other parts of the project use synchronous methods, it may cause issues where clicking "Run" after opening the page does not find the imported module (no matching functions). In such cases, simply click "Run" again after the module has finished downloading (usually within 1 second, you can check the network tab in the browser's developer tools to confirm), and it will work normally.

### Other Topics

#### Testing

To expedite completion, no tests were written for this project. Various bugs may occur during project execution, including but not limited to extreme data resulting in abnormal results, frequent error messages in the developer console, and freezing (when manually running programs with many loops, the lack of execution block separation may cause the UI to freeze for a few seconds, which is a normal phenomenon; if there is an abnormal freeze, it can be forcibly closed using the browser's task manager). The author can only guarantee that all test cases presented in this report, as well as similar code, can run correctly.

The test cases in this report are far from comprehensive.

Feel free to leave a message in the issues.

#### Code Versioning, Hosting, and Deployment

The project uses Git for version control and is hosted and deployed on Gitee. The following are the links:

Project source code: <https://gitee.com/xyqlx/PL00WebIDE>

Modules: <https://gitee.com/xyqlx/PL00-Modules>

Demo page: <https://xyqlx.gitee.io/pl00-editor-view/>
