// Ex. 1
let temperature = 30;

if(temperature < 0) {
    console.log("Inget")
}

else if (temperature >= 0 && temperature <= 10) {
    console.log("Frig");
}

else if (temperature >= 11 && temperature <= 25) {
    console.log("Moderat");
} 

else {
    console.log("Cald");
}

// Ex. 2
let day = 3;

if(day == 1) {
    console.log("Luni")
}

else if(day == 2) {
    console.log("Marti")
}

else if(day = 3) {
    console.log("Miercuri")
}

else if(day = 4) {
    console.log("Joi")
}

else if(day = 5) {
    console.log("Vineri")
}

else if(day = 6) {
    console.log("Sambata")
}

else if(day = 7) {
    console.log("Duminica")
}

else {
    console.log("Nu exista");
}

// Ex. 3
let number = 5;

if (number % 2 === 0) {
    console.log("Par");
  } 
  
  else {
    console.log("Impar");
  }

  // Ex. 4
  let purchaseAmount = 115;

  let totalPrice;

  if(purchaseAmount >= 100) {
    purchaseAmount = purchaseAmount * 0.90;
    totalPrice = purchaseAmount * 1.05;
    console.log(totalPrice);
  } else {
    totalPrice = purchaseAmount * 1.05;
    console.log(totalPrice);
  }

  
  // Ex. 5
  let password = "parolaSigura76"; 
if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    console.log("Parolă foarte sigură");
} 
else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
    console.log("Parolă sigură");
} 
else if (password.length >= 6 && /^[a-zA-Z]+$/.test(password)) {
    console.log("Parolă slabă");
} 
else {
    console.log("Parolă nesigură");
}
  

  // Ex. 6
let numar = 4;

if (numar < 1) {
    console.log("Numarul nu e prim")
}
else {
    for(let i = 2; i <= Math.sqrt(numar); i++){
        if (numar % i === 0) {
            console.log("Numarul nu e prim")
        } else {
            console.log("Numarul e prim")
        }
    }
}

// Ex. 7
let a = 2;
let b = 4;
let c = 7;
if (a + b > c && a + c > b && b + c > a) {
    console.log("Numerele " + a + ", " + b + ", " + c + " pot forma un triunghi.");
} else {
    console.log("Numerele " + a + ", " + b + ", " + c + " nu pot forma un triunghi.");
}

if (a + b > c && a + c > b && b + c > a) {
    console.log("Numerele " + a + ", " + b + ", " + c + " pot forma un triunghi.");}

    let laturi = [a, b, c].sort((x, y) => x - y);
    let [x, y, z] = laturi; 
