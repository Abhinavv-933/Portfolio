import { Code , MessageSquare, Brain} from "lucide-react";


export const AboutSection = () => {
   return (
    <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>   

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
           <h3 className="text-2xl font-semibold">Full stack MERN Developer</h3>
           <p className="text-muted-foreground">
            Full-Stack MERN Developer with a strong command of building scalable,
            high-performance web applications from front-end design to back-end
            architecture.
           </p>

           <p className="text-muted-foreground">
            Passionate about clean code, modern UI/UX, and efficient database design, 
            I specialize in React, Node.js, Express, and MongoDB. With a problem-solving mindset and a knack for turning ideas into production-ready solutions,
            I bring both technical expertise and creativity to every project.
           </p>

           <div className="flex flx-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              {" "}
              Get In Touch 
            </a>

            <a href="" 
             className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
             >
              Download CV
            </a>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />   
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      🌐Creating responsive websites and web applications with
                       modern frameworks.
                    </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />                
              </div>
              <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solver</h4>
                    <p className="text-muted-foreground">
                     ⚡️Analytical thinker who simplifies complexity and delivers efficient solutions.
                    </p>
                </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />        
              </div>
              <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Communication skills</h4>
                    <p className="text-muted-foreground">
                    🗣️Clear communicator who bridges tech and people, making collaboration seamless.
                    </p>
                </div>
            </div>
          </div>
        </div>
          
      </div>   
    </div>
    </section>
   )
};