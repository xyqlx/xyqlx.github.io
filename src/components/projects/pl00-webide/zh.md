## 介绍

本科课程设计，在原有PL/0语法和功能的基础上，扩展了数据类型、控制逻辑、语言功能，并完成了解释器和IDE的设计，具体扩展点如下：

基础功能扩展：

1. I/O的功能扩展：增加输入和输出扩展数据结构的功能
2. 数据结构的扩展：增加实数、字符串和自定义类型
3. 计算上的功能扩展：增加实数、字符串的运算
4. 控制逻辑上的扩展：增加while语句的continue和break语句

高级功能扩展：

1. 出错处理：增加对于部分扩展功能的错误处理
2. IDE设计：完成基于Web代码编辑器的PL/0扩展语言集成开发环境配置，实现代码折叠、代码缩进、自动补全、语法高亮、显示行号、错误提示以及在下文中提到的其它功能

其它功能扩展：

1. 添加了函数功能，且支持简单的函数重载
2. 添加了模块功能，可以导入并使用其它PL/0扩展语言函数库
3. 出错处理：增加对于部分扩展功能的错误处理
4. IDE设计：完成基于Web代码编辑器的PL/0扩展语言集成开发环境配置，实现代码折叠、代码缩进、自动补全、语法高亮、显示行号、错误提示以及在下文中提到的其它功能。

### 使用时需要注意的问题

由于第一次运行的时候需要从网址导入matrix模块，它其实是会运行失败的。然而并不会显示错误消息

如果网络加载快的话第二次点击运行应该就可以成功输出了

能放着这样一个能够劝退99%使用者的bug也是没谁了

### 功能扩展部分的补充说明

本项目对PL/0语言的扩展主题是"模块化"。在原PL/0语言中，可以通过过程（procedure）实现模块化，但过程不能传参，比较难以使用，因此引入了函数（function）功能。

为了组织实现独立功能的一系列函数，引入导入（import）功能是自然而然的，此功能类似于C语言中的\#include，Python中的import，C\#中的using等的简化实现。

为了利用函数重载，还引入了类似于结构体的"自定义类型"。其底层用存储任意类型的数组实现，这其实是一个糟糕的设计，尤其是它破坏了语义的静态性。但是它改善单人负责项目的情况下代码的可读性。

功能扩展有一个简单的验证目标，那就是在语言没有内置矩阵支持的情况下，实现并使用矩阵模块。

## 背景

因为实验报告本身比较充分，这里就不多说了

其实这个项目是除了Hello World外的第二个Angular项目

## 部署

npm install可能会出问题。

另外，需要安装antlr，运行.vscode/task.json里面的grammar update任务

## 语法功能介绍

### 实数

实现了实数的字面量转换、存储、四则运算以及输出。

```pascal
// 测试内容：声明、初始化、输出
var a:Real;
begin
    a:=3.14;
    write(a);
end.
// 输出：
// 3.14
```

```pascal
// 测试内容：实数运算
var a,b:Real;
begin
    a:=3.15;
    b:=-2.00;
    // <br> 表示换行
    write(a+b + "<br>");
    write(a-b + "<br>");
    write(a*b + "<br>");
    write(a/b + "<br>");
end.
// 输出：
// 1.15
// 5.15
// -6.3
// -1.575
```

### 字符串

实现了字符串的字面量转换、存储、拼接、修改、求长度、修改以及格式化输出。

```pascal
// 测试内容：声明、初始化、输出
var s:String;
begin
    s:="alice";
    write(s);
end.
// 输出：
// alice
```

```pascal
// 测试内容：输出
var s:String;
begin
    s:="桃子🍑";
    write(s);
end.
// 输出：
// 桃子🍑
```

```pascal
// 测试内容：修改
var s:String;
begin
    s:="alice";
    s[0]:="po";
    write(s);
end.
// 输出：
// police
```

```pascal
// 测试内容：拼接
begin
    write(1 + "+"
        + 1 + "=" + (1+1));
end.
// 输出：
// 1+1=2
```

