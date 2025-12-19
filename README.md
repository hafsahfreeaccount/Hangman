# Hangman

## **Primary Target Audience**
Our primary target audience includes high school and college students aged 13-18. Hangman is an educational game that enables students to learn, play and compete with peers in a fun and interactive way. The game aims to encourage healthy competition between students, expand their vocabulary with word challenges and gamify education in an engaging way.

## **User Requirements** 
### Functional Requirements
1. Users can play the game as a 2 player game.
2. The interface must allow users to start a game with minimal friction.
3. Users can play directly on the server (no downloads required).
4. Users can stop and return any time. 
5. Users can guess words and receive immediate audio feedback.
6. Users can compete against peers in real-time.
7. Users can play with 3 difficulty levels: easy, medium and hard. 
8. The players can view the scoreboard and track their scores.
9. Users are displayed a you win or you lose screen accordingly.
10. Users can easily pause, exit and restart the game through the settings menu on the gameplay.
11. Users can view the instructions again if 'help' icon is clicked. 


### Non-Functional Requirements
1. The website is clean and intuitive without intrusive pop-ups and minimal clutter.
2. The design must be accessible to users with varying needs (e.g high contrast, screen reader compatibility).
3. The game loads within 3 seconds with a standard internet connection.
4. The UI must avoid distracting graphics or excessive animations, focused on clarity.
5. The game has a consistent look-and-feel across all pages.
6. Information and instructions is concise and easy to skim but detailed enough for thorough readers.
   
## **System Requirements**
### Functional System Requirements
1. The system must support accessibility standards (WCAG 2.1 compliance).
2. The system implements a game engine that handles correct letter logic and score tracking.
   
### Non-Functional Requirements
1. The page should load within 3 seconds under average conditions.
2. The website must be compatible with all modern browsers (Chrome, Edge, Firefox, Safari).
3. The website should be reliable with a target uptime of 99.5% or higher.
4. The system should be modular to allow easy updates and bug fixes.
5. Code must follow best practices and be documented.
6. The interface must be designed with both novice and expert users in mind.
7. The interface must support both detailed content and skim-friendly navigation.


## **User Profiles**

### **User Profile 1**
#### Michelle Whitworth
A 13 year-old high school student, an experienced player who plays to keep her brain sharp and active. She is a researcher user
who makes decisions rather slowly. She has a keen eye for details and often reads every single word on a web page. She is
not too fussed around fancy colours and graphics. Michelle is quite a novice user who isn't too experienced with
using interfaces. She prefers a website that is rather informative and can be quite critical of them so expects a clean,
professional experience with no pop-ups. ​
 
### **User Profile 2**
#### David KitKat
An 18 year-old male college student who likes to relax, playing in-between college classes and study sessions for his personal satisfaction. He would like the game to let users compete with each other. He is a typical browser user, that skims through content quickly in order to get a sense of the big picture. He prefers a website that gets to the point and locks in on interesting and eye-catching website features as well as being an expert user and knows how to navigate his way around.


## **Functional Specifications** 

### **Hardware Requirements** 
The development of this game prioritises smooth workflow and the ability to handle basic game logic. To be able to achieve this, a simple machine is needed. For example to handle basic game logic, a CPU is needed. 
- An integrated CPU as 2D rendering is light
- Saves power and cost while providing plenty of performance for 2D rendering. 
- Standard 256GB SSD storage
- Faster workflow and builds with a reliable capacity for small projects.
- 8GB - 16GB RAM
- 16GB ensures smooth performance when multi-tasking.
A laptop with these specs would be preferable as this game doesn't require heavy processing power such as AI or 3D rendering. 

### **Operating System Environment**
The game will be developed as a web-based application, requiring no downloads or installations. Therefore, the game is platform-independent and can run on any device with a modern web browser. JavaScript must be enabled and HTML5 and CSS3 support is required. The game should function consistently across responsive breakpoints (desktop, tablet, mobile), should load within 3 seconds on a standard broadband connection and have minimal CPU/GPU usage to ensure smooth performance.

### **Application Functions** 
The core application functions of the Hangman game are designed to provide an engaging, educational and accessible experience for students aged 13-18. The system prioritises ease of use, responsive and consistent feedback, catering to both novice and expert users.

