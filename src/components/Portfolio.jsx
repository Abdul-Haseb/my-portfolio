export default function Portfolio() {
  const myData = [
    {
      id: 1,
      link: "https://restore-construction-website-jurd.vercel.app/",
      img: "/assets/portfolio/restore.webp",
    },
    {
      id: 2,
      link: "https://www.hostyai.com/",
      img: "/assets/portfolio/hsotyai.webp",
    },
    {
      id: 3,
      link: "https://services.workreel.com/",
      img: "/assets/portfolio/services.webp",
    },
    {
      id: 4,
      link: "https://ibizajourney.com/",
      img: "/assets/portfolio/ibiza.webp",
    },
    {
      id: 5,
      link: "https://buleh-nine.vercel.app/",
      img: "/assets/portfolio/buleh.webp",
    },
    {
      id: 6,
      link: "https://www.hostyai.com/",
      img: "/assets/portfolio/hosty.webp",
    },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-gray-300 px-4 pb-16 ">
      <div id="portfolio" className="max-w-screen-xl mx-auto">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify mb-1">
          Portfolio
        </h3>
        <div className="w-32 lg:w-52 bg-gradient-to-r from-cyan-500 to-blue-500 h-1" />
        <p className="md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify mt-3 mb-6">
          Checkout some of my work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {myData.map(({ id, img, link }) => (
            <a href={link} key={id} target="_blank">
              <div
                key={id}
                className="shadow-lg rounded-md overflow-hidden shadow-gray-600 hover:scale-105 duration-300 transition-all"
              >
                <img src={img} alt="" className="h-56 w-full" />
                <div className="flex items-center justify-center">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-lg py-1">
                    Demo
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