```pascal
// 测试内容：求长度
begin
    write(length("love" 
        + "&" + "peace"));
end.
// 输出：
// 10
```

```pascal
// 测试内容：HTML格式化
begin
    write("a<strong>"
        + "b</strong>c");
end.
```

输出：a**b**c

```pascal
// 测试内容：MathJax格式化
begin
    write("$$\sum_{i=1}^n "
        + "i = \frac{n^2+n}{2}$$");
end.
```

输出：

![page3.2.1.png](page3.2.1.png)

没有实现转义功能。

### 控制逻辑

实现了while中的break和continue语句。

```pascal
// 测试内容：break
var i:Integer;
begin
    i := 0;
    while i # 10 do
    begin
        if i = 5 then
        begin
            break
        end;
        write(i);
        i := i+1
    end;
end.
// 输出：
// 01234
```

```pascal
// 测试内容：continue
var i:Integer;
begin
    i := 0;
    while i < 10 do
    begin
        i := i+1;
        if i /2 * 2 = i then
        begin
            continue
        end;
        write(i)
    end;
end.
// 输出：
// 13579
```

```pascal
// 测试内容：break & continue
var i:Integer;
begin
    i := 0;
    while i < 10 do
    begin
        i := i+1;
        if i /2 * 2 = i then
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
// 输出：
// 135
```

```pascal
// 测试内容：二层循环中的break
var i,j:Integer;
begin
    i := 0;
    while i < 5 do
    begin
        i := i+1;
        j := 0;
        while j < 5 do
        begin
            j:=j+1;
            if i+j>5 then
            begin
                break
            end;
            write(i+" "+j+"<br>")
        end;
    end;
end.
// 输出：
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

### 函数

实现了函数的定义、调用、函数重载、函数链。隐式运算符重载在下一部分介绍。

```pascal
// 测试内容：定义与调用
function max(lhs:Integer,
    rhs:Integer):Integer;
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
    write(max(2,3) + " ");
    write(max(3,2));
end.
// 输出：
// 3 3
```

```pascal
// 测试内容：传参方式：引用传递
var a,b:Integer;
// 交换两个整数
function swap(lhs:Integer,
    rhs:Integer):Integer;
var temp:Integer;
begin
    temp:=lhs;
    lhs:=rhs;
    rhs:=temp;
    return 0
end;
begin
    a:=2;
    b:=4;
    write(a+","+b+"<br>");
    swap(a,b);
    write(a+","+b+"<br>");
end.
// 输出：
// 2,4
// 4,2
```

```pascal
// 测试内容：函数重载
// 对整型求相反数
function doSth(value:Integer)
    :Integer;
begin
    return -value;
end;
// 实型不变
function doSth(value:Real):Real;
begin
    return value;
end;
begin
    write(doSth(2) + " ");
    write(doSth(0.2));
end.
// 输出：
// -2 0.2
```

```pascal
// 测试内容：函数链
var a,b,c:Integer;
// 求整数的正整数幂
function pow(lhs:Integer,
    rhs:Integer):Integer;
var temp,res:Integer;
begin
    temp:=0;
    res:=1;
    while temp # rhs do
    begin
        res:=res*lhs;
        temp:=temp+1;
    end;
    return res
end;
begin
    a:=2;
    b:=4;
    c:=3;
    // 以下四种写法相同
    write(pow(pow(a,b),c));
    write("<br>");
    write(pow(a.pow(b),c));
    write("<br>");
    write(a.pow(b).pow(c));
    write("<br>");
    a.pow(b).pow(c).write();
end.
// 输出：
// 4096
// 4096
// 4096
// 4096
```

### 自定义类型

自定义类型的本质是一个拥有类型名的（动态）数组。

```pascal
// 测试内容：声明、赋值、求长度
var a:Array;
begin
    a[0]:=1;
    a[1]:=3;
    write(a[0]
        + "," + a[1]
        // 函数链
        + ":" + a.length()
        )
end.
// 输出：
// 1,3:2
```

```pascal
// 测试内容：函数重载 & 隐式运算符重载
// 声明一个复数工厂（伪）
// 和两个复数变量
var Comp:CompFactory;
    a,b:Comp;
