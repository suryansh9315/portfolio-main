"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const path = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          className="w-6 mr-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          className="w-6 ml-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
