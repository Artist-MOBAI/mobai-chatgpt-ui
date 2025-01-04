"use client";

import { getCurrentWindow } from "@tauri-apps/api/window";
import React, { useEffect } from "react";

const TitleBar = () => {
  useEffect(() => {
    const appWindow = getCurrentWindow();

    document
      .getElementById("titlebar-minimize")
      ?.addEventListener("click", () => appWindow.minimize());
    document
      .getElementById("titlebar-maximize")
      ?.addEventListener("click", () => appWindow.toggleMaximize());
    document
      .getElementById("titlebar-close")
      ?.addEventListener("click", () => appWindow.close());
  }, []);

  return (
    <div
      data-tauri-drag-region
      className="no-select fixed left-0 right-0 top-0 mr-2 flex h-8 items-center justify-end space-x-2 font-bold"
    >
      <button id="titlebar-maximize">最大化</button>
      <button id="titlebar-minimize">最小化</button>
      <button id="titlebar-close">关闭</button>
    </div>
  );
};

export default TitleBar;
