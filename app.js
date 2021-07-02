alert('WELCOME')

var favSeries = prompt("What is your favSeries? Game of Thrones or Vikings");

while (favSeries != "Game of Thrones" && favSeries != "Vikings") {
  favSeries = prompt("Kindly input either Game of Thrones or Vikings")
}

var parts = prompt(' How many parts of ' + favSeries + ' do you want to watch? ' );
for (var i=0; i< parts ; i++) {
  if (favSeries == 'Game of Thrones'){
    document.write('<img src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg" alt="Game of Thrones"  width="200" height="200">')
  }else if (favSeries == 'Vikings'){
     document.write('<img src="https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" alt="Vikings" width="200" height="200">')

  }

}

// if( favSeries == "Vikings" ){
// var parts= prompt("How many parts do you want to watch? ")

// for(var i = 0 ; i < parts; i++) {
// document.write("<div>" + "<h3>" + favSeries +"</h3>" + "<img src='https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg' alt='Vikings' width='200' height='200'>" + "</div>")
// }
// while(parts > 10){
//   parts = prompt("Please enter less than 10 parts to see your favSeries")
// }

// }
// else if ( favSeries == "Game of Thrones"){
//   var parts= prompt("How many parts do you want to watch? ")

//   for(var i = 0 ; i < parts; i++) {
// document.write("<div>" + "<h3>" + favSeries +"</h3>" + "<img src='https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg' alt='Game of Thrones' width='200' height='200'>" + "</div>")
// }

// while(parts > 10){
//   parts = prompt("Please enter less than 10 parts to see your favSeries")
// }}
