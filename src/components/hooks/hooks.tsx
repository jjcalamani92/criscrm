import { Count0, Count1, Count2, Count3 } from "../../hooks/Micro-State-Management-with-React-Hooks/chapter_01/01_usecount"
import { Component } from "../../hooks/Micro-State-Management-with-React-Hooks/chapter_01/02_glogalstate"

export const Hooks = () => {
  return (
    <div className="h-96">
      <Count0 />
      <br />
      <Count1 />
      <br />
      <Count2 />
      <br />
      <Count3 />
      <br />
      <Component />
      <br />
    </div>
  )
}