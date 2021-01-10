# openMic App Client-side  
##### by MANSA SAMLAFO 

![Image](./src/Assets/openmic.png "icon")  

## Table of Contents
- [About openMic](#About_openMic)
- [Built With](#Built_with)
- [Project Planning](#Project_Planning)
- [Key Features](Planning_Tools)

### About openMic
openMic is a poetry app or media, built to share and showcase poetic talent of all kinds. 

### Built With
---------------
1. Node: Was used to build the server
2. React Classes: Used for the front-end build for high responsiveness
3. Bootstrap and ReactStrap: To give the front-end a professional look.
4. BrowserRouter: For easy navigation through the app

## Project Planning:
Trello was used through the planning and creacting stages of the project to list out all the tasks. diagram.io was used to provide the structure and detailed information flow of all the components of opemMic. Mock ups were completed via hand sketching. Links to project planning and diagram.io are listed below this page.

## Key Features
The server side with all its endpoints was first built out. Verification and creation of tokens and JWT_SECRET were incorporated to improve the security of the application and minimize unauthorized processes on the app. 

A user can gain access to the app by either logging in or signing up. He is then able to create poem(s), view poems, comment on poems created by other users. Another functionality that exist in the app is the ability of the user to request publication of his poem. This makes the poem public to openMic. Without publication, all poems a user creates are only visible to that user. There is also the existence of the profile section which the user has the option of completing. All data is being stored inthe database.

Without signing in a guest user only has the ability to see poems openMic users but cannot create or comment on a poem.
The profile section is completed by the user and information from this section is collected and stored in postgres database. This is used along with logic in matching our user to the perfect date.
The update profile functionality allows the user to make changes to their profile.

An admin role in openMic provides additional rights to the using such as publishing poems, deleting poems and suspending user accounts where necessary.

### Planning tools

* Click [openMic diagram.io flow diagram](https://app.diagrams.net/#G1YaAGBeguXZqIiQGxvRm6kFtjt595oe96)

* Click [openMic Tello board](https://trello.com/b/SnWtS2Li/openmic)

                                ``` 
                                ```<Elevenfifty Academy © MDS 2021>```
                                ``` 














