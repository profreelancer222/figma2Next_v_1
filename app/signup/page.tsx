import Image from 'next/image'
import Link from 'next/link'
import keyboard from '../../assest/picture/keybord.png'
import logo from '../../assest/picture/logo.png'
import search from '../../assest/avgFile/search.svg'

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export default function Page() {
	return (
		<div className='bg-[#EBEBF4] h-screen grid place-items-center'>
			<div className='bg-white p-[24px] rounded-lg flex flex-col md:flex-row gap-6 w-5/6 md:w-[721px] m-auto'>
				<div className='md:w-[246px] w-1/3'>
					<Image className='rounded-lg h-full object-cover' src={keyboard} alt='Login Image' />
				</div>
				<div className='md:w-[403px] w-2/3'>
					<Image className='mt-6 w-[258px] m-auto' src={logo} alt='Logo image' />
					<div className='mt-6 text-center font-semibold text-base text-[#0A50A4]'>Welcome to back</div>
					<div className='mt-1 text-center font-normal text-xs text-[#B3B3B3]'>Sign in to continue</div>
					<div className='mt-6'>
						<div>
							<div className='text-[14px]'>Email Address</div>
							<div className='relative'>
								<div className='absolute pointer-events-none'>
								</div>
								<div className='flex'>
									<input type='text' className="w-full mt-[10px] rounded-md border-2 px-[30px] font-['']" placeholder='Please Input here.' />
									<Image src={search} className='h-[18px] w-[18px] mx-[8px] my-[14px] absolute' alt='search Image'/>
								</div>

							</div>
						</div>
						<div className='mt-[18px]'>
							<div className='text-[14px]'>User Password</div>
							<div className='flex'>
								<input type='password' className="px-[20px] w-full mt-[10px] rounded-md border-2 font-['']" placeholder='Please Input here.' />
							</div>
						</div>
					</div>
					<div className='my-6'>
						<button type='submit' className='w-full py-2 px-6 rounded-lg text-[14px] text-center text-white bg-[#3B368D]'>
							Login
						</button>
					</div>
					<div className='flex'>
						<hr className='flex-1 m-auto' />
						<div className='flex-none mx-3'>or</div>
						<hr className='flex-1 m-auto' />
					</div>
					<div className='my-6'>
						<button className='w-full py-2 rounded-lg border-2 flex justify-center text-[14px]'>
							<FcGoogle size={20} className='my-auto mr-[10px]' />
							<span className='my-auto'>Google</span>
						</button>
						<button className='mt-3 w-full py-2 rounded-lg border-2 flex justify-center text-[14px]'>
							<FaFacebook size={20} className='my-auto mr-[10px] text-[#1877F2]' />
							<span className='my-auto'>Facebook</span>
						</button>
					</div>
					<div className='text-center text-[14px]'>
						Already have an account?{' '}
						<Link className='text-[#4193F6] underline' href={'/signin'}>
							Log in
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}   