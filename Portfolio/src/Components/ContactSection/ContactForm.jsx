import { Buttons } from "../../ui/Buttons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { contactMeScema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorHandler from "../../ErrorHandler";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactMeScema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/contact", data);

      toast.success("Message Sent Successfully! 🚀", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark",
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #00D8FF",
        },
      });

      reset();
    } catch (error) {
      console.error("ERROR:", error.response?.data || error.message);

      toast.error("Failed to send message. Please try again.", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-6"
      >
        <div>
          <input
            type="text"
            className="bg-lightBrown w-full h-14 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan transition-all"
            placeholder="Enter your full name"
            {...register("name")}
          />
          {errors.name && <ErrorHandler message={errors.name.message} />}
        </div>

        <div>
          <input
            type="email"
            className="bg-lightBrown w-full h-14 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan transition-all"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && <ErrorHandler message={errors.email.message} />}
        </div>

        <div>
          <textarea
            placeholder="Enter your message"
            className="bg-lightBrown w-full rounded-xl p-4 text-white h-40 focus:outline-none focus:ring-2 focus:ring-cyan transition-all resize-none"
            {...register("userMessage")}
          />
          {errors.userMessage && (
            <ErrorHandler message={errors.userMessage.message} />
          )}
        </div>

        <Buttons
          type="submit"
          className="rounded-xl bg-orange h-14 text-xl font-bold hover:bg-orange/80 transition-all flex items-center justify-center gap-2"
        >
          Send Message <FaPaperPlane />
        </Buttons>

        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
