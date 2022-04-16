//  Даны два массива с числами 
// Задача: 
// написать функцию, которая принимает два массива ( усложненная версия с неизвестным числом массивов const extra = [1, 10]; )
// склеивает их
// и считает сумму 

const first = [1, 2, 3];
const second = [10, 1, 5];
let sum=0;
const arrayPlusArray = () => {
    const firstSecond=[...first,...second].forEach(el=>{
      sum+=el;
    });
    return sum;
};
arrayPlusArray(first, second);
console.log(sum)


/* const extra = [1, 10];
let sum=0;
const arrayPlusArray = () => {
    const array=[];
    for(let i=0;i<extra.length;i++){
array.push(extra[i]);
    }
    array.forEach(el=>{
        sum+=el;
      });
      return sum;
}
arrayPlusArray(extra); */