
import Image from 'next/image';
import React, {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/dist/client/router';


function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const[ startDate, setStartDate] = useState(new Date());
  const[ endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuests] = useState(1);
  const router = useRouter();

  const resetInput = () => {
    setSearchInput('');
  }

  const search = () => {
    router.push({
      pathname:'/search',
      query: {
        noOfGuest:noOfGuest,
        location:searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      }
    });
  };

  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }

  const handleSelect = (ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
    {/*left*/}
        <div   onClick={() => router.push('/')}
        className="relative flex items-center h-10 cursor-pointer my-auto ">
          <Image
          className="object-contain"
          src='https://res.cloudinary.com/chuckmaster/image/upload/v1664636527/airbnb%20clone/pngwing.com_p2he5q.png'
          layout='fill'
          objectPosition='left'

        />
        </div>

        <div className="flex items-center md:border-2  rounded-full py-2 md:shadow-md">

        <input
        value= {searchInput}
        onChange={(e)=> setSearchInput(e.target.value)
        }
        className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-300"
        type="text" placeholder={placeholder || "Start your Search"}
        />
        <svg className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
       </svg>
        </div>

        <div className="flex  space-x-4 items-center justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer">Become a Host</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
          </svg>

            <div className="flex items-center space-x-3 border-2 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          </div>
        </div>

        {searchInput &&
          <div className='flex flex-col col-span-3 mx-auto my-4'>
              <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={ new Date()}
                  rangeColors={["#fd5b61"]}
                  onChange={handleSelect}
                  />
              <div className="flex items-center border-b mb-4">
                <h2 className="text-2xl flex-grow font-semibold pl-5">Number of Guests</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <input
                  value={noOfGuest}
                  onChange={e =>setNoOfGuests(e.target.value)}
                  min={1}
                  className="w-12 pl-2 text-lg outline-none text-red-400"
                   type="number"/>
              </div>
              <div className="flex">
              <button
              onClick={resetInput}
              className="flex-grow text-gray-500 border-2 rounded-full p-2 hover:shadow-md active:scale-90 transition transform duration-500 ease-out">Cancel</button>
              <button
              onClick={search}
              className="flex-grow text-red-400 border-2 rounded-full p-2 hover:shadow-md active:scale-90 transition transform duration-500 ease-out">Search</button>


             </div>
        </div>
        }

    </header>
  )
}

export default Header
