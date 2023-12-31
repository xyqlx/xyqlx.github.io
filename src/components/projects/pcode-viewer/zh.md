## 介绍

该项目实现了一个简易的在线类P-code解释器

## 背景

这是计算机系统工程综合实践的编译原理实训的一部分。

### 实验目标与内容

《计算机系统工程综合实践》的目的是让学生在一个统一的实验平台上，完成计算机组成与体系结构、操作系统、编译原理、接口技术的实践设计，最终形成一致的完整的计算机系统整体概念。

其中，编译原理作为一门专业核心课，可以使学生编写出高效，稳健，占用内存少的程序。在《计算机系统工程综合实践》中，通过将编译原理实训与计算机组成原理的实训衔接，可以体现计算机系统内部各软件/硬件的关联关系与逻辑层次，进而提升学生的系统综合能力。

编译原理实训是在计算机组成与体系结构实训已经完成的模型计算机上，进行目标代码生成程序的实验，其中目标代码是 MIPS 汇编语言代码。

编译原理实训要求学生在熟练掌握PL/0编译程序的基础上，学习 MIPS 汇编语言，修改 PL/0 编译程序，将 PL/0 源代码翻译为 MIPS 汇编代码，该汇编代码在 QtSpim 中汇编运行，得到 PL/0 源程序运行的仿真结果。

### 实验内容

1. 本实验提供一个使用C语言编写的PL/0编译程序，要求在解读PL/0编译程序的基础上，掌握PL/0编译程序的目标代码（类P-code 语言）结构、错误处理和目标代码在执行时的存储分配及执行过程。
2. 学习32位MIPS汇编语言，了解其寄存器种类、算术及寻址指令、程序结构和系统调用，并能够使用MIPS汇编指令进行程序的编写；学习使用QtSpim软件，对MIPS汇编指令源程序进行汇编并仿真运行结果。
3. 修改PL/0编译程序中的解释程序interpret()函数及相应程序代码，将类P-code中间代码翻译成MIPS汇编指令，并生成MIPS汇编代码文件。或修改PL/0编译程序中的代码生成程序gen()函数，及在分析程序中的每个语句的语法正确时调用gen()函数生成MIPS 汇编指令，并生成MIPS汇编代码文件。
4. 在C语言编译环境下，上机调试修改后的PL/0编译程序，编译通过并运行。按照PL/0测试用例，得到对应的MIPS汇编代码文件；然后在QtSpim中汇编运行该MIPS汇编代码文件，进行结果仿真。

### 参考资料

#### 类P-code指令

