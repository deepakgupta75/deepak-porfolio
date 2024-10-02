/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IhStkdWQAA9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";

import { Card, CardContent, CardHeader ,CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import projects from "../data/projects.ts";
// import { useState, useEffect } from 'react';
import { workExperience } from "../data/woks.ts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { Moon, Sun } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


// import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"






export default function Component() {

  const { setTheme } = useTheme()




 const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "TypeScript","Tailwind CSS" ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python",],
  },
  {
    category: "Database",
    skills: ["SQL", "MySQL", "MongoDB", "Postgresql", ],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "AWS", "Figma", "RestApi" ,"shadcn/ui" ,"Material UI"],
  },
]

  // State for tracking the selected tab
  const [selectedTab, setSelectedTab] = useState("All");

  // Filter projects based on the selected tab
  const filteredProjects = projects.filter((project) => {
    if (selectedTab === "All") return true;
    return project.projectType === selectedTab;
  });

  const [messageSent, setMessageSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form data change
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send email when the form is submitted
  const sendEmail = (e: {
    target: any; preventDefault: () => void; 
}) => {
    e.preventDefault();
    emailjs
      .send(
        "service_zvj16yk", // Replace with your EmailJS service ID
        "template_elpmfmt", // Replace with your EmailJS template ID
        formData, // Form data to be passed to the email
        "ngbPIwxzwMFXwGROt" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setMessageSent(true); // Show success message
          e.target.reset(); 
        },
        (error) => {
          console.log("Failed to send email", error.text);
        }
      );
  };


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="#" className="flex items-center justify-center" >
      <MountainIcon className="h-6 w-6" />
      <span className="sr-only">Deepak Gupta</span>
    </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a href="#about" className="text-sm font-medium hover:underline underline-offset-4"
        //    prefetch={false}
          >
            About
          </a>
          <a href="#work" className="text-sm font-medium hover:underline underline-offset-4" 
        //   prefetch={false}
          >
            Work
          </a>
          <a href ="#skills" className="text-sm font-medium hover:underline underline-offset-4" 
        //   prefetch={false}
          >
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4" 
        //   prefetch={false}
          >
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4" 
        //   prefetch={false}
          >
            Contact
          </a>

          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-12 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm Deepak Gupta</h1>
                  <p className="max-w-[400px] text-muted-foreground md:text-xl">
                  I'm a full-stack developer with a passion for crafting engaging and efficient web applications, driven by enthusiasm and a love for building great user experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
  href="https://drive.google.com/file/d/1BqEGRb2QuK5TXPEXZYtZe-lwCraPoQ98/view?usp=drive_link"
  className="inline-flex h-10 items-center justify-center mx-auto sm:mx-0 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
>
  My Resume
</a>

</div>
              </div>
              <img
                src="./src/assets/deepak.jpeg"
                width="400"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-full  object-cover sm:w-80% lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a passionate full-stack developer with a strong background in JavaScript, MERN Stack Development. I
                  love building innovative web applications that solve real-world problems. In my free time, you can
                  find me exploring the latest web technologies.
                </p>
              </div>
            </div>
          </div>
        </section>




