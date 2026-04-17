import Image from 'next/image'
import Link from 'next/link'
import notFound from '../app/assets/images/not-found.png'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col space-y-3 items-center justify-center bg-gradient-to-b from-blue-700 to-violet-900'>
      <p className='text-white text-center text-4xl font-bold'>Could not find requested resource</p>
      <Image src={notFound} alt='not found' height={300} width={500}/>
      <Link href="/" className='py-4 px-5 text-xl font-bold text-white rounded-xl shadow bg-blue-600 hover:bg-blue-500 transition'>Return Home</Link>
    </div>
  )
}