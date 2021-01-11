





var voiceBtn = document.getElementById("sS")
var content = document.querySelector(".content")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.onstart = function () {
    console.log("start speaking")
    content.innerHTML = "listening"
}
recognition.onresult = function (event) {
    console.log(event)
    var current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.innerHTML = transcript
    readOutLoad(transcript)
    console.log(transcript)

}
voiceBtn.addEventListener("click", () => {
    recognition.start();
    console.log("addevent")
})
voiceBtn.addEventListener("keydown", function (event) {

    if (event.keyCode === 13) {
        recognition.start();
        console.log("addevent")
    }

})

function readOutLoad(message) {

    const greetings = "I'm fine";

    const weatherQ = "what's the weather tomorrow";

    const weather = 'The weather is fine';

    const intro = 'Hi, im Jarvis. Your Voice Assistant. Im here to help you.';

    const meQ = [
        'who made you',
        'who coded you',
        'who created you',
        'who made Jarvis',
        'who coded jarvis',
        'who created Jarvis'
    ]
    const kkQ = [
        'Jarvis',
        'jarvis',
        'hello jarvis',
        'hi jarvis',
        'hello Jarvis',
        'hi Jarvis'

    ]
    var k = new Date()
    const kk = 'yes sir. What can i do for you'
    const me = 'the programmer created me'

    // const introQ = 'who are you', 'what is this', 'say about yourself','intro'

    const timeQ = [
        "what is the time now",
        "can you tell me the time",
        "what the time",
        "time"
    ]
    const time = 'well, i dont know the time master';
    ;

    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what to say';

    if (message.includes("how are you")) {
        speech.text = greetings;
    }
    else if (message.includes('who are you',
        'what is this',
        'say about yourself')) {
        speech.text = 'Hi, im Jarvis. Your Voice Assistant. Im here to help you.';
    }
    else if (message.includes("what's the weather tomorrow",
        "what's the weather today")) {
        speech.text = weather;
    }
    else if (message.includes('who made you',
        'who coded you',
        'who created you',
        'who made Jarvis',
        'who coded jarvis',
        'who created Jarvis')) {
        speech.text = me;
    }
    else if (message.includes('hello', 'hai')) {
        speech.text = kk;
    }


    else if (message.includes("what is the time now",
        "can you tell me the time",
        "what the time",
        "time",
        "what's the time now")) {
        speech.text = time;
    }

    else if (message.includes("open YouTube") || message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank")
        speech.text = "opening youtube"
    }
    else if (message.includes("what's the time now", "time")) {
        speech.text = "it is " + new Date().getHours() + new Date().getMinutes() + " right now"
        console.log("it is " + new Date().getHours() + ":" + new Date().getMinutes() + " right now")
    }
    else if (message.includes("play believer", "hello beliver", "play beliver", "play believer")) {
        speech.text = "Playing beliver"
        window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc", "_blank")

    }
    else if (message.includes("nice to meet you")) {
        speech.text = 'nice to meet you sir'
    }
    else if (message.includes("yes")) {
        var lbk = message.toLowerCase()
        var lk = lbk.split("yes ")
        speech.text = lk
    }
    else if (message.includes("Lemon Tree", " lemon tree", "lemon")) {
        speech.text = "Playing lemon tree"
        window.open("https://www.youtube.com/watch?v=l2UiY2wivTs", "_blank")
    }
    else if (message.includes("play Thunder", "play thunder")) {
        speech.text = "Playing Thunder"
        window.open("https://www.youtube.com/watch?v=fKopy74weus", "_blank")
    }
    else if (message.includes("date") || message.includes("Date")) {
        var kk1 = new Date();
        speech.text = kk1
    }
    else if (message.includes("play cheap thrills", "play cheap thrills")) {
        speech.text = "Playing Cheap Thrills"
        window.open("https://www.youtube.com/watch?v=nYh-n7EOtMA", "_blank")

    }
    else if (message.includes("play alone", "play Alone")) {
        speech.text = "Playing Alone"
        window.open("https://www.youtube.com/watch?v=ALZHF5UqnU4", "_blank")

    }
    else if (message.includes("play faded", "play Faded")) {
        speech.text = "Playing Faded"
        window.open("https://www.youtube.com/watch?v=60ItHLz5WEA", "_blank")

    }
    else if (message.includes("love", "Love")) {
        speech.text = "Playing Waiting for love"
        window.open("https://www.youtube.com/watch?v=cHHLHGNpCSA", "_blank")

    }
    else if (message.includes("ringtone", "Ringtone")) {
        speech.text = "Playing dre"
        window.open("https://www.youtube.com/watch?v=j5LzEASx4YM", "_blank")

    }

    else if (message.includes("play old twon road", "play Old Twon Road")) {
        speech.text = "Playing Old Town"
        window.open("https://www.youtube.com/watch?v=w2Ov5jzm3j8", "_blank")

    }
    else if (message.includes("Rick roll", "rick roll")) {
        speech.text = "get rick rollled"
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")

    }
    else if (message.includes("play blinding lights", "play blinding lights")) {
        speech.text = "Playing blinding lights"
        window.open("https://www.youtube.com/watch?v=fHI8X4OXluQ", "_blank")

    }
    else if (message.includes("play Vadivel vox ", "play vadivel")) {
        speech.text = "Playing vadivel vox tenet version"
        window.open("https://www.youtube.com/watch?v=AYtC-_PPwiM", "_blank")

    }
    else if (message.includes("play Bad", "play Bad")) {
        speech.text = "Playing Bad Guy"
        window.open("https://www.youtube.com/watch?v=DyDfgMOUjCI", "_blank")
        // https://www.youtube.com/watch?v=JGwWNGJdvx8
    }
    else if (message.includes("play Shape Of You", "play Shape Of You")) {
        speech.text = "Playing Shape of you"
        window.open("https://www.youtube.com/watch?v=JGwWNGJdvx8", "_blank")
        // https://www.youtube.com/watch?v=JGwWNGJdvx8
    }
    else if (message.includes("open picture in picture",)) {
        window.open("https://kishore-kumar-the-coder.github.io/Picture-in-Picture-Mode/index.html", "_blank")
        speech.text = "Opening picture in picture mode "


    }
    else if (message.includes("play despacito")) {
        window.open("https://www.youtube.com/watch?v=kJQP7kiw5Fk", "_blank")

        speech.text = "Playing despacito"
    }
    else if (message.includes("open BMI export",
        "open BMI expert",
        "open BMI export")) {
        window.open("https://kishore-kumar-the-coder.github.io/BMI-EXPERT/bmi.html", "_blank")
        speech.text = "Opening BMI expert "

    }
    else if (message.includes("play song", "play Samy Pattu")) {
        speech.text = "Playing devotional song"
        window.open("https://www.youtube.com/watch?v=pFLu9n1StDM&list=TLPQMTcxMTIwMjAD6FVzl3ID1A&index=1", "_blank")

    }

    else if (message.includes("what special today") && k.getMonth() === 4 && k.getDate() === 8) {
        speech.text = "today is the birthday of creator of jarvis. happpy birthday"

    }
    else if (message.includes("what special today") && k.getMonth() === 1 && k.getDate() === 15) {
        speech.text = "today is the birthday of vinu. happpy birthday"

    }
    else if (message.includes("what special today") && k.getMonth() === 8 && k.getDate() === 26) {
        speech.text = "today is the birthday of karthikeyan. happpy birthday"

    }
    else if (message.includes("what special today") && k.getMonth() === 3 && k.getDate() === 15) {
        speech.text = "today is the birthday of mariyammal. happpy birthday"

    }

    else if (message.includes("search") || message.includes("Search")) {


        var searchcutter = message;
        var searchcutterk = message.toLowerCase()
        var res = searchcutter.split("search ");
        var rescutt = "searching  " + res;
        var linke = "https://www.google.com/search?q=";
        var linkekk = linke + res;
        speech.text = rescutt;
        console.log(speech.text)
        console.log(linkekk)
        console.log(rescutt)
        console.log(res)
        window.open(linkekk, "_blank");

    }
    else if (message.includes("YouTube") || message.includes("youtube")) {


        var searchcutter = message;
        var searchcutterk = message.toLowerCase()
        console.log(searchcutterk)
        var res = searchcutterk.split("youtube ");
        var rescutt = "searching  " + res;
        var linke = "https://www.youtube.com/results?search_query=";
        var linkekk = linke + res;
        speech.text = rescutt;
        console.log(speech.text)
        window.open(linkekk, "_blank");

    }




    window.speechSynthesis.speak(speech)
}
function show() {
    var divs = document.getElementById("divs").style.visibility = "visible"

}
function hide() {
    var divs = document.getElementById("divs").style.visibility = "hidden"

}









// var bbk = k
// console.log(typeof k)
// console.log(bbk)
// Thu Nov 19 2020 14:47:21 GMT+0530 (India Standard Time
// if (k.includes("May 8")) {
//     console.log("njkgjh")
// }





// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent






// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();

