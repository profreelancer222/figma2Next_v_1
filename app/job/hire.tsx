import Image from 'next/image'
import Link from 'next/link'
import john from '../../public/assest/avatar/john.png'
import logo from '../../public/assest/picture/logo.png'
import svg1 from '../../public/assest/svgFile/socialSvg_1.svg'
import svg2 from '../../public/assest/svgFile/socialSvg_2.svg'
import svg3 from '../../public/assest/svgFile/socialSvg_3.svg'
import svg4 from '../../public/assest/svgFile/socialSvg_4.svg'
export default function hire() {
    return <div className="w-[1923px] h-[184px] p-8 flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="w-[1923px] h-[184px] bg-white bg-opacity-50"></div>
        <div className="self-stretch h-[120px] flex-col justify-center items-start gap-6 flex">
            <div className="justify-start items-center gap-6 inline-flex">
                <div className="p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
                    <div className="w-12 h-12 relative"></div>
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                    <div className="text-neutral-600 text-[32px] font-normal font-['Rubik'] capitalize">My Jobs</div>
                    <div className="text-black text-opacity-50 text-xs font-normal font-['Rubik']">Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus.</div>
                </div>
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="w-[119px] px-6 py-2 bg-sky-700 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Dashboard</div>
                </div>
                <div className="w-[103px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">My Jobs</div>
                </div>
                <div className="w-[118px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Applicants</div>
                </div>
                <div className="w-[116px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Interviews</div>
                </div>
            </div>
        </div>
    </div>
}