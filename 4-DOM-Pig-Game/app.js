/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a dice as many times as he wishes. Each result
  get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score get lost. After that,
  it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game.
*/

var scores, roundScore, activePlayer, gamePlaying, previousDice, scoreToWin, shotsQueue;

init();

// Setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// Anonymous function: a function without name that do not need reuse
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        // Add new roll, delete three roll before
        // shotsQueue.shift();
        // shotsQueue.push(dice);

        // 2. Display the result
        var diceDOM0 = document.getElementById('dice-0');
        var diceDOM1 = document.getElementById('dice-1');

        diceDOM0.style.display = 'block';
        diceDOM0.src = 'dice-' + dice0 + '.png';

        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        // If the previos and actual role are 6s then lose ENTIRE score
        // if (shotsQueue[0] === 6 && shotsQueue[1] === 6) {
        if (dice0 === 6 && dice1 === 6) {
            // ENTIRE score lost
            scores[activePlayer] = 0;

            // Update UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            // Next player
            nextPlayer();
        } else if (dice0 > 1 && dice1 > 1) {
            // Add score
            roundScore += dice0 + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= scoreToWin) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

            document.getElementById('dice-0').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';

            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.ipt-score').addEventListener('input', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    shotsQueue = [0, 0];
    scoreToWin = document.getElementById('score-to-win').value;

    // Changing CSS through style property
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    shotsQueue = [0, 0];

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
}

//////////////////////
// CODE CHALLENGE 3 //
//////////////////////
/*
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the
next player's turn. (Hint: always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that
they can change the predefined score of 100. (Hint: you can read that value with the
.value property in JavaScript. This is a good opportunity to use Google to figure
this out)
3. Add another dice to the game, so that there are two dices now. The player looses
his current score when one of them is a 1. (Hint: you will need CSS to position the
second dice, so take a look at the CSS code for the first one)
*/
