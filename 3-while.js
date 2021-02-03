/**
 * STORE times AS NUMBER WITH VALUE OF 5
 * WHILE times MORE THAN EQUAL 0
 *   DISPLAY 'hello world'
 *   DECREMENT times
 * END WHILE
 */

// Code here
var times = 5
while (times <= 0) {
    console.log("hello world")
    times-- // times -= 1
}

// break
/**
 * STORE step AS NUMBER WITH ANY VALUE
 * STORE finish AS BOOLEAN WITH true
 * WHILE finish
 *   IF step EQUAL TO 100
 *     DISPLAY "you reach (step) step, finish!"
 *     SET finish WITH false
 *   ELSE
 *     INCREMENT step
 *   END IF
 * END WHILE
 */

var step = 90
var finish = false
while (!finish) { //ketika finishnya false maka lakukan loop
    if (step == 100) {
        console.log('you reach ' + step + ' step, finish!')
        finish = true //finishnya tidak false maka stop loop
    }
    step++
}
while (true) { //ketika finishnya false maka lakukan loop
    if (step == 100) {
        console.log('you reach ' + step + ' step, finish!')
        break //stop loop paksa
    }
    step++
}



