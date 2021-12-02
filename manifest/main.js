chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code:`
      var elems = document.getElementsByTagName("body");
      var switchto = prompt("Change My Cursor says... what URL should we use? (Leaving an invalid URL OR ONE THAT IS LARGER THAN 32x32px will switch your cursor to default.)");
  if(switchto == null || switchto == "" || switchto == " "){
    alert("Change My Cursor says...No URL specified, using a pre-chosen image.");
    switchto = "images/pointer1.jpg";
  }
      for(var i = 0; i < elems.length; i++){
        elems[i].style.cursor = "url(" + switchto + "), default";
        elems[i].style.zIndex = "99999";
       alert("we changed, " + elems[i].innerHTML);
      }
      `
     });
   });



// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set
// })

// let mouseCursor = document.querySelector("#cursor")
// //let pointImg = document.querySelectorAll("pointer")
// // const cursorImage = document.createElement('img');
// // img.src = 'images/pointer1.jpg';
// // document.getElementById('cursor').appendChild(cursorImage);

// window.addEventListener('mousemove', function(event) {
//     document.getElementById("cursor").style.left = `${event.pageX}px`;
//     document.getElementById("cursor").style.top = `${event.pageY}px`;
// })

// const pointerClick = document.getElementById("pointer-1")
// //const cursor = document.body.style.cursor;

// pointerClick.addEventListener("click", function(){
//     document.body.style.cursor = "pointer-1"
//     pointerClick.style.cursor = "help"
// })

// function changeCursor() {
//     pointerClick.style.cursor = "help"
// }
