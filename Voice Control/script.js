const btn = document.querySelector('.talks');
const voice = document.querySelector('.voice');
const content = document.querySelector('.content');
const music = document.querySelector("#myMusic");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
   console.log('voice activated');
   voice.textContent = "voice activated";
   setTimeout(function () {
      voice.textContent = ""
   }, 3000);
};
recognition.onresult = function (event) {
   const current = event.resultIndex;
   const transcript = event.results[current][0].transcript;
   readOutLoud(transcript);
   console.log(event);
   content.textContent = transcript;
};
btn.addEventListener('click', () => {
   recognition.start();
});

function readOutLoud(message) {
   const speech = new SpeechSynthesisUtterance();

   if (message.includes('play')) {
      music.play();
   } else if (message.includes('stop')) {
      music.pause();
   } else if (message.includes('decrease the volume')) {
      music.volume = 0.1;
   } else if (message.includes('increase the volume')) {
      music.volume = 1;
   } else if (message.includes('set the volume to 20')) {
      music.volume = 0.2;
   } else if (message.includes('set the volume to half')) {
      music.volume = 0.5;
   } else if (message.includes('close')) {
      open(location, '_self').close();
   } else if (message.includes('open Google')) {
      window.open("https://www.google.com/?gl=us");
   } else {
      speech.text = "i dont know what you said";
   }
   //speech.text = message;
   speech.volume = 1;
   speech.rate = 1;
   speech.pitch = 1;

   window.speechSynthesis.speak(speech);
}