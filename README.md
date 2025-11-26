# Hangman

## **Primary Target Audience**
Our primary target audience includes high school and college students aged 13-18. The game is an educational tool that enables students to learn, play and compete with peers in a fun and interactive way. The game aims to encourage healthy competition between students, expand their vocabulary with word challenges and gamify education in an engaging way.

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
9. Users can easily pause, quit and restart the game through the settings menu on the gameplay. 


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
A 28 year-old PhD student, an experienced player who plays to keep her brain sharp and active. She is a researcher user
who makes decisions rather slowly. She has a keen eye for details and often reads every single word on a web page. She is
not too fussed around fancy colours and graphics. Michelle is quite a novice user who isn't too experienced with
using interfaces. She prefers a website that is rather informative and can be quite critical of them so expects a clean,
professional experience with no pop-ups. ​
 
### **User Profile 2**
#### David KitKat
An 18 year-old male who is a business student and likes to relax, playing in-between university classes and study sessions for his personal satisfaction. He would like the game to let users compete with each other. He is a typical browser user, that skims through content quickly in order to get a sense of the big picture. He prefers a website that gets to the point and locks in on interesting and eye-catching website features as well as being an expert user and knows how to navigate his way around.


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


### **--**


  
### **--**


## **Non-functional specifications**
### **Aesthetic** 


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


### **Basic needs**
- Core gameplay needs: Clear instructions before gameplay starts and immediate feedback should be given for user actions
- Security and privacy: The game shouldn't require any personal data to play
- Accessibility: All essential interactions must be achievable without advanced technical skills.
- Reliability: Core features must always function correctly as well as being consistently available with minimal downtime.


## Mock Ups 
The project includes a set of UI mockups that illustrate the core screens and user flow of the Hangman game. These mockups were constructed to guide the visual layout and core functionality before development began. 

### -- Page

Purpose:
Elements:
- 

### -- Page

Purpose:
Elements:
- 


## Storyboards
The project includes storyboards that documents the user experience and the user flow of the Hangman game.

### -- Page

### -- Page


## Risk Management
Risk management involves identifying potential issues that could affect the success of the Hangman Game project and planning strategies that reduce or eliminate their impact. By assessing technical, design and collaboration risks early, the team can deliver on smooth development and timely completion.

| Risk | Likelihood | Impact | Mitigation Strategy |
-------|------------|--------|----------------------------|
| Limited experience with JavaScript, CSS or Flask increases coding errors or delay development. |Medium| High | Allow extra time for tutorials, share resources and delegate based on skill levels.| |
|Difficulty integrating different team members code in Github cause version controls or lost progress. | Medium | Medium | Use Git branches, commit regularly and communicate before merges.|
|Poor communication between team members contributes to inconsistent designs or missed tasks|Medium | High|Hold regular check-ins, use a shared document for updates and asking responsibilities clearly.|
|Game logic (matching functionality) may malfunction or process scores incorrectly.| High | High | Test matching system regularly, use pseudocode or flowcharts to verify logic before implementation.|
The interface may not be user-friendly or accessible for all users. | Medium | Medium | Follow WCAG 2.1 accessibility standards, conduct usability testing and simplify layout controls.|
|Bugs or performance issues late in development delays completion | Medium | High | Test iteratively at each development stage and record identified issues for troubleshooting.|
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

## Test Plan 

| Test No. | Test Description | Action | Expected Outcome | Actual Outcome | Further Actions |
|----------|------------------|--------------|------------------|----------------|---------|
|1.1| | | | | |
|1.2| | | | | |
|1.3| | | | | |
|1.4| | | | | |
|1.5| | | | | |
|1.6| | | | | |
|1.7| | | | | |
|1.8| | | | | |
|1.9| | | | | |
|1.10| | | | | |


## Individual Contributions
Rushda -
Khadijah -
Hafsah -

## Success of Project
