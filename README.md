# Journal Application


## Project Description
This project focused on implementing simple CRUD functionalities using the Apollo GraphQL library with MongoDB for the database and Next.js for the frontend. 
One of my motivations for developing this project was to gain a better understanding of the Apollo and GraphQL Ecosystem and build a product that I've used often in my daily life. 

## Features
This project has the following features implemented thus fur:
 - User Authentication with Firebase 
 - CRUD functionality for creating diary channels and creating channel entries.
 - Custom Text Editor made with Slate.js that provides simple features ( ex bold text, italic, quote blocks, code blocks ). 

### Future Features
- Add more features to Text Editor including hyperlinks, mentions etc. 
- Add Dictionary 
- Be able to invite collaborators to channel and create roles
- Be able to save or download a written entry in google drive or as a pdf,txt file.
- Be able to share entry with a shareable link


## Current Challenges
Some of the challenges I've currently trying to resolve include :
- Large Apollo Payloads causing significant delays in loading time
- Update Tailwind styling for cleaner code keeping. 

## How to use
In order to use this repo, follow the following steps below:

**1. Clone the Repo**


``` git clone  https://github.com/rach-con13/dream-journal.git ``` 


**2. Install Dependencies**


 ``` npm i ```


**3. Create .env file in the root of the project directory and add the following information**

 Visit [MongoDB](https://account.mongodb.com/account/login) and sign in using your account to create a project. Choose **Connect to Application** under the connection methods options and copy the URI.
```
MONGODB_URI = "place your mongodb uri here"
```


**4. Recommended to add the following extensions**

 Please note that this project was developed using VSCode and the extensions listed below can be found in the VSCode extensions store. If you are using an alternative
 editor, please consult their extension stores to see if they have similar or the same extensions. The following recommended extensions include :
 - Prettier
 - Apollo
 - Tailwind CSS IntelliSense
 - MongoDB for VSCode ( Mongo Compass is also a good alternative )
  