#### Game Start/Navigation
Purpose: Allow users to start a game promptly without extra steps.

Functionality:
- One click/tap from the homepage to start a new game.
- Clear navigation to read rules and instructions before gameplay begins.
- Minimal steps to ensure a smooth and intuitive user experience.


### Difficulty Level Selection
Purpose: Allow users to pick a level with guessing words in increasing difficulty out of 3 levels.

Fumctionality:
- Back button to return to the homepage.
- 3 difficulty levels connect to the gameplay functionality.
- Fixed numbers of lives applied for each difficulty level.
  
#### Letter Selection logic
Purpose: Allows correct letter guesses to appear green and fill in the corresponding gaps in the word.

Functionality:
- Checks player selections and determines if the match is correct.
- Updates the word in game automatically after each selection.
- Provides visual/audio feedback when matches are made.

#### Scoreboard logic
Purpose: Allows correct letter guesses to appear green and fill in the corresponding gaps in the word.

Functionality:
- Calculates each players scores
- Deducts corresponding points for every wrong guess
- Saves scores and tracks progress throughout the game
- Displays the final scores for each player accurately.

#### Game End/Feedback
Purpose: End the game and provide players with performance feedback.

Functionality:
- Displays the final scores for each player accurately.
- Highlights final word for learning purposes.
- Offers options to restart or return to the main page.


### **Scoreboard**
The game has a scoring logic. Player will initially start off with a total number of points and for each wrong letter, a certain amount will be deducted from total until the minimum score is reached, indicating the player has lost the round and only gains minimal points. The correct score for each player is tracked, which is displayed at the end.
  
### **Replay**
The replay function will be of use when the game has ended. This way the user will have a choice of whether or not they wish to continue the game and restart. As the game ends there will be a reload button on the screen which the user can press which leads to the score and moves being reset. Then the player starts again straight after the game is reinitialised. The replay button will generate a new random layout so that users will stay engaged for longer periods of time.

### **Pause Menu**
The game loads up the pause menu when the settings icon is clicked, which includes 'Resume', 'Restart', 'Home' and 'Main Menu'.


## **Non-functional specifications**

### **Aesthetic** 
The games aesthetic will consist of a minimal and calm aesthetic with simple and sharp designs including a soft, cartoony design for the hangman. The atmosphere is inspired by similar games with the aim to make users feel calm and relaxed. Things to note include:

- Colour palette and font choices
- Audio buttons
- Art inspo which will help maintain consistency through development

### **Usability**
- Consistency: The interface must maintain a consistent layout and style across all pages and screens. Buttons and actions should behave predictably across devices.
- Responsiveness: The game must adapt to different screen sizes and layout should remain functional and readable.
- Accessibility: The system should comply with WCAG 2.1 AA accessibility standards.
- Error prevention: The interface should guide users to avoid errors such as highlighting invalid selections.

### **Ease of use** 
- Ease of learning: Users should be able to understand the game rules and gameplay within 1–2 minutes of first use. Instructions are automatically displayed before starting to support new users.
- Simple navigation: The interface should include as few steps as possible to load and start a game (e.g., one click/tap from the homepage or button).
- Essential functions (start, exit) should be visible and accessible at all times.
- Low cognitive load: Instructions should be concise and written in simple language.
- Minimal setup: Requires no downloads and the game loads automatically from the homepage.
 
### **Feedback Style**
- Visuals: User should be presented with visual cues such as highlighting correct or incorrect letter selections.
- Audio: Users receive audio feedback for correct letter selections, incorrect selections or key game events.
- Score tracking: The game tracks scores and progress in real-time to keep players informed.
- End of game: The game should provide end-of-game performance feedback, including correct word for learning purposes to users and scoreboard.


### **Basic needs**
- Core gameplay needs: Clear instructions before gameplay starts and immediate feedback should be given for user actions
- Security and privacy: The game shouldn't require any personal data to play.
- Accessibility: All essential interactions must be achievable without advanced technical skills.
- Reliability: Core features must always function correctly as well as being consistently available with minimal downtime.


## Initial Flowcharts


### Homepage Flowchart


