"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    decr: "+33 6 02 20 96 62",
    href: "tel:+33602209662",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    decr: "notasati24@gmail.com",
    href: "mailto:notasati24@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    decr: "France, Lyon",
    href: "https://www.google.com/maps/search/?api=1&query=Lyon,France",
  },
];
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setSubmitStatus("success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Describe your project or idea</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  value={formData.firstName}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  value={formData.lastName}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                required
                onChange={handleChange}
                value={formData.message}
              />
              <Button
                type="submit"
                size="lg"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-accent mt-2">
                  Great! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 mt-2">
                  An error occurred. Please try again.
                </p>
              )}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <Link
                      href={item.href}
                      className="w-[72px] h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center hover:bg-accent hover:text-[#27272c] transition-colors duration-300"
                      target={item.title === "Address" ? "_blank" : "_self"}
                      rel={
                        item.title === "Address" ? "noopener noreferrer" : ""
                      }
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </Link>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.decr}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
