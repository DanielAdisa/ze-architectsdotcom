// /app/projects/[id]/page.tsx
"use client";
import { notFound } from 'next/navigation';
import { projects } from '@/data/data';
import Image from 'next/image';
import { use, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, 
  FiArrowLeft,  
  FiShare2,
  FiDownload,
  FiChevronRight,
  FiHeart,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiChevronsRight,
  FiChevronsLeft,
} from 'react-icons/fi';
import {
  RiBuilding4Line,
  RiLightbulbFlashLine,
  RiPlanetLine,
  RiDoubleQuotesR,
  RiArrowRightUpLine,
  RiMapPinLine,
  RiRulerLine,
  RiTeamLine,
  RiAwardLine,
  RiLeafLine,
  RiSparkling2Line,
  RiBookmarkLine,
  RiBookmarkFill
} from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const ProjectPage = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap params using React's use hook
  const unwrappedParams = use(params);
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Find the project based on the unwrapped id
  const project = projects.find((p) => p.hash === unwrappedParams.id);

  // Find next and previous projects for navigation
  const projectIndex = projects.findIndex((p) => p.hash === unwrappedParams.id);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    notFound(); // Trigger a 404 page if the project is not found
  }

  // Multiple images - normally you'd have these in your data model
  // Using the same image for demo purposes
  const projectImages = [
    project.image,
    project.image, 
    project.image, 
    project.image
  ];

  // Sample project details - typically these would come from your data
  const projectDetails = {
    area: "2,500 sqm",
    client: "Visionary Development Co.",
    location: "Urban Center, CA",
    year: project.date,
    team: ["Lead Architect: Zubi Efobi", "Designer: Daniel Adisa", "Engineer: Samantha Lee"],
    awards: ["Excellence in Design 2023", "Sustainable Architecture Award"],
    sustainability: ["Solar panels", "Rainwater collection", "Green roof systems", "Recycled materials"]
  };

  const projectSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'details', label: 'Details' },
    { id: 'gallery', label: 'Gallery' }
  ];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  
  const fadeInStagger = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemFadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Related projects - exclude current project
  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Floating header that appears on scroll */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
      >
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => router.back()}
            >
              <FiArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="font-medium text-lg text-foreground/90 truncate max-w-[200px] sm:max-w-xs">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1 text-xs">
              <FiShare2 className="h-3.5 w-3.5" /> Share
            </Button>
            <Button
              variant={bookmarked ? "default" : "outline"}
              size="icon"
              className={bookmarked ? "bg-primary text-primary-foreground" : ""}
              onClick={() => setBookmarked(!bookmarked)}
            >
              {bookmarked ? <RiBookmarkFill className="h-4 w-4" /> : <RiBookmarkLine className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Section navigation tabs */}
        <div className="flex px-4 overflow-x-auto scrollbar-hide space-x-6 pb-2">
          {projectSections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "whitespace-nowrap pb-2 text-sm font-medium border-b-2 px-1 transition-all duration-200",
                activeSection === section.id 
                  ? "border-primary text-foreground" 
                  : "border-transparent text-muted-foreground hover:text-foreground/70"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </motion.header>

      {/* Hero section - Full-width immersive image + parallax effect */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background image with parallax effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="container mx-auto px-4 pb-20 pt-40"
          >
            <div className="max-w-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <span className="inline-flex items-center bg-primary/15 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm">
                  <RiBuilding4Line className="mr-1" />
                  {project.category}
                </span>
                <span className="inline-flex items-center bg-background/20 backdrop-blur-sm text-foreground/80 px-3 py-1 rounded-full text-sm">
                  <FiCalendar className="mr-1 h-3.5 w-3.5" />
                  {project.date}
                </span>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              >
                {project.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="text-lg md:text-xl text-white/80 md:max-w-2xl"
              >
                {project.description}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scroll to discover</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-12 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Project navigation */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Button 
            onClick={() => router.back()} 
            variant="ghost" 
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300 ease-out" />
            <span className="font-medium">Back to Projects</span>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              {prevProject ? (
                <Button 
                  asChild 
                  variant="ghost" 
                  size="sm"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Link href={`/projects/${prevProject.hash}`} className="flex items-center gap-1">
                    <FiChevronsLeft className="h-4 w-4" />
                    Previous
                  </Link>
                </Button>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm"
                  disabled
                  className="text-sm text-muted-foreground"
                >
                  <FiChevronsLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
              )}
              
              {nextProject ? (
                <Button 
                  asChild 
                  variant="ghost" 
                  size="sm"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Link href={`/projects/${nextProject.hash}`} className="flex items-center gap-1">
                    Next
                    <FiChevronsRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm"
                  disabled
                  className="text-sm text-muted-foreground"
                >
                  Next
                  <FiChevronsRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
            
            <Separator orientation="vertical" className="h-6 hidden md:block" />
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground"
                onClick={() => setBookmarked(!bookmarked)}
              >
                {bookmarked ? 
                  <RiBookmarkFill className="h-5 w-5 text-primary" /> : 
                  <RiBookmarkLine className="h-5 w-5" />
                }
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground"
              >
                <FiShare2 className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground"
              >
                <FiDownload className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main content - 8 columns */}
          <div className="lg:col-span-8">
            {/* Overview Section */}
            <section id="overview" className="mb-24 scroll-mt-24">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl">
                    <RiLightbulbFlashLine className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Project Overview</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <motion.div 
                    variants={itemFadeIn}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm"
                  >
                    <div className="bg-primary/10 text-primary p-2 rounded-lg inline-flex mb-4">
                      <RiAwardLine className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Award-winning</h3>
                    <p className="text-muted-foreground text-sm">Internationally recognized for excellence in architectural design</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemFadeIn}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm"
                  >
                    <div className="bg-emerald-500/10 text-emerald-500 p-2 rounded-lg inline-flex mb-4">
                      <RiLeafLine className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Sustainable</h3>
                    <p className="text-muted-foreground text-sm">Built with eco-friendly materials and energy efficient systems</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemFadeIn}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm"
                  >
                    <div className="bg-blue-500/10 text-blue-500 p-2 rounded-lg inline-flex mb-4">
                      <RiSparkling2Line className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Innovative</h3>
                    <p className="text-muted-foreground text-sm">Pushing boundaries with cutting-edge design and technology</p>
                  </motion.div>
                </div>
                
                {/* Testimonial quote */}
                <motion.div 
                  variants={fadeIn}
                  className="bg-card/30 backdrop-blur-sm border-l-4 border-primary mt-12 p-6 rounded-r-xl"
                >
                  <div className="flex items-start gap-4">
                    <RiDoubleQuotesR className="h-8 w-8 text-primary flex-shrink-0 opacity-60" />
                    <div>
                      <blockquote className="text-lg italic text-foreground/80 mb-4">
                        "This architectural masterpiece seamlessly blends function with aesthetic beauty, creating spaces that inspire while remaining highly practical."
                      </blockquote>
                      <p className="text-sm font-medium">— Architecture Today Magazine</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </section>

            {/* Concept Section */}
            <section id="concept" className="mb-24 scroll-mt-24">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-500/10 text-amber-500 p-3 rounded-xl">
                    <RiPlanetLine className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Design Concept</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The conceptual approach for this project focused on creating a harmonious dialogue between the built environment and its surroundings. Every element of the design was carefully considered to maximize natural light, ventilation, and spatial efficiency.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Key Design Principles:</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        {[
                          'Contextual integration with surrounding environment',
                          'Maximized natural light and ventilation',
                          'Flexible spaces adapting to changing needs',
                          'Sustainable material selection and construction methods'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <FiPlus className="h-3 w-3 text-primary" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden aspect-square relative">
                    <Image 
                      src={project.image}
                      alt="Design concept visualization"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 bg-background/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <p className="text-white font-medium">Conceptual Model</p>
                    </div>
                  </div>
                </div>
                
                {/* Concept diagrams */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Concept diagram {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Details Section */}
            <section id="details" className="mb-24 scroll-mt-24">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-500/10 text-purple-500 p-3 rounded-xl">
                    <RiRulerLine className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Project Details</h2>
                </div>
                
                <div className="space-y-10">
                  {/* Location */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <RiMapPinLine className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-xl font-semibold">Location</h3>
                    </div>
                    
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-muted-foreground">Interactive location map</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      Located in {projectDetails.location}, this project is strategically positioned to take advantage of the urban context while creating a serene environment for its users.
                    </p>
                  </div>
                  
                  {/* Materials and Specifications */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <RiTeamLine className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-xl font-semibold">Project Team & Specs</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Area</h4>
                          <p className="font-medium">{projectDetails.area}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Client</h4>
                          <p className="font-medium">{projectDetails.client}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Completion Year</h4>
                          <p className="font-medium">{projectDetails.year}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Team</h4>
                          <ul className="space-y-1">
                            {projectDetails.team.map((member, index) => (
                              <li key={index} className="font-medium">{member}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Awards & Recognition</h4>
                          <ul className="space-y-1">
                            {projectDetails.awards.map((award, index) => (
                              <li key={index} className="font-medium">{award}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sustainability Features */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <RiLeafLine className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-xl font-semibold">Sustainability</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      This project incorporates cutting-edge sustainability features to minimize environmental impact and maximize energy efficiency.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectDetails.sustainability.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-2 p-3 rounded-lg bg-card/50 border border-border/50"
                        >
                          <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                            <RiLeafLine className="h-4 w-4 text-emerald-500" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="mb-16 scroll-mt-24">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 text-blue-500 p-3 rounded-xl">
                      <RiSparkling2Line className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">Project Gallery</h2>
                  </div>
                </div>
                
                <div className="relative mt-6">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {projectImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[16/9] relative overflow-hidden rounded-xl">
                            <Image
                              src={image}
                              alt={`Project view ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                      <CarouselPrevious className="h-10 w-10" />
                    </div>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                      <CarouselNext className="h-10 w-10" />
                    </div>
                  </Carousel>
                  
                  {/* Thumbnail navigation */}
                  <div className="flex gap-2 mt-4 px-1">
                    {projectImages.map((image, index) => (
                      <button
                      title='Thumbnail'
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={cn(
                          "h-16 w-24 relative rounded-md overflow-hidden border-2 transition-all",
                          activeImageIndex === index 
                            ? "border-primary opacity-100 ring-1 ring-primary" 
                            : "border-transparent opacity-70 hover:opacity-100"
                        )}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
          
          {/* Sidebar - 4 columns */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Project quick facts */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden shadow-sm"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Facts</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <RiBuilding4Line className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Category</p>
                          <p className="font-medium">{project.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FiCalendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Completed</p>
                          <p className="font-medium">{project.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <RiMapPinLine className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium">{projectDetails.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <RiRulerLine className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Area</p>
                          <p className="font-medium">{projectDetails.area}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/50">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Contact About Project
                    <FiArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
              
              {/* Related projects */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                
                <div className="space-y-4">
                  {relatedProjects.length > 0 ? (
                    relatedProjects.map((p) => (
                      <Link 
                        key={p.id} 
                        href={`/projects/${p.hash}`}
                        className="group flex items-center gap-4 p-2 rounded-lg hover:bg-card/80 transition-colors"
                      >
                        <div className="h-16 w-16 relative rounded-md overflow-hidden flex-shrink-0">
                          <Image 
                            src={p.image} 
                            alt={p.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">{p.title}</h4>
                          <p className="text-xs text-muted-foreground">{p.category}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">No related projects found</p>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/70">
                  <Button variant="ghost" size="sm" asChild className="w-full justify-between">
                    <Link href="/projects" className="flex items-center">
                      <span>View all projects</span>
                      <FiChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              {/* Download resources */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Resources</h3>
                
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <FiDownload className="mr-2 h-4 w-4" />
                    Project Brief PDF
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <FiDownload className="mr-2 h-4 w-4" />
                    Technical Drawings
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <FiDownload className="mr-2 h-4 w-4" />
                    Material Specifications
                  </Button>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </main>

      {/* CTA section */}
      <section className="relative overflow-hidden bg-muted/50 border-t border-border/30 py-20">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8">
              Let's collaborate to create architecture that inspires and stands the test of time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View More Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
