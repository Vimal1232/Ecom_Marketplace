import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSumbit = () => {
    event.preventDefault();
    console.log(`Name is ${name}`);
    console.log(`Email is ${email}`);
    console.log(`Message is ${subject}`);
    setName("");
    setEmail("");
    setSubject("");
  };

  return (
    <section className="px-10 max-sm:px-5">
      <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
        <div>
          <h2 className="text-[42px] font-Inter font-medium">Contact us</h2>
        </div>
        <div>
          <form className="flex flex-col gap-5">
            <div className="flex gap-5 max-xs:flex-wrap">
              <input
                type="text"
                id="name"
                className="w-full p-4 bg-differentpure2 rounded-[8px] font-Inter font-light text-[16px] placeholder-greyishblue outline-none text-greyishblue"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
              />

              <input
                type="email"
                id="email"
                className="w-full p-4 bg-differentpure2 rounded-[8px] font-Inter font-light text-[16px] placeholder-greyishblue outline-none text-greyishblue"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                type="text"
                id="subject"
                className="w-full h-[200px] p-4 bg-differentpure2 rounded-[8px] font-Inter font-light text-[16px] placeholder-greyishblue outline-none text-greyishblue align-top"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Message"
              />
            </div>
            <div>
              <button
                className="w-full p-4 bg-primary rounded-[8px] font-Inter font-semibold text-[16px] text-white"
                onClick={handleSumbit}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
