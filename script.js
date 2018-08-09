// function (parameter)
var name = 'this is my name'; // string
var number = 156; // number
var anothernumber=2; // number
var anothername= 'radames'; // string


var happylife= 'mario'; // string
// document.getElementById('id')

var kid= 'luigi'; // string


var resultbox= document.getElementById('result')
var titlebox= document.getElementById('title')
var votebox= document.getElementById('vote-box')
var resultbutton= document.getElementById('result-button')
var gifPanel= document.getElementById('gif-panel')
var mainImage= document.getElementById('main-image')

resultbox.hidden=true // hide
//resultbox.hidden=false // show


votebox.addEventListener('click', voteboxfunction)


function voteboxfunction() {
  mainImage.style.backgroundImage ='url("https://media.giphy.com/media/SIw9Tf1bFjZ2U/giphy.gif")';
  titlebox.hidden= true // hide
}
