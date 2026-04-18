import { ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {""}
      <p className="text-sm text-muted-foreground"> 
        {""}
        &copy; {new Date().getFullYear()} Katartismos, All rights reserved.
      </p>
    </footer>
  )
}

export default Footer