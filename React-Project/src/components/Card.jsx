import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Card = ({ data }) => {
    return (
        <div className='relative w-60 h-72 bg-zinc-900 rounded-[30px] px-5 py-10 text-white overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5'>{data.desc}</p>
            <div className='absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between py-3 px-8'>
                    <h5>{data.filesize}</h5>
                    <span>
                        {data.close ? <IoClose /> : <LuDownload />}
                    </span>
                </div>
                {data.tag.isopen && (
                    <div className="w-full py-4 flex items-center justify-center bg-green-600">
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Card