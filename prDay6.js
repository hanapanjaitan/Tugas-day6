// // Halo dunia
// var word = 'halo dunia__xyz'
// var wordArr = word.split('')
// var alph = 'abcdefghijklmnopqrstuvwxyz'
// var alphArr = alph.split('')
// var selisihHuruf = 18

// function gantiHuruf(x,y,z){
//     return wordArr.splice(x,y,z)
// }

// var index = 0
// function pushToAlphArr(){
//     for(k=0;k<selisihHuruf;k++){
//         index += k
//         alphArr.push(alphArr[k]) //gapake return tpi kok bisa?
//     }
// }

// for(i=0;i<wordArr.length;i++){
//     for(j=0;j<alphArr.length;j++){
//         if(wordArr[i]==alphArr[j]){
//             // console.log('index i: ',i,wordArr[i],'index j: ', j,alphArr[j])
//             gantiHuruf(i,1,alphArr[j+selisihHuruf])
//             if(alphArr.length<=j+selisihHuruf){
//                 pushToAlphArr()
//                 // console.log(alphArr)
//                 gantiHuruf(i,1,alphArr[j+selisihHuruf])
//             }
//             break
//         }else{
//             continue
//         }
//     }
// }
// console.log(wordArr.join(''))

// Perbesar huruf
var name
var charUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var charDown = 'abcdefghijklmnopqrstuvwxyz'
var charUpArr = charUp.split('')
var charDownArr = charDown.split('')

function perbesarHuruf(name){
    var nameArr = name.split('')

    for(i=0;i<nameArr.length;i++){
        for(j=0;j<charDownArr.length;j++){
            if(nameArr[i]==charDownArr[j]){
                nameArr.splice(i,1,charUpArr[j])
                break
            }else{
                continue
            }
        }
    }
    console.log(nameArr.join(''))
}

function perkecilHuruf(name){
    var nameArr = name.split('')

    for(i=0;i<nameArr.length;i++){
        for(j=0;j<charUpArr.length;j++){
            if(nameArr[i]==charUpArr[j]){
                nameArr.splice(i,1,charDownArr[j])
                break
            }else{
                continue
            }
        }
    }
    console.log(nameArr.join(''))
}


perbesarHuruf('hannah montana')
perkecilHuruf('MY LOVERS')
