"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

//comment line 6 to test GitHub.


// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? \nSelect option:  \n[1] Yes \n[2] No \n[3] Search by full name", searchOption).toLowerCase();
  let searchResults;
  switch(searchType){
    case '1':
      searchResults = searchByName(people);
      break;
      case '2':


    //TODO: Search by traits
 
    let searchingByTraits = prompt("Would you like to search by traits? \nSelect option \n[1] Yes  \n[2] No");
   
    switch(searchingByTraits){
      case 'yes':
        searchResults = searchByTraits(people);
        break;
      case 'no':
        alert("We can not proceed")
    }
    break;
    
      case'3':
      // Search by full name
      searchResults = searchbyFullName(people);
      console.log(searchResults)
    
    break;

    default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults[0], people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    if(keyword == "")
    {
    alert("Could not find that individual.");
    }else{
    alert("Could not find that individual.");
    }
    return app(people); // restart
  }

  let displayOption = prompt("Success! Found " + person.firstName + " " + person.lastName + ".\nDo you want to know their \n[1] Info \n[2] Family \n[3] Descendants \n\nType the option you want to \n[1] Restart \n[2] Quit ");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    let foundInfo = displayPerson(person);
    console.log(foundInfo); 

    
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    let foundDescendants = findDescendants(people, person);
          
    
          function findDescendants(people, person){
            let listOfDescendants = [];
        
            for (let i=0; i<people.length; i++) {
                 if(people[i].parents.includes(person.id)){
                   listOfDescendants.push(people[i])  
                 }
            }
            for (let i=0; i<listOfDescendants.length; i++){
                listOfDescendants = listOfDescendants.concat(findDescendants(people,listOfDescendants[i])) 
          
            }
            return listOfDescendants;
          }
          console.log(foundDescendants);
          
    
         
    // TODO: get person's descendants
    break;

    case "restart":
    app(people); // restart
    break;

    case "quit":

    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  let lastName = promptFor("What is the person's last name?", chars).toLowerCase();

  let foundPerson = people.filter(function(person){
    if(person.firstName.toLowerCase() === firstName && person.lastName.toLowerCase() === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
 
//>>Code from zack...06.29.2021

let personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "DoB: " + person.dob+ "\n";
    personInfo += "height: " + person.height + "\n";
    personInfo += "weight: " + person.weight + "\n";
    personInfo += "age: " + person.age + "\n";
    personInfo += "occupation: " + person.occupation + "\n";
    personInfo += "eye color: " + person.eyeColor + "\n";
    personInfo += "gender: " + person.gender + "\n";

// TODO: finish getting the rest of the information to display
alert(personInfo);
return personInfo;
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function searchOption(input){
  return input.toLowerCase() == "1" || input.toLowerCase() == "2" || input.toLowerCase() == "3";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

// function searchByTraits(traits)

function searchByTraits(people){
  let height = prompt("What is the persons height?");
  let weight = prompt("What is the persons weight?");
  let eyeColor = prompt("What is the persons eye color?");
  let occupation = prompt("What is the persons occupation?");

  let result = [];
  people.map((person, index) => {
    
    if(person.height == height || person.weight == weight || person.eyeColor == eyeColor || person.occupation == occupation)
    {
      result[index] = person;
    }
  });

  return {data: result, searchTraits: {height: height, weight:weight, eyeColor:eyeColor, occupation:occupation}};
}

function searchbyFullName(people)
{
  let fullName = prompt("What is the persons full name?");
  let result = [];
  
  people.map((data, index) => {

    if(data.firstName.toLowerCase().includes(fullName.toLowerCase()) ||   data.lastName.toLowerCase().includes(fullName.toLowerCase()))
    {
      result[index] = people[index];
    }
  });

  return result;

}




   
    