<img width="1611" height="1731" alt="Hangman drawio (1)" src="https://github.com/user-attachments/assets/57f6bc53-c8d3-40a2-8a65-01faa4218c9c" />

### Gameplay Flowchart
<img width="556" height="981" alt="Hangman Gameplay Logic drawio" src="https://github.com/user-attachments/assets/101dd933-4820-4576-b322-fd35630decd9" />

### Scoreboard Flowchart
<img width="281" height="781" alt="Scoreboard Flowchart drawio" src="https://github.com/user-attachments/assets/fdde179a-5acf-44a7-abce-dc9c9730f9de" />

### Pseudocode

### Homepage Pseudocode

## Homepage/Landing Page Pseudocode

//Start on the homepage where the user kicks off the game.
// Homepage loads first and pauses for player action
Open homepage
Wait for user to respond
IF user presses ‘Play’ THEN 
   Load loading screen // short transition before the game starts
   Pause for 2 seconds // brief delay to view the loading screen
   Switch to difficulty level screen //switch to the difficulty page
      ENDIF 

## Difficulty Level Pseudocode
//The player decides which level they want to play on (this automatically set lives for both players).
   Present easy, medium, hard options 
   Wait for user to choose difficulty level of choice

   IF user picks ‘Easy’ THEN 
   Assign lives to 15  // easiest mode receives the most lives/custom lives for each level
   Assign difficulty as easy 
   Load easy gameplay  // goes right into the gameplay screen
      ENDIF 
      
IF user picks ‘Medium’ THEN 
Assign lives to 12 // moderate difficulty level 
Assign difficulty as medium 
Load medium gameplay 
   ENDIF 

IF user picks ‘Hard’ THEN 
Assign lives to 9          // hardest lives has the least lives
Assign difficulty as hard 
Load hard gameplay 
   ENDIF 

## Pause Menu Pseudocode
//Pause Menu allows the user to step away or step back from the game at any point.
IF user clicks Pause THEN 
   Navigate user to pause menu 
   Show user pause menu options 
   Pause until user chooses an option 

IF user picks 'Resume' THEN 
   Hide pause menu from view 
   Navigate back to gameplay  // return to game exactly where they left off.
      ENDIF 
      
IF user picks 'Restart' THEN 
   Reboot correctGuessCounter  //refresh guess history for new round
   Reboot wrongGuessCounter
   Reboot lives for set difficulty  //the player starts with full lives to start off with
   Reboot word and score for new round 
   Return to gameplay //restart the game for a new round
      ENDIF 
      
IF user picks 'Help' THEN  //in-game instructions overlay 
   Open Instructions screen  //show game rules/instructions for player to read
   Pause until user clicks 'Exit' or 'Back' 
   Remove Instructions screen from view 
   Return to pause menu //return to menu options
      ENDIF 
      
   IF user clicks 'Home' THEN  //exit game confirmation popup
   Open exit overlay //ask if the user wants to quit or continue playing
   IF user clicks 'Yes' THEN
   Hide gameplay screen from user view 
   Present homepage to user  //ends the game and return to start 
   ELSE 
Return user view to gameplay //cancel quit
      ENDIF 
ENDIF 
ENDIF 

## Gameplay Summary Pseudocode
//Handles win/lose checking, scoring and turn taking between both players.

WHILE game is running DO
//Checks if the player completed the word before running out of lives. 
IF all letters guessed before lives go to zero THEN 
   Result = 'win' 
   ELSE Result = 'lose' 
      ENDIF 
//Calculate current round points based on difficulty and lives remaining left over from player's gameplay.
   CALL currentroundpoints (difficulty, lives_remaining) RETURNING currentroundpoints 

   Change score for current player currentplayerpoints = currentplayerpoints + currentroundpoints // This updates player 1’s total score*
//Waits for player 1 to confirm Player 2's Turn before switching players.
   Wait for player 1 to change over
   
IF player 1 clicks ‘Player 2’s Turn’ THEN 
    Reboot correctGuessCounter
    Reboot wrongGuessCounter
   Reboot lives 
   Reboot word for current difficulty 

   Switch to player 2 
   Load gameplay screen for player 2
      ENDIF 

   Player 2 guesses letters 
      IF all letters guessed or lives = 0 THEN 
         end current round 
      CALL currentroundpoints (difficulty, lives_remaining) //calls currentroundpoint calculations 
      Change score for current player //This updates player 2’s score 
      currentplayerpoints = currentplayerpoints + currentroundpoints 
         ENDIF 
