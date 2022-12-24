.text

addi $2, $0, 5
addi $2, $0, 5
addi $2, $0, 5
addi $2, $0, 5

test: ori $9, $2, 2
slti $10, $2, 3
addi $2, $0, 5

j test

nop
nop
