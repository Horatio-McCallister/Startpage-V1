//Handles the twitch api checks and makes a list of online and offline streams.

function buildTwitch() {
    var twitchOnTemp = "";
	var twitchOffTemp = "";
	//Stream array: Change "streamX" to who you want to follow
	//Use the url name: Example twitch.tv/yourstream replace "stream1" with "yourstream"
    var channelNames = [
                        "stream1", 
                        "stream2", 
                        "stream3", 
                        "stream4",
						"stream5",
						"stream6"
                        ];
	var twitchOnlineList = $('#twitchOnlineCheck');
	var twitchOfflineList = $('#twitchOfflineCheck');

    for (var i = channelNames.length - 1; i >= 0; i--) {
		//You need a twitch api key here to access stream information. Get yours at: https://www.twitch.tv/settings/connections
      $.getJSON('https://api.twitch.tv/kraken/streams/' + channelNames[i] + '?client_id=YOUR_TWITCH_API_KEY', function(channel) {
		  
          if (channel["stream"] == null) {
              //console.log("Offline");
			  
			  twitchOffTemp += "<li>";

			  twitchOffTemp += "<a href='http://www.twitch.tv/" + parseURL(channel["_links"]["self"]) + "'>";
			  twitchOffTemp += parseURL(channel["_links"]["self"]);
              twitchOffTemp += "</a>";
              twitchOffTemp += "</li>";
          } else {

              twitchOnTemp += "<li>";

              twitchOnTemp += "<a href='";
              twitchOnTemp += channel["stream"]["channel"]["url"];

              twitchOnTemp += "' title='";
              twitchOnTemp += "Playing "+channel["stream"]["game"];
              twitchOnTemp += "'>";
              
              twitchOnTemp += channel["stream"]["channel"]["display_name"];

              twitchOnTemp += "</a>";
              twitchOnTemp += "</li>";
          }
          twitchOnlineList.html(twitchOnTemp);
		  twitchOfflineList.html(twitchOffTemp);
      });
    };
}

function parseURL(url)
{
	var result = url.slice(37);
	return result;
	//console.log(result);
}