ENDWHILE

## Scoreboard Pseudocode 
// Final scores are displayed after both players end their rounds 
Display Scoreboard Screen
Load player 1 points: [p1points] 
Load player 2 points: [p2points] 
Display 'New Game' 
Display 'Main Menu' 

Wait for user choice 

IF user clicks ‘New Game’ THEN 
   Reboot all points to zero // reboots game scores for both players
   Produce Difficulty Level Screen //start a new game round 
      ENDIF 
IF user clicks ‘Main Menu’ THEN 
   Open homepage //return to the home page
      ENDIF

## Mock Ups 
The project includes a set of UI mockups that illustrate the core screens and user flow of the Hangman game. These mockups were constructed to guide the visual layout and core functionality before development began. 

### Home Page Screen
<img width="392" height="800" alt="Home Page" src="https://github.com/user-attachments/assets/3fedb66b-4f9e-4c36-a7eb-38692c189d6b" />


Purpose: Displays the home page screen for the user to play Hangman.
Elements:
- Hangman title
- Hangman visual
- Play Now Button

### Loading Screen
<<img width="360" height="800" alt="Landing Screen (2)" src="https://github.com/user-attachments/assets/3a33f942-9f8f-43f0-9e78-b2cac5dc07ea" />


Purpose: Loads Hangman title before transitioning user to choose a difficulty level to start the game. 
Elements:
- Hangman title
- Hangman hanging hook for Hangman

### Difficulty Level Screen
<img width="360" height="800" alt="Difficulty Level (5)" src="https://github.com/user-attachments/assets/a5527ba1-69e4-4b49-b67a-423ad3fcf9ea" />

Purpose: User chooses one of three difficulty levels from easy, medium and hard.
- Back button to return to the home page
- Easy difficulty level button
- Medium difficulty level button
- Hard difficulty level button



### Gameplay Screen
<img width="360" height="800" alt="Gameplay Screen" src="https://github.com/user-attachments/assets/8d2fcde2-8103-4c80-9bc7-ec3270413715" />

Purpose: Displays the gameplay screen for the user to play the game
Elements:
- Hangman visual
- Correct letter appear on the word in it's correct position
- Colourful keyboard with correct/incorrect letters in green and red.
- Enter button to enter the chosen letter
- 'Pause' button
- 'Instructions/help' button

### You Won Screen
<img width="360" height="800" alt="You Won Screen" src="https://github.com/user-attachments/assets/eb2d6c21-68e6-4fe5-8c2d-56d0b449a250" />

Purpose: Let's the user know they have won after they guess their word correctly
Elements:
- Happy man visual
- Full correct word displayed
- Total points gained for that round by current player displayed
- Button for player 2 to click in order to start their turn
- 'Instructions/help' button

### You Lose Screen 
<img width="360" height="800" alt="lost" src="https://github.com/user-attachments/assets/dea58eef-0681-4b54-a9bf-57923d1d5a99" />

Purpose: Tells user that they lost the game and promts the user to play the next game or jump to the end screen
Elements: 
- Next game for player 2
- Points for the round

### Instructions
<img width="324" height="627" alt="Instructions" src="https://github.com/user-attachments/assets/7edf87b8-1dd0-4459-8b61-d599387e982f" />


Purpose: Shows the instructions to the user
Elements:
- 'How to play' section
- Explanation on difficulty levels
- 'X' button to exit

### Exit
<img width="343" height="249" alt="Exit" src="https://github.com/user-attachments/assets/8d9712b9-3c6c-4c91-84f5-7e94c0c7bb18" />

Purpose: Pop up when user wants to exit
Elements:
- 'Yes' option
- 'No' option

### Pause
<img width="324" height="330" alt="Pause" src="https://github.com/user-attachments/assets/f3a5f9b5-b18c-4055-b3ba-80e2700f5b1b" />


