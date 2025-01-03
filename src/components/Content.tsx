import React from "react";

const Content = () => {
  return (
    <>
      <div className="flex h-full w-full items-end">
        <div className="w-full space-y-2 border-y-2 border-[var(--foreground)] p-4">
          <h2 className="text-2xl font-bold">我是 ChatGPT，很高兴见到你！</h2>
          <p>
            我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~
          </p>
        </div>
      </div>
      <div>
        <div className="h-full w-full">
          <input
            type="text"
            className="h-full w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
