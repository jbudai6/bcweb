# bcweb
**Note:** All command line steps are performed using Windows PowerShell
## Pre-requisites 
- Install GitHub Desktop (or fight with git if you want your life to be hard) and clone repo.
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