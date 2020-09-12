
# poll
Simple web application for the creation, distribution, and voting on of basic polls. Built using Angular and Firebase.

![Screen Shot 2020-09-12 at 3 49 00 PM](https://user-images.githubusercontent.com/23458996/93004793-0fb4a400-f510-11ea-922f-b0fb4debb6bd.png)

![Screen Shot 2020-09-12 at 3 50 08 PM](https://user-images.githubusercontent.com/23458996/93004817-66ba7900-f510-11ea-8caf-d8277cc12567.png)

![Screen Shot 2020-09-12 at 3 49 09 PM](https://user-images.githubusercontent.com/23458996/93004820-7043e100-f510-11ea-8c68-846de633c866.png)

![Screen Shot 2020-09-12 at 3 49 30 PM](https://user-images.githubusercontent.com/23458996/93004828-76d25880-f510-11ea-8548-839f232ad56b.png)

![Screen Shot 2020-09-12 at 3 49 41 PM](https://user-images.githubusercontent.com/23458996/93004833-83ef4780-f510-11ea-8c54-0d30cbd8a722.png)

## Requirements
* NodeJS and NPM
* Firebase Account
* Firebase CLI

## To Run

 1. Create a new project within your **Firebase** account.
 2. Within this project, create a new **Firestore** collection named `polls`.
 3. Within this project, create a new web app, and copy the **Firebase SDK snippet** with the **config** option set. This should look something like this:
```
const firebaseConfig = {
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	authDomain: "XXXX-XXXX.firebaseapp.com",
	databaseURL: "https://XXXX-XXXX.firebaseio.com",
	projectId: "XXXX-XXXX",
	storageBucket: "XXXX-XXXX.appspot.com",
	messagingSenderId: "XXXXXXXXXX",
	appId: "X:XXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXX"
};
```
4. Clone or download this repository to your local machine.
```
git clone https://github.com/mbenja/poll.git
```
5. Initialize Firebase in the repository using the Firebase CLI.
6. Add this **config** to a `src/environments/environments.ts` file as a value on an exported variable named `environment`.
7. Execute `npm install`, followed by `ng serve` to run the app locally.
8. Navigate to `localhost:4200` to see the app.

