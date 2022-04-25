
 
console.log('working test'); // test javascript file 

//week 3 assignment, late turn in - procrastination would be my downfall, kept pushing it off due to procrastinaton/doubt - got over that. 
//want to learn/understand this more than anything. Would like help/assistance to get all these correct. 
// question 1 
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
    
//a 
  console.log(ages[7 - 0]);
   //answer 93 
//b
  console.log(ages.push(42));
  ages.push(42);
  //push age to array 42 

 //c  
  let sum = ages.reduce( function (accumulator, currentValue) {

    return accumulator + currentValue; 

  });

  let totalAges = ages.length;

  console.log( sum / totalAges);

  // question 2 a, b 

  let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];  

    for ( i = 0; i < names.length; i++) {
      
    console.log(names[i]);
  }

  //b 
  


   

  // question 3 
  let array = [1, 2, 3, 4, 5];

  console.log(array.lastIndexOf());
  //if nothing is defined a -1 occurs 

  // question 4 

  console.log(array.findIndex());
  // if nothing defined returns -1

  // question 5 

  
   let nameLengths = []

   // not getting this, setup and syntax 


  
  
  // question 6 




// question 7 
  function myFunction (word, n) {

    return word + '' + n; 


  }

  console.log(myFunction ('hello','3'));

  //not sure on this one? 
 

  // question 8 

  function myFucntion (firstName, lastName) {

    return firstName + '' + lastName;  
  }

    console.log(myFucntion('Wayne', 'Gretzky'));

    // question 9 

    //// need help with 9 ?

    function arrOfNumbers () {

      let numbers = []; 
    }



     // question 10

     let sum1 = [0, 1, 2, 3, 4,].reduce(function (previousValue, currentValue) {

          return previousValue + currentValue;
     }, 0)


     // question 11 

     //need help, not sure ? 

     // question 12 

     function willBuyDrink (isHotOutside, moneyInPocket) {

        return isHotOutside + moneyInPocket; 

        //need help function taking a boolean - setup/syntax 

     }


     //question 13, function listFullName, parameters are firstName, lastName 
     //prints firstName + lastName 
     //listFullName has parameters of actual name firstName, lastName are just place holders 

      function listFullName (firstName, lastName) {

         
          console.log(firstName + '' + lastName);

      }

      listFullName('lars', 'setterstrom');
      

       


    

    

    
 

  





  

  

    







 