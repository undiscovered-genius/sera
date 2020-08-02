
(function(window){
	var byeSpeaker = {};
//byeSpeaker.speakWord = "Good Bye";
byeSpeaker.speak = function (name) {
  console.log("Good Bye " + name);
}
   window.byeSpeaker = byeSpeaker;
})(window);