| 类P-code指令 | 解释 |
| -- | -- |
| INT 0 A | 在栈顶开辟 A 个存储单元 |
| OPR 0 0 | 结束被调用过程，返回调用点并退栈 |
| CAL L A | 调用地址为 A 的过程，调用过程与被调用过程的层差为 L |
| LIT 0 A | 立即数 A 存入 t 所指单元，t+1 |
| LOD L A | 将层差为 L、偏移量为 A 的存储单元的值取到栈顶，t+1 |
| STO L A | 将栈顶的值存入层差为 L、偏移量为 A 的单元，t-1 |
| OPR 0 1 | 求栈顶元素的相反数，结果值留在栈顶 |
| OPR 0 6 | 栈顶内容若为奇数则变为 1，若为偶数则变为 0 |
| OPR 0 2 | 次栈顶与栈顶的值相加，结果存入次栈顶，t-1 |
| OPR 0 3 | 次栈顶的值减去栈顶的值，结果存放次栈顶，t-1 |
| OPR 0 4 | 次栈顶的值乘以栈顶的值，结果存放次栈顶，t-1 |
| OPR 0 5 | 次栈顶的值除以栈顶的值，结果存放次栈顶，t-1 |
| OPR 0 8 | 次栈顶与栈顶内容若相等，则将 0 存于次栈顶，t-1 |
| OPR 0 9 | 次栈顶与栈顶内容若不相等，则将 0 存于次栈顶，t-1 |
| OPR 0 10 | 次栈顶内容若小于栈顶，则将 0 存于次栈顶，t-1 |
| OPR 0 11 | 次栈顶内容若大于等于栈顶，则将 0 存于次栈顶，t-1 |
| OPR 0 12 | 次栈顶内容若大于栈顶，则将 0 存于次栈顶，t-1 |
| OPR 0 13 | 次栈顶内容若小于等于栈顶，则将 0 存于次栈顶，t-1 |
| JMP 0 A | 无条件转移至地址 A |
| JPC 0 A | 若栈顶为 0，则转移至地址 A，t-1 |
| OPR 0 14 | 栈顶的值输出至控制台屏幕，t-1 |
| OPR 0 15 | 控制台屏幕输出一个换行 |
| OPR 0 16 | 从控制台读入一行输入，置入栈顶，t+1OPR 0 0 结束被调用过程，返回调用点并退栈 |
| CAL L A | 调用地址为 A 的过程，调用过程与被调用过程的层差为 L |
| LIT 0 A | 立即数 A 存入 t 所指单元，t+1 |
| LOD L A | 将层差为 L、偏移量为 A 的存储单元的值取到栈顶，t+1 |
| STO L A | 将栈顶的值存入层差为 L、偏移量为 A 的单元，t-1 |
| OPR 0 1 | 求栈顶元素的相反数，结果值留在栈顶 |
| OPR 0 6 | 栈顶内容若为奇数则变为 1，若为偶数则变为 0 |
| OPR 0 2 | 次栈顶与栈顶的值相加，结果存入次栈顶，t-1 |
| OPR 0 3 | 次栈顶的值减去栈顶的值，结果存放次栈顶，t-1 |
| OPR 0 4 | 次栈顶的值乘以栈顶的值，结果存放次栈顶，t-1 |
| OPR 0 5 | 次栈顶的值除以栈顶的值，结果存放次栈顶，t-1 |
| OPR 0 8 | 次栈顶与栈顶内容若相等，则将 0 存于次栈顶，t-1 |
| OPR 0 9 | 次栈顶与栈顶内容若不相等，则将 0 存于次栈顶，t-1 |
| OPR 0 10 | 次栈顶内容若小于栈顶，则将 0 存于次栈顶，t-1 |
| OPR 0 11 | 次栈顶内容若大于等于栈顶，则将 0 存于次栈顶，t-1 |
| OPR 0 12 | 次栈顶内容若大于栈顶，则将 0 存于次栈顶，t-1 |
| OPR 0 13 | 次栈顶内容若小于等于栈顶，则将 0 存于次栈顶，t-1 |
| JMP 0 A | 无条件转移至地址 A |
| JPC 0 A | 若栈顶为 0，则转移至地址 A，t-1 |
| OPR 0 14 | 栈顶的值输出至控制台屏幕，t-1 |
| OPR 0 15 | 控制台屏幕输出一个换行 |
| OPR 0 16 | 从控制台读入一行输入，置入栈顶，t+1 |

#### MIPS寄存器种类

| 寄存器 | 寄存器号 | 用途 |
| -- | -- | -- |
| \$zero | 0 | 常量 0 |
| \$at | 1 | 保留给汇编器 |
| \$v0-\$v1 | 2-3 | 函数调用返回值 |
| \$a0-\$a3 | 4-7 | 函数调用参数 |
| \$t0-\$t7 | 8-15 | 临时变量 |
| \$s0-\$s7 | 16-23 | 保存变量 |
| \$t8-\$t9 | 24-25 | 临时变量 |
| \$i0-\$i1 | 26-27 | 保留给操作系统 |
| \$gp | 28 | 全局指针 |
| \$sp | 29 | 栈指针 |
| \$s8/\$fp | 30 | 帧指针 |
| \$ra | 31 | 返回地址 |

#### MIPS指令

