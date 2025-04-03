'use client';

import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import zubi from '@/public/Assets/hero1.jpeg';
import { 
  FiUser, 
  FiMail, 
  FiMessageSquare, 
  FiSend, 
  FiMapPin, 
  FiPhone,
  FiClock,
  FiArrowRight
} from 'react-icons/fi';
import { motion } from 'framer-motion';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:zubi@ze-architects.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src={zubi}
          alt="Ze Architects Office"
          layout="fill"
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-4 md:p-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Get in Touch</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl font-light max-w-2xl">Let's bring your architectural vision to life</p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* Contact Info Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Contact Information
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                Reach out and we'll respond within 24 hours to discuss your project needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">1 Rosse Court Ave, Balgaddy, Lucan, Ireland</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+353 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FiMail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">zubi@ze-architects.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <FiClock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9AM - 5PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.0449990498078!2d-6.420074422925379!3d53.3424506722882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867731b8a426801%3A0xc876761f4c896bec!2s1%20Rosse%20Court%20Ave%2C%20Balgaddy%2C%20Lucan%2C%20Co.%20Dublin%2C%20K78%20C638%2C%20Ireland!5e0!3m2!1sen!2sng!4v1731765100055!5m2!1sen!2sng"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="border-0"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <FiUser />
                  </div>
                  <input
                    {...register('name', { required: "Name is required" })}
                    className="w-full border border-slate-200 dark:border-slate-600 rounded-lg pl-12 pr-4 py-3 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <FiMail />
                  </div>
                  <input
                    {...register('email', { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full border border-slate-200 dark:border-slate-600 rounded-lg pl-12 pr-4 py-3 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <FiMessageSquare />
                  </div>
                  <input
                    {...register('subject', { required: "Subject is required" })}
                    className="w-full border border-slate-200 dark:border-slate-600 rounded-lg pl-12 pr-4 py-3 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                
                <div>
                  <textarea
                    {...register('message', { required: "Message is required" })}
                    className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-3 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none min-h-[180px]"
                    placeholder="Your Message"
                    rows={6}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg py-3 px-8 font-semibold text-lg shadow-lg shadow-blue-500/20 transition-all duration-200"
                type="submit"
              >
                <span>Send Message</span>
                <FiSend className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
