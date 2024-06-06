import Image from "next/image";
import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";

export default function Home() {
  return (
    <div className="flex items-center text-dark w-full min-h-screen">
      <Layout classname="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={ProfilePic} className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              classname="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex mt-2 items-center self-start">
              <Link
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                href="/dummy.pdf"
                target="_blank"
                download={true}
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href="mailto:suryansh.sharma9315@gmail.com"
                target="_blank"
                className="ml-4 text-lg text-dark underline capitalize font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <Hireme />
    </div>
  );
}
