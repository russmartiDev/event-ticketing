import Selection from "./components/filterSelection";
import Search from "./components/search";
import Event from "./components/event";
export default function Home() {
  const renderedItems = [];
  
  for (let i = 0; i < 9; i++) {
    renderedItems.push(
      <Event key={i}/>
    );
  }
  return (
    <>
      <div className="w-full h-[80vh] bg-[url('/img/cover.jpg')] bg-no-repeat bg-cover bg-origin-content relative">
        <p className="text-white text-center text-5xl font-bold w-full z-20 absolute top-1/2 -translate-y-1/2">Unlock unforgettable experiences. Explore, book, enjoy!</p>
        <a href="#events">
          <button className="z-20 m-auto font-extrabold text-white bg-indigo-500 hover:bg-indigo-900 text-3xl p-3 rounded-xl absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Buy Tickets
          </button>
          
        </a>
        <div className="bg-gradient-to-t from-black z-10 absolute h-full w-full top-0"/>
      </div>
      <div className="p-10" id="events">
        <h1 className="text-5xl font-extrabold mb-5">Events</h1>
        <div className="w-full flex border-b-4 border-indigo-500 pb-8">
          <Selection/>
          <Search/>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-10 justify-center">
        {renderedItems}
      </div>

    </>

  );
}
