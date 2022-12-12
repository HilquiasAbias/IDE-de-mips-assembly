.data 

.text

main:  addi $2, $0, 5

double:
       add $4, $2, $2
 
print:
       addi $2, $0, 1
       syscall
       
       j double
       
end:   
	addi $2, $0, 10
	syscall