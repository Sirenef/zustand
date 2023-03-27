import React, { useRef, useState } from "react";
import { Fragment } from "react";
import SimpleTab, { Tab } from "../tab/SimpleTab";
const tabs = [
  {
    id: 1,
    aKey: "user",
    title: "User",
    content: " This is content of user",
  },
  {
    id: 2,
    aKey: "post",
    title: "Post",
    content: " This is content of post",
  },
];

const Modal = () => {
  const [check, setCheck] = useState("user");
  const [showTab, setShowTab] = useState(false);
  const acKey = tabs.map((item) => item.aKey);
  const handleShow = (params) => {
    setShowTab(true);
    setCheck(() => params);
  };
  console.log(check);
  return (
    <Fragment>
      <div className="z-0 relative ">
        <SimpleTab
          activeKey={check}
          open={showTab}
          handleClose={() => setShowTab(false)}
        >
          {tabs.map((item) => (
            <Tab key={item.aKey} aKey={item.aKey} title={item.title}>
              {item.content}
            </Tab>
          ))}
        </SimpleTab>
      </div>
      <div className="w-full flex justify-center mt-10 ">
        {/* {tabs.map((item) => (
          <button
            className={`w-32 text-white mr-5 h-10 rounded-lg cursor-pointer ${
              item.id === 1 ? "bg-green-500" : "bg-orange-500"
            }`}
            onClick={() => handleShow()}
          >
            Open {item.title} Tab
          </button>
        ))} */}
        <button
          className="w-32 text-white mr-5 h-10 rounded-lg cursor-pointer bg-green-500"
          onClick={() => handleShow("user")}
        >
          Open Users Tab
        </button>
        <button
          className="w-32 text-white mr-5 h-10 rounded-lg cursor-pointer bg-orange-500"
          onClick={() => handleShow("post")}
        >
          Open Post Tab
        </button>
      </div>
    </Fragment>
  );
};

export default Modal;
