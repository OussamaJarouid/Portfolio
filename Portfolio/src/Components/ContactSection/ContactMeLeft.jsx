import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-orange text-3xl font-special mb-4">Get In Touch</h2>
        <p className="text-white text-lg">
          Feel free to get in touch if you have any questions, opportunities,
          <br /> or just want to connect. I'm always open to discussing new
          ideas,
          <br /> collaborations, or freelance work!
        </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMeLeft;
