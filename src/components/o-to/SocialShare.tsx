'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function SocialShare() {
  return (
    <div className="flex items-center gap-3 text-gray-400 mt-10">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-[35px] h-[35px] rounded-full hover:bg-[#3A589D] hover:text-white'>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>

      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-[35px] h-[35px] rounded-full hover:bg-[#2478BA] hover:text-white'>
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>

      <a href="mailto:?subject=Check%20this%20out" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-[35px] h-[35px] rounded-full hover:bg-black hover:text-white'>
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>

      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-[35px] h-[35px] rounded-full hover:bg-red-500 hover:text-white'>
        <FontAwesomeIcon icon={faPinterest} size="lg" />
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-[35px] h-[35px] rounded-full hover:bg-[#0072B8] hover:text-white'>
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    </div>
  );
}
