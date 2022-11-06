import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { HiOutlineSearch } from "react-icons/hi";
import { CgMoreAlt } from 'react-icons/cg';
import Contacts from './Contacts';


const ConnectionsBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex flex-grow text-lg font-semibold'>Contacts</p>
            <div className='flex space-x-1 px-2'>
              <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                <RiVideoAddFill />
              </div>
              <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                <HiOutlineSearch />
              </div>
              <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                <CgMoreAlt />
              </div>
            </div>
        </div>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Online"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Online"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Online"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Offline"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Offline"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Offline"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Online"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Online"/>
        <Contacts name='Unknown' src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg.webp" status="Online"/>
    </div>
  )
}

export default ConnectionsBar