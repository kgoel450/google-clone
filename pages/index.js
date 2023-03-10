import Avatar from '@/Components/Avatar'
import Head from 'next/head'
import Footer from '@/Components/Footer'
import 'tailwindcss/tailwind.css'
import {MicrophoneIcon,ViewGridIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import {SearchIcon} from "@heroicons/react/outline"
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() 
{
const router = useRouter();
const searchInputRef=useRef(null);

const search=(e)=>
{
    e.preventDefault();
    const term =searchInputRef.current.value;

    if(!term) return;
    router.push(`/search?term=${term}`);
};


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex w-full p-5 justify-between 
      text-sm text-gray-700'>
      {/*left*/}
        <div className='flex space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
        </div>
       {/*right*/}
        <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        
        <ViewGridIcon className='h-10 w-10 p-2 rounded-full
        hover:bg-gray-100 cursor-pointer' />
        <Avatar url="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png" />
        </div>
      </header>


      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image 
        height={100}
        width={300}
        src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
        />
        <div className='flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full
         border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          
          <SearchIcon className='h-5 mr-3 text-gray-500' />
        
          <input ref={searchInputRef}
          type="text" 
          placeholder="Search" 
         className='focus:outline-none flex-grow'/>
        
         <MicrophoneIcon className='h-5' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search}
           className='btn'>
          Google Search
          </button>

          <button onClick={search}
          className='btn'>
          I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
