import { useState } from 'react';
import { cn } from '@/lib/utils';
import { DiJavascript1, DiReact, DiVisualstudio } from 'react-icons/di';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';
import { VscVscode, VscGithub } from 'react-icons/vsc';
import { CiGlobe } from 'react-icons/ci';

const iconStyles = "w-12 h-12 text-primary";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: <CiGlobe className={iconStyles}/>, category: "frontend" },
  { name: "JavaScript", icon: <DiJavascript1 className={iconStyles}/>, category: "frontend" },
  { name: "React", icon: <DiReact className={iconStyles}/>, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className={iconStyles}/>, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript className={iconStyles}/>, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs className={iconStyles}/>, category: "frontend" },

  // Backend
  { name: "MongoDB", icon: <SiMongodb className={iconStyles}/>, category: "backend" },
  { name: "Express.js", icon: <SiExpress className={iconStyles}/>, category: "backend" },
  { name: "Node.js", icon: <SiNodedotjs className={iconStyles}/>, category: "backend" },
  
  // Tools
  { name: "VS Code", icon: <VscVscode className={iconStyles}/>, category: "tools" },
  { name: "Git/GitHub", icon: <VscGithub className={iconStyles}/>, category: "tools" },
  { name: "MS Visual Studio", icon: <DiVisualstudio className={iconStyles}/>, category: "tools" },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" ? skills : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button 
              key={key} 
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category ? "bg-primary text-white" : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex justify-between items-center w-75 bg-card py-6 px-10 rounded-xl shadow-sm card-hover"
            >
              <div className="flex justify-center items-center size-16 p-3 rounded-full bg-primary/10">
                {skill.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}