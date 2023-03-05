import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import image from "../public/sagar1.png";
import { useState } from "react";
import html from "../public/html.svg";
import razorpay from "../public/razorpay.png";
import goahomefood from "../public/goahomefood.png";
import counter from "../public/counter.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sagar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-gray-900 px-5 md:px-20 lg:px-40">
        <section className="lg:min-h-[50vh] min-h-[40vh] ">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl text-black dark:text-white  font-burtons">SAGAR BIRADAR</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="hidden md:block text-gray-800 dark:text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hidden md:block px-4 py-2 text-gray-800 dark:text-white rounded-md ml-8 cursor-pointer"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hidden md:block px-4 py-2 text-gray-800 dark:text-white rounded-md ml-8 cursor-pointer"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="hidden md:block px-4 py-2 text-gray-800 dark:text-white rounded-md ml-8 cursor-pointer"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hidden md:block px-4 py-2 text-gray-800 dark:text-white rounded-md ml-8 cursor-pointer"
                  href="#contact"
                >
                  Contact
                </a>
              </li>

              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl ml-8"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-4">
            <h2 className="text-5xl text-teal-600 py-2 font-medium md:text-6xl">
              Sagar Biradar
            </h2>
            <h3 className="text-black text-2xl py-2  md:text-3xl dark:text-white">
              Frontend Developer
            </h3>
            <p className="text-md dark:text-white leading-8 text-gray-800 py-5 md:text-xl mx-auto max-w-xl">
              Final year computer engineering with a passion for front-end
              development using ReactJS and a keen eye for design with Tailwind
              CSS.
            </p>

            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 mx-auto text-white rounded-md"
              href="https://drive.google.com/file/d/1RGc2zQR9fp-tcG6InESRYhlSnDUuhnqN/view?usp=sharing" target="_blank" rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="flex text-2xl justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/sagar-biradar-673552211/" target="_blank" rel="noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/sagar1621" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
            <a href="mailto:sagarbiradar0332@gmail.com" target="_blank" rel="noreferrer">
              <SiGmail />
            </a>
          </div>
        </section>

        <section id="about">
          <div className="relative mx-auto rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 mt-20 overflow-x-hidden md:w-96 md:h-96">
            <Image alt="profile-pic" src={image} layout="fill" objectFit="cover" />
          </div>
          <div className="  shadow-md p-5 mt-2 rounded-md">
            <h3 className="text-3xl text-black py-1 dark:text-white">About Me</h3>
            <p className="text-md dark:text-white py-2 leading-8 text-gray-800">
              As a final year computer engineering student, I have honed my
              skills in{" "}
              <span className="text-teal-500">front-end development</span> using{" "}
              <span className="text-teal-500">ReactJS</span> and love building
              engaging, interactive websites. I have a passion for coding and
              problem-solving, and I am always eager to collaborate with other
              talented programmers to expand my knowledge and experience in the
              field. With a strong foundation in computer systems and a hunger
              for learning, I am ready to take on new challenges and continue to
              grow as a developer.
            </p>
          </div>
        </section>

        <section id="skills" className="space-y-5 mb-5 mt-7">
          <h3 className="text-black text-3xl py-1 dark:text-white">Skills</h3>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="m-4">
              <a
                href="https://www.cprogramming.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                  alt="c"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://www.w3schools.com/cpp/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://pandas.pydata.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
                  alt="pandas"
                  width="60"
                  height="60"
                />
              </a>
            </div>

            <div className="m-4">
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://scikit-learn.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                  alt="scikit_learn"
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="60"
                  height="60"
                />
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto">
          <div>
            <h3 className="text-black text-3xl py-1 dark:text-white">Projects</h3>
          </div>

          {/* main project container */}
          <div className="m-2 flex flex-col shadow p-2 space-y-7 max-w-full rounded-md">
            {/* razorpay project */}
            <div className="flex flex-col md:flex-row space-x-7 m-3 shadow-md rounded-md p-5 justify-between">
              {/* left side */}
              <div className="md:w-1/3 w-full self-center md:1/2">
                <Image alt="razorpay-proj-img"
                  src={razorpay}
                  className="h-full w-full object-contain"
                />
              </div>
              {/* right side */}
              <div className="md:w-2/3 w-full p-4 ">
                <h2 className="text-black text-3xl  py-1 font-normal dark:text-white">
                  Razorpay Clone
                </h2>
                <h4 className="text-md dark:text-white pt-1  text-gray-800">
                  Technologies Used: <span className="text-teal-500">HTML</span>
                  , <span className="text-teal-500">Tailwind CSS</span>
                </h4>
                <ul>
                  <li className="list-disc text-md dark:text-white py-2  text-gray-800">
                    Built a responsive static website clone of Razorpay using
                    HTML and Tailwind CSS.
                  </li>
                  <li className="list-disc text-md dark:text-white  text-gray-800">
                    Implemented modern design principles to create a sleek and
                    user-friendly interface.
                  </li>
                </ul>
                <div className="p-3">
                  <a
                    className="text-teal-500 underline m-2"
                    href="https://sagar1621-razorpayclone.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="text-teal-500 underline m-2"
                    href="https://github.com/sagar1621/Razorpay-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
            {/* goa home project */}
            <div className="flex flex-col md:flex-row m-3 space-x-7 shadow-md rounded-md p-5 justify-between">
              {/* left side */}
              <div className="md:w-1/3 w-full self-center">
                <Image alt="goahomefood-proj-img"
                  src={goahomefood}
                  className="h-full w-full object-contain"
                />
              </div>
              {/* right side */}
              <div className="md:w-2/3 w-full p-4">
                <h2 className="text-black text-3xl py-1 font-normal dark:text-white">
                  Goa Home Food Clone
                </h2>
                <h4 className="text-md dark:text-white pt-1  text-gray-800">
                  Technologies Used: <span className="text-teal-500">HTML</span>
                  , <span className="text-teal-500">CSS</span>,{" "}
                  <span className="text-teal-500">Javascript</span>,{" "}
                  <span className="text-teal-500">Bootstrap</span>
                </h4>
                <ul>
                  <li className="list-disc text-md dark:text-white py-2  text-gray-800">
                    Developed a responsive clone of Goa Home Food website using
                    HTML, CSS, JavaScript, and Bootstrap.
                  </li>
                  <li className="list-disc text-md dark:text-white  text-gray-800">
                    Designed and implemented the website layout, including the
                    navigation menu, banner section, and information sections.
                  </li>
                </ul>
                <div className="p-3">
                  <a
                    className="text-teal-500 underline m-2"
                    href="https://github.com/sagar1621/Goa-home-food"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="text-teal-500 underline m-2"
                    href="https://sagar-goahomefood.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
            {/* counter project */}
            <div className="flex flex-col md:flex-row m-3 space-x-7 shadow-md rounded-md p-5 justify-between">
              {/* left side */}
              <div className="md:w-1/3 w-full self-center">
                <Image alt="counter-proj-img" src={counter} className="h-full w-full object-contain" />
              </div>
              {/* right side */}
              <div className="md:w-2/3 w-full p-4">
                <h2 className="text-black text-3xl py-1 font-normal dark:text-white">
                  Character Count
                </h2>
                <h4 className="text-md dark:text-white pt-1  text-gray-800">
                  Technologies Used: <span className="text-teal-500">HTML</span>
                  , <span className="text-teal-500">CSS</span>,{" "}
                  <span className="text-teal-500">Javascript</span>
                </h4>
                <ul>
                  <li className="list-disc text-md dark:text-white py-2  text-gray-800">
                    Built a character counter app using HTML, CSS, and
                    JavaScript to track the number of characters in a user
                    inputted text box.
                  </li>
                  <li className="list-disc text-md dark:text-white  text-gray-800">
                    Implemented a dynamic character count feature that updates
                    with each keystroke, displaying the remaining characters
                    available and updating the character count in real time.{" "}
                  </li>
                  <li className="list-disc text-md dark:text-white  text-gray-800">
                    Added a Copy to Clipboard button to enable users to easily
                    copy the text entered into the text box.{" "}
                  </li>
                </ul>
                <div className="p-3">
                  <a
                    className="text-teal-500 underline m-2"
                    href="https://sagar-charactercount.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="text-teal-500 underline m-2"
                    href="https://github.com/sagar1621/Character-count"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="m-5 mb-8 flex flex-col shadow p-4 space-y-7 max-w-full rounded-md">
            <div>
              <h2 className="text-black text-3xl py-1 dark:text-white">Get in Touch</h2>
            </div>
            <form
              action="https://formspree.io/f/xdovzypj"
              method="POST"
              className="flex flex-col space-y-5"
            >
            <label htmlFor="name"><input type="text" id="name" placeholder="Enter your Name*" className="border-gray-300 rounded-md w-full md:w-fit" /></label>
            <label htmlFor="email"><input type="email" id="email" placeholder="Enter your Email*" className="border-gray-300 rounded-md  w-full md:w-fit" /></label>
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you Message*" className="border-gray-300 rounded-md"></textarea>              
            <input type="submit" value="send" className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md"/>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