| 指令 | 用途 |
| -- | -- |
| add \$d,\$s,\$t | \$d = \$s + \$t |
| addi \$t,\$s,imm | \$t = \$s + imm |
| sub \$d,\$s,\$t | \$d = \$s - \$t |
| subi \$t,\$s,imm | \$t = \$s - imm |
| mul \$d,\$s,\$t | \$d = \$s * \$t |
| muli \$t,\$s,imm | \$t = \$s * imm |
| div \$d,\$s,\$t | \$d = \$s / \$t |
| divi \$t,\$s,imm | \$t = \$s / imm |
| rem \$d,\$s,\$t | \$d = \$s % \$t |
| remi \$t,\$s,imm | \$t = \$s % imm |
| and \$d,\$s,\$t | \$d = \$s & \$t |
| andi \$t,\$s,imm | \$t = \$s & imm |
| or \$d,\$s,\$t | \$d = \$s \| \$t |
| ori \$t,\$s,imm | \$t = \$s \| imm |
| xor \$d,\$s,\$t | \$d = \$s ^ \$t |
| xori \$t,\$s,imm | \$t = \$s ^ imm |
| nor \$d,\$s,\$t | \$d = ~(\$s \| \$t) |
| sll \$d,\$t,shamt | \$d = \$t << shamt |
| srl \$d,\$t,shamt | \$d = \$t >> shamt |
| sra \$d,\$t,shamt | \$d = \$t >> shamt |
| slt \$d,\$s,\$t | \$d = (\$s < \$t) ? 1 : 0 |
| slti \$t,\$s,imm | \$t = (\$s < imm) ? 1 : 0 |
| beq \$s,\$t,offset | if (\$s == \$t) pc += offset |
| bne \$s,\$t,offset | if (\$s != \$t) pc += offset |
| blez \$s,offset | if (\$s <= 0) pc += offset |
| bgtz \$s,offset | if (\$s > 0) pc += offset |
| bltz \$s,offset | if (\$s < 0) pc += offset |
| bgez \$s,offset | if (\$s >= 0) pc += offset |
| j target | pc = target |
| jal target | \$ra = pc + 4; pc = target |
| jr \$s | pc = \$s |
| jalr \$s | \$ra = pc + 4; pc = \$s |
| mfhi \$d | \$d = hi |
| mflo \$d | \$d = lo |
| mthi \$s | hi = \$s |
| mtlo \$s | lo = \$s |
| lw \$t,offset(\$s) | \$t = Memory[\$s + offset] |
| sw \$t,offset(\$s) | Memory[\$s + offset] = \$t |
| li \$t,imm | \$t = imm |
| la \$t,label | \$t = label |
| move \$d,\$s | \$d = \$s |
| nop | 什么都不做 |
| syscall | 系统调用 |

### 一个例子

斐波那契数列前20项

#### PL/0源程序

```pascal
const n=20;
var f1,f2,f,i;
begin
    f1:=1;
    f2:=1;
    i:=1;
    while i<=n do
        begin
            write(f1);
            f:=f1+f2;
            f1:=f2;
            f2:=f;
            i:=i+1
        end
end.
```

#### 编译程序生成的类P-code代码

```mips
jmp 0 1        # 转到1行（从0开始计数）
int 0 7        # 栈顶分配7个存储单元
lit 0 1        # 将1推入栈中
sto 0 3        # 弹出栈顶存进上0层中地址为3的单元
lit 0 1        # 将1推入栈中
sto 0 4        # 弹出栈顶存进上0层中地址为4的单元
lit 0 1        # 将1推入栈中
sto 0 6        # 弹出栈顶存进上0层中地址为6的单元
lod 0 6        # 取上0层中地址为6的值入栈
lit 0 20       # 将20推入栈中
opr 0 13       # 推入弹出的次栈顶是(1)否(0)小于等于栈顶
jpc 0 28       # 若弹出的栈顶为0 转到28行
lod 0 3        # 取上0层中地址为3的值入栈
opr 0 14       # 输出栈顶的数
opr 0 15       # 输出换行
lod 0 3        # 取上0层中地址为3的值入栈
lod 0 4        # 取上0层中地址为4的值入栈
opr 0 2        # 推入弹出的次栈顶和栈顶的和
sto 0 5        # 弹出栈顶存进上0层中地址为5的单元
lod 0 4        # 取上0层中地址为4的值入栈
sto 0 3        # 弹出栈顶存进上0层中地址为3的单元
lod 0 5        # 取上0层中地址为5的值入栈
sto 0 4        # 弹出栈顶存进上0层中地址为4的单元
lod 0 6        # 取上0层中地址为6的值入栈
lit 0 1        # 将1推入栈中
opr 0 2        # 推入弹出的次栈顶和栈顶的和
sto 0 6        # 弹出栈顶存进上0层中地址为6的单元
jmp 0 8        # 转到8行
opr 0 0        # 结束被调用过程 返回调用点并退栈
```

#### 本项目生成的PlantUML基本流图

![流程图](flowchart.png)

#### 本项目将类P-code代码转换得到的MIPS代码

