var user;
var computer;
var result;
var options = ['rock', 'paper', 'scissor'];
var record = {
  rock: 0,
  paper: 0,
  scissor: 0,
  rockWins: 0,
  paperWins: 0,
  scissorWins: 0
}

function computerChoice() {
  var index = Math.floor(Math.random() * options.length)
  return options[index];
}

function compare() {
  console.log(user)
  userIndex = options.indexOf(user);
  computerIndex = options.indexOf(computer);
  if (userIndex === computerIndex) {
    $('#list').empty()
    result = 'Tie'
    $('#list').append('<li>'+'Tie'+'</li>');
    $('button').css({'border':'15px solid yellow'})
  } else if (computerIndex === options.length - 1 && userIndex == 0 || userIndex > computerIndex) {
    $('#list').empty()
    record[user + 'Wins']++
    result = 'Win'
    $('button').css({'border':'15px solid green'})
    $('#list').append('<li>'+'You Win'+'</li>');
  }else {
    $('#list').empty()
    result = 'Lose';
    $('button').css({'border':'15px solid red'})
    $('#list').append('<li>'+'You Lose'+'</li>');
  }
}
function startGame(e) {//(e) represents the input
  //from the clas it is being called from.
  user = this.id; //user is he id of the element clicked
  record[user]++ //adding 1 to the stats of the picked id
  computer = computerChoice(); // choice is equal to returned value of computerChoice() function
  compare(); //calling compare to user and computer
  calcTotals();
}

function calcTotals() {
  $('#rockWL').text(record.rockWins + "/" + record.rock);
  $('#paperWL').text(record.paperWins + "/" + record.paper);
  $('#scissorWL').text(record.scissorWins + "/" + record.scissor);
}

$('.choice').click('click', startGame)
