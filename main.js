const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const disorderArray =originalDisorderFormat.split("|$|")

console.log(disorderArray)

// console.log(diseaseOne)
// console.log(diseaseTwo)
// console.log(diseaseThree)
// console.log(diseaseFour)
// console.log(diseaseFive)
// console.log(diseaseSix)
// console.log(diseaseSeven)
// console.log(diseaseEight)

// console.log(diseaseOne)
// console.log(diseaseTwo)
// console.log(diseaseThree)
// console.log(diseaseFour)
// console.log(diseaseFive)
// console.log(diseaseSix)
// console.log(diseaseSeven)
// console.log(diseaseEight)]


const diseases= disorderArray.join("</div>\n<div>")

console.log(`<div>${diseases}</div>`)