```mips
.text
main:
move $t2, $sp
j lb1
lb1:
addiu $sp, $sp, 28
addiu $sp, $sp, 4
li $t0, 1
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 12
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
addiu $sp, $sp, 4
li $t0, 1
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 16
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
addiu $sp, $sp, 4
li $t0, 1
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 24
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
lb8:
move $t0, $t2
addi $t0, $t0, 24
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
addiu $sp, $sp, 4
li $t0, 20
sw $t0, ($sp)
subu $sp, $sp, 4
lw $t1, ($sp)
addi $t0, $t0, 1
slt $t0, $t1, $t0
sw $t0, ($sp)
subu $sp, $sp, 4
beq $t0, $zero, lb28
move $t0, $t2
addi $t0, $t0, 12
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
li $v0, 1
subu $sp, $sp, 4
move $a0, $t0
syscall
li $a0, 0xA
li $v0, 0xB
syscall
move $t0, $t2
addi $t0, $t0, 12
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 16
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
subu $sp, $sp, 4
lw $t1, ($sp)
add $t0, $t1, $t0
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 20
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
move $t0, $t2
addi $t0, $t0, 16
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 12
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
move $t0, $t2
addi $t0, $t0, 20
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 16
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
move $t0, $t2
addi $t0, $t0, 24
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
addiu $sp, $sp, 4
li $t0, 1
sw $t0, ($sp)
subu $sp, $sp, 4
lw $t1, ($sp)
add $t0, $t1, $t0
sw $t0, ($sp)
move $t0, $t2
addi $t0, $t0, 24
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
j lb8
lb28:
move $sp, $t2
addi $t0, $t2, 4
lw $t2, ($t0)
jr $ra
```

## 如何使用

### 导入代码

在非调试状态下，你可以在指令区选择`fibonacci`或者`gcd`并点击导入按钮导入。

你也可以输入或者复制进自己的代码。对于复制进的代码，有如下要求：

1. 每行必须有且一行指令，且行号与跳转的位置保持一致（解释器会按照行号来解释jmp等指令），不允许空行（包含结尾）

2. 指令的格式必须包含仅一条为js正则表达式/(\w{3})\s\*(\d+)\s+(\d+)/所能够识别的部分

根据上述正则表达式，以下格式的指令都能够被正确识别：

```asm
lit 0 1
2 lit 0 1
  lit  0    1
lit 0 1 # 注释
```

### 运行

点击运行按钮后，将会开始运行编辑器中的代码。遇到输入指令时，将会优先加载输入区的输入（每行一个数字）。用尽后，将会在每次输入时弹出输入框，每次需要输入一个数字。产生的输出将会显示在输出区。

运行的最大指令数为100000，目前不能设置。在运行期间，你可以在运行区查看当前运行的指令数。

### 单步调试

点击单步调试进入调试状态。此状态下，指令区将会显示下条运行的指令，以及当前与下一条指令执行时栈区的变化，编辑器将会高亮下条运行指令的所在行。

栈区中的颜色含义如下：绿（入栈）红（出栈）黄（修改）蓝（取值）黑色加粗边框（当前基址）

调试状态下连续点击单步调试按钮将会一步步执行。

![demo](demo.png)

上面的图片是一个单步调试状态的例子，如图所示，当前正在执行的指令是`jpc 0 22`，即弹出栈顶的值，若为0则跳转到22行。因此指令区将栈顶标注为红色。

### 多步调试

点击“运行N步”按钮将会连续执行N（在后面的文本框中设置）条指令并进入调试状态。

本按钮的设计目的是快速到达程序执行的某个位置。

你也可以将N的值设为某个较大的数来代替不能设置的`运行`功能的最大指令数。注意，区别在于每次执行“运行N步”功能时，需要复位才能进行下一次运行，而直接点击`运行`按钮则无此限制。

### 转换到其它语言

目前支持从类P-code到MIPS的两类转换和到基本流图（PlantUML形式）的一类转换。这基本上要求类P-code必须是从PL/0源程序编译生成的完整程序，以下称之为`受限类P-code`。它应该拥有以下特性：

1. 不混用数据和地址
2. 函数调用与循环内容保持栈平衡

对于非受限类P-code，不能保证其转换结果的意义。

在`转换区`选择转换方案后，将弹出一个对话框，显示转换结果。同时还能使用复制到剪贴版和下载功能。下载文件的命名与下载时间有关，后缀名和转换的目标语言有关。

#### 受限-MIPS-基础

`受限-MIPS-基础`是最基础的将类P-code转换为MIPS汇编代码转换方案，是上下文无关的单行类P-code代码向MIPS的转换

##### 运算类指令转换思路

将MIPS的\$sp寄存器作为栈顶，模拟类P-code的栈操作

例如，opr 0 4的解释为次栈顶的值乘以栈顶的值，结果存放次栈顶且栈顶指针-1，可以用以下MIPS指令模拟：

```mips
lw $t0, ($sp)     # 栈顶入寄存器$t0
subu $sp, $sp, 4  # 退栈
lw $t1, ($sp)     # (原来的)次栈顶入寄存器
mult $t0, $t1     # 寄存器乘法
mflo $t0          # 取乘积低位
sw $t0, ($sp)     # 保存到栈顶
```

##### 处理过程调用

对于此类指令，类P-code解释器的做法是调用时将下一条指令的地址保存到新基底上的第三个地址，返回时取这个值跳转

