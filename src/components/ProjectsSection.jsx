import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: 'Amazon Clone',
    description: 'An intuitive amazon clone built using React with TypeScript, complete with smooth mobile responsiveness',
    image: '/projects/amazon.png',
    tags: [
      { name: 'React', link: 'https://react.dev'},
      { name: 'Tailwind', link: 'https://tailwindcss.com'},
      { name: 'TypeScript', link: 'https://www.typescriptlang.org'},
    ],
    demo: 'https://amazon-clone-by-karta.vercel.app',
    github: 'https://github.com/Katartismos/amazon-clone'
  },
  {
    id: 2,
    title: 'Dev Events Platform',
    description: 'The Hub for Every important and upcoming Dev Event you must not miss',
    image: '/projects/devEvents.png',
    tags: [
      { name: 'Next.js', link: 'https://nextjs.org'},
      { name: 'TypeScript', link: 'https://www.typescriptlang.org'},
      { name: 'MongoDB', link: 'https://www.mongodb.com'},
    ],
    demo: 'https://dev-events-lime.vercel.app',
    github: 'https://github.com/Katartismos/devEvents-platform'
  },
  {
    id: 3,
    title: 'Mojito Cocktails Landing Page',
    description: 'An intuitive amazon clone built using React with TypeScript, complete with smooth mobile responsiveness',
    image: '/projects/mojito.png',
    tags: [
      { name: 'GSAP', link: 'https://gsap.com'},
      { name: 'Tailwind', link: 'https://tailwindcss.com'},
      { name: 'React', link: 'https://react.dev'},
    ],
    demo: 'https://mojito-cocktails-xero.vercel.app',
    github: 'https://github.com/mojito-cocktails-landing-page'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-75/100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects! Each one carefully crafted with attention to detail, performance and user experience hence ensuring excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer">
              <div className="h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {project.tags.map(tag => (
                    <a 
                      href={tag.link}
                      target="_blank"
                      className="px-2 py-1 text-sm font-medium rounded-full bg-primary/5 text-secondary-foreground"
                    >{tag.name}</a>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demo} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 mx-2 my-2"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 mx-2 my-2"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Katartismos" 
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check out my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}