import React, { useState } from "react";
import ReactDOM from "react-dom";

const SimpleTab = ({
  activeKey,
  children,
  open = false,
  handleClose = () => {},
}) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  const [key, setKey] = useState(activeKey);
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="tab-container z-50 w-[400px]  h-[500px] max-w-[400px]  bg-slate-900 rounded-lg">
        <div className="w-full relative h-6 ">
          <span
            className="  top-0 absolute right-2 p-1  cursor-pointer  text-white
            "
            onClick={handleClose}
          >
            X
          </span>
        </div>
        <div className="tabs flex w-[100%]   text-white">
          {children.map((item) => {
            return (
              <div
                key={item.props.aKey}
                className={
                  key === item.props.aKey
                    ? "tab-item active w-[50%] flex pb-2 justify-center border-b-2 border-b-white"
                    : "tab-ite w-[50%] flex justify-center "
                }
                onClick={() => setKey(item.props.aKey)}
              >
                {item.props.title}
              </div>
            );
          })}
        </div>
        <div className="tab-content bg-black h-auto">
          {children.map((item) => {
            return (
              <div
                key={item.props.aKey}
                className={
                  key === item.props.aKey
                    ? "tab-pane active  absolute text-white p-5"
                    : "tab-pane  absolute hidden p-5"
                }
              >
                {/* <h2>{item.props.title}</h2> */}
                <p>{item.props.children}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export const Tab = () => {
  return <></>;
};

export default SimpleTab;
