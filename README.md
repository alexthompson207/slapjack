[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555)](https://www.linkedin.com/in/alex-thompson-309070a2/ )

[![GitHub](https://img.shields.io/badge/GitHub-black.svg?&style=flat-square&logo=github&logoColor=white)](https://github.com/alexthompson207)

<p align="center">
  <a href="https://github.com/JoshSevy/ENTER_REPO_NAME)">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h1 align="left">SLAPJACK - Mod1 Final Project</h1>



## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Set-up Instructions](#set-up-instructions)
- [Learning Goals](#learning-goals)
- [Challenges](#challenges)
- [Wins](#wins)
- [Functionality](#functionality)
- [Future Iterations](#future-iterations)
- [Contributors](#contributors)
- [Contact](#contact)

## About The Project

In this project I created an application/game from scratch that enables two users (players) to use the same keyboard to play the card game of Slapjack. The users can play as many full games as they would like, and their win totals persist on page reload using `local storage`. The rules to Slapjack gameplay and user controls are explained in detail in the `Project Rubic` and also on the locally hosted site (see below).

- [Project Brief and Rubric](https://frontend.turing.io/projects/module-1/slapjack.html)

  

#### Built With:

- [![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)](https://www.javascript.com/) in `main.js` , `game.js`, and `player.js`

- ![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white) In `index.html`

- ![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3) in `styles.css`

  

## Set-up Instructions

1. Fork this [Github repository](https://github.com/alexthompson207/slapjack) and clone it down to your local machine using the `git clone` command in your Terminal.
2. Move into that directory with `cd slapjack` in your Terminal.
3. Run `open index.html` in your Terminal to run the application/game locally.
4. Click the link in the bottom center of the application to view a video explaining all gameplay rules.
5. To see the code itself locally, run `<name of text editor> .` in your Terminal.



## Learning Goals

To build my first fully functional game/application from scratch based on a project description. 

Specific goals:

- Using complex conditional logic to execute specific code.
- Working with mutiple classes to update the data model and separate their actions from the DOM.
- Obtain a better understanding of `event delegation` to handle events and listen for similar events.
- Using `localStorage` to make data (in this case player wins) persist on page load.
- Create my own project board/ iterations to maintain a productive workflow while meeting the overall requirements of the project.
- Develop a better understanding of how classes and the DOM interact.



## Challenges

- Finding a way to randomly shuffle different card deck arrays. I needed a function that would randomize the order of an array when it was called. After some research, I used the `Fisher Yates Shuffle` , which creates a reverse for loop on the array that is passed in as a parameter. It then replaces each index with another as it iterates over the array. 
- Writing the logic for `DRY` conditional statements that handled how the user takes their turn, handled the different types of slap outcome, determines a winner, displays the proper game message, and handles the survival round of the game.
- Tracking the four different card decks in arrays and manipulating them using classes.
- Initially getting started, this project seemed so daunting at first and knowing where to start and develop a solid project timeline.

## Wins

- Reusing mutiple functions for `DRY` code. Some examples are `playCardToMiddle()` , `dealDeck()`, and `legalSlap()` in `game.js` as well as `startNewGame()`, `handleSlap()`, and `displayCenterPile` in `main.js`.
- A full functioning game, free of bugs  (that I am aware of). This required manual testing and lots of console logging to debug and track functions back to their roots. 
- Creating and stylizing the application so it not only looks good and is fun to play but has an `AAA` grade for user accessibility for those less abled. 
- Completely separating the `DOM` and `Data Model` , so that all data is manipulated in either of the two classes `Player` or `Game`. Also only using one global variable and two query selectors for clean `DRY` looking code.

## Functionality

The game starts with player 1's turn. Players deal cards from their hand to a middle pile by keying `[q]` for player 1 and `[p]` for player 2.

- Players can "slap" the middle pile using the `[f]` and `[j]` keys with several outcomes: Jacks, Doubles, Sandwiches, and Bad Slaps.
- Player turns are dependent on the following:
   	1. If the other player does not have any cards left.
   	2. If the other player just slapped the middle pile.
   	3. Or if it was not their turn previously.

![gif of a normal round](https://media.giphy.com/media/BFYh2ACJS6cEMUan9F/giphy.gif)

- The cards are shuffled in three instances:
  1. At the start of a new game - before the cards have been dealt to either player.
  2. After a player successfully slaps and adds the pile to their existing hand.
  3. After the player with cards has dealt all of theirs to the middle and before the cards are handed back to that player.
- When a player runs out of cards they have a chance to get back into the game by slapping a Jack as the other player continues to deal their cards. It is in this round where they can also be eliminated.

![giph of survival round](https://media.giphy.com/media/iJWSw6m31aL7vjgHiE/giphy.gif)



- When a player has won, the win score is updated to the `Data Model` and `localStorage`
- The `DOM` displays all of the data representing this game as events happen, to allow the users an experience of a real card game.
- The game automatically restarts, randomly shuffling all the cards and dealing them out to the players, displaying a game update instructoring player 1 to go first.

## Future Iterations

- In the future I would like to be able to scale this application to fit all screen sizes, it'd be really cool to be able to play this game on phones, tablets, and bigger computer screens.
- When a player has no cards left (survival round), maybe the diplay changes or darkens, and spooky music plays.

## Contributers

* [Alex Thompson](https://github.com/alexthompson207) - Application/game creator
* [JP Carey](https://github.com/jaypeasee) - Code reviewer and Alex's rock
* [Josh Sevy](https://github.com/JoshSevy) - Code reviewer and Alex's mentor

## Contact

[<img src="https://img.shields.io/badge/LinkedIn-alex--thompson-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin]
[<img src="https://img.shields.io/badge/Gmail-ahthomps1@gmail.com-informational?style=for-the-badge&labelColor=black&logoColor=d14836&logo=microsoft&color=d14836"/>][gmail]
[<img src="https://img.shields.io/badge/Github-AlexThompson207-informational?style=for-the-badge&labelColor=black&logo=github&color=7d88e6"/>][github]



<!-- Personal Definitions  -->

[linkedin]: https://www.linkedin.com/in/alex-thompson-309070a2/
[Gmail]: mailto:ahthomps1@gmail.com
[github]: https://github.com/alexthompson207



