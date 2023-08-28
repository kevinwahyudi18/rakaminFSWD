function suhu(celcius) {
  if (celcius>=-100 && celcius <= 0) {
    return ("beku");
  } 
  else if (celcius > 0 && celcius <= 100) {
    return ("cair");
  } 
  else if (celcius > 100 && celcius <=500){
    return ("uap");
  }
  else{
    return("Tidak terdefinisi")
  }
}
console.log(suhu(-200));



function kendaraan(tipeKendaraan, cc) {
  if (tipeKendaraan == "plat kuning" || tipeKendaraan == "motor") {
    return ("bbm supsidi");
  } 
  else if (tipeKendaraan == "mobil") {
    if (cc <= 1500) {
      return ("PERTAMAX");
    } 
    else {
      return ("PERTAMAX TURBO");
    }
  } 
  else {
    return ("Tipe tidak ditemukan");
  }
}
console.log(kendaraan("mobil", 1200));





//rakamin week 4

// CONTOH for in
const fruits = ["banana", "Apple", "grape", "Jackfruits", "orange",5,6,7];
for (key in fruits){
  console.log(key);
  console.log(fruits[key]);
}

// CONTOH for of
for (val of fruits){
  console.log("Contoh for of "+ val);
}
// CONTOH object
const person = {nama:"kevin",age:24,sex:'male', school:["TK TIRTAMARTA", "SD TIRTAMARTA", "SMP DONBOSCO"]};
for (key in person){
  console.log(key);
  console.log (person[key]);
}

// STUDY CASE
/*Buatlah sebuah game tebak nilai menggunakan bilangan random, dan outputnya adalah berapa kali
perulangan dapat menemukan nilai yang dimaksud
*/
// let randomNum= Math.floor((Math.random()*100))+1;
function tebakNilai(num){
  for(let i=1 ; i<=100 ; i++){
    randomNum = (Math.floor((Math.random()*100))+1);
    if (randomNum === num){
      break
    }
    else{
      return(i);
    }
  }
  return randomNum
}

tebakNilai(99);
console.log(randomNum);

//STUDY CASE
//buat random nilai 10 bilangan array
//tentukan total, rata-rata, min, max

let bilanganArray =[]
function randomNomor(){
  for(let i=1 ; i<=10 ; i++){
    bilanganArray.push(Math.floor(Math.random()*10)+1);
  }
  return bilanganArray;
}
randomNomor();
console.log(bilanganArray)

function minMaxTotalRataRata(array){
  let min = max = array[0];
  let total = 0;
  for (let k=0 ; k<array.length ; k++){
    if(max<array[k]){
      max = array[k];
    }
    if(min>array[k]){
      min = array[k];
    }
    total = total + array[k];
  }
  rataRata = total/array.length

  return {min, max, total, rataRata};
}
console.log(minMaxTotalRataRata(bilanganArray));

console.log()