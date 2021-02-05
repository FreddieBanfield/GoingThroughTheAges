class Game {

    constructor(location_start, rooms) {
        this.location = location_start;
        this.rooms = rooms;
    }

    //Deals with user commands
    parse(command) {
        var words = command.toUpperCase();
        var objects = this.rooms[this.location].objects;
        console.log(objects);
        var target = "";
        if (words == "PSTATS"){
          target = "PSTATS";
        }else{
          for (var i = 0; i < objects.length; i++) {
              if (words.includes(objects[i].obj_name.toUpperCase())) {
                  target = objects[i]
                  break;
                }
              }
        }
        if (target != "") {
            var verbs = target.obj_actions;
            var action = "";
            if (target == "PSTATS"){
              action = "PSTATS";
            }else{
              for (var i = 0; i < verbs.length; i++) {
                  if (words.includes(verbs[i].toUpperCase())) {
                      action = verbs[i]
                      break;
                  }
              }
            }

            //Commands
            switch (action) {
                case "START":
                    this.location = target.obj_destination;
                    var output = "<br />";
                    output += this.rooms[target.obj_destination].description + "";
                    break;
                case "PSTATS":
                    overallScore = +age + +happiness + +love + +strength + +purpose + +wealth;
                    var output = "<br />";
                    if (previousScore == ""){
                      output += "No previous Score";
                    }else
                      output += previousScore;
                    break;
                case "GIRL":
                    var output = this.roomTransition(target, this.location, "");
                    break;
                case "BOY":
                    var output = this.roomTransition(target, this.location, "");
                    break;
                case "CUTE":
                    var output = this.roomTransition(target, this.location, "");
                    love += 5;
                    happiness += 5;
                    break;
                case "BORING":
                    var output = this.roomTransition(target, this.location, "");
                    love += 2;
                    happiness += 2;
                    break;
                case "TALK":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 2;
                    break;
                case "WALK":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 5;
                    break;
                case "POTTY TRAINED":
                    var output = this.roomTransition(target, this.location, "");
                    happiness += 2;
                    break;
                case "MAKE FRIENDS":
                    var output = this.roomTransition(target, this.location, "");
                    happiness += 5;
                    purpose += 3;
                    break;
                case "STAY ALONE":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 5;
                    break;
                case "BULLY":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 4;
                    purpose += 1;
                    happiness -= 5;
                    break;
                case "EXCEL AT SCHOOL":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 3;
                    purpose += 3;
                    happiness += 3;
                    break;
                case "PLAY VIDEO GAMES":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 2;
                    happiness += 2;
                    break;
                case "CONTINUE":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 6;
                    purpose += 1;
                    happiness -= 8;
                    break;
                case "STOP":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 3;
                    purpose += 3;
                    happiness += 3;
                    break;
                case "SCIENCES":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 4;
                    happiness += 2;
                    break;
                case "THEATRE":
                    var output = this.roomTransition(target, this.location, "");
                    strength -= 4;
                    purpose += 2;
                    happiness += 4;
                    break;
                case "GAME":
                    var output = this.roomTransition(target, this.location, "");
                    strength -= 2;
                    purpose -= 2;
                    happiness += 4;
                    break;
                case "JOIN SPORTS":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 4;
                    happiness += 5;
                    break;
                case "MATH":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 5;
                    happiness += 2;
                    break;
                case "PHYSICS":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 5;
                    happiness += 2;
                    break;
                case "CHEMISTRY":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 5;
                    happiness += 2;
                    break;
                case "BIOLOGY":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 5;
                    happiness += 2;
                    break;
                case "GET BULLIED":
                    var output = this.roomTransition(target, this.location, "");
                    strength -= 2;
                    happiness -= 2;
                    break;
                case "SOCCER":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 2;
                    happiness += 4;
                    break;
                case "BASEBALL":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 2;
                    happiness += 4;
                    break;
                case "HOCKEY":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 2;
                    happiness += 4;
                    break;
                case "FOOTBALL":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 2;
                    happiness += 4;
                    break;
                case "SPORTS":
                    var output = this.roomTransition(target, this.location, "");
                    strength += 5;
                    happiness += 3;
                    break;
                case "WORK":
                    var output = this.roomTransition(target, this.location, "");
                    wealth += 2;
                    happiness -= 2;
                    break;
                case "SCHOOL":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 5;
                    happiness += 3;
                    break;
                case "VIDEOGAMES":
                    var output = this.roomTransition(target, this.location, "");
                    purpose -= 2;
                    happiness += 6;
                    strength -= 2;
                    break;
                case "POST SECONDARY SCHOOL":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 2;
                    happiness -= 4;
                    wealth -= 5;
                    break;
                case "WORK FULL TIME":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 2;
                    happiness -= 4;
                    wealth += 4;
                    break;
                case "PARTIER":
                    var output = this.roomTransition(target, this.location, "");
                    purpose -= 5;
                    break;
                case "STUDIER":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 4;
                    happiness -= 2;
                    break;
                case "ALCOHOL AND DRUGS":
                    var output = this.roomTransition(target, this.location, "");
                    purpose -= 5;
                    happiness -= 10;
                    wealth += 4;
                    break;
                case "DATING SITES":
                    var output = this.roomTransition(target, this.location, "");
                    wealth += 4
                    break;
                case "MONEY":
                    var output = this.roomTransition(target, this.location, "");
                    purpose += 2;
                    happiness += 3;
                    wealth += 10;
                    break;
                case "HAPPINESS":
                    var output = this.roomTransition(target, this.location, "");
                    wealth += 7;
                    purpose += 3;
                    happiness += 10;
                    break;
                case "DEATH":
                    var output = this.roomTransition(target, this.location, "");
                    previousScore += "<br /><br />Age: " + age + "<br />Wealth ($10,000): " + wealth + "<br />Happiness: " + happiness + "<br />Purpose: " + purpose + "<br />Love: " + love + "<br />Strength: " + strength + "<br />--------------------------<br />Overall Score: " + overallScore;
                    age = 0;
                    wealth = 0;
                    happiness = 0;
                    purpose = 0;
                    love = 0;
                    strength = 0;
                    overallScore = 0;
                    break;
                case "CHRISTIAN MINGLE":
                    var output = this.roomTransition(target, this.location, "");
                    happiness += 3;
                    wealth += 4;
                    break;
                case "TINDER":
                    var output = this.roomTransition(target, this.location, "");
                    wealth += 4;
                    happiness += 3;
                    break;
                case "RETIRE":
                    var output = this.roomTransition(target, this.location, "");
                    wealth += 20;
                    happiness += 6;
                    purpose += 6;
                    break;
                case "RETIRE NOW":
                    var output = this.roomTransition(target, this.location, "");
                    wealth += 10;
                    happiness += 12;
                    purpose += 6;
                    break;
                case "TWINS":
                    var output = this.roomTransition(target, this.location, "");
                    wealth -= 10;
                    purpose += 4;
                    break;
                case "SWIPE":
                    var output = this.roomTransition(target, this.location, "");
                    break;
                default:
                    return "That is not an option (Check spelling)"
            }
            //Adds action to answer
            if(action != "START" && action != "PSTATS")
            answers += "<br />" + action.toLowerCase();
            //Displays Score and Character Information
            overallScore = +age + +happiness + +love + +strength + +purpose + +wealth;
            document.getElementById("stats").innerHTML ="Age: " + age + "<br />Wealth ($10,000): " + wealth + "<br />Happiness: " + happiness + "<br />Purpose: " + purpose + "<br />Love: " + love + "<br />Strength: " + strength + "<br />--------------------------<br />Overall Score: " + overallScore;
            document.getElementById("character").innerHTML = "Character Information<br />--------------------------" + answers;

            return output
        } else {
            return "That is not an option (Check spelling)"
        }

    }

    //Universal room transition (Repeated code)
    roomTransition(target, location, message){
      var output = "<br />";
      output += target.obj_description + "<br />";
      this.location = target.obj_destination;
      output += "<br />";
      output += this.rooms[target.obj_destination].description + "<br />"  + message;
      age = this.rooms[target.obj_destination].age;
      return output;
    }

    //List objects in the room
    listRoomObjects() {
        var current_location = this.location;
        var rooms = this.rooms;
        var output = "The room contains a "
        for (var i = 0; i < rooms[current_location].objects.length; i++) {
            output += rooms[current_location].objects[i].obj_name;
            if (i == rooms[current_location].objects.length - 2) {
                output += ", and a "
            } else if (i < rooms[current_location].objects.length - 2) {
                output += ", a "
            } else {
                output += "."
            }
        }
        return output;
    }


//TypeWritter annimation code
//CODE BY GEOFF GRAHAM from CSS-TRICKS.com
//Dec 14, 2017
//Edited by Freddie Banfield Jan 24, 2021
    animateText(text, oldWords){
      //Stops user input when annimation starts
      document.getElementById("playerInput").disabled = true;
      // array with texts to type in typewriter
      var dataText = [text];

      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to h1
         document.querySelector("#log").innerHTML = oldWords + text.substring(0, i+1);
         //document.getElementById("log").innerHTML += tempWords;

          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 10);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
          //Resumes user input once annimation is completed
          document.getElementById("playerInput").disabled = false;

        }
      }
      // start a typewriter animation for a text in the dataText array
       function StartTextAnimation(i) {
         if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
            }, 20000);

         }
         // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
         typeWriter(dataText[i], 0, function(){
           // after callback (and whole text has been animated), start next text
           //StartTextAnimation(i + 1);
         });
        }
      }
      // start the text animation
      StartTextAnimation(0);

    }
}








//Initializes the game
gameobj = new Game("menu", rooms);

//Stats
var age = 0;
var wealth = 0;
var happiness = 0;
var purpose = 0;
var love = 0;
var strength = 0;
var overallScore = 0;
var previousScore = "";

//Character Information
var answers = "";


document.getElementById("log").innerHTML += "<br>" + "Type START to continue";
const node = document.getElementById("playerInput");
node.addEventListener('keyup', ({
    key
}) => {
    if (key === "Enter") {
      var tempWords = "<br>" + gameobj.parse(node.value);
      var oldWords = "<br>" + document.getElementById("log").innerHTML;
      document.getElementById("log").innerHTML += tempWords;
      gameobj.animateText(tempWords, oldWords);
      node.value = "";
    }
})
