export default function EventDetails() {
    return (
        <div className="w-[70%] mx-auto items-center mt-10">
          <div className="bg-slate-200 w-full h-[30vw] mx-auto"></div>
          <div className="px-20 py-10">
            <h1 className="text-center text-5xl font-bold">Event Title</h1>
            <div className="text-lg">
              <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra eleifend vestibulum. Mauris sit amet euismod metus. Pellentesque auctor lacus vel nunc vulputate accumsan. Nam at eros ultricies, elementum leo nec, fermentum magna. Duis mi arcu, finibus vitae turpis sit amet, mollis commodo neque. In dapibus risus at lacinia gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vel maximus urna. Etiam fermentum posuere libero, vitae tincidunt leo bibendum nec. Aenean sapien quam, consectetur ac mi a, tincidunt pulvinar velit. Integer lobortis in turpis eleifend vehicula. Phasellus ut velit lorem. Ut volutpat dui vitae posuere scelerisque. Pellentesque volutpat sed odio a ultrices. Mauris accumsan congue mi, sit amet volutpat nunc maximus eget.</p>
              <p>Location: Online Party</p>
              <p>Date/Time: 06/01/2024, 1PM UTC</p>
            </div>

            <div className="mt-5 flex gap-5">
              <div className="flex items-center border-2 border-indigo-500 w-fit py-1 px-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 hover:text-indigo-500 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg>
                <span className="mx-3 font-black text-xl">1</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 hover:text-indigo-500 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div className="flex text-xl items-center font-semibold bg-indigo-500 w-fit p-2 rounded-lg text-white cursor-pointer hover:bg-indigo-900">
                Checkout Ticket
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>

        </div>
    );
  }
  