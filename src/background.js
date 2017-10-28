// https://developer.chrome.com/extensions/xhr
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
xhr.open("GET", chrome.extension.getURL('https://www.reddit.com/api/me.json'), true);
xhr.send();

chrome.browserAction.onClicked.addListener(function(tab) {
  // Badge won't be able to disply more than three characters :(
  chrome.browserAction.setBadgeText({text:"0"});
});
