'use client';

import zubi from '@/public/Assets/hero1.jpeg';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Page = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:zubi@ze-architects.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[597.083px]">
        <Image
          src={zubi}
          alt="Hero Image"
          layout="fill"
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col w-full h-full items-center justify-center z-10 text-center text-white p-2 md:p-3">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl font-serif">Leave Us a Message</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="h-fit w-5/6 mx-auto flex flex-col md:flex-row md:space-x-10 p-5">
        {/* Contact Form */}
        <div className="flex-1">
          <form
            className="flex flex-col space-y-4 w-11/12 max-w-xl mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              <input
                {...register('name', { required: true })}
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
                type="text"
                placeholder="Name"
              />
              <input
                {...register('email', { required: true })}
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register('subject', { required: true })}
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register('message', { required: true })}
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Message"
              rows={10}
            />
            <button
              className="bg-blue-500 py-3 px-6 rounded-md text-white font-bold text-lg hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex-1 mt-10 md:mt-0">
          <div className="w-3/3 mx-auto h-[450px] border rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.0449990498078!2d-6.420074422925379!3d53.3424506722882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867731b8a426801%3A0xc876761f4c896bec!2s1%20Rosse%20Court%20Ave%2C%20Balgaddy%2C%20Lucan%2C%20Co.%20Dublin%2C%20K78%20C638%2C%20Ireland!5e0!3m2!1sen!2sng!4v1731765100055!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
