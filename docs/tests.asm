.text

addi $2, $0, 5
andi $8, $2, 1
ori $9, $2, 2
slti $10, $2, 3
sltiu $11, $2, 4
xori $12, $2, 5

add $13, $2, $8
addu $14, $2, $8
and $15, $2, $9
or $16, $2, $10
nor $17, $2, $2
slt $18, $2, $11
sub $19, $2, $13

nop

addi $8, $0, 4651
addi $9, $0, 7894

mult $8, $9

addi $2, $0, 10
syscall
