(function(module) {
	"use strict";
	// responsive format found at http://avexdesigns.com/responsive-youtube-embed/
	var Twitch = {},
		embed = '<div class="twitch-container"><iframe class="twitch-plugin" src="https://www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf?channel=$1" frameborder="0" scrolling="no"></iframe></div>';

	// modified from http://stackoverflow.com/questions/7168987/
	var	regularUrl = /<a href="(?:http?:\/\/)?(?:www\.twitch\.tv)\/?(.+)">.+<\/a>/g;

	Twitch.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}
		if (data.postData.content.match(regularUrl)) {
			data.postData.content = data.postData.content.replace(regularUrl, embed);
		}

		callback(null, data);
	};

	module.exports = Twitch;
}(module));
