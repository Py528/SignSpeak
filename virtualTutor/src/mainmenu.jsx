import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import model from "/images/giphy.gif";
document.cookie = "name=value; SameSite=None; Secure";

function MainMenu() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [start, setStart] = useState("Start");
  const [logOut, setLogOut] = useState("Log-out?");
  const [startListeningText, setStartListeningText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [sl, setsl] = useState(false); //for signlanguage
  const [sh, setSh] = useState(false); //for how are you
  const [sm, setSm] = useState(false); //can you hear me?
  const [ss, setSs] = useState(false); // i am happy?
  const [sg, setSg] = useState(false); // i am sorry?
  const [sn, setSn] = useState(false); // nice to meet you
  const [gb, setGb] = useState(false); // goodbye
  const [id, setId] = useState(false); // i am deaf
  const [ok, setOk] = useState(false); // ok
  const [you, setYou] = useState(false); // you/yourturn
  const [me, setMe] = useState(false); // me
  const [again, setAgain] = useState(false); // try again
  const [wonderfull, setWonderfull] = useState(false); // wonderfull
  const [please, setPlease] = useState(false); // please

  const navigate = useNavigate();

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleStartStop = () => {
    if (start === "Start") {
      setStart("Stop");
      setLogOut("");
      startListeningHandler();
    } else {
      const quit = window.confirm("Do You Want to Stop?");
      if (quit) {
        navigate("/", { replace: true });
      }
    }
  };

  const handleLogOut = () => {
    const s = window.confirm("Do You Want To Log-Out?");
    if (s) {
      navigate("/", { replace: true });
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.id);
  };

  const startListeningHandler = () => {
    if (!isListening) {
      navigator.permissions
        .query({ name: "microphone" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            startListening();
          } else {
            navigator.mediaDevices
              .getUserMedia({ audio: true })
              .then(() => {
                startListening();
              })
              .catch((error) => {
                console.error("Error accessing microphone:", error);
              });
          }
        });
    }
  };

  const startListening = () => {
    setStartListeningText("Listening...");
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Recognized speech:", transcript);
      handleAnimation(transcript);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setStartListeningText("Start Listening");
      setIsListening(false);
    };
    recognition.onend = () => {
      console.log("Speech recognition ended");
      setStartListeningText("Start Listening");
      setIsListening(false);
    };
    recognition.start();
  };

 const handleAnimation = (word) => {
  const animationStates = {
    "i am learning sign language": setsl,
    "how are you": setSh,
    "can you hear me": setSm,
    "i am happy": setSs,
    "i am sorry": setSg,
    "nice to meet you": setSn,
    "goodbye": setGb,
    "i am deaf": setId,
    "ok": setOk,
    "you": setYou,
    "me": setMe,
    "try again": setAgain,
    "wonderful": setWonderfull,
    "please": setPlease,
  };

  // Reset all states to false initially
  Object.keys(animationStates).forEach(state => animationStates[state](false));

  // Check if the word includes any animation state and set the corresponding state to true
  Object.entries(animationStates).forEach(([key, value]) => {
    if (word.includes(key)) {
      value(true);
    }
  });
};


  return (
    <>
      <div className="flex align-center">
        {sl ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/MHfp5oifQx2gkbFZVG"
            ></iframe>
          </div>
        ) : sh ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/4CmnMydokewcx3GV4m"
            ></iframe>
          </div>
        ) : sm ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/ie5sc2FZFVTuoMmocS"
            ></iframe>
          </div>
        ) : ss ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/jC51BJl7pqaJ0ITolg"
            ></iframe>
          </div>
        ) : sg ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/imIfawMEuUBGeHISs0"
            ></iframe>
          </div>
        ) : sn ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/EJRFYDEneeDSWRjB7X"
            ></iframe>
          </div>
        ) : gb ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/rFRYmb7zgmTLrXqmL4"
            ></iframe>
          </div>
        ) : id ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/ie5sc2FZFVTuoMmocS"
            ></iframe>
          </div>
        ) : ok ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/kk9KKzTqTKt2WneTwp"
            ></iframe>
          </div>
        ) : you ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/IRLfvzkwZCOxCzrqhq"
            ></iframe>
          </div>
        ) : me ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/JcYehPLfVi0LEYCndk"
            ></iframe>
          </div>
        ) : again ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/cpYZad3G97tAM1lW5R"
            ></iframe>
          </div>
        ) : wonderfull ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/PIhBJRtiLJWz5Ij3aw"
            ></iframe>
          </div>
        ) : please ? (
          <div className=" h-2/6 w-4/6 bg-cyan-200 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <iframe
              className="relative top-32 w-2/3 h-96 mt-32 mb-32 pointer-events-none"
              src="https://giphy.com/embed/MRKcHkNMUReYTCoS1a"
            ></iframe>
          </div>
        ) : (
          <div className="h-2/6 w-4/6 bg-cyan-700 ml-72 mt-10 rounded-2xl flex justify-center shadow-2xl">
            <img
              className="relative top-32 w-75 h-80 mt-32 mb-32"
              src={model}
              alt="model"
            />
          </div>
        )}

        <button
          className="mr-12 absolute right-0 mt-12"
          onClick={toggleOverlay}
        >
          <img
            className="h-8 w-8 blue-700"
            src="./public/images/settings.png"
            alt="settings"
          />
        </button>
        {showOverlay && (
          <div className="h-56 w-56 bg-teal-800 mt-11 ml-3 z-10 rounded-2xl shadow-2xl text-blue-700">
            <p className="font-bold font-sans text-2xl mt-3 ml-10">
              Languages:-
            </p>
            <ul className="font-bold text-xl mt-6 ml-10">
              <li>
                <input
                  type="radio"
                  name="lang"
                  id="English"
                  checked={selectedLanguage === "English"}
                  onChange={handleLanguageChange}
                />{" "}
                English
              </li>
              <li>
                <input
                  type="radio"
                  name="lang"
                  id="Hindi"
                  checked={selectedLanguage === "Hindi"}
                  onChange={handleLanguageChange}
                />{" "}
                Hindi
              </li>
              <li>
                <input
                  type="radio"
                  name="lang"
                  id="Both"
                  checked={selectedLanguage === "Both"}
                  onChange={handleLanguageChange}
                />{" "}
                Both
              </li>
            </ul>
            <button
              className="font-sans font-bold text-xl ml-3 mt-6"
              onClick={toggleOverlay}
            >
              Back
            </button>
          </div>
        )}
      </div>

      <div className="mt-20 flex justify-center">
        <p className="absolute left-0 ml-12 mt-5">
          <a
            className="font-bold text-2xl font-sans text-blue-700"
            onClick={handleLogOut}
          >
            {logOut}
          </a>
        </p>

        <p className="absolute left-0 ml-12 mt-5">
          <a
            className="font-bold text-2xl font-sans text-blue-700"
            onClick={startListeningHandler}
          >
            {startListeningText}
          </a>
        </p>

        <button
          onClick={handleStartStop}
          className="font-sans font-bold bg-purple-500 text-white p-3 pl-6 pr-6 text-3xl rounded-3xl"
        >
          {start}
        </button>
      </div>
    </>
  );
}

export default MainMenu;