Purpose: Pop up when user presses pause icon
Elements:
- 'Resume' option
- 'Restart' option
- 'X' button to exit
- Instructions and Home buttons

### Scoreboard
<img width="364" height="634" alt="image" src="https://github.com/user-attachments/assets/375bfb99-9d6c-41bb-85a6-0c75367f8c94" />

Purpose: Finalise the scores achieved by each of the players
Elements:
- Scores for player 1 and 2
- New game button (restart)
- Main menu button in small below the new game button



## Storyboards
The project includes storyboards that documents the user experience and the user flow of the Hangman game.

### Home Page Screen
<img width="701" height="756" alt="Hangman Home Page Storyboard drawio" src="https://github.com/user-attachments/assets/449728bb-fa50-476c-bd7e-6a317201a162" />

### Landing Page Screen
<img width="557" height="800" alt="Hangman Landing Page Storyboard drawio" src="https://github.com/user-attachments/assets/5b0ffcd0-8a66-44d6-b66f-a699db7ed49b" />

### Difficulty Level Screen
<img width="741" height="800" alt="Hangman Difficulty Level Storyboard  drawio" src="https://github.com/user-attachments/assets/509a1ee6-0d72-4dc3-9dd7-a8481f04280c" />




### Gameplay Screen
<img width="487" height="242" alt="image" src="https://github.com/user-attachments/assets/d54fb7bd-ed16-4c76-8e92-646d3fdc0e31" />

### You Won Screen
<img width="469" height="253" alt="image" src="https://github.com/user-attachments/assets/89f01538-e814-401e-9cde-7a101dfc2116" />

### You Lose Screen
<img width="1126" height="631" alt="image" src="https://github.com/user-attachments/assets/2834a603-09ff-42d3-95c7-22a4a9368173" />




### Instructions
<img width="781" height="627" alt="Instructions Storyboard drawio" src="https://github.com/user-attachments/assets/f94ad6c5-c451-4061-8623-5f94ff1d16dd" />


### Scoreboard 
<img width="1126" height="599" alt="image" src="https://github.com/user-attachments/assets/7b4559bb-2546-4d08-b2ad-4f3be8b5a3ad" />

### Exit
<img width="473" height="169" alt="image" src="https://github.com/user-attachments/assets/766d7440-2eec-407d-9497-1242d88a8f97" />

### Pause
<img width="487" height="193" alt="image" src="https://github.com/user-attachments/assets/f3712c34-1f95-49bf-8632-9fa57b25f53f" />


## Risk Management
Risk management involves identifying potential issues that could affect the success of the Hangman Game project and planning strategies that reduce or eliminate their impact. By assessing technical, design and collaboration risks early, the team can deliver on smooth development and timely completion.

| Risk | Likelihood | Impact | Mitigation Strategy |
-------|------------|--------|----------------------------|
| Limited experience with JavaScript, CSS or Flask increases coding errors or delay development. |Medium| High | Allow extra time for tutorials, share resources and delegate based on skill levels.| |
|Difficulty integrating different team members code in Github cause version controls or lost progress. | Medium | Medium | Use Git branches, commit regularly and communicate before merges.|
|Poor communication between team members contributes to inconsistent designs or missed tasks. |Medium | High|Hold regular check-ins, use a shared document for updates and asking responsibilities clearly.|
|Game logic (letter selection functionality) may malfunction or process scores incorrectly. | High | High | Test matching system regularly, use pseudocode or flowcharts to verify logic before implementation.|
The interface may not be user-friendly or accessible for all users. | Medium | Medium | Follow WCAG 2.1 accessibility standards, conduct usability testing and simplify layout controls.|
|Bugs or performance issues late in development delays completion. | Medium | High | Test iteratively at each development stage and record identified issues for troubleshooting.|
|Project scope is too complex, rendering difficult to complete within the given timeframe| Medium | High | Prioritise core features first and add extra features after core functionality proves stable. |

