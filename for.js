/**
 * cobain satu-satu, lihat perbedaannya, pahamin
 */
var times = 5

for (var i = 1; i <= times; i++) {
    console.log(i, 'hello world')
}

for (var i = times; i >= 1; i--) {
    console.log(i, 'hello world')
}

for (var i = times; i > 0; i--) {
    console.log(i, 'hello world')
}

/**
 * FOR i FROM 1 TO 10 WITH INCREMENT 2
 *   IF i MORE THAN EQUAL 5
 *     DISPLAY i
 *   END IF
 * END FOR
 */

for (var i = 0; i <= 10; i += 2) {
    if (i >= 5) {
        console.log(i)
    }
}

/**
 * STORE str AS STRING WITH VALUE OF 'Hello World'
 * FOR i FROM 0 TO length OF str
 *     DISPLAY INDEX i OF str (each character of str) // str[i]
 *   END IF
 * END FOR
 */

var str = 'Hello World'
for (var i = 0; i < str.length; i++) {
    console.log(str[i])
}
