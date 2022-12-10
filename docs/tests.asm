#.data 

.word 67 'u' 33

.text

main:	lui $8, 0x1001

	lw $4, 0($8)
	addi $2, $0, 11
	syscall
	
	addi $8, $8, 4
	
	lw $4, 0($8)
	addi $2, $0, 11
	syscall
	
	addi $8, $8, 4
	
	lw $4, 0($8)
	addi $2, $0, 11
	syscall
	
	addi $8, $8, 4
	
	lw $4, 0($8)
	addi $2, $0, 1
	syscall
	
	addi $2, $0, 10
	syscall
