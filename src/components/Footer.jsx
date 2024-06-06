import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full border-t border-solid border-dark font-medium text-lg">
      <Layout classname="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;
          <Link
            href="/"
            className="underline underline-offset-2"
            target="_blank"
          >
            CodeBucks
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2" target="_blank">
          Say hello
        </Link>
      </Layout>
    </div>
  );
};

export default Footer;
