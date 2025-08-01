"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Phone, MapPin, Shield, Code, Users, Target, ExternalLink } from "lucide-react" // Changed Mail to Phone
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [showHeroPhoneNumber, setShowHeroPhoneNumber] = useState(false)
  const [showContactPhoneNumber, setShowContactPhoneNumber] = useState(false)

  const skills = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "Git",
    "Cybersecurity",
    "Network Analysis",
    "Digital Forensics",
  ]

  const projects = [
    {
      title: "MidnightOps",
      description:
        "A fast, threaded subdomain enumeration tool written in Python. Designed for security researchers, bug bounty hunters, and digital ninjas who move under the cover of terminal shadows.",
      tech: ["Python", "Security", "Reconnaissance"],
      status: "Active",
      link: "https://github.com/0wardriver0/MidnightOps",
      tagline: "Scan in silence. Strike in the dark.",
    },
    {
      title: "Gabriel",
      description:
        "A powerful steganography tool designed to uncover hidden data within images. Essential utility for digital forensics, data recovery, and privacy research with cross-platform compatibility.",
      tech: ["Python", "HTML", "Steganography"],
      status: "Active",
      link: "https://github.com/0wardriver0/Gabriel",
      tagline: "Reveal what's hidden in plain sight",
    },
    {
      title: "Code Browser",
      description:
        "An advanced code browsing and analysis tool for developers and security researchers. Streamlines code review and vulnerability assessment workflows.",
      tech: ["JavaScript", "Web", "Analysis"],
      status: "Active",
      link: "https://github.com/0wardriver0/code-browser",
      tagline: "Navigate code like a pro",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-red-500/20 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-red-400" />
            <span className="text-xl font-bold text-white">whomai</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="text-slate-300 hover:text-red-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-slate-300 hover:text-red-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-slate-300 hover:text-red-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-red-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-400/30">
              <Image
                src="/images/lycan-profile.jpeg"
                alt="Lycan Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Lycan</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="outline" className="border-red-400/50 text-red-400">
                🔧 Tech Specialist
              </Badge>
              <Badge variant="outline" className="border-red-400/50 text-red-400">
                🛡️ Leader
              </Badge>
              <Badge variant="outline" className="border-red-400/50 text-red-400">
                🔍 Investigator
              </Badge>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Passionate about service and leadership, I bring a unique blend of discipline and intelligence expertise
              to every project. Specialized in tactical operations, strategic planning, and innovative technical
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700"
                onClick={() => window.open("https://github.com/0wardriver0", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              {showHeroPhoneNumber ? (
                <a
                  href="tel:908-617-1474"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-600 text-red-400 hover:bg-slate-800 bg-transparent h-12 px-6 py-3 animate-in fade-in duration-500"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  908-617-1474
                </a>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  onClick={() => setShowHeroPhoneNumber(true)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-950/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-950/50 border-gray-800 hover:border-red-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Code className="mr-2 h-5 w-5 text-red-400" />
                  Technical Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Proficient in modern development technologies and cybersecurity practices. Always staying current with
                  emerging threats and defensive strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-950/50 border-gray-800 hover:border-red-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Users className="mr-2 h-5 w-5 text-red-400" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Experienced in leading technical teams and managing complex projects. Focus on collaboration,
                  mentorship, and driving innovative solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-950/50 border-gray-800 hover:border-red-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Target className="mr-2 h-5 w-5 text-red-400" />
                  Strategic Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Specialized in tactical planning and operational intelligence. Bringing military-grade discipline to
                  technology projects.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-700/50 text-slate-200 hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-default text-sm py-2 px-4"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-950/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-950/50 border-gray-800 hover:border-red-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <Badge variant="outline" className="border-red-400/50 text-red-400">
                      {project.status}
                    </Badge>
                  </div>
                  {project.tagline && <p className="text-red-400/80 text-sm italic">"{project.tagline}"</p>}
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Always eager to collaborate and learn. Excited to connect with fellow developers and contribute to impactful
            projects.
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              onClick={() => window.open("https://github.com/0wardriver0", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            {showContactPhoneNumber ? (
              <a
                href="tel:908-617-1474"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-600 text-red-400 hover:bg-slate-800 bg-transparent h-12 px-6 py-3 animate-in fade-in duration-500"
              >
                <Phone className="mr-2 h-5 w-5" />
                908-617-1474
              </a>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                onClick={() => setShowContactPhoneNumber(true)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/20 bg-black/90 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-5 w-5 text-red-400" />
            <span className="text-slate-300">0wardriver0</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Tri-State</span>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            © {new Date().getFullYear()} Built with precision and purpose.
          </p>
        </div>
      </footer>
    </div>
  )
}
