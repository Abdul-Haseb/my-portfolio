export default function Experience() {
  const data = [
    {
      id: 1,
      text: "HTML",
      img: "/assets/html.png",
      shadow: "shadow-orange-500",
    },
    {
      id: 2,
      text: "CSS",
      img: "/assets/css.png",
      shadow: "shadow-blue-500",
    },
    {
      id: 3,
      text: "JavaScript",
      img: "/assets/javascript.png",
      shadow: "shadow-yellow-500",
    },
    {
      id: 4,
      text: "React",
      img: "/assets/react.png",
      shadow: "shadow-blue-300",
    },
    {
      id: 5,
      text: "Next JS",
      img: "/assets/nextjs.png",
      shadow: "shadow-white/50",
    },
    {
      id: 6,
      text: "Tailwindcss",
      img: "/assets/tailwind.png",
      shadow: "shadow-cyan-600",
    },
    {
      id: 7,
      text: "GitHub",
      img: "/assets/github.png",
      shadow: "shadow-gray-500",
    },
    {
      id: 8,
      text: "Firebase",
      img: "/assets/firebase.png",
      shadow: "shadow-yellow-700",
    },
    {
      id: 9,
      text: "TypeScript",
      img: "/assets/typescript.png",
      shadow: "shadow-blue-800",
    },
  ];

  return (
    <div className="bg-gradient-to-b to-black from-gray-800 text-gray-300 px-4">
      <div id="experience" className="max-w-screen-xl mx-auto py-16 ">
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify mb-1">
          Experience
        </h4>
        <div className="w-48 lg:w-60 bg-gradient-to-r from-cyan-500 to-blue-500 h-1" />
        <p className="md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify mt-3 mb-6">
          These are the technologies I`ve worked with
        </p>
        <div className="w-full h-fit grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 pt-16">
          {data.map(({ img, text, id, shadow }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center p-10 hover:scale-110 duration-300 ease-in transition-all rounded-md shadow-lg  ${shadow}`}
            >
              <img
                src={img}
                alt={text}
                className=" object-contain h-20 md:h-40"
              />
              <p className="mt-4 text-lg font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
