"use client";

import React, { useEffect, useState } from "react";

const Content = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const sendElement = document.getElementById("send");

    sendElement?.addEventListener("mouseenter", () => {
      sendElement.textContent = "Send";
    });
    sendElement?.addEventListener("mouseleave", () => {
      sendElement.textContent =
        "我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~";
    });
  }, []);

  const fetchData = async () => {
    const response = await fetch(`/api/?input=${input}`);
    const result = await response.json();
    setData(result.message);
  };

  return (
    <>
      <div className="flex h-full w-full items-end p-4">{data}</div>
      <div>
        <div className="grid h-full w-full grid-cols-[1fr_16rem] border-t-2 border-[var(--foreground)]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-full w-full bg-transparent p-4 outline-none hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          />
          <div className="no-select flex flex-col border-l-2 border-[var(--foreground)]">
            <h2 className="border-b-2 border-[var(--foreground)] p-4 text-2xl font-bold">
              我是 ChatGPT，很高兴见到你！
            </h2>
            <button
              className="flex h-full p-4 text-left hover:items-center hover:justify-center hover:bg-[var(--foreground)] hover:text-8xl hover:font-bold hover:text-[var(--background)]"
              id="send"
              onClick={fetchData}
            >
              我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
