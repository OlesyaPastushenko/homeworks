a = ''
for(i = 0; i < 24; i++) {
    a = a +'#'    
}
console.log(a)

a = ''
for(i = 0; i < 24; i++) { 
    if(i>4 && i<18) {
        a = a + ' '
    }  
    else ( a = a + '#')
}
console.log(a)

a = ''
for(i = 0; i < 24; i++) { 
    if(i>=5 && i<8){
        a= a + '*'
    } 
    else if(i>19 && i<=21){
        a= a + '*'
    }
    else if(i>1 && i<22) {
        a = a + ' '
    }  
    else(a = a + '#')
}
console.log(a)

a = ''
for(i = 0; i < 24; i++) { 
    if(i == 4){
        a = a + '*'
    } 
    else if(i>=7 && i<=8){
        a=a+'*'
    }
    else if(i>=14 && i<16){
        a=a+'*'
    }
    else if(i==21){
        a= a + '*'
    }
    else if(i>=1 && i<4) {
        a = a + ' '
    }  
    else if(i==18){
        a=a+'o'
    }
    else if(i>=9 && i<21) {
        a = a + ' '
    }  
    else(a = a + '#')
}
console.log(a)