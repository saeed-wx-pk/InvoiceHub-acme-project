import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon  } from '@heroicons/react/24/outline';

import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from '@/icons/icon';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        <div className="ml-auto">
          <div className="hidden gap-3 md:flex">
            <InstagramIcon color='white'/>
            <XIcon color='white'/>
            <LinkedinIcon color='white'/>
            <FacebookIcon color='white'/>
            <GithubIcon color='white'/>
            
          </div>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 lg:text-2xl md:leading-normal`}>
            <strong>Welcome to My Next.js Project</strong> <br />
            This project showcases my learning and development journey with Next.js. I built this website to explore and apply the concepts learned from the {' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <p className={`${lusitana.className} text-lg text-gray-800 lg:text-xl md:leading-normal`}>
            Designed by <strong><a href="https://saeedpk.vercel.app" className="text-blue-400">Saeed Pk</a></strong> <br />
            This is open source project give ✨ on <a href="https://github.com/saeed-wx-pk/InvoiceHub-acme-project" className='text-blue-400 '>Github<span className='text-xs'>🔗</span></a>
          </p>
          <div className="flex gap-3 md:hidden">
            <InstagramIcon color='black'/>
            <XIcon color='black'/>
            <LinkedinIcon color='black'/>
            <FacebookIcon color='black'/>
            <GithubIcon color='black'/>
            
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
      
    </main>
  );
}
