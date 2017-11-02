var fetchReddit = function() {
  console.log("fetching called");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.reddit.com/api/me.json", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // check if user isn't logged in ?
      console.log("response received");
      // JSON.parse does not evaluate the attacker's scripts.
      var karma = JSON.parse(xhr.responseText);
      if (karma.data.comment_karma && karma.data.link_karma) {
        var tots = karma.data.comment_karma + karma.data.link_karma;
        console.log("total karma is ", tots);
        // integer to string cast tots+"";
        chrome.browserAction.setBadgeText({ text: tots + "" });
      } else {
        // what if ?
      }
    } else {
      // refreshing ...
      chrome.browserAction.setBadgeText({ text: "~" });
    }
  };
  // this is asynchronous request so whatever you need to get done, you'll have to either pass function to the xhr function or do whatever operation you want once you get the response
  xhr.send();
};

// to load first time extension is installed
fetchReddit();

// for testing 5 seconds.
setInterval(fetchReddit, 5000);

chrome.browserAction.onClicked.addListener(function(tab) {
  fetchReddit();
  // chrome.browserAction.setBadgeText({ text: karma });
});
