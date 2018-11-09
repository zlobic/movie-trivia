function NewMovie(title, actor, director, qouteFragment){
    this.title = title 
    this.actor = actor 
    this.director = director
    this.qouteFragment = qouteFragment
  }

let QuizGame = function(moviesArray) {
    this.moviesArray = moviesArray
    this.scoreTitles = 0
    this.scoreActors = 0
    this.scoreDirectors = 0
    this.scoreAverage = 0
    this.refQuestionIndex = 0
};

var scarFace = new NewMovie("Scarface","Al Pacino", "Brian De Palma", "./audio/say_hello.mp3");
var theShining = new NewMovie("The Shining","Jack Nicholson", "Stanley Kubrick", "./audio/here_is_johnny.mp3");
var batMan = new NewMovie("Batman", "Jack Nicholson", "Tim Burton", "./audio/dance_with_the_devil_in_the_pale_moonlight.mp3");
var pulpFiction = new NewMovie("Pulp Fiction","John Travolta", "Quentin Tarantino", "./audio/royal_with_cheese.mp3");
var lorTheTwoTowers = new NewMovie("The Lord of the Rings", "Orlando Bloom", "Peter Jackson" , "./audio/blood_has_been_spilled.mp3");
var aceVentura = new NewMovie("Ace Ventura", "Jim Carrey", "Tom Shadyac", "./audio/alrighty.mp3");
var inception = new NewMovie("Inception", "Leonardo DiCaprio", "Christopher Nolan", "./audio/attack.mp3");
var forrestGump = new NewMovie("Forrest Gump", "Tom Hanks", "Robert Zemeckis", "./audio/box_of_chocolates.mp3");
var hobbit = new NewMovie("De Hobbit", "Smaug", "Peter Jackson", "./audio/death.mp3");
var goodFellas = new NewMovie("Goodfellas", "Robert De Niro", "Martin Scorsese", "./audio/gangster.mp3");
var goodMorningVietnam = new NewMovie("Good Morning Vietnam", "Robin Williams", "Barry Levinson", "./audio/good_morning.mp3");
var silenceOfTheLambs = new NewMovie("The Silence of the Lambs", "Anthony Hopkins", "Jonathan Demme", "./audio/liver.mp3");
var network = new NewMovie("Network", "Peter Finch", "Sidney Lumet", "./audio/mad_as_hell.mp3");
var godfather = new NewMovie("The Godfather", "Marlon Brando", "Francis Ford Coppola", "./audio/offer.mp3");
var matrix = new NewMovie("The Matrix", "Keanu Reeves", "Lana Wachowski", "./audio/I_Know_Kung_Fu!.mp3");
var darkNightRises = new NewMovie("The Dark Knight Rises", "Heath Ledger", "Christopher Nolan", "./audio/Joker_Why_so_serious.mp3");
var lionKing = new NewMovie("The Lion King", "Scar", "Roger Allers", "./audio/Lion_King.mp3");
var shutterIsland = new NewMovie("Shutter Island", "Leonardo DiCaprio","Martin Scorsese", "./audio/Shutter_Island.mp3");
var taken = new NewMovie("Taken", "Liam Neeson", "Pierre Morel", "./audio/taken.mp3");
var gladiator = new NewMovie("Gladiator","Russell Crowe","Ridley Scott","./audio/gladiator.mp3")


var movies = [scarFace, theShining, batMan, pulpFiction,lorTheTwoTowers, aceVentura, inception, forrestGump, hobbit, goodFellas, goodMorningVietnam, silenceOfTheLambs, network, godfather, matrix, darkNightRises, lionKing, shutterIsland, taken, gladiator];

QuizGame.prototype.checkTitle = function (correctAnswer) {
    if ($('.titleInput').val().toLowerCase() === correctAnswer.toLowerCase()) {
        this.scoreTitles = this.scoreTitles + Math.floor((100 / this.moviesArray.length));
        console.log(this.scoreTitles)
    } else { 
        console.log("not correct");
    }
}

QuizGame.prototype.checkActors = function(correctAnswer){
    if ($('.actorInput').val().toLowerCase() === correctAnswer.toLowerCase()) {
        this.scoreActors = this.scoreActors + Math.floor((100 / this.moviesArray.length));   
    } else {
        console.log("not correct")
    }   
}

QuizGame.prototype.checkDirector = function(correctAnswer) {
    if ($('.directorInput').val().toLowerCase() === correctAnswer.toLowerCase()) {
        this.scoreDirectors = this.scoreDirectors + Math.floor((100 / this.moviesArray.length));  
    } else {
        console.log("not correct");
    }
}

QuizGame.prototype.move = function(input, scoreMax) {
    var elem = document.getElementById(input); 
    var width = 0;
    var widthBar = 0;
    var id = setInterval(frame, 0);
    function frame() {
         if (width >= scoreMax) {
             clearInterval(id);
         } 
         else {
            widthBar += 4;
            width++; 
            elem.style.width = widthBar + '%'; 
            elem.innerHTML = width * 1 + '%';
         }
    }
}


function shuffle(array){
var i = array.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i+1)); 
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
};  




