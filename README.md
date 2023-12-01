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
__ANGULAR DAD: Our Angular Project__  
Links to GitHub repos:

Link to the site running on the MSU CSCI331 server:

Link to our slideshow:
https://tinyurl.com/32urpr5f

Project Goal:  
  Our goal was to develop a proof of concept project using Angular that demonstrates key features of the framework.
We wanted the user to be able to enter a category, click a button, and have a dad joke affiliated with that category displayed on the page. As the user does this repeatedly the previous jokes are displayed above in a list.

How it works:
  Angular is a JavaScript framework that allows developers to write highly modular applications. An angular project is made up of components. A component serves as a self-contained piece of code that contains its own HTML for formatting and Typescript to dictate behavior. The foundation of an angular project starts with an index.html, this is where all of the components are placed together to display to the user. The "app" component serves as the parent component in which all other components are nested. It must have the tag <router-outlet></router-outlet> at the bottom of its HTML file this serves as the route through which all of your components will get to index.html. A component is capable of having other components displayed within them and can be repeatedly nested. Once you have a component that you want to have displayed you place it in the HTML file of the parent component like any other HTML tag would be with the naming scheme "app-<yourComponentName>". For example: <app-yourComponentName><app-yourComponentName/>.   
                ------------FURTHER EXPLANATION TO COME-----------------  
                https://icanhazdadjoke.com/api  

Contributions:  
  
  Gage Nesbit:  
    Gage created the slideshow and outline for the in-class presentation. Additionally, he researched how to install and run an Angular project. During this process he also found the solution and methods to troubleshoot some of the many challenges that come with getting angular to run on your machine for the first time. He also found the dad joke API used to generate the jokes for the user and determined how to best integrate and implement the API within ANGULAR DAD.  
      
  Sam Roelofs:  
    Sam followed the Tour of Heroes tutorial from the Angular website to gain a better understanding of how an Angular project is structured and how to take advantage of its modular capabilities. He learned how to actually make and properly import a component. Additionally, he found how to convert a component into a TypeScript object this was immensely important as it added the ability to code in an object-oriented fashion.  

Conclusion:  
Over we are happy with what we accomplished during this project. Angular was honestly really difficult to wrap our heads around at first. There were a myriad of errors that we encountered just trying to get a basic project working. It did not help that there is very little accurate documentation available. This is likely due to the fact that Angular used to be AngularJS, but due to a large portion of developers who used it being dissatisfied, Google(the creators of Angular) completely rewrote and restructured the framework. Even the documentation on Angular's website was hard to parse some sections were outdated while others were up to date and it was hard to tell which was which especially not having much experience with the framework. 
 


