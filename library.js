(function(module) {
	"use strict";
	var Twitch = {},
		embed = '<object type="application/x-shockwave-flash" height="378" width="620" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" /><param name="flashvars" value="channel=$1&auto_play=true&start_volume=25" /></object>',
		embedMulti = '<object type="application/x-shockwave-flash" height="378" width="620" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" /><param name="flashvars" value="channel=$1&auto_play=true&start_volume=25" /></object><object type="application/x-shockwave-flash" height="378" width="620" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" /><param name="flashvars" value="channel=$2&auto_play=true&start_volume=25" /></object>';

	var	regularUrl = /<a href="(?:http?:\/\/)?(?:www\.twitch\.tv)\/?(.+)">.+<\/a>/g;
	var multiTwitch = /<a href="(?:http?:\/\/)?(?:multitwitch\.tv)\/?(.+)\/(.+)">.+<\/a>/g;

	Twitch.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}
		if (data.postData.content.match(regularUrl)) {
			data.postData.content = data.postData.content.replace(regularUrl, embed);
		}
		if (data.postData.content.match(multiTwitch)) {
			data.postData.content = data.postData.content.replace(multiTwitch, embedMulti);
		}

		callback(null, data);
	};

	module.exports = Twitch;
}(module));