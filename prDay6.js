// Halo dunia
var word = 'halo dunia__xyz'
var wordArr = word.split('')
var alph = 'abcdefghijklmnopqrstuvwxyz'
var alphArr = alph.split('')
var selisihHuruf = 10

function gantiHuruf(x,y,z){
    return wordArr.splice(x,y,z)
}

var index = 0
function pushToAlphArr(){
    for(k=0;k<selisihHuruf;k++){
        index += k
        alphArr.push(alphArr[k])
    }
}

for(i=0;i<wordArr.length;i++){
    for(j=0;j<alphArr.length;j++){
        if(wordArr[i]==alphArr[j]){
            // console.log('index i: ',i,wordArr[i],'index j: ', j,alphArr[j])
            gantiHuruf(i,1,alphArr[j+selisihHuruf])
            if(alphArr.length<=j+selisihHuruf){
                pushToAlphArr()
                // console.log(alphArr)
                gantiHuruf(i,1,alphArr[j+selisihHuruf])
            }
            break
        }else{
            continue
        }
    }
}
console.log(wordArr.join(''))

// // Perbesar huruf
// var a = 'hana'
// var b = 'HANA'

// // function perbesarHuruf()
// const intersection = a.filter(element => b.includes(element));
// console.log(intersection)
