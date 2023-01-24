.text

addi $8, $0, 5
addi $9, $0, 8

beqLabel:
beq $8, $9, bgezLabel 

bgezLabel:
bgez $8, bgtzLabel

bgtzLabel:
bgtz $8, blezLabel

blezLabel:
blez $8, bltzLabel

bltzLabel:
bltz $8, bneLabel

bneLabel:
bne $8, $9, beqLabel
