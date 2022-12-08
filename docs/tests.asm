.data # 0x10010000

.word 12, 15, 8, 0, 3

.text

main:	lui $4, 0x1001
	addi $5, $0, 4
	jal prn
	addi $2, $0, 10
	syscall
	
prn:	add $9, $0, $4
	add $10, $0, $5
cont:   lw $4, 0($9)
	addi $2, $0, 1
	syscall
	addi $2, $0, 11
	addi $4, $0, 10 # \n
	syscall
	addi $9, $9, 4
	addi $10, $10, -1
	bne $10, $0, cont
	
endprn: jr $31