// 重载转字符串函数
function toStr(v:Comp)
    :String;
begin
    return v[0]+"+"
        +v[1]+"i";
end;
// 重载加法运算符
function add(lhs:Comp,
    rhs:Comp):Comp;
var res:Comp;
begin
    res[0]:=lhs[0]+rhs[0];
    res[1]:=lhs[1]+rhs[1];
    return res;
end;
// 创建整数复数
function create(
    factory:CompFactory,
    lhs:Integer,
    rhs:Integer):Comp;
var res:Comp;
begin
    res[0]:=lhs;
    res[1]:=rhs;
    return res;
end;
begin
    // 重载+函数链
    a:=Comp.create(1,2);
    b:=Comp.create(2,4);
    // 复数加法
    a:=a+b;
    write(a.toStr());
end.
// 输出：
// 3+6i
```

### 模块

这里以实现了的矩阵模块为例：

```pascal
// 测试内容：矩阵运算 & 输出
import matrix;
var a,b:Matrix;
begin
    a:=createMatrix(3,3);
    a.set(0,0,5.0);
    a.set(0,1,8.0);
    a.set(1,0,3.0);
    a.set(1,1,2.0);
    a.set(2,1,4.0);
    print(a);
    print(a+a);
    print(a*a);
end.
```

输出：

![page3.6.1.png](page3.6.1.png)

验证：

![page3.6.2.png](page3.6.2.png)

## IDE设计

### 整体界面说明

整体界面如下，其中红色为标注：

![page4.1.1.png](page4.1.1.png)

注意这是在1920\*1200的屏幕上采用Windows10
100%缩放比率在Edge中的截图。在其它系统、浏览器、屏幕分辨率下，布局可能有所不同，并不保证其总是易于使用。

### 编辑器

#### 一些开箱即用的功能

编辑器是基于Monaco Editor制作的。它不需要设置即可使用许多功能，包括显示行号，代码折叠，代码缩进，查找与替换，列选择和编辑等。
~~各位都是老程序员了，懂的都懂。~~
这里就不放图了。

#### 词法着色

实现了基于词法分析结果的着色功能。以下为配色方案：

![page4.2.2.1.png](page4.2.2.1.png)

附一张包含上述所有配色的代码图片：

![page4.2.2.2.png](page4.2.2.2.png)

#### 自动补全

在输入单词，以及键入点号或左括号之后，会弹出自动补全窗口，效果如图：

![page4.2.3.1.png](page4.2.3.1.png)

可以根据图标来区分单词的类型。

如上图所示，还可以在自动补全窗口中查看变量类型的语义分析结果。

此外，对于未重载的函数还有参数提示功能：

![page4.2.3.2.png](page4.2.3.2.png)

限于时间，实现的自动补全是有限的，例如，默认的变量和函数候选项只包括最外层符号表，且无法根据语义分析结果来修改自动补全的上下文。

#### 错误标识

编辑器根据词法分析、语法分析、语义分析的结果给错误位置加上红色的下划线，效果如图：

![page4.2.4.1.png](page4.2.4.1.png)

将鼠标指针移至错误位置，弹出错误原因窗口：

![page4.2.4.2.png](page4.2.4.2.png)

![page4.2.4.3.png](page4.2.4.3.png)

图中的错误类型是未定义变量以及由此产生的找不到重载函数问题。关于其它的具体错误类型请参考[错误窗口](#错误窗口)部分。

### 输出窗口

![page4.3.1.png](page4.3.1.png)

#### 运行代码的步骤流程图

在讨论输出窗口的各个部分之前，先介绍一下在编辑器中解释程序的各个步骤。

主要有两种运行代码的途径，一种是在编写代码过程中试探性的代码运行，它用来生成语义分析结果和完成一些简单程序的自动运行，另一种是按照主要的解释流程直接运行代码。除了**触发机制**外，这两种运行的最大区别主要是**运行时间的限制**和**代码分析步骤**的不同。以下先介绍后一种。

(1) 点击运行按钮的流程图

![page4.3.1.1.png](page4.3.1.1.png)

(2) 修改代码时自动运行的流程图

因为流程图过大，这里分成总流程图和几个子流程图

(a) 总流程图

![page4.3.1.2.png](page4.3.1.2.png)

(b) 词法分析子流程图

![page4.3.1.3.png](page4.3.1.3.png)

(c) 语法分析子流程图

![page4.3.1.4.png](page4.3.1.4.png)

(d) 语义分析子流程图

![page4.3.1.5.png](page4.3.1.5.png)

(e) 试运行子流程图

![page4.3.1.6.png](page4.3.1.6.png)

#### 输入和自动输入部分

扩展的PL/0代码也是允许输入的，例如，对于如下代码：

```pascal
var a:Integer;b:Real;s:String;
begin
    read(a);
    read(b);
    read(s);
    write(a + s + b);
