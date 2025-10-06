import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex flex-col items-center">
          <div className="size-50 opacity-0 animate-fade-in">
            <img src="/king-karta.png" alt="Karta Logo" className="size-fit rounded-3xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">Amara </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">Owanta-Emenike</span>
            <br />
            <span className="text-3xl italic opacity-0 animate-fade-in-delay-3"> (aka Katartismos) </span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 font-serif"
          >
            I'm a software engineer with a passion for creating excellent web experiences. Though currently specializing in front-end web development, I build interfaces which are both functional and beautiful but when there's need for a bit of back-end, I'm more than capable enough to deliver.
          </p>

          <div className="opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 trnsform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};