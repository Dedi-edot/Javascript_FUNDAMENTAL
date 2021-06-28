var stars = ''
var rows = 5


/*
* * * * *
* * * *
* * *
* *
*
*/
for (var i = rows; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
        stars += ' * '
        
    }
    stars += '\n'
    
}

console.log(stars);


/*
*
* *
* * *
* * * *
* * * * *
*/

for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
        stars += ' * '
        
    }
    stars += '\n'
    
}

console.log(stars);



/*
s s s s *
s s s * * *
s s * * * * *
s * * * * * * *
* * * * * * * * *
*/

for (var k = rows; k >= 1; k--) {
    for (var l = 1; l <= k; l++) {
        stars += 's'
    }
    for (m = 1; m <= rows; i++) {
        for (var n = 1; n <= m; n++) {
            stars += '*'
            
        }
    }
    stars += '\n'

}
console.log(stars);