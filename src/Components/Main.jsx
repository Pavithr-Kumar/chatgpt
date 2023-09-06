import React, { useState } from "react";
import { AiOutlineSend, AiOutlineLoading3Quarters } from "react-icons/ai";
import { sendRequest } from "./openai";

function Main() {
  const [status, setStatus] = useState("idle");
  let ques = <></>;
  let ans = <></>;
  const [data, setData] = useState([ques, ans]);

  const [input, setInput] = useState("");
  async function getResult(question) {
    try {
      const result = await sendRequest(question);
      handleAnswer(result);
      setStatus("idle");
    } catch (error) {}
  }

  function handleQuestion(question) {
    if (question !== "") {
      ques = (
        <div className="px-56 bg-gray-900 bg-opacity-90">
          <div id="question" className="flex p-5">
            <div className="w-1/12">
              <img
                className="w-[30px]"
                src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg"
                alt=""
              />
            </div>
            <p className="w-10/12 text-white">{question}</p>
          </div>
        </div>
      );
      setData((prev) => {
        return [...prev, ques];
      });

      getResult(question);
    }
  }

  function handleAnswer(info) {
    const ans = (
      <div className="px-56 bg-gray-700">
        <div id="answer" className="flex p-5">
          <div className="w-1/12">
            <img
              className="w-[30px]"
              src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-green-background-png.png"
              alt=""
            />
          </div>
          <p className="w-10/12 text-white">{info}</p>
        </div>
      </div>
    );
    setData((prev) => {
      return [...prev, ans];
    });
  }

  return (
    <div className="min-h-screen bg-gray-800 w-4/5 pb-56 opacity-90 ml-auto">
      <div className="  relative pt-10 ">
        {data.map((item) => item)}

        <div className=" fixed  right-72 bottom-5  w-[700px]  flex items-center">
          <input
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleQuestion(input);
                setStatus("loading");
                setInput("");
              }
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            className="px-3 w-full  py-4 bg-gray-800 outline-none  border border-gray-900  shadow-xl shadow-slate-900 text-white rounded-lg"
            placeholder="Send a message"
          />
          {status === "loading" ? (
            <AiOutlineLoading3Quarters className=" text-white text-xl relative right-10 animate-spin" />
          ) : (
            <AiOutlineSend
              onClick={() => {
                handleQuestion(input);
                setStatus("loading");
                setInput("");
              }}
              className=" text-white text-xl relative right-10"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
