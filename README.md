# bcweb
**Note:** All command line steps are performed using Windows PowerShell
## Pre-requisites 
- Install GitHub Desktop (here: https://desktop.github.com/) or fight with git if you hate yourself lol
- Clone repo 
- Download nodejs (here: https://nodejs.org/en/download/)
- Set up Angular (details below)

## Set up Angular
Run the following to set up angular:
- `npm install -g @angular/cli`
- `ng new angularnode`
  - **Note:** if you are getting a bullshit `you are unauthorized to run scripts` error at this step, run the following command, as administrator, `Set-ExecutionPolicy RemoteSigned`
- `Would you like to add Angular routing?` YES
- `Which stylesheet format would you like to use?` CSS
- `cd angularnode`
- `ng serve --open` // to compile and run
- `http://localhost:4200/`
- Yay, you did it!

## Running App
- Navigate to bcweb repo
- Run command `node app.js`
- You should be met with the following response: `Server running at http://127.0.0.1:3000/`
- In your browser, open the following to see output: `http://localhost:3000/`

## References
These might be helpful connecting nodejs back-end with angular front-end:
- https://therichpost.com/how-to-use-angular-11-as-frontend-and-nodejs-as-backend/
- https://dev.to/rajesh04159786/connecting-angular-application-with-nodejs-backend-1l81
- https://github.com/bbachi/angular-nodejs-example