## Software Development Strategy
### Development strategy 
This project will use the Agile methodology as it is most suitable for our project. This is because of the adaptablity for changing project requirements. Each iteration will produce a potential end product unless the customer has any concerns in which case it will be easy to adapt to. Each sprint will have a set plan of steps to follow to ensure each sprint is being used effectively: Sprint planning, Daily meetings, Sprint review, Sprint reflection. 
### Core development phases
#### 1. Initial set up 
Set up Git repos. 
Create folder structures and fill out the README file. 
Create wireframes and story boards. 
#### 2. Functionality development
Implement core game logic and features. 
Create user interface.
Add accessibility features. 
Ensure design is responsive across all platforms. 
#### 3. Refinement and feature completion
Implement settings menu. Create replay function. Finalise visual design. Implement audio/ feedback mechanisms. 
Testing (manual/ auto). 
#### 4. Usability and user testing
Usability testing with users that represent user personas for real world feedback. 
Accessibility testing. Bug fixing. 
#### 5. Final review and deployment
Final testing round. Testing on multiple browsers. Deployment. 
### Collaboration tools
GitHub: verison control and code management
Figma: UI/UX mockups
### Risk management strategy
Ensure all developers have the same level of coding skills. Use branches for individual features and commit regularly especially during merges. Apply correct accessibility testing. 
### Quality assurance 
Create automated tests for core game functions. Manual testing for user interaction and accessibility. 
### Post launch maintenance
Collect and analyse user feedback via surveys. Update features if needed and regular updates based on user feedback. 
### Potential considerations
Initially, we were considering using react native to develop a mobile app as it is the recommended method to develop such an app. However, we opted for creating a web app as it is somthing we are all familiar with as a team and found that it makes the development process simpler if all team members are on the same skill level. This reduces errors and means that development time is reduced. 

## Test Plan 