end.
```

点击【运行】按钮后，将会弹出三次输入窗口：

![page4.3.2.1.png](page4.3.2.1.png)

依次输入【123】【3.4】【 , 】（不含方括号）后，输出结果如下：

`123 , 3.4`

\*注：可以通过重载read函数来实现自定义类型的读取

在程序包含输入部分后，显然缺少信息的试探运行是无法试探得到程序运行结果的，为了配合试探运行，设立了自动输入功能，例如在自动输入区输入如下内容：

![page4.3.2.2.png](page4.3.2.2.png)

那么此时在修改代码时就可以利用试探运行功能，实时确认程序运行结果了。

自动输入对于运行按钮启动的运行也是有效的。除了减少重复输入次数以外，还可以仅指定一部分的自动输入，此时启动运行后仅会要求输入没有指定的项。例如，原程序共有三个输入，指定两行自动输入，那么此时是不能试探运行的，但是在启动运行时，仅需要手动输入第三个输入项即可。

#### 符号表显示

如上述流程图所示，在两种运行结束时输出结果后还会显示符号表的部分内容。实现的符号表是带作用域的动态单符号表，因此显示的内容只包括运行结束后剩余的作用域，即最外层作用域中的非函数、过程符号。显示的格式是由符号对应类型的toStr()函数决定的。

例如对于以下样例代码：

```pascal
var a:Integer;b:Real;s:String;c:Cat;
function toStr(v:Cat):String;
begin
    return "Cat:" + v[0];
end;
begin
    a:=1+1;
    b:=3.14*2;
    s:="xxxxx";
    c[0]:="冰糖";
end.
```

显示符号表如下：

![page4.3.2.3.png](page4.3.2.3.png)

具体符号表结构见报告的后半部分。

此部分也存在一些设计问题，例如没有处理变量显示内容过长的情况或者表项过多挤占输出区的情况。

#### 输出区

这一部分除了包含一个避免输出区过大的滚动条以外并没有什么特殊的设计。

### 菜单栏

菜单栏部分并没有完成，只实现了以下功能：

(1) 折叠按钮，可以向左折叠菜单栏
(2) 设置：点击编辑器设置菜单项后，出现下图的模态窗口：

![page4.4.1.png](page4.4.1.png)

这两个参数即上文提到的两种运行方式中的循环/调用次数限制，用于限制程序运行的时间。参数的默认值是根据笔者的情况设定的，如果感觉到输入的明显卡顿或者手动运行时死循环卡死时间过长，可以调小这两个值。将自动运行次数限制调整到0时不会提示超出次数限制。

参数并没有记录在Cookie中，所以每次打开网页都需要重新设置。

### 错误窗口

错误窗口的实现并不复杂，只是显示在试探运行过程中采集到的错误。其效果如下：

代码：

```pascal
begin
    404;
    not;
    found;
