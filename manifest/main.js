chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: `
      var elems = document.getElementsByTagName("body");
      var switchto = prompt("Pick a new cursor! You can enter the URL for any image you'd like, or enter a number 1 thru 5 for a pre-set option.");
  if(switchto == null || switchto == "" || switchto == " "){
    alert("No URL specified, using a pre-chosen image...");
    switchto = "https://i.postimg.cc/x1PCtfQZ/pointer1.jpg";
  } else if (switchto == 1) {
    switchto = "https://i.postimg.cc/tRZCxdM7/Webp-net-resizeimage.jpg";
  } else if (switchto == 2) {
    switchto = "https://i.postimg.cc/RZfzXDK1/download.png";
  } else if (switchto == 3) {
    switchto = "https://i.postimg.cc/RFhsbW2r/download.jpg"
  } else if (switchto == 4) {
    switchto = "https://i.postimg.cc/RhNmQmRj/dogeimage.jpg"
  } else if (switchto == 5) {
    switchto = "https://i.postimg.cc/fyT9vdPX/squid-game-soldier-circle-cartoon-chibi-character-31633098539bva76naymm.png"
  }
      for(var i = 0; i < elems.length; i++){
        elems[i].style.cursor = "url(" + switchto + "), default";
        elems[i].style.zIndex = "99999";
       alert("Enjoy your new cursor :)");
      }
      `
     });
   });