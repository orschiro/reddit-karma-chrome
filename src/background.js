var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.reddit.com/api/me.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var karma = JSON.parse(xhr.responseText);
    chrome.browserAction.setBadgeText({ text:karma.data.comment_karma });
  }
}
xhr.send();
