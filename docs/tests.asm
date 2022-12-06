.text

addi $8, $0, 5
beq $8, $9, lbBeq
bgez $10, lbBgez
bgtz $11, lbBgtz
lw $13, 4($12)
lui $14, 100

lbBeq:
lbBgez:
lbBgtz:
