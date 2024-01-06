import Image from 'next/image'
import Link from 'next/link'
import john from '../../assest/avatar/john.png'
import logo from '../../assest/picture/logo.png'
import search from '../../assest/svgFile/search.svg'
import userPlus from '../../assest/svgFile/userPlus.svg'
import chart from '../../assest/svgFile/chart.svg'
import train from '../../assest/svgFile/train.svg'
import community from '../../assest/svgFile/community.svg'
import bell from '../../assest/svgFile/bell.svg'

export default function header() {
   return <div className="py-[14px]">
      <div className='container mx-auto flex items-center justify-between gap-8 flex-nowrap'>
         <Image className='h-[29px] my-auto pr-[32px] basis-[263px] grow-0 shrink-0' src={logo} alt='Logo image' />
         <div className='flex justify-end items-center grow shrink'>
            <div className='px-[27px]'>
               <Image src={userPlus} className=' m-auto ' alt='search Image' />
            </div>
            <div className='px-[27px] flex '>
               <Image src={chart} className='' alt='search Image' />
               <div className='font-medium'>Lead</div>
            </div>
            <div className='px-[27px] flex '>
               <Image src={train} className='' alt='search Image' />
            </div>
            <div className='px-[27px] flex '>
               <Image src={community} className='' alt='search Image' />
               <div className='font-medium'>Community</div>
            </div>
         </div>
         <div className='flex h-[36px] w-[217px] mauto'>
            <input type='text' className="w-full mt-[10px] rounded-[16px] border-2 px-[30px]  bg-[#EBEBF4] font" placeholder='Search' />
            <Image src={search} className='h-[18px] w-[18px] mx-[8px] my-[14px] absolute' alt='search Image' />
         </div>
         <div className=' grow-0 shrink-0'><Image src={bell} className='h-[24px] w-[24px]' alt='search Image' /></div>
         <div className='grow-0 shrink-0 basis-[166px]'>
            <div className='flex'>
               <Image className='h-[40px] w-[52px] pr-[12px] my-auto' src={john} alt='john photo'/>
               <div className=']'>
                  <div className='text-[20px]'>John Doe</div>
                  <div className='text-[16px]'>Hiring Manager</div>
               </div>
            </div>
         </div>
      </div>
   </div>
}