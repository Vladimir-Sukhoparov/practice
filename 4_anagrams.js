// Анаграмма должна содержать одинаковые буквы:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Напишите функцию, которая найдет все анаграммы слова из списка. 
// Вам будет дано два аргумента слово и массив со словами.
// Вы должны вернуть массив всех анаграмм или пустой массив, если их нет

const wordsList = ['baab','abbba','bbaa','abca'];
const word='abba';
const toWord=word.toLowerCase().split("").sort().join("");
const anagrams = () => {
    const resu=[];
    for(let words of wordsList){
        let res=words.toLowerCase().split("").sort().join('');
        resu.push(res)
        }
    const result=resu.filter(value=>value===toWord);
    return result;
}
anagrams(word, wordsList);
console.log(anagrams());