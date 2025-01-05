// function car(brand,model,number){
//     this.brand=brand;
//     this.model=model;
//     this.number=number;
//     this.Details=function(){
//         return "brand"+" "+ brand +" "+ "model" +" "+ model +" "+ "number" +" "+ number;
//         }
// }
// const carI = new car ("ford" , "2011" , 123456);
// const carII = new car ("kia" , "2009" , 956487);
// const carIII=new car ("mitsubishi" , "2019" , 632498);
//  let arr=[carI,carII,carIII];
//  for (i=0 ; i<arr.length ; i++){
//     console.log(arr[i].Details());
//  }
////////////////////////////////////////////////////////////
// const persons = {
//     person1: {
//         Fname: "Ahmad",
//         Lname: "Tarawneh"
//     },
//     person2: {
//         Fname: "Mohammad",
//         Lname: "Tarawneh"
//     }
// }
// function firstname(persons) {
//     const arr = [];
//     let index = 0;
//     for (const key in persons) {
//         arr[index] = persons[key].Fname;
//         index++;
//     }
//     return arr;
// }
// console.log(firstname(persons));
/////////////////////////////////////////////////////////////////////////
function objectToArray(obj) {
    const result = [];
    for (const key in obj) {
        result.push(key, obj[key]);
    }
    return result;
}

const input = { firstName: "Tarawneh", age: 23 };
console.log(objectToArray(input));