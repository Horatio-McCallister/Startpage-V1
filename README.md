# Startpage-V1
HTML Startpage that has several features such as a clock, links to various pages, and Twitch tracker. 

## Installation
Just extract the folder into a permanent location and link the index.html as your new tab or homepage. 

## Customize
You can change the links in index.html. Here you can change the website to access as well as the name. You can also add and remove links to fit your needs.

The Twtich column will keep track of who is online and offline. This feature requires you to have your own Twitch API key which you can get: https://www.twitch.tv/settings/connections. 
1. Log in
2. Create a new app.
3. Name it whatever you want and get a key
4. Go to /js/twitch.js and replace "YOUR_TWITCH_API_KEY" with they key you obtained.

While in twitch.js you can change "streamX" to who you want to follow. Add or remove as many as you want. 

Finally the page will randomly pick a mascot to display on screen. You can change and add more of them to the /media/mascot/ folder. Then make changes to randomimage.js if you add more then three mascots. 
