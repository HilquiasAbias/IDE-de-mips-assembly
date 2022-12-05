.text

addi $8, $0, 5
addi $9, $0, 6

beq $8, $9, test

addi $4, $0, 'n'
addi $2, $0, 11
syscall
addi $2, $0, 10
syscall
nop
test:

addi $4, $0, 's'
addi $2, $0, 11
syscall
addi $2, $0, 10
syscall