转换得到的MIPS的做法是调用时使用jal label指令，利用jr \$ra做返回

这里利用了MIPS机制，不再需要手动模拟，但是缺点是无法正确转换手动修改地址或者混用数据和地址的类P-code代码。这也是上面说这个转换方案只能处理受限类P-code的原因。

下面给出一个类P-code混用数据和地址的例子：

```mips
0 jmp 0 4     # 转到主程序
1   lit 0 2   # 子程序：将2推入栈中
2   opr 0 2   # 修改返回地址+2
3   opr 0 0   # return
4 int 0 3     # 主程序
5 cal 0 1     # 调用子程序
6 lit 0 3     # 原来应该返回的位置
7 opr 0 14    # 输出3
8 opr 0 0     # 实际返回的位置
```

这里给出不支持混用数据和地址的理由：这类程序虽然实际上可行，但是并不会由PL/0生成。当然，这也可以视为本转换方案的局限性。

#### 受限-MIPS-块内

`受限-MIPS-块内`在`受限-MIPS-基础`的基础上，在基本块内对连续的“n个lod/lid” + “n-1个opr” + “1个sto指令”做了特别优化，生成的指令数量较后者要少。目前，尚未完全验证此优化对执行结果是否存在影响。

举个例子，对于以下的类P-code代码：

```mips
lod 1 3        # 取上1层中地址为3的值入栈
lod 1 4        # 取上1层中地址为4的值入栈
opr 0 5        # 推入弹出的次栈顶和栈顶的整除商
sto 1 6        # 弹出栈顶存进上1层中地址为6的单元
```

按照`受限-MIPS-基础`的上下文无关的单行转换思路，需要生成以下MIPS代码：

```mips
move $t0, $t2 # lod 1 3
lw $t0, ($t0)
addi $t0, $t0, 12
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
move $t0, $t2 # lod 1 4
lw $t0, ($t0)
addi $t0, $t0, 16
lw $t0, ($t0)
addiu $sp, $sp, 4
sw $t0, ($sp)
lw $t0, ($sp) # opr 0 5
subu $sp, $sp, 4
lw $t1, ($sp)
div $t1, $t0
mflo $t0
sw $t0, ($sp)
move $t0, $t2 # sto 1 6
lw $t0, ($t0)
addi $t0, $t0, 24
lw $t1, ($sp)
subu $sp, $sp, 4
sw $t1, ($t0)
```

实际上，上述代码可以优化为

```mips
move $t0, $t2 # 取值
lw $t0, ($t0)
lw $t4, 12($t0)
lw $t5, 16($t0)
move $t3, $t0 # 计算
move $t0, $t5
div $t4, $t0
mflo $t0
sw $t0, 24($t3)
```

下面是对Fibonacci程序和GCD程序（求最大公约数）的转换结果的对比：

| 程序 | PL/0行数 | 类P-code行数 | 优化前行数 | 优化后行数 | 同功能C生成MIPS行数(*) |
| -- | -- | -- | -- | -- | -- |
| Fibonacci | 15 | 28 | 120 | 69 | 41 |
| GCD | 26 | 44 | 209 | 131 | 71 |

\*其中，C程序生成的MIPS代码使用<https://godbolt.org/>工具

#### PlantUML-基本流图

原理是识别类P-code中跳转指令，将整体的代码划分成若干个基本块，并且根据基本块之间的跳转关系生成基本流图，根据基本块内部的指令计算基本块栈指针的变化

[PlantUML](https://plantuml.com/zh/)是一个用简单直观的文本表示各种示意图的方案。它支持本项目实际使用的[Graphviz/DOT](https://graphviz.org/gallery/)语言的绘制。如果本地未安装graphviz，你也可以访问在线的[PlantUML Server](http://www.plantuml.com/plantuml/uml/)预览dot代码的图形表示。

## 本IDE的其他功能

### 自动注释

本编辑器会对复制与输入的一些格式进行自动修正，并且自动加入与更新注释。

在输入中也会更新注释。当你完成一条指令的输入时，无需移动光标到自动生成的注释的尾部再回车。可以在行中间直接回车，编辑器会尽量自动保持每一行注释的正确性。

你可以删去#后面的\*来阻止自动更新注释功能。

### 编辑器大小调整

在编辑器与右侧窗口之间有一道双线，将鼠标光标移至此处，光标变为左右调整光标，此时可以拖动双线进行一定程度上的布局调整。

### 错误处理说明

目前暂未实现任何错误处理。遇到错误情况可以保存代码后刷新，并结合“运行N步”与“单步调试”功能查看运行情况。
