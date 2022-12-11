.data 

.text

main:	lui $8, 4097

	addi $9, $0, 15
	
	sw $9, 40($8)
	
	lw $4, 40($8)
	
	addi $2, $0, 1
	syscall
	
	addi $2, $0, 10
	syscall
