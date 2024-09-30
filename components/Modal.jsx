import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      service: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onClose();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#27272c] rounded-xl max-w-2xl w-full m-4">
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="text-white">&times;</button>
        </div>
        <div className="p-6">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">Describe your project or idea</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
              <Input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
              <Input type="email" name="email" placeholder="Email" required onChange={handleChange} />
              <Input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
            </div>
            <Select onValueChange={handleSelectChange}>
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
            <Textarea name="message" className="h-[200px]" placeholder="Type your message here" required onChange={handleChange} />
            <Button type="submit" size="lg" className="max-w-40" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;