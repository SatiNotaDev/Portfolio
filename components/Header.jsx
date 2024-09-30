"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Modal from "./Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            SatiNotaDev <span className="text-accent">.</span>
          </h1>
        </Link>
        {/*desktop nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button onClick={openModal}>Hire me</Button>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden"><MobileNav/></div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;