import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 11,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    link: "https://github.com/Abdul-Haseb",
    style: "rounded-tr-md",
  },
  {
    id: 22,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    link: "https://www.linkedin.com/notifications/?filter=all",
  },
  {
    id: 33,
    child: (
      <>
        Mail <IoIosMail size={30} />
      </>
    ),
    link: "mailto:abdulhaseb.dev@gmail.com",
  },
  {
    id: 44,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    link: "/public/myresume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

export default function SocialLinks() {
  return (
    <div className="fixed top-[40%] hidden lg:block">
      {links.map(({ id, child, link, style, download }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          download={download}
          rel="noreferrer"
        >
          <div
            key={id}
            className={`w-40 h-14 bg-gray-300  hover:rounded-md flex items-center justify-between px-4 gap-4 ml-[-100px] hover:translate-x-24 cursor-pointer transition-all duration-300 ease-in-out text-xl font-medium ${style}`}
          >
            {child}
          </div>
        </a>
      ))}
    </div>
  );
}
