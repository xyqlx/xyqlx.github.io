import{M as r}from"./MyProject-7350f725.js";import{M as e}from"./MarkdownCell-2eec6931.js";import{m as s,z as o,A as i,C as a,B as $,u as t,at as l}from"./index-64cee8c8.js";import"./tag-ecb2b4e0.js";const d=`## Introduction\r
\r
This project implements a simple online P-code interpreter.\r
\r
## Background\r
\r
This is part of the Compiler Principles training in the Computer Systems Engineering comprehensive practice.\r
\r
### Objectives and Content of the Experiment\r
\r
The purpose of "Computer Systems Engineering Comprehensive Practice" is to allow students to complete practical designs in computer organization and architecture, operating systems, compiler principles, and interface technology on a unified experimental platform, ultimately forming a consistent and complete concept of the overall computer system.\r
\r
Among them, compiler principles, as a core course in the field, enable students to write efficient, robust, and memory-efficient programs. In "Computer Systems Engineering Comprehensive Practice," by connecting the compiler principles training with the computer organization and architecture training, the relationship and logical hierarchy of various software/hardware components within a computer system can be demonstrated, thereby enhancing students' system integration capabilities.\r
\r
The compiler principles training is an experiment in which the target code generation program is performed on a model computer that has already completed the computer organization and architecture training. The target code is MIPS assembly language code.\r
\r
The compiler principles training requires students to master the PL/0 compilation program and learn MIPS assembly language. They need to modify the PL/0 compilation program to translate PL/0 source code into MIPS assembly code. This assembly code is then assembled and executed in QtSpim to obtain the simulation results of the PL/0 source program.\r
\r
### Experiment Content\r
\r
1. This experiment provides a PL/0 compilation program written in the C language. Students are required to understand the structure of the target code (P-code language), error handling, storage allocation, and execution process of the PL/0 compilation program based on interpreting the PL/0 compilation program.\r
2. Learn 32-bit MIPS assembly language, understand its register types, arithmetic and addressing instructions, program structure, and system calls, and be able to write programs using MIPS assembly instructions. Learn to use the QtSpim software to assemble and simulate the execution of MIPS assembly instruction source programs.\r
3. Modify the interpret() function and corresponding program code in the PL/0 compilation program to translate the P-code intermediate code into MIPS assembly instructions and generate MIPS assembly code files. Alternatively, modify the gen() function in the PL/0 compilation program and call the gen() function to generate MIPS assembly instructions when each statement in the analysis program is syntactically correct, and generate MIPS assembly code files.\r
4. Debug and modify the modified PL/0 compilation program in the C language compilation environment, compile and run it successfully. Obtain the corresponding MIPS assembly code file according to the PL/0 test cases. Then assemble and run the MIPS assembly code file in QtSpim to simulate the results.\r
\r
### References\r
\r
#### P-code Instructions\r
\r
| P-code Instruction | P-code Interpretation |\r
| -- | -- |\r
| INT 0 A | Allocate A storage units at the top of the stack |\r
| OPR 0 0 | End the called procedure, return to the calling point and pop the stack |\r
| CAL L A | Call the procedure at address A, with a level difference of L between the calling and called procedures |\r
| LIT 0 A | Store the immediate number A in the unit pointed by t, t+1 |\r
| LOD L A | Load the value of the storage unit with a level difference of L and an offset of A to the top of the stack, t+1 |\r
| STO L A | Store the value at the top of the stack in the storage unit with a level difference of L and an offset of A, t-1 |\r
| OPR 0 1 | Negate the top element of the stack and leave the result at the top |\r
| OPR 0 6 | If the top of the stack is odd, change it to 1; if it is even, change it to 0 |\r
| OPR 0 2 | Add the value of the second element on the stack to the value of the top element, and store the result in the second element, t-1 |\r
| OPR 0 3 | Subtract the value of the top element on the stack from the value of the second element, and store the result in the second element, t-1 |\r
| OPR 0 4 | Multiply the value of the second element on the stack by the value of the top element, and store the result in the second element, t-1 |\r
| OPR 0 5 | Divide the value of the second element on the stack by the value of the top element, and store the result in the second element, t-1 |\r
| OPR 0 8 | If the value of the second element is equal to the value of the top element, store 0 in the second element, t-1 |\r
| OPR 0 9 | If the value of the second element is not equal to the value of the top element, store 0 in the second element, t-1 |\r
| OPR 0 10 | If the value of the second element is less than the value of the top element, store 0 in the second element, t-1 |\r
| OPR 0 11 | If the value of the second element is greater than or equal to the value of the top element, store 0 in the second element, t-1 |\r
| OPR 0 12 | If the value of the second element is greater than the value of the top element, store 0 in the second element, t-1 |\r
| OPR 0 13 | If the value of the second element is less than or equal to the value of the top element, store 0 in the second element, t-1 |\r
| JMP 0 A | Unconditionally jump to address A |\r
| JPC 0 A | If the top of the stack is 0, jump to address A, t-1 |\r
| OPR 0 14 | Output the value at the top of the stack to the console screen, t-1 |\r
| OPR 0 15 | Output a newline to the console screen |\r
| OPR 0 16 | Read a line of input from the console and store it at the top of the stack, t+1 |\r
\r
#### MIPS Register Types\r
\r
| Register | Number | Purpose |\r
| -- | -- | -- |\r
| \\$zero | 0 | Constant 0 |\r
| \\$at | 1 | Reserved for the assembler |\r
| \\$v0-\\$v1 | 2-3 | Function call return values |\r
| \\$a0-\\$a3 | 4-7 | Function call arguments |\r
| \\$t0-\\$t7 | 8-15 | Temporary variables |\r
| \\$s0-\\$s7 | 16-23 | Saved variables |\r
| \\$t8-\\$t9 | 24-25 | Temporary variables |\r
| \\$i0-\\$i1 | 26-27 | Reserved for the operating system |\r
| \\$gp | 28 | Global pointer |\r
| \\$sp | 29 | Stack pointer |\r
| \\$s8/\\$fp | 30 | Frame pointer |\r
| \\$ra | 31 | Return address |\r
\r
#### MIPS Instructions\r
\r
| Instruction | Purpose |\r
| -- | -- |\r
| add $d,$s,$t | $d = $s + $t |\r
| addi $t,$s,imm | $t = $s + imm |\r
| sub $d,$s,$t | $d = $s - $t |\r
| subi $t,$s,imm | $t = $s - imm |\r
| mul $d,$s,$t | $d = $s * $t |\r
| muli $t,$s,imm | $t = $s * imm |\r
| div $d,$s,$t | $d = $s / $t |\r
| divi $t,$s,imm | $t = $s / imm |\r
| rem $d,$s,$t | $d = $s % $t |\r
| remi $t,$s,imm | $t = $s % imm |\r
| and $d,$s,$t | $d = $s & $t |\r
| andi $t,$s,imm | $t = $s & imm |\r
| or $d,$s,$t | $d = $s \\| $t |\r
| ori $t,$s,imm | $t = $s \\| imm |\r
| xor $d,$s,$t | $d = $s ^ $t |\r
| xori $t,$s,imm | $t = $s ^ imm |\r
| nor $d,$s,$t | $d = ~($s \\| $t) |\r
| sll $d,$t,shamt | $d = $t << shamt |\r
| srl $d,$t,shamt | $d = $t >> shamt |\r
| sra $d,$t,shamt | $d = $t >> shamt |\r
| slt $d,$s,$t | $d = ($s < $t) ? 1 : 0 |\r
| slti $t,$s,imm | $t = ($s < imm) ? 1 : 0 |\r
| beq $s,$t,offset | if ($s == $t) pc += offset |\r
| bne $s,$t,offset | if ($s != $t) pc += offset |\r
| blez $s,offset | if ($s <= 0) pc += offset |\r
| bgtz $s,offset | if ($s > 0) pc += offset |\r
| bltz $s,offset | if ($s < 0) pc += offset |\r
| bgez $s,offset | if ($s >= 0) pc += offset |\r
| j target | pc = target |\r
| jal target | $ra = pc + 4; pc = target |\r
| jr $s | pc = $s |\r
| jalr $s | $ra = pc + 4; pc = $s |\r
| mfhi $d | $d = hi |\r
| mflo $d | $d = lo |\r
| mthi $s | hi = $s |\r
| mtlo $s | lo = $s |\r
| lw $t,offset($s) | $t = Memory[$s + offset] |\r
| sw $t,offset($s) | Memory[$s + offset] = $t |\r
| li $t,imm | $t = imm |\r
| la $t,label | $t = label |\r
| move $d,$s | $d = $s |\r
| nop | No operation |\r
| syscall | System call |\r
\r
### An example\r
\r
Fibonacci sequence of the first 20 terms\r
\r
#### PL/0 source code\r
\r
\`\`\`pascal\r
const n=20;\r
var f1,f2,f,i;\r
begin\r
    f1:=1;\r
    f2:=1;\r
    i:=1;\r
    while i<=n do\r
        begin\r
            write(f1);\r
            f:=f1+f2;\r
            f1:=f2;\r
            f2:=f;\r
            i:=i+1\r
        end\r
end.\r
\`\`\`\r
\r
#### Class P-code Code Generated by the Compiler\r
\r
\`\`\`mips\r
jmp 0 1        # Jump to line 1 (counting from 0)\r
int 0 7        # Allocate 7 storage units for the stack top\r
lit 0 1        # Push 1 onto the stack\r
sto 0 3        # Pop the stack top and store it in the unit at address 3 of the upper layer 0\r
lit 0 1        # Push 1 onto the stack\r
sto 0 4        # Pop the stack top and store it in the unit at address 4 of the upper layer 0\r
lit 0 1        # Push 1 onto the stack\r
sto 0 6        # Pop the stack top and store it in the unit at address 6 of the upper layer 0\r
lod 0 6        # Load the value at address 6 of the upper layer 0 onto the stack\r
lit 0 20       # Push 20 onto the stack\r
opr 0 13       # Push 1 if the second stack top is less than or equal to the stack top; otherwise, push 0\r
jpc 0 28       # If the stack top is 0, jump to line 28\r
lod 0 3        # Load the value at address 3 of the upper layer 0 onto the stack\r
opr 0 14       # Output the top of the stack\r
opr 0 15       # Output a newline\r
lod 0 3        # Load the value at address 3 of the upper layer 0 onto the stack\r
lod 0 4        # Load the value at address 4 of the upper layer 0 onto the stack\r
opr 0 2        # Push the sum of the second stack top and the stack top\r
sto 0 5        # Pop the stack top and store it in the unit at address 5 of the upper layer 0\r
lod 0 4        # Load the value at address 4 of the upper layer 0 onto the stack\r
sto 0 3        # Pop the stack top and store it in the unit at address 3 of the upper layer 0\r
lod 0 5        # Load the value at address 5 of the upper layer 0 onto the stack\r
sto 0 4        # Pop the stack top and store it in the unit at address 4 of the upper layer 0\r
lod 0 6        # Load the value at address 6 of the upper layer 0 onto the stack\r
lit 0 1        # Push 1 onto the stack\r
opr 0 2        # Push the sum of the second stack top and the stack top\r
sto 0 6        # Pop the stack top and store it in the unit at address 6 of the upper layer 0\r
jmp 0 8        # Jump to line 8\r
opr 0 0        # End the called procedure, return to the calling point, and pop the stack\r
\`\`\`\r
\r
#### PlantUML Basic Flowchart Generated by this Project\r
\r
![Flowchart](flowchart.png)\r
\r
#### MIPS Code Obtained by Converting the Class P-code Code in this Project\r
\r
\`\`\`mips\r
.text\r
main:\r
move $t2, $sp\r
j lb1\r
lb1:\r
addiu $sp, $sp, 28\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
lb8:\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
addiu $sp, $sp, 4\r
li $t0, 20\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
addi $t0, $t0, 1\r
slt $t0, $t1, $t0\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
beq $t0, $zero, lb28\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
li $v0, 1\r
subu $sp, $sp, 4\r
move $a0, $t0\r
syscall\r
li $a0, 0xA\r
li $v0, 0xB\r
syscall\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
add $t0, $t1, $t0\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 20\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
move $t0, $t2\r
addi $t0, $t0, 20\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
add $t0, $t1, $t0\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
j lb8\r
lb28:\r
move $sp, $t2\r
addi $t0, $t2, 4\r
lw $t2, ($t0)\r
jr $ra\r
\`\`\`\r
\r
## How to Use\r
\r
### Importing Code\r
\r
You can select \`fibonacci\` or \`gcd\` in the instruction area and click the import button to import them.\r
\r
You can also type or copy your own code. The following requirements apply to the copied code:\r
\r
1. Each line must contain exactly one instruction, and the line numbers must match the jump positions (the interpreter will interpret \`jmp\` instructions based on line numbers). Empty lines (including the ending) are not allowed.\r
\r
2. The instruction format must contain only one part that can be recognized by the JavaScript regular expression \`/(\\w{3})\\s\\*(\\d+)\\s+(\\d+)/\`.\r
\r
According to the above regular expression, the following instruction formats can be correctly recognized:\r
\r
\`\`\`asm\r
lit 0 1\r
2 lit 0 1\r
  lit  0    1\r
lit 0 1 # comment\r
\`\`\`\r
\r
### Running\r
\r
After clicking the run button, the code in the editor will start running. When encountering an input instruction, it will first load the input from the input area (one number per line). Once all inputs are used, an input box will pop up each time an input is required. The generated output will be displayed in the output area.\r
\r
The maximum number of instructions for execution is 100,000, and it cannot be currently set. During the execution, you can check the current number of instructions executed in the running area.\r
\r
### Step-by-Step Debugging\r
\r
Clicking the step-by-step debugging button enters the debugging mode. In this mode, the instruction area will display the next instruction to be executed, as well as the changes in the stack area between the current and the next instruction. The editor will highlight the line where the next instruction is located.\r
\r
The colors in the stack area have the following meanings: green (push), red (pop), yellow (modify), blue (retrieve value), bold black border (current base address).\r
\r
In the debugging mode, clicking the step-by-step debugging button continuously will execute one step at a time.\r
\r
![demo](demo.png)\r
\r
The above image is an example of the step-by-step debugging mode. As shown in the image, the current instruction being executed is \`jpc 0 22\`, which means popping the value from the top of the stack and jumping to line 22 if it is 0. Therefore, the top of the stack is marked in red in the instruction area.\r
\r
### Multi-Step Debugging\r
\r
Clicking the "Run N Steps" button will execute N (specified in the textbox) instructions continuously and enter the debugging mode.\r
\r
The purpose of this button is to quickly reach a specific location in the program execution.\r
\r
You can also set the value of N to a larger number to simulate the maximum number of instructions for the "Run" function that cannot be set. Note that the difference is that each time the "Run N Steps" function is executed, a reset is required for the next run, while clicking the "Run" button directly does not have this limitation.\r
\r
### Conversion to Other Languages\r
\r
Currently, there are two types of conversions supported: from P-code to MIPS and from P-code to basic flowchart (in PlantUML format). This basically requires the P-code to be a complete program compiled from a PL/0 source program, referred to as "restricted P-code" below. It should have the following characteristics:\r
\r
1. Do not mix data and addresses.\r
2. Function calls and loop contents maintain stack balance.\r
\r
For unrestricted P-code, the meaning of the conversion result cannot be guaranteed.\r
\r
After selecting the conversion scheme in the "Conversion" area, a dialog box will pop up displaying the conversion result. You can also use the "Copy to Clipboard" and "Download" functions. The file name for downloading depends on the download time, and the file extension is related to the target language of the conversion.\r
\r
#### Restricted-MIPS-Basic\r
\r
"Restricted-MIPS-Basic" is the most basic conversion scheme that converts P-code to MIPS assembly code. It is a context-free conversion from single-line P-code code to MIPS.\r
\r
##### Conversion Approach for Arithmetic Instructions\r
\r
Use the MIPS \\$sp register as the top of the stack and simulate stack operations in P-code.\r
\r
For example, the interpretation of \`opr 0 4\` is to multiply the value below the top of the stack by the top of the stack, and store the result in the value below the top of the stack while decrementing the stack pointer by 1. This can be simulated using the following MIPS instructions:\r
\r
\`\`\`mips\r
lw $t0, ($sp)     # Load the top of the stack into register $t0\r
subu $sp, $sp, 4  # Decrement the stack pointer\r
lw $t1, ($sp)     # Load the (original) value below the top of the stack into a register\r
mult $t0, $t1     # Multiply using registers\r
mflo $t0          # Get the low-order product\r
sw $t0, ($sp)     # Save it to the top of the stack\r
\`\`\`\r
\r
##### Handling Procedure Calls\r
\r
For this type of instruction, the P-code interpreter saves the address of the next instruction on the third address of the new base and jumps to that value when returning.\r
\r
The generated MIPS code uses the \`jal label\` instruction for the call and \`jr $ra\` for the return, utilizing the MIPS mechanism. This eliminates the need for manual simulation. However, the downside is that it cannot correctly convert P-code code that manually modifies addresses or mixes data and addresses. This is why this conversion scheme can only handle restricted P-code.\r
\r
Here's an example of P-code code that mixes data and addresses:\r
\r
\`\`\`mips\r
0 jmp 0 4     # Jump to the main program\r
1   lit 0 2   # Subroutine: push 2 onto the stack\r
2   opr 0 2   # Modify the return address +2\r
3   opr 0 0   # Return\r
4 int 0 3     # Main program\r
5 cal 0 1     # Call the subroutine\r
6 lit 0 3     # The original return position\r
7 opr 0 14    # Output 3\r
8 opr 0 0     # The actual return position\r
\`\`\`\r
\r
The reason for not supporting mixing data and addresses is that although such programs are technically feasible, they are not generated by PL/0. This can also be seen as a limitation of this conversion scheme.\r
\r
#### Restricted-MIPS-In-Basic-Block\r
\r
"Restricted-MIPS-In-Basic-Block" is based on "Restricted-MIPS-Basic" and optimizes the continuous sequence of "n lod/lid" instructions + "n-1 opr" instructions + "1 sto" instruction within a basic block. The generated number of instructions is fewer than the former. Currently, the impact of this optimization on the execution result has not been fully verified.\r
\r
For example, for the following P-code code:\r
\r
\`\`\`mips\r
lod 1 3        # Load the value at address 3 in the upper level onto the stack\r
lod 1 4        # Load the value at address 4 in the upper level onto the stack\r
opr 0 5        # Push the integer division result of the popped second top of the stack and the top of the stack\r
sto 1 6        # Pop the top of the stack and store it in the unit at address 6 in the upper level\r
\`\`\`\r
\r
According to the context-free single-line conversion approach of "Restricted-MIPS-Basic," the following MIPS code needs to be generated:\r
\r
\`\`\`mips\r
move $t0, $t2 # lod 1 3\r
lw $t0, ($t0)\r
addi $t0, $t0, 12\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2 # lod 1 4\r
lw $t0, ($t0)\r
addi $t0, $t0, 16\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
lw $t0, ($sp) # opr 0 5\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
div $t1, $t0\r
mflo $t0\r
sw $t0, ($sp)\r
move $t0, $t2 # sto 1 6\r
lw $t0, ($t0)\r
addi $t0, $t0, 24\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
\`\`\`\r
\r
Actually, the above code can be optimized as follows:\r
\r
\`\`\`mips\r
move $t0, $t2 # Load value\r
lw $t0, ($t0)\r
lw $t4, 12($t0)\r
lw $t5, 16($t0)\r
move $t3, $t0 # Calculation\r
move $t0, $t5\r
div $t4, $t0\r
mflo $t0\r
sw $t0, 24($t3)\r
\`\`\`\r
\r
Here is a comparison of the transformation results for the Fibonacci program and the GCD program (greatest common divisor):\r
\r
| Program | PL/0 lines | Class P-code lines | Before optimization lines | After optimization lines | Equivalent C-generated MIPS lines (*) |\r
| -- | -- | -- | -- | -- | -- |\r
| Fibonacci | 15 | 28 | 120 | 69 | 41 |\r
| GCD | 26 | 44 | 209 | 131 | 71 |\r
\r
\\* The MIPS code generated from the C program with the same functionality was obtained using the [Godbolt](https://godbolt.org/) tool.\r
\r
#### PlantUML - Basic Flowchart\r
\r
The principle is to identify the jump instructions in the class P-code, divide the overall code into several basic blocks, generate a basic flowchart based on the jump relationships between basic blocks, and calculate the change of the stack pointer within each basic block based on the instructions within the block.\r
\r
[PlantUML](https://plantuml.com/) is a solution for representing various diagrams using simple and intuitive text. It supports the drawing of [Graphviz/DOT](https://graphviz.org/gallery/) language, which is actually used in this project. If you haven't installed Graphviz locally, you can also use the online [PlantUML Server](http://www.plantuml.com/plantuml/uml/) to preview the graphical representation of DOT code.\r
\r
## Other Features of this IDE\r
\r
### Automatic Commenting\r
\r
This editor automatically corrects and updates comments for some copied and inputted formats.\r
\r
Comments are also updated within the input. When you finish entering an instruction, you don't need to move the cursor to the end of the automatically generated comment and then press Enter. You can simply press Enter in the middle of the line, and the editor will try to maintain the correctness of each line of comments.\r
\r
You can remove the \\* after the # to prevent the automatic comment update feature.\r
\r
### Editor Size Adjustment\r
\r
There is a double line between the editor and the right window. Move the cursor to this area, and the cursor will change to a left-right adjustment cursor. You can drag the double line to adjust the layout to some extent.\r
\r
### Error Handling Explanation\r
\r
Currently, no error handling has been implemented. If you encounter an error, you can save the code, refresh the page, and use the "Run N Steps" and "Single Step Debug" features to check the execution status.\r
`,p=`## 介绍\r
\r
该项目实现了一个简易的在线类P-code解释器\r
\r
## 背景\r
\r
这是计算机系统工程综合实践的编译原理实训的一部分。\r
\r
### 实验目标与内容\r
\r
《计算机系统工程综合实践》的目的是让学生在一个统一的实验平台上，完成计算机组成与体系结构、操作系统、编译原理、接口技术的实践设计，最终形成一致的完整的计算机系统整体概念。\r
\r
其中，编译原理作为一门专业核心课，可以使学生编写出高效，稳健，占用内存少的程序。在《计算机系统工程综合实践》中，通过将编译原理实训与计算机组成原理的实训衔接，可以体现计算机系统内部各软件/硬件的关联关系与逻辑层次，进而提升学生的系统综合能力。\r
\r
编译原理实训是在计算机组成与体系结构实训已经完成的模型计算机上，进行目标代码生成程序的实验，其中目标代码是 MIPS 汇编语言代码。\r
\r
编译原理实训要求学生在熟练掌握PL/0编译程序的基础上，学习 MIPS 汇编语言，修改 PL/0 编译程序，将 PL/0 源代码翻译为 MIPS 汇编代码，该汇编代码在 QtSpim 中汇编运行，得到 PL/0 源程序运行的仿真结果。\r
\r
### 实验内容\r
\r
1. 本实验提供一个使用C语言编写的PL/0编译程序，要求在解读PL/0编译程序的基础上，掌握PL/0编译程序的目标代码（类P-code 语言）结构、错误处理和目标代码在执行时的存储分配及执行过程。\r
2. 学习32位MIPS汇编语言，了解其寄存器种类、算术及寻址指令、程序结构和系统调用，并能够使用MIPS汇编指令进行程序的编写；学习使用QtSpim软件，对MIPS汇编指令源程序进行汇编并仿真运行结果。\r
3. 修改PL/0编译程序中的解释程序interpret()函数及相应程序代码，将类P-code中间代码翻译成MIPS汇编指令，并生成MIPS汇编代码文件。或修改PL/0编译程序中的代码生成程序gen()函数，及在分析程序中的每个语句的语法正确时调用gen()函数生成MIPS 汇编指令，并生成MIPS汇编代码文件。\r
4. 在C语言编译环境下，上机调试修改后的PL/0编译程序，编译通过并运行。按照PL/0测试用例，得到对应的MIPS汇编代码文件；然后在QtSpim中汇编运行该MIPS汇编代码文件，进行结果仿真。\r
\r
### 参考资料\r
\r
#### 类P-code指令\r
\r
| 类P-code指令 | 解释 |\r
| -- | -- |\r
| INT 0 A | 在栈顶开辟 A 个存储单元 |\r
| OPR 0 0 | 结束被调用过程，返回调用点并退栈 |\r
| CAL L A | 调用地址为 A 的过程，调用过程与被调用过程的层差为 L |\r
| LIT 0 A | 立即数 A 存入 t 所指单元，t+1 |\r
| LOD L A | 将层差为 L、偏移量为 A 的存储单元的值取到栈顶，t+1 |\r
| STO L A | 将栈顶的值存入层差为 L、偏移量为 A 的单元，t-1 |\r
| OPR 0 1 | 求栈顶元素的相反数，结果值留在栈顶 |\r
| OPR 0 6 | 栈顶内容若为奇数则变为 1，若为偶数则变为 0 |\r
| OPR 0 2 | 次栈顶与栈顶的值相加，结果存入次栈顶，t-1 |\r
| OPR 0 3 | 次栈顶的值减去栈顶的值，结果存放次栈顶，t-1 |\r
| OPR 0 4 | 次栈顶的值乘以栈顶的值，结果存放次栈顶，t-1 |\r
| OPR 0 5 | 次栈顶的值除以栈顶的值，结果存放次栈顶，t-1 |\r
| OPR 0 8 | 次栈顶与栈顶内容若相等，则将 0 存于次栈顶，t-1 |\r
| OPR 0 9 | 次栈顶与栈顶内容若不相等，则将 0 存于次栈顶，t-1 |\r
| OPR 0 10 | 次栈顶内容若小于栈顶，则将 0 存于次栈顶，t-1 |\r
| OPR 0 11 | 次栈顶内容若大于等于栈顶，则将 0 存于次栈顶，t-1 |\r
| OPR 0 12 | 次栈顶内容若大于栈顶，则将 0 存于次栈顶，t-1 |\r
| OPR 0 13 | 次栈顶内容若小于等于栈顶，则将 0 存于次栈顶，t-1 |\r
| JMP 0 A | 无条件转移至地址 A |\r
| JPC 0 A | 若栈顶为 0，则转移至地址 A，t-1 |\r
| OPR 0 14 | 栈顶的值输出至控制台屏幕，t-1 |\r
| OPR 0 15 | 控制台屏幕输出一个换行 |\r
| OPR 0 16 | 从控制台读入一行输入，置入栈顶，t+1OPR 0 0 结束被调用过程，返回调用点并退栈 |\r
| CAL L A | 调用地址为 A 的过程，调用过程与被调用过程的层差为 L |\r
| LIT 0 A | 立即数 A 存入 t 所指单元，t+1 |\r
| LOD L A | 将层差为 L、偏移量为 A 的存储单元的值取到栈顶，t+1 |\r
| STO L A | 将栈顶的值存入层差为 L、偏移量为 A 的单元，t-1 |\r
| OPR 0 1 | 求栈顶元素的相反数，结果值留在栈顶 |\r
| OPR 0 6 | 栈顶内容若为奇数则变为 1，若为偶数则变为 0 |\r
| OPR 0 2 | 次栈顶与栈顶的值相加，结果存入次栈顶，t-1 |\r
| OPR 0 3 | 次栈顶的值减去栈顶的值，结果存放次栈顶，t-1 |\r
| OPR 0 4 | 次栈顶的值乘以栈顶的值，结果存放次栈顶，t-1 |\r
| OPR 0 5 | 次栈顶的值除以栈顶的值，结果存放次栈顶，t-1 |\r
| OPR 0 8 | 次栈顶与栈顶内容若相等，则将 0 存于次栈顶，t-1 |\r
| OPR 0 9 | 次栈顶与栈顶内容若不相等，则将 0 存于次栈顶，t-1 |\r
| OPR 0 10 | 次栈顶内容若小于栈顶，则将 0 存于次栈顶，t-1 |\r
| OPR 0 11 | 次栈顶内容若大于等于栈顶，则将 0 存于次栈顶，t-1 |\r
| OPR 0 12 | 次栈顶内容若大于栈顶，则将 0 存于次栈顶，t-1 |\r
| OPR 0 13 | 次栈顶内容若小于等于栈顶，则将 0 存于次栈顶，t-1 |\r
| JMP 0 A | 无条件转移至地址 A |\r
| JPC 0 A | 若栈顶为 0，则转移至地址 A，t-1 |\r
| OPR 0 14 | 栈顶的值输出至控制台屏幕，t-1 |\r
| OPR 0 15 | 控制台屏幕输出一个换行 |\r
| OPR 0 16 | 从控制台读入一行输入，置入栈顶，t+1 |\r
\r
#### MIPS寄存器种类\r
\r
| 寄存器 | 寄存器号 | 用途 |\r
| -- | -- | -- |\r
| \\$zero | 0 | 常量 0 |\r
| \\$at | 1 | 保留给汇编器 |\r
| \\$v0-\\$v1 | 2-3 | 函数调用返回值 |\r
| \\$a0-\\$a3 | 4-7 | 函数调用参数 |\r
| \\$t0-\\$t7 | 8-15 | 临时变量 |\r
| \\$s0-\\$s7 | 16-23 | 保存变量 |\r
| \\$t8-\\$t9 | 24-25 | 临时变量 |\r
| \\$i0-\\$i1 | 26-27 | 保留给操作系统 |\r
| \\$gp | 28 | 全局指针 |\r
| \\$sp | 29 | 栈指针 |\r
| \\$s8/\\$fp | 30 | 帧指针 |\r
| \\$ra | 31 | 返回地址 |\r
\r
#### MIPS指令\r
\r
| 指令 | 用途 |\r
| -- | -- |\r
| add \\$d,\\$s,\\$t | \\$d = \\$s + \\$t |\r
| addi \\$t,\\$s,imm | \\$t = \\$s + imm |\r
| sub \\$d,\\$s,\\$t | \\$d = \\$s - \\$t |\r
| subi \\$t,\\$s,imm | \\$t = \\$s - imm |\r
| mul \\$d,\\$s,\\$t | \\$d = \\$s * \\$t |\r
| muli \\$t,\\$s,imm | \\$t = \\$s * imm |\r
| div \\$d,\\$s,\\$t | \\$d = \\$s / \\$t |\r
| divi \\$t,\\$s,imm | \\$t = \\$s / imm |\r
| rem \\$d,\\$s,\\$t | \\$d = \\$s % \\$t |\r
| remi \\$t,\\$s,imm | \\$t = \\$s % imm |\r
| and \\$d,\\$s,\\$t | \\$d = \\$s & \\$t |\r
| andi \\$t,\\$s,imm | \\$t = \\$s & imm |\r
| or \\$d,\\$s,\\$t | \\$d = \\$s \\| \\$t |\r
| ori \\$t,\\$s,imm | \\$t = \\$s \\| imm |\r
| xor \\$d,\\$s,\\$t | \\$d = \\$s ^ \\$t |\r
| xori \\$t,\\$s,imm | \\$t = \\$s ^ imm |\r
| nor \\$d,\\$s,\\$t | \\$d = ~(\\$s \\| \\$t) |\r
| sll \\$d,\\$t,shamt | \\$d = \\$t << shamt |\r
| srl \\$d,\\$t,shamt | \\$d = \\$t >> shamt |\r
| sra \\$d,\\$t,shamt | \\$d = \\$t >> shamt |\r
| slt \\$d,\\$s,\\$t | \\$d = (\\$s < \\$t) ? 1 : 0 |\r
| slti \\$t,\\$s,imm | \\$t = (\\$s < imm) ? 1 : 0 |\r
| beq \\$s,\\$t,offset | if (\\$s == \\$t) pc += offset |\r
| bne \\$s,\\$t,offset | if (\\$s != \\$t) pc += offset |\r
| blez \\$s,offset | if (\\$s <= 0) pc += offset |\r
| bgtz \\$s,offset | if (\\$s > 0) pc += offset |\r
| bltz \\$s,offset | if (\\$s < 0) pc += offset |\r
| bgez \\$s,offset | if (\\$s >= 0) pc += offset |\r
| j target | pc = target |\r
| jal target | \\$ra = pc + 4; pc = target |\r
| jr \\$s | pc = \\$s |\r
| jalr \\$s | \\$ra = pc + 4; pc = \\$s |\r
| mfhi \\$d | \\$d = hi |\r
| mflo \\$d | \\$d = lo |\r
| mthi \\$s | hi = \\$s |\r
| mtlo \\$s | lo = \\$s |\r
| lw \\$t,offset(\\$s) | \\$t = Memory[\\$s + offset] |\r
| sw \\$t,offset(\\$s) | Memory[\\$s + offset] = \\$t |\r
| li \\$t,imm | \\$t = imm |\r
| la \\$t,label | \\$t = label |\r
| move \\$d,\\$s | \\$d = \\$s |\r
| nop | 什么都不做 |\r
| syscall | 系统调用 |\r
\r
### 一个例子\r
\r
斐波那契数列前20项\r
\r
#### PL/0源程序\r
\r
\`\`\`pascal\r
const n=20;\r
var f1,f2,f,i;\r
begin\r
    f1:=1;\r
    f2:=1;\r
    i:=1;\r
    while i<=n do\r
        begin\r
            write(f1);\r
            f:=f1+f2;\r
            f1:=f2;\r
            f2:=f;\r
            i:=i+1\r
        end\r
end.\r
\`\`\`\r
\r
#### 编译程序生成的类P-code代码\r
\r
\`\`\`mips\r
jmp 0 1        # 转到1行（从0开始计数）\r
int 0 7        # 栈顶分配7个存储单元\r
lit 0 1        # 将1推入栈中\r
sto 0 3        # 弹出栈顶存进上0层中地址为3的单元\r
lit 0 1        # 将1推入栈中\r
sto 0 4        # 弹出栈顶存进上0层中地址为4的单元\r
lit 0 1        # 将1推入栈中\r
sto 0 6        # 弹出栈顶存进上0层中地址为6的单元\r
lod 0 6        # 取上0层中地址为6的值入栈\r
lit 0 20       # 将20推入栈中\r
opr 0 13       # 推入弹出的次栈顶是(1)否(0)小于等于栈顶\r
jpc 0 28       # 若弹出的栈顶为0 转到28行\r
lod 0 3        # 取上0层中地址为3的值入栈\r
opr 0 14       # 输出栈顶的数\r
opr 0 15       # 输出换行\r
lod 0 3        # 取上0层中地址为3的值入栈\r
lod 0 4        # 取上0层中地址为4的值入栈\r
opr 0 2        # 推入弹出的次栈顶和栈顶的和\r
sto 0 5        # 弹出栈顶存进上0层中地址为5的单元\r
lod 0 4        # 取上0层中地址为4的值入栈\r
sto 0 3        # 弹出栈顶存进上0层中地址为3的单元\r
lod 0 5        # 取上0层中地址为5的值入栈\r
sto 0 4        # 弹出栈顶存进上0层中地址为4的单元\r
lod 0 6        # 取上0层中地址为6的值入栈\r
lit 0 1        # 将1推入栈中\r
opr 0 2        # 推入弹出的次栈顶和栈顶的和\r
sto 0 6        # 弹出栈顶存进上0层中地址为6的单元\r
jmp 0 8        # 转到8行\r
opr 0 0        # 结束被调用过程 返回调用点并退栈\r
\`\`\`\r
\r
#### 本项目生成的PlantUML基本流图\r
\r
![流程图](flowchart.png)\r
\r
#### 本项目将类P-code代码转换得到的MIPS代码\r
\r
\`\`\`mips\r
.text\r
main:\r
move $t2, $sp\r
j lb1\r
lb1:\r
addiu $sp, $sp, 28\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
lb8:\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
addiu $sp, $sp, 4\r
li $t0, 20\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
addi $t0, $t0, 1\r
slt $t0, $t1, $t0\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
beq $t0, $zero, lb28\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
li $v0, 1\r
subu $sp, $sp, 4\r
move $a0, $t0\r
syscall\r
li $a0, 0xA\r
li $v0, 0xB\r
syscall\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
add $t0, $t1, $t0\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 20\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 12\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
move $t0, $t2\r
addi $t0, $t0, 20\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 16\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
addiu $sp, $sp, 4\r
li $t0, 1\r
sw $t0, ($sp)\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
add $t0, $t1, $t0\r
sw $t0, ($sp)\r
move $t0, $t2\r
addi $t0, $t0, 24\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
j lb8\r
lb28:\r
move $sp, $t2\r
addi $t0, $t2, 4\r
lw $t2, ($t0)\r
jr $ra\r
\`\`\`\r
\r
## 如何使用\r
\r
### 导入代码\r
\r
在非调试状态下，你可以在指令区选择\`fibonacci\`或者\`gcd\`并点击导入按钮导入。\r
\r
你也可以输入或者复制进自己的代码。对于复制进的代码，有如下要求：\r
\r
1. 每行必须有且一行指令，且行号与跳转的位置保持一致（解释器会按照行号来解释jmp等指令），不允许空行（包含结尾）\r
\r
2. 指令的格式必须包含仅一条为js正则表达式/(\\w{3})\\s\\*(\\d+)\\s+(\\d+)/所能够识别的部分\r
\r
根据上述正则表达式，以下格式的指令都能够被正确识别：\r
\r
\`\`\`asm\r
lit 0 1\r
2 lit 0 1\r
  lit  0    1\r
lit 0 1 # 注释\r
\`\`\`\r
\r
### 运行\r
\r
点击运行按钮后，将会开始运行编辑器中的代码。遇到输入指令时，将会优先加载输入区的输入（每行一个数字）。用尽后，将会在每次输入时弹出输入框，每次需要输入一个数字。产生的输出将会显示在输出区。\r
\r
运行的最大指令数为100000，目前不能设置。在运行期间，你可以在运行区查看当前运行的指令数。\r
\r
### 单步调试\r
\r
点击单步调试进入调试状态。此状态下，指令区将会显示下条运行的指令，以及当前与下一条指令执行时栈区的变化，编辑器将会高亮下条运行指令的所在行。\r
\r
栈区中的颜色含义如下：绿（入栈）红（出栈）黄（修改）蓝（取值）黑色加粗边框（当前基址）\r
\r
调试状态下连续点击单步调试按钮将会一步步执行。\r
\r
![demo](demo.png)\r
\r
上面的图片是一个单步调试状态的例子，如图所示，当前正在执行的指令是\`jpc 0 22\`，即弹出栈顶的值，若为0则跳转到22行。因此指令区将栈顶标注为红色。\r
\r
### 多步调试\r
\r
点击“运行N步”按钮将会连续执行N（在后面的文本框中设置）条指令并进入调试状态。\r
\r
本按钮的设计目的是快速到达程序执行的某个位置。\r
\r
你也可以将N的值设为某个较大的数来代替不能设置的\`运行\`功能的最大指令数。注意，区别在于每次执行“运行N步”功能时，需要复位才能进行下一次运行，而直接点击\`运行\`按钮则无此限制。\r
\r
### 转换到其它语言\r
\r
目前支持从类P-code到MIPS的两类转换和到基本流图（PlantUML形式）的一类转换。这基本上要求类P-code必须是从PL/0源程序编译生成的完整程序，以下称之为\`受限类P-code\`。它应该拥有以下特性：\r
\r
1. 不混用数据和地址\r
2. 函数调用与循环内容保持栈平衡\r
\r
对于非受限类P-code，不能保证其转换结果的意义。\r
\r
在\`转换区\`选择转换方案后，将弹出一个对话框，显示转换结果。同时还能使用复制到剪贴版和下载功能。下载文件的命名与下载时间有关，后缀名和转换的目标语言有关。\r
\r
#### 受限-MIPS-基础\r
\r
\`受限-MIPS-基础\`是最基础的将类P-code转换为MIPS汇编代码转换方案，是上下文无关的单行类P-code代码向MIPS的转换\r
\r
##### 运算类指令转换思路\r
\r
将MIPS的\\$sp寄存器作为栈顶，模拟类P-code的栈操作\r
\r
例如，opr 0 4的解释为次栈顶的值乘以栈顶的值，结果存放次栈顶且栈顶指针-1，可以用以下MIPS指令模拟：\r
\r
\`\`\`mips\r
lw $t0, ($sp)     # 栈顶入寄存器$t0\r
subu $sp, $sp, 4  # 退栈\r
lw $t1, ($sp)     # (原来的)次栈顶入寄存器\r
mult $t0, $t1     # 寄存器乘法\r
mflo $t0          # 取乘积低位\r
sw $t0, ($sp)     # 保存到栈顶\r
\`\`\`\r
\r
##### 处理过程调用\r
\r
对于此类指令，类P-code解释器的做法是调用时将下一条指令的地址保存到新基底上的第三个地址，返回时取这个值跳转\r
\r
转换得到的MIPS的做法是调用时使用jal label指令，利用jr \\$ra做返回\r
\r
这里利用了MIPS机制，不再需要手动模拟，但是缺点是无法正确转换手动修改地址或者混用数据和地址的类P-code代码。这也是上面说这个转换方案只能处理受限类P-code的原因。\r
\r
下面给出一个类P-code混用数据和地址的例子：\r
\r
\`\`\`mips\r
0 jmp 0 4     # 转到主程序\r
1   lit 0 2   # 子程序：将2推入栈中\r
2   opr 0 2   # 修改返回地址+2\r
3   opr 0 0   # return\r
4 int 0 3     # 主程序\r
5 cal 0 1     # 调用子程序\r
6 lit 0 3     # 原来应该返回的位置\r
7 opr 0 14    # 输出3\r
8 opr 0 0     # 实际返回的位置\r
\`\`\`\r
\r
这里给出不支持混用数据和地址的理由：这类程序虽然实际上可行，但是并不会由PL/0生成。当然，这也可以视为本转换方案的局限性。\r
\r
#### 受限-MIPS-块内\r
\r
\`受限-MIPS-块内\`在\`受限-MIPS-基础\`的基础上，在基本块内对连续的“n个lod/lid” + “n-1个opr” + “1个sto指令”做了特别优化，生成的指令数量较后者要少。目前，尚未完全验证此优化对执行结果是否存在影响。\r
\r
举个例子，对于以下的类P-code代码：\r
\r
\`\`\`mips\r
lod 1 3        # 取上1层中地址为3的值入栈\r
lod 1 4        # 取上1层中地址为4的值入栈\r
opr 0 5        # 推入弹出的次栈顶和栈顶的整除商\r
sto 1 6        # 弹出栈顶存进上1层中地址为6的单元\r
\`\`\`\r
\r
按照\`受限-MIPS-基础\`的上下文无关的单行转换思路，需要生成以下MIPS代码：\r
\r
\`\`\`mips\r
move $t0, $t2 # lod 1 3\r
lw $t0, ($t0)\r
addi $t0, $t0, 12\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
move $t0, $t2 # lod 1 4\r
lw $t0, ($t0)\r
addi $t0, $t0, 16\r
lw $t0, ($t0)\r
addiu $sp, $sp, 4\r
sw $t0, ($sp)\r
lw $t0, ($sp) # opr 0 5\r
subu $sp, $sp, 4\r
lw $t1, ($sp)\r
div $t1, $t0\r
mflo $t0\r
sw $t0, ($sp)\r
move $t0, $t2 # sto 1 6\r
lw $t0, ($t0)\r
addi $t0, $t0, 24\r
lw $t1, ($sp)\r
subu $sp, $sp, 4\r
sw $t1, ($t0)\r
\`\`\`\r
\r
实际上，上述代码可以优化为\r
\r
\`\`\`mips\r
move $t0, $t2 # 取值\r
lw $t0, ($t0)\r
lw $t4, 12($t0)\r
lw $t5, 16($t0)\r
move $t3, $t0 # 计算\r
move $t0, $t5\r
div $t4, $t0\r
mflo $t0\r
sw $t0, 24($t3)\r
\`\`\`\r
\r
下面是对Fibonacci程序和GCD程序（求最大公约数）的转换结果的对比：\r
\r
| 程序 | PL/0行数 | 类P-code行数 | 优化前行数 | 优化后行数 | 同功能C生成MIPS行数(*) |\r
| -- | -- | -- | -- | -- | -- |\r
| Fibonacci | 15 | 28 | 120 | 69 | 41 |\r
| GCD | 26 | 44 | 209 | 131 | 71 |\r
\r
\\*其中，C程序生成的MIPS代码使用<https://godbolt.org/>工具\r
\r
#### PlantUML-基本流图\r
\r
原理是识别类P-code中跳转指令，将整体的代码划分成若干个基本块，并且根据基本块之间的跳转关系生成基本流图，根据基本块内部的指令计算基本块栈指针的变化\r
\r
[PlantUML](https://plantuml.com/zh/)是一个用简单直观的文本表示各种示意图的方案。它支持本项目实际使用的[Graphviz/DOT](https://graphviz.org/gallery/)语言的绘制。如果本地未安装graphviz，你也可以访问在线的[PlantUML Server](http://www.plantuml.com/plantuml/uml/)预览dot代码的图形表示。\r
\r
## 本IDE的其他功能\r
\r
### 自动注释\r
\r
本编辑器会对复制与输入的一些格式进行自动修正，并且自动加入与更新注释。\r
\r
在输入中也会更新注释。当你完成一条指令的输入时，无需移动光标到自动生成的注释的尾部再回车。可以在行中间直接回车，编辑器会尽量自动保持每一行注释的正确性。\r
\r
你可以删去#后面的\\*来阻止自动更新注释功能。\r
\r
### 编辑器大小调整\r
\r
在编辑器与右侧窗口之间有一道双线，将鼠标光标移至此处，光标变为左右调整光标，此时可以拖动双线进行一定程度上的布局调整。\r
\r
### 错误处理说明\r
\r
目前暂未实现任何错误处理。遇到错误情况可以保存代码后刷新，并结合“运行N步”与“单步调试”功能查看运行情况。\r
`,c="/assets/flowchart-fe9374bc.png",b=s({__name:"PCodeViewer",setup(h){const n={"flowchart.png":c,"demo.png":l};return(u,m)=>(o(),i(r,{project:"pcode-viewer"},{default:a(()=>[$(e,{en:t(d),zh:t(p),urls:n},null,8,["en","zh"])]),_:1}))}});export{b as default};
