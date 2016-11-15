# how to install express
* npm install -g express-generator
* cd loc8r/
* express --css less --hogan

# how to install simon
* https://github.com/simonholmes/getting-MEAN

# how to start from beginning
* create c9 workspace
* create github
* link local to get hub repo
* automate check in. Use sudo chmod 775 github.sh before you can use ./github.sh
* install express see above.
* install simons chapter

# https://community.c9.io/t/setting-up-mongodb/1717

#airport schemas

var airport = new mongoose.Schema({
    Airport: string,
    IATA: string,
    ICAO: string,
});

var runways = new mongoose.Schema({
    Heading: string,
    Length: string
});

get mongod running
new terminal type nodemon hit enter
type in the url in webbrowser and it should be running

code.jquery.com to get the latest minified version of js
always get minified versions
to insert make sure your are in the righ directory in terminal and put wget and the link location and hit enter and it should bring in the file


