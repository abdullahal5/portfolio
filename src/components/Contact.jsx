"use client"
import { Container } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gabbmo",
        "template_kxip6gc",
        form.current,
        "IXst6eLIBbYF_WpCt"
      )
      .then(
        (result) => {
          if(result.text === "OK"){
              toast.success("You successfully sent the email");
              form.current.reset()
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    return (
      <Container className="h-[100vh]">
        <div>
          <Toaster />
        </div>
        <h1 className="text-center  mt-10 mb-2 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9e86b6] to-[#580bb1]">
          Lets Connect
        </h1>
        <p className="text-lg font-semibold text-center my-5">
          How to reach me?
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-center my-5 flex flex-col gap-4"
        >
          <div>
            <input
              className="bg-slate-100 border-[#580bb1] border lg:w-2/4 py-3 pl-4"
              placeholder="Your E-mail"
              type="email"
              name="from_email"
              id=""
              required
            />
          </div>
          <div>
            <input
              className="bg-slate-100 border-[#580bb1] border lg:w-2/4 py-3 pl-4"
              placeholder="Your Name"
              type="text"
              name="from_name"
              id=""
              required
            />
          </div>
          <div>
            <textarea
              className="bg-slate-100 border-[#580bb1] border lg:w-2/4 py-3 pl-4"
              name="message"
              id=""
              cols="30"
              placeholder="write your message"
              rows="10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#713eac] py-3 text-white w-32 mx-auto rounded-lg"
          >
            Send Message
          </button>
        </form>
      </Container>
    );
};

export default Contact;