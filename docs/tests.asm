.text

addi $8, $0, 5
addi $9, $0, 8

beqLabel:
beq $8, $9, bgeLabel 

bgeLabel:
bge $8, $9, bgtLabel

bgtLabel:
bgt $8, $9, bleLabel

bleLabel:
ble $8, $9, bltLabel

bltLabel:
blt $8, $9, bneLabel

bneLabel:
bne $8, $9, beqLabel