end.
```

错误窗口：

![page4.5.1.png](page4.5.1.png)

单击问题列表中的任意问题可以将焦点转移到编辑器并且将光标转移到错误发生的开始位置。

以下顺带介绍下PL/0扩展语言解释器能够检测到的几种错误。

#### 词法错误

词法错误主要包括输入了无法被解析的字符的错误。

测试1：

![page4.5.1.1.png](page4.5.1.1.png)

结果1：

![page4.5.1.2.png](page4.5.1.2.png)

测试2：

![page4.5.1.3.png](page4.5.1.3.png)

结果2：

![page4.5.1.4.png](page4.5.1.4.png)

虽然说是词法错误但由于词法规则中专门设置了"未解析"的词法规则，导致词法分析实际上并不会产生错误，所以这些词法错误是以语法错误的形式体现的。

另外，根据以上两个测试也可以看到，能够找到的错误数量不是确定的，具体与是否能从错误中恢复有关。笔者并没有编写特殊的语法错误恢复策略。

#### 语法错误

语法错误包括各种无法不满足语法规则的错误。

测试：

![page4.5.2.1.png](page4.5.2.1.png)

结果：

![page4.5.2.2.png](page4.5.2.2.png)

结果中，语法分析器希望x之后是一个右括号，以使(x)成为一个表达式。在解析到1之后的右括号时，语法分析器希望遭遇的是then关键字。提示信息并不总是准确的，例如以下的经典例子：

![page4.5.2.3.png](page4.5.2.3.png)

![page4.5.2.4.png](page4.5.2.4.png)

显然这是第2行没有写分号导致的错误，但语法分析器只有在读到下一行的write时才能发现缺少了分号，因此在此设置错误是合理的，但对于程序员来说并不友好。

#### 语义错误

语义错误是在试运行之前访问语法树执行语义分析所发现的。

测试1：

![page4.5.3.1.png](page4.5.3.1.png)

结果1：

![page4.5.3.2.png](page4.5.3.2.png)

这是使用未定义变量的错误提示

测试2：

![page4.5.3.3.png](page4.5.3.3.png)

结果2：

![page4.5.3.4.png](page4.5.3.4.png)

根据类型推断的索引语句错误检测

测试3：

![page4.5.3.5.png](page4.5.3.5.png)

结果3：

![page4.5.3.6.png](page4.5.3.6.png)

这是根据类型推断的条件句错误检测

测试4：

![page4.5.3.7.png](page4.5.3.7.png)

结果4：

![page4.5.3.8.png](page4.5.3.8.png)

这是根据类型推断从符号表检查函数是否存在的检测。

测试5：

![page4.5.3.9.png](page4.5.3.9.png)

结果5：

![page4.5.3.10.png](page4.5.3.10.png)

这是错误局部化处理的一个例子。

语义错误还包括很多其它类型，例如重复定义、下标为负等等。错误处理还包括遏制重复错误、提供错误修正等功能，笔者没有实现这些内容。

## 工程实现

### 使用技术简介

项目属于一个Angular项目。其中，词法分析和语法阶段由ANTLR4实现，编辑器采用Monaco Editor。整个项目在编译为静态页面后在Gitee Pages上托管展示。以下简要介绍各个实现阶段所做的工作。

#### ANTLR4

ANTLR（ANother Tool for Language
Recognition）是一种解析器生成器，通过语法生成，它可以构建和遍历语法树的语法分析器。就像Lex&Yacc一样，ANTLR4可以由类似EBNF的词法和语法规则生成代码。与递归下降法不同，ANTLR4的规则支持LL(\*)和直接左递归。

项目使用ANTLR4.8由编写的词法和语法分析规则减少词法分析和语法分析阶段的工作，生成语法树。随后在语法树上直接使用访问者模式实现语义分析和解释执行。使用此方法与递归下降法相比的优点是显式写出的语法规则直接决定了语法分析的顺序，且修改语法规则后只需要很少的改动就可以运行。

这里是官网：<https://www.antlr.org/>

#### TypeScript

TypeScript是在JavaScript基础上建立了丰富面向对象机制的开源语言。选用该语言的主要原因是它是笔者认为目标平台上最好用的面向对象风格语言，也是Angular的唯一指定语言。TypeScript的基础部分非常易于学习。

官网：<https://www.typescriptlang.org/>

#### Monaco Editor

Monaco Editor是Visual Studio Code使用的现代Web代码编辑器。

官网：<https://microsoft.github.io/monaco-editor/>

#### Angular

Angular
是一个应用设计框架与开发平台，用于使用MVVM方式创建高效、复杂、精致的单页面应用。本实验并不使用Angular的高级功能，主要是为了能够以模块方式快速开发、预览与调试，结合现有的Ant
Design组件库，减少对界面实现的精力投入。

在这一步TypeScript代码编译为单页JavaScript页面，便于托管。

官网：[https://angular.io/](https://angular.io/)

#### Gitee Pages

和GitHub
Pages类似，能够在公网展示静态页面。在国内访问较快。此外，本实验的项目本体、PL/0扩展语言模块、展示页面都托管在Gitee上。

### 词法与语法规则

#### 词法规则

[PL00Lexer.g4](src/antlr/PL00Lexer.g4)

#### 语法规则

[PL00Parser.g4](src/antlr/PL00Parser.g4)

#### 语法图

这里推荐用VSCode的ANTLR插件，一键生成

### 核心类介绍

#### 符号类

![page5.4.1.1.png](page5.4.1.1.png)

#### 符号表类

![page5.4.2.1.png](page5.4.2.1.png)

其中，push和pop方法用于进出作用域，add方法用于添加符号，get按名获得最近符号，getFunction按名和参数类型搜索函数，bindValue修改符号值，importModule负责符号表相关的模块处理（并没有用）

#### 运算器类

![page5.4.3.1.png](page5.4.3.1.png)

运算器需要注入visitor的主要原因是在调用自定义类型的四则运算以及字符串拼接时，需要寻找与调用对应的函数（例如add(),toStr()）。实际上不需要symbolTable的注入，这里是一处影响不大的早期设计失误。

#### 访问者类

![page5.4.4.1.png](page5.4.4.1.png)

其中ParseTreeVisitor是ANTLR4包中的类，PL00ParserVisitor是ANTLR4根据词法语法规则生成的类，可以通过在各语法规则的访问方法中调用visitChildren等来实现语法解析，也可以按照需求修改访问顺序。PL00InterpretVistor是用于实际执行代码（包括试探运行和手动运行）的访问器继承类，PL00QuickVistor是用于语义分析的访问器继承类。这两者的执行顺序并不相同，例如，后者在遇到循环时，只会检查一次循环条件和循环体，而不会循环执行。

### 关于模块导入

为了方便项目本体和模块能够分别更新，项目采用了从网络导入的方式。也就是将模块托管在公网上、项目使用import语句导入特定文件时，异步下载的方式。

例如，在键入import
matrix;时，项目将试图下载位于网址<https://xyqlx.gitee.io/pl00-modules/matrix.pl0>的代码文件，并使用functionDefs规则来解析文件，并将得到的函数定义插入到符号表内。

因为模块导入采用的是异步方式，但项目的其它部分采用的是同步方式，可能导致在打开页面后点击运行模块未导入（找不到匹配函数）的问题。这时候在模块下载好之后（通常不到1s，可以打开开发者工具的网络选项卡确认）再次点击运行即可正常使用。

### 其它话题

#### 测试

为了尽快完成，本项目没有写测试。项目运行可能出现各种bug，包括不限于极端数据结果异常、开发者选项Console频繁报错、卡死（手动运行循环较多的程序时，由于笔者没有拆分执行块，会导致UI卡死数秒，这属于正常现象，不正常的卡死可以用浏览器的任务管理器强行关闭）等问题。笔者只能保证本报告中出现的所有测试用例以及与其相似的代码是能够正常运行的。

本报告中的测试用例也远未达到全面的程度。

欢迎在issue留言，
~~我什么都不会做的~~
。

#### 代码版本管理、托管与发布

项目采用git进行版本管理，在Gitee上进行托管和发布，以下是地址：

项目源代码：<https://gitee.com/xyqlx/PL00WebIDE>

模块：<https://gitee.com/xyqlx/PL00-Modules>

展示页面：<https://xyqlx.gitee.io/pl00-editor-view/>
