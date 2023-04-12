# JavaScript / Web APIs: JavaScript Quiz

## Description
This webpage has been developed from scratch as a homework challenge, which aims to create a quiz about JavaScript subjects to test users' knowledge and compare their scores.

The development of this webiste required a lot of research from me to suit the requirements and ensure that the data will be saved properly.

Using the DOM method and creating just a small HTML document and working by calling the elements by 'id' was the most interesting lesson learned while developing this code.

Therefore, each new element learnt throughout each new assessment has been a great opportunity to understand and develop my Web Development skills.

## Usage
The webpage has been developed using VS Code, where the structure was created in HTML, CSS and the interaction with the end-user was developed using Javascript. 

The website is a quiz to challenge users interested in test their knowledge about JavaScript and compare their scores with their peers.

It consists in 7 questions that have to be answer by multiple choices, where each right answer scores 10 points and each wrong answer penalizes by 5 seconds the user on clock.

The image below shows the first interaction with the website, where the user is presented to the instructions and to a button to start the quiz. Also, a timer is displayed that will start a countdown as soon the button is clicked.

<img src="./Assets/images/start-quiz.png" alt="starting page and instructions" width="60%" height="60%" />

By clicking on the button 'Start Quiz' an event "click" will be activate, then section of question will be displayed and the user has to run against the time to try to finish answering all the questions before the time finishes and pay a lot of attention because each wrong answer will take 5 seconds from the time remaining.

Below is an illustration about how the question will be displayed.

<img src="./Assets/images/question.png" alt="example of the questions in the quiz" width="60%" height="60%" />

As soon as the user finishes answering all the questions or the clock reaches the end, a screen with their scores is presented with a textbox and a button to save their scores to compare to their peers later in the localSorage.

<img src="./Assets/images/end-save.png" alt="scores and saving page" width="40%" height="40%" />
<img src="./Assets/images/scores.png" alt="score in localStorage" width="40%" height="40%" />

To access the scores, open the DevTools on your browser and navigate to the tab 'Application', then look for 'Storage', followed by 'LocalStorage' and click on the file in there.

When the button 'Save' is actioned a confirm box is displayed to ensure the data was storaged and asking if you want to play again.

If you choose to play again the page will reloaded and a new quiz starts, otherwise, a new message will be displayed asking if you really want to leave the quiz. If you confirm that you do not want to play anymore, the page will be closed.
<img src="./Assets/images/play-again.png" alt="confirm saving and play again" width="40%" height="40%" />
<img src="./Assets/images/quit.png" alt="quit the game or play again" width="40%" height="40%" />

<img src="./Assets/images/numbers-confirm.png" alt="confirm if want to have numbers" width="40%" height="40%" />
<img src="./Assets/images/special-confirm.png" alt="confirm if want to have special characteres" width="40%" height="40%" />

As soon as the end-user finishes confirming what he wants or not in his password, the function will be displayed to the screen with a random password that contains everything as required.

<img src="./Assets/images/password-displayed.png" alt="example of a password with 8 characteres" width="60%" height="60%" />


## Development & Deployment

The code to create the website was developed using Javascript, where it was possible create interaction by using events as "click" on the buttom and a group of comparisons of the data inserted to attend the acceptance criteria. 

The screenshot below shows part of the code where a function is created and a group comparisons happen using a functionality "if" to manage what kind of data will be storaged.
In addition, it is notable a suffle of the elements required to be sort out and inputed to a new element.

<img src="./Assets/images/comparison-if.png" alt="part od CSS code with if's" width="50%" height="50%" />

In the end the of the functions is created a repetition scheme as a looping (while) that will be displayed and ensure that the number of elements of the password lenght will attend the requirements of the end-user, then a value will be set to the passsword that will use the value when display the main function "writePassword()".

<img src="./Assets/images/while-repetition.png" alt="looping using while" width="70%" height="70%" />

On the top of the code we have the main function of the code that will receive all the values processed as shown above and then display the final result to the end-user.

<img src="./Assets/images/writepassword-function.png" alt="main function of the code" width="70%" height="70%" />

### Deployed Website

To have a better understanding of what was happening behind the scenes to create the final result, I have inserted some codes on Console log to follow how it was working.

<img src="./Assets/images/console-log.png" alt="main function of the code" width="45%" height="45%" />

https://robinsonfdossantos.github.io/Generate-Password/

For more information, use the browser's DevTools by typing Ctrl + Shift + I.

## Credits

Members of the Bootcamp team, and in special to Meeks Gombe, Dominique who helped me to understand and overcome all my doubts through a 1:1 tutor session.

## License

Licensed under the MIT license.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
