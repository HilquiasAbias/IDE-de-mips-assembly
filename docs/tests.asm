.text

addi $2, $0, 5
andi $8, $2, 1

test: ori $9, $2, 2
slti $10, $2, 3
sltiu $11, $2, 4
xori $12, $2, 5

j test

