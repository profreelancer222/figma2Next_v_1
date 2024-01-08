import Image from "next/image"
import check from '../../../public/assest/icons/check.svg'
export default function post() {
    return <div>
        <div className="w-[80vw] p-8 mx-[10vw] bg-white rounded-2xl flex-col justify-start items-center gap-3 inline-flex">
            <div className="self-stretch h-[1720px] p-6 rounded-lg border border-black border-opacity-10 flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Name</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Hiring Manager Name</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Email</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Address</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">City</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">State</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Zip</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Role Type</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Title</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Compensation Type</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Salary Amount</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">OTE</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-end inline-flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Inbound Leads?</div>
                        </div>
                        {/* <label className=" switch ">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label> */}
                    </div>
                </div>
                <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-end inline-flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Prospecting Required?</div>
                        </div>
                        {/* <label className=" switch ">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label> */}
                    </div>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Average Order</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Industry</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className=" h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex  text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[107px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Job Description</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <textarea className="self-stretch h-[83px] px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex" placeholder="Please Input here.">
                    </textarea>
                </div>
                <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-end inline-flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Customer Service/ Success Support?</div>
                        </div>
                        {/* <label className=" switch ">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label> */}
                    </div>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Created Date</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Expiration Date</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Status</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Description</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <textarea className="self-stretch h-[83px] px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex" placeholder="Please Input here.">
                    </textarea>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company URL</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-neutral-600 text-sm font-medium font-['Rubik']">Header Image URL</div>
                        <div className="h-3 justify-between items-center flex">
                            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
                        </div>
                    </div>
                    <input className="h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex w-full text-zinc-400 text-sm font-normal font-['Rubik']" placeholder="Please Input here."></input>
                </div>


                <button className="relative right-0 w-[125px] h-8 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <Image src={check} alt='check' className="" />
                    <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Submit</div>
                </button>
            </div>
        </div>
    </div>
}