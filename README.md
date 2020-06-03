# ChairLift

## Application Initialization Instructions

Begin by cloning the repo. 

Next, create a Firebase account and initialize the repo as a Firebase web project (do not add Firebase hosting). If Firebase is new to you, [this] (https://courses.cs.northwestern.edu/394/firebase-notes.php) is a good resource to help you get started. Ensure that a .firebaserc file has been created in the root of the directory contianing the application name. Enable email/password authentication through the Firebase console. Additionally, enable the realtime database from the Firebase console. Upload the mockData.json file to the database to populate mock data into the app to get started. Proceed to copy and paste the database credentials from the Firebase web console into line 5 of db.js (see commented out code for the relevant credentials to add).

Lastly, run the following command in the root of the repo to download all relevant packages:

`$ npm install`


## Run Instructions 

Ensure you have the Expo application downloaded to your phone. Run the following command in the repo directory:

`$ yarn start`

Then, use Expo to view the application by scanning the QR code given with your phone camera. 


**There are no known bugs at the time with this repo.**
