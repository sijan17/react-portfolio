import React, { useContext, useEffect, useRef, useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = ({isVisible}) => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [connectHidden, setConnectHidden] = useState(true);

  const form = useRef();

  const handleRedirect = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    const { name, message } = formData;
    e.preventDefault();
    if (name && message) {
      setIsSending(true);
      setEmptyError(false);
      emailjs
        .sendForm(
          "service_qcvilcy",
          "template_k5wf2a9",
          form.current,
          "t0v8p_cwynY-UK2Ut"
        )
        .then(
          (result) => {
            setIsSending(false);
            setMessageSent(true);
            setMessageFailed(false);

            setFormData({ name: "", message: "" });
          },
          (error) => {
            setIsSending(false);
            setMessageFailed(true);
            setMessageSent(false);
          }
        );
    } else {
      setEmptyError(true);
      setMessageSent(false);
      setMessageFailed(false);
    }
  };

  useEffect(() => {
    setMessageSent(false);
    setEmptyError(false);
    setMessageFailed(false);
  }, []);
  return (
    <div className={` ${isVisible ? "opacity-1 translate-x-0" : "opacity-0 translate-x-[-100%]"} duration-[2s] flex flex-col w-full md:w-1/2 items-center justify-center gap-4 `}>
      <div className=" backdrop-blur-lg w-full  rounded-[1em]">
        <div className="text-center w-full  md:p-2 rounded-[0.2rem] py-4 flex flex-col gap-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="project w-full flex flex-col gap-4 px-4 "
          >
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              value={formData.name}
              placeholder="Your Name"
              className=" bg-transparent border border-[#c026d3] p-3  w-full rounded-[0.4rem] focus:outline-none md:hover:translate-x-2  duration-300 focus:border-green-400"
            />
            <textarea
              name="message"
              onChange={(e) => handleChange(e)}
              value={formData.message}
              className="bg-transparent border-2 border-[#c026d3] w-full p-2 rounded-[0.4rem] md:hover:translate-x-2 duration-300 focus:outline-none focus:border-green-400"
              rows="5"
              placeholder="Hi, Sijan."
            ></textarea>

            <button className="bg-[#701a75] p-3  rounded-[0.4rem] focus:outline-none focus:border-green-400 md:hover:translate-x-2 duration-300 hover:bg-green-600 ">
              {isSending ? "Sending" : "Send"}
            </button>
            {messageSent && (
              <div className=" font-bold">Thank you for your message.</div>
            )}
            {messageFailed && (
              <div className=" font-bold text-red-500">
                Sorry, an error occured.
              </div>
            )}
            {emptyError && (
              <div className=" font-bold text-red-500">
                Please fill up all fields.
              </div>
            )}
          </form>
          <div className="  flex flex-col items-center justify-center p-4 gap-4 ">
            <div className=" flex items-center justify-center ">
              <div className=" flex items-center gap-4">
                <AiOutlineTwitter
                  onClick={() => handleRedirect("https://twitter.com/s1j4n")}
                  className="h-8 w-8 md:cursor-pointer hover:text-[#00acee] hover:scale-[1.4] ease-in-out duration-500 "
                />

                <AiOutlineLinkedin
                  onClick={() =>
                    handleRedirect("https://linkedin.com/in/sijan1")
                  }
                  className="h-8 w-8 md:cursor-pointer hover:text-[#0072b1] hover:scale-[1.4] ease-in-out duration-500 "
                />
                <AiOutlineGithub
                  onClick={() => handleRedirect("https://github.com/sijan17")}
                  className="h-8 w-8 md:cursor-pointer hover:text-[#171515] hover:bg-[#4078c0] rounded-full hover:scale-[1.2] ease-in-out duration-500 "
                />
                {/* <AiOutlineMail  className="h-8 w-8 md:cursor-pointer hover:text-green-700 ease-in-out duration-300 " /> */}
              </div>
            </div>
            <div className="text-sm">
              <div className="relative">
                Feel free to{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setConnectHidden(!connectHidden)}
                >
                  connect
                </span>
                <span
                  className={`${connectHidden ? "hidden " : "text-red-500 "}`}
                >
                  {" <3"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
