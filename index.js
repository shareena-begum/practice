// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person ={
//     name: "Shanna",
//     age: 26,
//     country: "India"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old ")
// }

// // logData()


// let person= {
//     name: "Mohi",
//     age: 31,
//     country: "India"
// }

// function logData() {
//     console.log(person.name+ " is " + person.age + " years old ")

// }

// logData()

    // ----about let and console. log anf function (logData)--

    // ************************************************************

    // Use a for loop to log the following to the console:

    // The 5 largest animals in the world 
    // -Whale
    // -Shark
    // -Girrafe
    // -Python
    // -Tiger

    // let largeAnimals= ["Whale", "Shark", "Girrafe", "Python", "Tiger"]

    // console.log("The 5 largest animals in the world:")
    // for (let i=0; i < largeAnimals.length; i++) {
    //     console.log( "- "+ largeAnimals[i])
    // }
    
//     let largeAnimals= ["Dolphine", "Shark", "Girrafe", "Python", "Deer"]


// // You need to help me fixup the largeCountries array so that 
// // China and Pakistan are added back into their respective places

// // Use push() & pop() and their counterparts unshift() & shift()
// // Google how to use unshift() and shift()

//     largeAnimals.pop()
//     largeAnimals.push("Tiger")
//     largeAnimals.shift()
//     largeAnimals.unshift("Whale")
//     console.log(largeAnimals)

// *************************************************

        // ===logical operator===

        // If it is Friday the 13th, log out this spooky face: 😱/ Bastard
// Use the logical "AND operator" -> &&
 
        // let dayOfMonth = 13
        // let weekDay = "Monday"

        // if (dayOfMonth===13 && weekDay==="Monday") {
        //     console.log("Bastard")
        // }

        // *********************

    //     // ====Return Random items====

    //     let hands= ["Lily", "Lavender", "Liliac"]

    // // // Create a function that returns a random item from the array

    // // // function getHand() {
    // // //     let randomIndex = Math.random() //(0-0.999)
    // // //     return randomIndex
    // // // }
    
    // // // console.log(getHand())

    // // // Multiply Math.random()*3// (0-2.99)

    // // function getHand(){
    // //     let randomIndex= Math.random()*3
    // //     return randomIndex
    // // }

    // // console.log(getHand())

    // //to remove .99 value use Math.floor=====

    // function getHand(){
    //     let randomIndex = Math.floor(Math.random()*3)
    //     return hands[randomIndex]
    // }

    // console.log(getHand())

    // //Example:2

    // let hands= ["Taj Mahal", "Mount Everest", "Himalayas"]

    // function getHand(){
    //     let randomIndex= Math.floor(Math.random()*3)
    //     return hands[randomIndex]
    // }

    // console.log(getHand())

    // ************

    let fruit= ["Apple,", "Orange", "Banana", "Apple,", "Banana", "Apple,", "Orange", "Banana", "Apple,"]
    let appleShelf = document.getElementById("appleShelf")
    let orangeShelf = document.getElementById("orangeShelf")
    let bananaShelf= document.getElementById("bananaShelf")

    function fruitSort(){
        for (let i=0; i < fruit.length; i++){
            if (fruit[i]=== "Apple,"){
                appleShelf.textContent += "Apple,"
            } else if (fruit[i]==="Orange"){
                orangeShelf.textContent += "Orange,"
            } else {
                bananaShelf.textContent += "Banana,"
            }
        }
    }

    fruitSort()

















