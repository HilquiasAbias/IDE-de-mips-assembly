.text

main:  addi $2, $0, 5
       syscall
       add $4, $2, $2
print:
       addi $2, $0, 1
       syscall
end:   addi $2, $0, 10
       syscall
