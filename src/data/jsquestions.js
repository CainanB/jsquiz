
const jsQuestions = [
    {
        question: "What is the output?",
        incorrect_answers: ["inner c","undefined","Reference Error"],
        correct_answer: "c",
        imageURL: "../images/question1.png",
        hint: "Shallow Copy",
        conceptLink: "",
        videoLink: "",
        videoEmbed: "https://www.youtube.com/embed/NIq3qLaHCIs",
        number: 1
    },
    {
        question: "What is the output?",
        incorrect_answers: ["3, Bob","4, Bob","4, Jim"],
        correct_answer: "3, Jim",
        imageURL: "../images/question2.png",
        hint: "Pass By Reference vs pass by value",
        conceptLink: "https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c",
        videoLink: "",
        videoEmbed: "https://www.youtube.com/embed/-hBJz2PPIVE",
        number: 2
    },
    {
        question: "What is the output?",
        incorrect_answers: ["true, true","false, false", "false, true"],
        correct_answer: "true, false",
        imageURL: "../images/question3.png",
        hint: "Strict Equality",
        conceptLink: "",
        videoLink: "",
        videoEmbed: "https://www.youtube.com/embed/nQJrfphxKBg",
        number: 3
    },
    {
        question: "What is the output?",
        incorrect_answers: ["1, 4, 21, 30, 100", "100, 30, 21, 4, 1", "100, 21, 4, 30, 1"],
        correct_answer: "1, 100, 21, 30, 4",
        imageURL: "../images/question4.png",
        hint: "Sorts as strings",
        conceptLink: "",
        videoLink: "",
        videoEmbed: "https://www.youtube.com/embed/BbuLjEqFlw0",
        number: 4
    }
]

export default jsQuestions;









// let a = 3;
// let b = a;
// b++

// let obj1 = {name: "Bob", password: 123};
// let obj2 = obj1;
// obj2.name = "Jim";

// console.log(a,obj1.name)





// let obj1 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         inner: "inner c"
//     }
// }

// let obj2 = {...obj1}
// obj1.c.inner = "c"
// console.log(obj2.c.inner)


// console.log(false == '0')
// console.log(false === '0')


// console.log(typeof typeof 1);
// var x;
// console.log(x)


// const array1 = [1, 30, 4, 21, 100];
// array1.sort();
// console.log(array1);


















