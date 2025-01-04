import React from "react";

const SideBar = () => {
  return (
    <aside className="no-select">
      <h2 className="p-4 text-2xl font-bold">mobai-chatgpt-ui</h2>
      <button className="flex w-full border-y-2 border-[var(--foreground)] p-4 font-bold hover:bg-[var(--foreground)] hover:text-[var(--background)]">
        开启新对话
      </button>
    </aside>
  );
};

export default SideBar;
