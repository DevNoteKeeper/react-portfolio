import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    emailjs
      .send(
        "service_75jwxlj", //Service ID
        "template_t148j0v", //template ID
        formData,
        "kz4seZDxR2nSHx8f9" //public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" });
          window.location.reload();
        },
        (error) => {
          alert("Railed to send message. Please try again");
        }
      );
  };

  return (
    <section
      id="contact"
      className="mt-40 mb-40 py-20 px-4 flex flex-col md:flex-row justify-between items-start gap-12 max-w-5xl mx-auto"
    >
      <div className="text-left max-w-md mt-2">
        <p className="text-gTitle mb-4 leading-relaxed">
          협업 또는 프로젝트 관련 논의를 원하시면 <br />
          양식을 작성 해주세요.
          <br />
          귀하의 메세지를 소중히 다루겠습니다:)
          <br />
          피드백을 남겨주셔도 좋습니다:)
        </p>
        <p className="text-gTitle mb-8 leading-relaxed">
          If you’re interested in collaboration or discussing a project, please
          fill out the form.
          <br />
          Your message will be handled with care:)
        </p>
        <p className="text-gTitle mb-8 leading-relaxed">
          Als u geïnteresseerd bent in samenwerking of een project wilt
          bespreken, vul dan alstublieft het formulier in.
          <br />
          Uw bericht wordt met zorg behandeld :)
          <br />U kunt ook gerust feedback achterlaten :)
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6 items-center"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full max-w-md p-3 rounded border focus:outline-none focus:border-point shadow-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full max-w-md p-3 rounded border focus:outline-none focus:border-point shadow-lg"
          required
        />

        <textarea
          name="message"
          placeholder="Thank u for leaving a message :)"
          value={formData.message}
          onChange={handleChange}
          className="w-full max-w-md p-3 rounded border focus:outline-none focus:border-point resize-non h-32 shadow-lg"
        />
        <button
          type="submit"
          className="bg-point text-bgDark py-3 px-8 w-fit rounded font-semibold hover:bg-point-dark transition shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