<section id="work" className="w-full py-6 md:py-12 lg:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out my professional experience and the skills I've developed over the years.
          </p>
        </div>

        {/* Work Experience Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
          {workExperience.map((work, index) => (
            <div key={index} className="card bg-white shadow-md p-6 rounded-lg">
             <div className="card-header">
                <h1 className="text-3xl font-bold text-gray-800">{work.role}</h1>
                <p className="text-xl text-gray-700 ">{work.company}</p>
                <p className="text-md text-gray-500">{work.date}</p>
              </div>
              <div className="card-content mt-4">
                <ul className="list-disc pl-5">
                  {work.description.map((point, idx) => (
                    <li key={idx} className="text-base text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




        <section id="skills"  className="py-12 bg-background">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
    <div className="flex flex-col gap-6 mt-6">
      {skillCategories.map((category) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle>{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>










<section id="projects" className="w-full py-12 md:py-24 lg:py-8 bg-muted">
      <div className="container px-4 md:px-6">
      <div className="space-y-2">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
      <p className="text-muted-foreground whitespace-normal md:whitespace-nowrap md:text-xl lg:text-base xl:text-xl max-w-[600px]">
  Check out some of the projects I've worked on and the technologies I've used.
</p>


    </div>
        {/* Tabs */}
        <Tabs defaultValue="All" className="w-full">
  <TabsList className="flex justify-center gap-4 py-2 mt-4">
    <TabsTrigger
      value="All"
      onClick={() => setSelectedTab("All")}
      className={`${
        selectedTab === "All"
          ? "text-white bg-primary"
          : "text-muted-foreground bg-gray-200"
      } hover:bg-primary/80 text-lg px-4 py-2 rounded-lg transition duration-200 ease-in-out`}
    >
      All Projects
    </TabsTrigger>
    <TabsTrigger
      value="Frontend"
      onClick={() => setSelectedTab("Frontend")}
      className={`${
        selectedTab === "Frontend"
          ? "text-white bg-primary"
          : "text-muted-foreground bg-gray-200"
      } hover:bg-primary/80 text-lg px-4 py-2 rounded-lg transition duration-200 ease-in-out`}
    >
      Frontend 
    </TabsTrigger>
    <TabsTrigger
      value="Fullstack"
      onClick={() => setSelectedTab("Fullstack")}
      className={`${
        selectedTab === "Fullstack"
          ? "text-white bg-primary"
          : "text-muted-foreground bg-gray-200"
      } hover:bg-primary/80 text-lg px-4 py-2 rounded-lg transition duration-200 ease-in-out`}
    >
      Full Stack 
    </TabsTrigger>
  </TabsList>
</Tabs>


        {/* Carousel for Projects */}
        <Carousel opts={{ align: "start" }} className="w-full overflow-hidden relative mt-4">
          <CarouselContent className="flex">
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
                <Card>
                  <CardHeader>
                    <img
                      src={project.imgPath}
                      width="400"
                      height="225"
                      alt={project.projectTitle}
                      className="rounded-t-xl object-cover"
                      style={{ aspectRatio: "400/225", objectFit: "cover" }}
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{project.projectTitle}</h3>
                    <p className="text-muted-foreground">{project.projectDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge variant="secondary" key={techIndex}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between gap-5">
                      <Link
                        to={project.liveLink}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                      >
                        View Project
                      </Link>
                      <Link
                        to={project.githubLink}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                      >
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Adjusting the Previous and Next buttons */}
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 sm:left-1" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 sm:right-1" />
        </Carousel>
      </div>
    </section>
  



    <section id="contact" className="w-full py-6 md:py-8 lg:py-12 border-t">
    {/* <div className="container px-4 md:px-6"> */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to reach out to me if you have any questions or would like to discuss a potential project.
              </p>
            


            <div className="mx-auto w-full max-w-sm space-y-2 mt-8">
                {/* Show success message when message is sent */}
      {messageSent && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          className="max-w-lg flex-1"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="max-w-lg flex-1"
          value={formData.email}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Message"
          className="max-w-lg flex-1"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Send Message</Button>
      </form>
    </div>

            {/* Social Links Section */}
            <div className="flex justify-center gap-10 pt-8">
                <a href="https://github.com/deepakgupta75" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/github.png"  alt="GitHub"
                        className="w-12 h-12" // Adjust size as needed
                    />
                </a>
                <a href="https://www.linkedin.com/in/deepak-gupta-46b171285/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/link.png" // Replace with your LinkedIn icon path
                        alt="LinkedIn"
                        className="w-12 h-12" // Adjust size as needed
                    />
                </a>
                <a href="mailto:deepakgupta75066@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <img
                        src="/gmail.png" // Replace with your Email icon path
                        alt="Email"
                        className="w-10 h-10" // Adjust size as needed
                     
                    />
                </a>
            </div>
        
          </div>
        </section>
      </main>
      <footer className="flex justify-center flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Deepak Gupta.</p>
      </footer>
    </div>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}