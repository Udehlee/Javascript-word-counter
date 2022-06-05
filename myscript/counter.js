let textInput = document.getElementById("text-input");
let characterCount = document.getElementById("character-count");
let wordCount = document.getElementById("word-count");


   textInput.addEventListener("input",function(){
     characterCount = textInput.value.length; // get the length of character inputed
    

     countWord = textInput.value;//get the value inputed
     removeExcessSpace =countWord.replace(/\s+/g, " ").trim(); //ignoring excess space
     splitWords = removeExcessSpace.split(" ");//adding space between words
     numberOfWords = splitWords.length;//length of words entered
     
     wordCount = numberOfWords;

   
        
        result.textContent = characterCount + " character | " + wordCount + " word"; //updating the function of the displayed message
    
    /*currently working on making the numbered word change after a given condition
        // if (wordCount > 0){
         
      //   wordCount.textContent[0].style.color ="red";
      // }
      // else{

      // }

//     */
   });