| Test No. | Test Description | Action | Expected Outcome | Actual Outcome | Further Actions |
|----------|------------------|--------------|------------------|----------------|---------|
|1.1|Launch the game website|Open game URL in browser|Main menu loads with play button|Main menu loads with play button <img width="299" height="414" alt="image" src="https://github.com/user-attachments/assets/0326b3d6-41ac-47ea-9554-e51e6ba8aed2" />|n/a|
|1.2|Start a game|Click play button|Landing screen loads for 2 seconds|Button was not working when pressed (Was not being directed to landing screen)|I had not given the playbutton an ID so the javascript was not being implemented. ID was added to change this <img width="937" height="616" alt="Screenshot 2025-12-09 201047" src="https://github.com/user-attachments/assets/ad49692d-c5be-4aab-855d-9b4d0c23b492" />|
|**1.2 (Retest)**|Start a game|Click play button|Landing screen loads for 2 seconds|Landing screen loads for 2 seconds <img width="297" height="413" alt="image" src="https://github.com/user-attachments/assets/a734cc4b-1d5f-42b5-ab91-c47e0052879c" />|n/a|
|1.3|Choose a difficulty level|Click easy or hard|Easy and hard option is given for user to click on|Easy and hard option is given for user to click on <img width="301" height="313" alt="image" src="https://github.com/user-attachments/assets/de70d5ee-020b-4947-a988-dc401b78db4f" />|n/a|
|1.4|Player 1 guesses a correct letter|Player 1 taps a correct letter on the on-screen alphabet|Correct letter appears in the word; button turns into faded colour|Correct letter appears in the word; button turns into faded colour <img width="239" height="415" alt="image" src="https://github.com/user-attachments/assets/e01ecc0f-be9b-4a0d-a39c-87f5ab3db01d" />|n/a|
|1.5|Player 1 guesses an incorrect letter|Player 1 taps a wrong letter|Letter turns into faded colour; rope/hangman progresses|Letter turns into faded colour; rope/hangman progresses <img width="239" height="415" alt="image" src="https://github.com/user-attachments/assets/a49d7d32-96d5-433c-b0fa-ef5a590e850f" />|n/a|
|1.6|Player 1 wins|Player 1 completes the word|Win screen loads (“YOU WON!”), points displayed, “Player 2’s Turn >” button visible|"Player 2's turn" button was not appearing <img width="598" height="829" alt="Screenshot 2025-12-19 200048" src="https://github.com/user-attachments/assets/f00a75c1-2714-4642-ba0c-37e1d7745ef7" />|win.html was being linked to the lost.js, so this had to be changed to win.js <img width="803" height="667" alt="Screenshot 2025-12-19 200008" src="https://github.com/user-attachments/assets/44693585-dd1c-4690-9800-e2bf95740f51" />|
|**1.6 (Retest)**|Player 1 wins|Player 1 completes the word|Win screen loads (“YOU WON!”), points displayed, “Player 2’s Turn >” button visible|Win screen loads (“YOU WON!”), points displayed, “Player 2’s Turn >” button visible <img width="291" height="403" alt="image" src="https://github.com/user-attachments/assets/15e467be-6bf3-4c92-a9a2-0b8d3549bf00" /> <img width="259" height="374" alt="image" src="https://github.com/user-attachments/assets/a077ef77-f45a-47d4-bb4c-50e2bf603a30" />|n/a|
|1.7|Player 1 loses|Player 1 runs out of attempts|Lose screen loads, correct word displayed, “Player 2’s Turn >” button visible|Lose screen loads, correct word displayed, “Player 2’s Turn >” button visible <img width="295" height="402" alt="image" src="https://github.com/user-attachments/assets/c25cd24b-5c5f-47e0-99cc-935f5d71f5e1" /> <img width="258" height="373" alt="image" src="https://github.com/user-attachments/assets/c814527b-4c66-4c0d-8a49-757d78ac6536" />|n/a|
|1.8|Start Player 2 turn|Player 2 clicks “Player 2’s Turn >”|A new gameplay screen loads for Player 2 with a new word|A new gameplay screen loads for Player 2 with a new word <img width="197" height="387" alt="image" src="https://github.com/user-attachments/assets/d865d2a7-b9d6-4712-aafa-12f13a912b6e" />|n/a|
|1.9|Player 2 guesses letters|Player 2 plays normally|Correct/incorrect visual feedback plays as expected|Correct/incorrect visual feedback plays as expected|n/a|
|1.10|Player 2 completes word|Player 2 wins their round|“YOU WON!” screen appears showing Player 2 points| | |
|1.11|Player 2 fails the word|Player 2 runs out of attempts|“YOU LOST!” screen appears showing Player 2 points| | |
|1.12|Final scoreboard displays|After Player 2’s round ends|Scoreboard loads showing Player 1 score + Player 2 score| | |
|1.13|Pause button works|Player clicks pause icon during gameplay|Game freezes; input disabled until resumed| | |
|1.14|Resume gameplay|Click resume button|Game continues from same state| | |
|1.15|“Help” icon displays instructions|Click ? icon|Instructions modal appears without interrupting game state| | |
|1.16|Restart game during Player 1 or Player 2|Click restart button in pause menu|Current player's round resets with a new word| | |
|1.17|Exit to home menu|Click exit in settings|Player is returned to the home screen| | |
|1.18|Prevent double input|Tap the same letter twice|Second tap ignored, no error|Second tap ignored, no error|n/a|



## Individual Contributions
Rushda - Designed the gameplay screen, the “You lose” wireframe and pause menu. Coded the starting and landing screen as well as coding the ‘hangman’ visual, enforcing the 2-player state alongside the “You lose” screen. I also added the pause menu along with the corresponding icons.

Khadijah - Designed starting, loading and difficulty level wireframes, homepage flowchart, created home page, difficulty level, summarised gameplay and scoreboard pseudocode and coded instructions, exit and pause menu and points for scoreboard scoring screens.

Hafsah - Designed the you win, scoreboard wireframes. Developed the keyboard with the logic. Developed the difficulty levels page, you win screen. Fixed errors that came across while developing. Added a limit for incorrect guesses. 

## Success of Project
The project was successfully completed and met all functional requirements. The game supports real-time 2-player gameplay directly on the server with minimal setup, allowing users to easily start, pause, exit, and return at any time. The interface is intuitive, with clear audio feedback for guesses, three difficulty levels, real-time competition, score tracking, and win/lose screens.

During development, the exit screen was removed as it was unnecessary and streamlined the user experience. 'Medium' diffculty level was also left out. Additional features were added, including displaying which player’s turn it is, improving clarity during gameplay. Users can also access settings and instructions at any time through the gameplay menu.

With more development time, the project could be enhanced further by adding hint features, a larger vocabulary list, and a coloured keyboard to improve usability and engagement.

