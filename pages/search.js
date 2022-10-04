import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useRouter} from 'next/dist/client/router';
import {format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';


function Search({searchResults}) {
  const router = useRouter({});

//serverside rending of the properties from the json file please review json file at the bottom of the page to view the props
// being pulled in.

console.log(searchResults);

  const {location, startDate, endDate, noOfGuest}= router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  ;
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range= `${formattedStartDate}  -  ${formattedEndDate}`;


  return (
    <div>
      <Header 
      placeholder={`${location} | ${range} | ${noOfGuest}`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - for {noOfGuest}  Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays In {location}</h1>
          <div className="flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
           <p className="button"> Cancellation Flexiablility </p>
           <p className="button">  Type Of Place  </p>
           <p className="button">  Prices  </p>
           <p className="button"> Rooms and Beds </p>
           <p className="button">  More Filters </p>
          </div>
          <div className='flex flex-col'>
            {searchResults.map(({img, location, title, description, star, price, total}) =>(
              <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
              />
              ))}
          </div>
        </section>

        <section className="hidden md:inline-flex md:min-w-[600px]">
          <Map searchResults={searchResults}/>
        </section>
      </main>


    <Footer/>
    </div>
  )
}
export default Search;

export async function getServerSideProps(){
  const searchResults = await fetch('https://www.jsonkeeper.com/b/WWYT')
  .then((res) => res.json());
  return {
    props:{
      searchResults,
    },
  };
}
