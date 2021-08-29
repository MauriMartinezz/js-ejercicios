// String.prototype.reverse = (str)=>{
//     for (let index = 0; index < str.length; index++) {
//       str += str[index];
//       str.substr(1);
//     }
//     return str;
//   }


let darVuelta = (str)=>{
    let prop = str;
    let aux = "";
    for(let i= 1; i <=prop.length; i++){
        aux += str[prop.length-i];
    }

    return aux;
}

console.log(darVuelta("Anasheee"));