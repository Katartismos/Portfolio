import { Mail, MapPin, Phone, Send } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io5";
import { cn } from "@/lib/utils";

const ContactSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    setTimeout(() => {
      
    }, 1500)
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get In <span className="text-primary">Touch</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thinking of collaborating with me? Feel free to reach out! I'm always open to discussing new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6 ml-30">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a href="mailto:amaraemenike9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      amaraemenike9@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a href="tel:+2349122105875" className="text-muted-foreground hover:text-primary transition-colors">
                      +234 912 210 5875
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Lagos, Nigeria
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
              <div className="flex flex-col ml-35">
                <a href="https://www.linkedin.com/in/amara-emenike-ab29233a3" className="my-1" target="_blank">
                  <div className="flex items-center space-x-4 p-3 rounded-full bg-primary/8 w-40 cosmic-button text-primary">
                    <IoLogoLinkedin className="h-8 w-8"/>
                    <p>Linkedin</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/katar_tismos" className="my-1" target="_blank">
                  <div className="flex items-center space-x-4 p-3 rounded-full bg-primary/8 w-40 cosmic-button text-primary">
                    <FaInstagram className="h-8 w-8"/>
                    <p>Instagram</p>
                  </div>
                </a>
                <a href="https://x.com/Amara_Emenike" className="my-1" target="_blank">
                  <div className="flex items-center space-x-4 p-3 rounded-full bg-primary/8 w-40 cosmic-button text-primary">
                    <FaSquareXTwitter className="h-8 w-8"/>
                    <p>Twitter (X)</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection