/*
 This is a program that demonstrates how to embed the assembly code
 produced by the SimpleCalculator into C programs,
 that can be compiled using GCC or CLANG. It's made on Oracle Linux, and
 apparently it can be compiled both to be 32-bit and to be 64-bit.

 The web-page of SimpleCalculator is:
 http://flatassembler.github.io/calculator.html
 When programming SimpleCalculator, Teo Samarzija took much of the code
 from his earlier project, ArithmeticExpressionCompiler. Its web-page is:
 http://flatassembler.github.io/compiler.html

 Both of them produce assembly code compatible with FlatAssembler.
 However, the code produced by SimpleCalculator is easier to modify to be
 compatible with less feature-full (or, better say, with different features)
 assemblers, such as GAS (used by GCC and CLANG).

 For a more advanced example, see:
 https://github.com/FlatAssembler/ArithmeticExpressionCompiler/blob/master/trigonometry.c
 */
#include <stdio.h>
#ifdef _WIN32
#include <stdlib.h> //system("pause")
#endif

float a, b, c, result;
/*Declare variables used in Assembly as global, so that you don't
  have to deal with both the FPU stack and the system stack
  (of the "esp" or "rsp" registers).
*/

int main() {
  printf(
      "This program solves quadratic equations of the form a*x^2+b*x+c=0.\n");
  printf("Enter 'a': ");
  scanf("%f", &a);
  printf("Enter 'b': ");
  scanf("%f", &b);
  printf("Enter 'c': ");
  scanf("%f", &c);
// The formula typed in the SimpleCalculator and set for compilation to Assembly
// here is "(-b-sqrt(b*b-4*a*c))/(2*a)".
#ifndef _WIN32
  asm(".intel_syntax\n"
      /*The C "asm" keyword, in case you didn't know, instructs the compiler to
      pass down a constant string to assembler. The C compiler will, of course,
      as it always does, look for escape sequences in strings, and will replace
      '\n' with a new-line-character. So, GAS supports two syntaxes for x86
      assembly. One is "att_syntax" (used by default, and usually emitted by
      CLANG and GCC), and the other is "intel_syntax". FlatAssembler, as well as
      most of the assembly language compilers for x86, support only
      "intel_syntax". The differences between the two are that, in "att_syntax":
      1) The source goes before the operand for most mnemonics ("mov",
      "add"...). 2) That you need to mark the names of registers with % (the
      compiler doesn't attempt to guess what is a variable and what is a
      register). For instance, you can even have a variable named "eax", but,
      whenever you mean the actual 32-bit accumulator register, you write
      "%eax". 3) The lengths of the operands are marked in the names of
      mnemonics. For instance, instead of writing "mov dword", you write "movl".
      Not explicitly denoting the lengths of the operands is always a syntax
      error (even if you are moving data between processor registers of fixed
      sizes). Luckily, you don't have to master the "att_syntax" to use GAS,
      since it allows you to change between Intel Syntax and AT&T Syntax on the
      fly, just put a line containing ".intel_syntax" or ".att_syntax" before
      you will use them.*/
      "finit\n" // C compiler automatically concates two constant strings next
                // to each other.
      "mov dword PTR [result],0x40800000 #4\n"
      /*This line perfectly illustrates the main differences between GAS in
      Intel Syntax mode and FlatAssembler: 1) To comment out the rest of the
      line, you use '#' (not ';', as in FlatAssembler). 2) You need to
      explicitly denote, using the "ptr" keyword, if the name of some variable
      is used as a pointer (but that's why you don't need to worry about the
      difference between assembly for 32-bit and 64-bit Linux here). 3) GAS
      doesn't support automatic decimal-to-IEEE754 conversion. You need to
      convert decimal numbers to hexadecimal IEEE754 yourself. Now,
      SimpleCalculator does that for you, since it's trivial for JavaScript run
      in the Rhino framework (or, for that sake, Duktape) to do that.
      ArithmeticExpressionCompiler doesn't do that (when it's run in a browser;
      when ArithmeticExpressionCompiler is run in Duktape, it produces the same
         assembly as SimpleCalculator does), it relies on FlatAssembler's
      ability to do that.*/
      "fld dword PTR [result]\n"
      "fld dword PTR [a]\n"
      "fmulp\n"
      "fld dword PTR [c]\n"
      "fmulp\n"
      /*Notice that GAS doesn't require you, nor allows you, to put "st1,st0"
       (the names of the first two FPU registers) after the mnemonics "faddp",
       "fsubp", "fmulp" and "fdivp" (FlatAssembler requires you to).*/
      "fld dword PTR [b]\n"
      "fld dword PTR [b]\n"
      "fmulp\n"
      "fxch\n"
      "fsubp\n"
      "fsqrt\n"
      "mov dword PTR [result],0x0 #0\n"
      "fld dword PTR [result]\n"
      "fld dword PTR [b]\n"
      "fsubp\n"
      "fxch\n"
      "fsubp\n"
      "mov dword PTR [result],0x40000000 #2\n"
      "fld dword PTR [result]\n"
      "fld dword PTR [a]\n"
      "fmulp\n"
      "fdivp\n"
      "fstp dword PTR [result]\n"
      ".att_syntax\n");
#else /*For Windows, you need to write [_result] instead of [result],          \
and similarly for other variable names (it has to do with the way linker makes \
EXE files).*/
  asm(".intel_syntax\n"
      "finit\n"
      "mov dword PTR [_result],0x40800000 #4\n"
      "fld dword PTR [_result]\n"
      "fld dword PTR [_a]\n"
      "fmulp\n"
      "fld dword PTR [_c]\n"
      "fmulp\n"
      "fld dword PTR [_b]\n"
      "fld dword PTR [_b]\n"
      "fmulp\n"
      "fxch\n"
      "fsubp\n"
      "fsqrt\n"
      "mov dword PTR [_result],0x0 #0\n"
      "fld dword PTR [_result]\n"
      "fld dword PTR [_b]\n"
      "fsubp\n"
      "fxch\n"
      "fsubp\n"
      "mov dword PTR [_result],0x40000000 #2\n"
      "fld dword PTR [_result]\n"
      "fld dword PTR [_a]\n"
      "fmulp\n"
      "fdivp\n"
      "fstp dword PTR [_result]\n"
      ".att_syntax\n");
#endif
  printf("One solution is: x=%f\n", result);
// The formula typed in the SimpleCalculator and set for compilation here is
// "(-b+sqrt(b*b-4*a*c))/(2*a)".
#ifndef _WIN32
  asm(".intel_syntax\n"
      "finit\n"
      "mov dword PTR [result],0x40800000 #4\n"
      "fld dword PTR [result]\n"
      "fld dword PTR [a]\n"
      "fmulp\n"
      "fld dword PTR [c]\n"
      "fmulp\n"
      "fld dword PTR [b]\n"
      "fld dword PTR [b]\n"
      "fmulp\n"
      "fxch\n"
      "fsubp\n"
      "fsqrt\n"
      "mov dword PTR [result],0x0 #0\n"
      "fld dword PTR [result]\n"
      "fld dword PTR [b]\n"
      "fsubp\n"
      "fxch\n"
      "faddp\n"
      "mov dword PTR [result],0x40000000 #2\n"
      "fld dword PTR [result]\n"
      "fld dword PTR [a]\n"
      "fmulp\n"
      "fdivp\n"
      "fstp dword PTR [result]\n"
      ".att_syntax\n");
#else
  asm(".intel_syntax\n"
      "finit\n"
      "mov dword PTR [_result],0x40800000 #4\n"
      "fld dword PTR [_result]\n"
      "fld dword PTR [_a]\n"
      "fmulp\n"
      "fld dword PTR [_c]\n"
      "fmulp\n"
      "fld dword PTR [_b]\n"
      "fld dword PTR [_b]\n"
      "fmulp\n"
      "fxch\n"
      "fsubp\n"
      "fsqrt\n"
      "mov dword PTR [_result],0x0 #0\n"
      "fld dword PTR [_result]\n"
      "fld dword PTR [_b]\n"
      "fsubp\n"
      "fxch\n"
      "faddp\n"
      "mov dword PTR [_result],0x40000000 #2\n"
      "fld dword PTR [_result]\n"
      "fld dword PTR [_a]\n"
      "fmulp\n"
      "fdivp\n"
      "fstp dword PTR [_result]\n"
      ".att_syntax\n");
#endif
  printf("Another solution is: x=%f\n", result);
#ifdef _WIN32
  system("pause");
/* Linux and MacOS show "Press any key to continue..." automatically,
and they don't have the "pause" command defined (it outputs an error message).
*/
#endif
  return 0;
}
