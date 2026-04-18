import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io5";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    const templateParams = {
      title: "Portfolio Contact Form",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setSubmitMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get In <span className="text-primary">Touch</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info & Socials */}
          <div className="space-y-15">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
              <div className="space-y-8 flex flex-col items-center md:items-start md:pl-7.5">
                {/* Email */}
                <div className="flex items-center space-x-4 w-full max-w-sm">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-md font-semibold text-muted-foreground mb-0.5">Email</p>
                    <a href="mailto:amaraemenike9@gmail.com" className="font-medium hover:text-primary transition-colors">
                      amaraemenike9@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 w-full max-w-sm">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-md font-semibold text-muted-foreground mb-0.5">Phone</p>
                    <a href="tel:+2348142699842" className="font-medium hover:text-primary transition-colors">
                      +234 814 269 9842
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 w-full max-w-sm">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-md font-semibold text-muted-foreground mb-0.5">Location</p>
                    <p className="font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex justify-center items-center space-x-6">
                <a href="https://www.linkedin.com/in/amara-emenike" target="_blank" className="hover:text-primary transition-all hover:scale-115 duration-100">
                  <IoLogoLinkedin className="h-10 w-10"/>
                </a>
                <a href="https://x.com/Amara_Emenike" target="_blank" className="hover:text-primary transition-all hover:scale-115 duration-100">
                  <FaSquareXTwitter className="h-10 w-10"/>
                </a>
                <a href="https://www.instagram.com/katar_tismos" target="_blank" className="hover:text-primary transition-all hover:scale-115 duration-100">
                  <FaInstagram className="h-10 w-10"/>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="gradient-border p-8 md:p-10 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-8 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              {submitStatus && (
                <div className={`p-4 rounded-lg text-sm font-medium ${submitStatus === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-500' : 'bg-red-500/10 border border-red-500/20 text-red-500'}`}>
                  {submitMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cosmic-button cursor-pointer flex justify-center items-center space-x-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending" : "Send Message"}</span>
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
