-------------------------------------------------------------------------
Gage Nesbit and Sam Roelofs
-------------------------------------------------------------------------

Angular Tour of Heroes:
  Angular Tour of Heroes is a tutorial project we followed from the Angular documentation to understand it better. For
  more detailed information on the tutorial here is the link to Angular's website: https://angular.io/tutorial/tour-of-heroes.

-------------------------------------------------------------------------
How to download an Angular project and run it locally:
  1. Make sure you have nodeJS installed
  2. Clone the repo to your local machine
  3. Open a terminal in the directory you cloned the repo to
  4. Run the command 'npm install' to install node modules
  5. Run the command 'npm serve' to launch the Angular project

  If you get errors saying you do not have permission to run, you may have to open Windows Powershell as an administrator
and enter the command 'Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine'. This is a permission change that 
will allow you the proper permissions. If you would like to change your permissions back after, enter this command
'Set-ExecutionPolicy -ExecutionPolicy Default -Scope LocalMachine'.

-------------------------------------------------------------------------
__CONNECT ANGULAR: Our Angular Project__  
Links to GitHub repos:
  https://github.com/CSCI331-Angular/app.git

Link to the site running on the MSU CSCI331 server(Only accessible via MSU_Secure): N/A (Unable to host on the server, will be submitting a video demo.)

Link to our slideshow:
https://tinyurl.com/32urpr5f

__Project Goal:__  
  Our goal was to develop a proof of concept project using Angular that demonstrates key features of the framework.
We wanted the user to be able to play a four-in-a-row style game in their browser, the application will detect when a player has won. Additionally, when the new game button is pressed the board is emptied via animation.

-------------------------------------------------------------------------
__How it works:__
  Angular is a JavaScript framework that allows developers to write highly modular applications. An angular project is made up of components. A component serves as a self-contained piece of code that contains its own HTML for formatting and Typescript to dictate behavior. The foundation of an angular project starts with an index.html, this is where all of the components are placed together to display to the user. The "app" component serves as the parent component in which all other components are nested. It must have the tag <router-outlet></router-outlet> at the bottom of its HTML file this serves as the route through which all of your components will get to index.html. A component is capable of having other components displayed within them and can be repeatedly nested. Once you have a component that you want to have displayed you place it in the HTML file of the parent component like any other HTML tag would be with the naming scheme "app-yourComponentName". 

  Our project has three components app, board, and square. Within app we have our title and an instance of board. The board is comprised of four main pieces an h1 tag that displays the current player, the start new game button, the actual game board, and another h1 that displays which player won the game(this is only visible once someone has won the game). The game board is comprised of an array of square components. This shows off how a component can be reused and iterated over. The square component is actually made up of a button that has its inner text changed by the TypeScript of the board component.

  Practically all of the game functionality is defined in the Typescript for the board component. When the board component is instantiated it calls the loadGame function. This creates an empty array the same size as the game board to represent and manipulate the squares. When a user clicks a square in the board the makeMove function is called if the column is not full it will drop a marker to the lowest square that has yet to be filled in that column. This simulates gravity in that a player cannot place a marker above an empty square. After a move has been made the calculateWinner function is called to determine if a player has won the game. This is done by searching an array that contains all the possible win combinations and seeing if any player has a marker on each of the four spaces of one of the combinations. When the start new game button is pressed it calls the newGame function. This function contains the code responsible for clearing the board and animating it while it does it. The animation is made by clearing the rows of the array from the top down to the bottom, simultaneously it takes the rows below and shifts their content down to the row below. 
             
-------------------------------------------------------------------------
__Contributions:__  
  
  Gage Nesbit:  
    Gage created the slideshow and outline for the in-class presentation. Additionally, he researched how to install and run an Angular project. During this process he also found the solution and methods to troubleshoot some of the many challenges that come with getting angular to run on your machine for the first time. He added the bulk of the actual display details and CSS. He also fine-tuned game mechanics and added the empty board animation to the game board when a new game is played.
      
  Sam Roelofs:  
    Sam followed the Tour of Heroes tutorial from the Angular website to gain a better understanding of how an Angular project is structured and how to take advantage of its modular capabilities. He learned how to actually make and properly import a component. He got the basic connect four framework functionality and assisted in styling.
    
-------------------------------------------------------------------------
__Conclusion:__  
Over we are happy with what we accomplished during this project. Angular was honestly really difficult to wrap our heads around at first. There were a myriad of errors that we encountered just trying to get a basic project working. It did not help that there is very little accurate documentation available. This is likely due to the fact that Angular used to be AngularJS, but due to a large portion of developers who used it being dissatisfied, Google(the creators of Angular) completely rewrote and restructured the framework. Even the documentation on Angular's website was hard to parse some sections were outdated while others were up to date and it was hard to tell which was which especially not having much experience with the framework. 

-------------------------------------------------------------------------
 __References:__   
   Tour Of Heroes Angular Tutorial: https://angular.io/tutorial/tour-of-heroes  
   Angular for Beginners - Let's build a Tic-Tac-Toe PWA: https://www.youtube.com/watch?v=G0bBLvWXBvc&t=1099s


