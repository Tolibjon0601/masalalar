// 1-masala

// let str = "T1o2l3i4b5j6o7n";
// let numbers = [];
// let Letters = [];

// for (let i = 0; i < str.length; i++) {
//     if (!isNaN(parseInt(str[i]))) {
//         numbers.push(str[i]);
//     } else {
//         Letters.push(str[i]);
//     }
// }

// console.log("Numbers:", numbers.join(""));
// console.log("Non-numbers:", Letters.join(""));

// 2-masala
// let users = [
// 	{
// 		id: 1,
// 		name: "akmal",
// 		username: "tohirov",
// 		email: "tohirpvich@gmail.com",
// 	},
// 	{
// 		id: 2,
// 		name: "javohir",
// 		username: "mansurov",
// 		email: "manurov@gmail.com",
// 	},
// 	{
// 		id: 3,
// 		name: "Bobur",
// 		username: "Karimov",
// 		email: "karimov@gmail.com",
// 	},
// 	{
// 		id: 4,
// 		name: "Abbos",
// 		username: "fayzullayev",
// 		email: "fayzullayev@gmail",
// 	},
// ];

// let result=users.map((user)=>{
//     return user.email;
// });
// console.log(result);

// 3-masala
// 1-usul
// let numbers= ["1", "2", "3", "4", "5", "5", "7", "7"];

// let birHilQiymatniOlish = (array) => (
//   array.filter((currentValue, index, arr) => (
// 		arr.indexOf(currentValue) === index
// 	))
// )

// console.log(birHilQiymatniOlish(numbers))
// 2-usul
// let array1 = ["1","2","3","4","5","6","7","8"];
// let array2 = ["1","2","3","9","10"];
// let combinedArray = [...array1, ...array2];
// let GetUniqueArray = Array.from(new Set(combinedArray));
// console.log(GetUniqueArray);

// 4-masala
function reverseWords(str) {
    let words = str.split(" ");

    let reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    return reversedWords.join(" ");
}

let input = "Salom";
console.log(reverseWords(input)); 
