import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon , ArrowTopRightOnSquareIcon  } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from '@/icons/icon';


export default async function SideNav() {
  
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
          <div className="text-sm flex font-bold items-center justify-center pt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
              <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd" />
            </svg>
            {' '}Follow me on socials
          </div>
          <div className="flex justify-center mt-5">
            <div className="rounded-lg w-12 h-12 hover:bg-blue-200 flex justify-center items-center">
              <InstagramIcon color='#111'/>
            </div>
            <div className="rounded-lg w-12 h-12 hover:bg-blue-200 flex justify-center items-center">
              <XIcon color='#111'/>
            </div>
            <div className="rounded-lg w-12 h-12 hover:bg-blue-200 flex justify-center items-center">
              <LinkedinIcon color='#111'/>
            </div>
            
          </div>
          <div className="flex justify-center">
          <div className="rounded-lg w-12 h-12 hover:bg-blue-200 flex justify-center items-center">
              <FacebookIcon color='#111'/>
            </div>
            <div className="rounded-lg w-12 h-12 hover:bg-blue-200 flex justify-center items-center">
              <GithubIcon color='#111'/>
            </div>
          </div>
        </div>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <ArrowTopRightOnSquareIcon className="w-5" />
          <div className="md:hidden text-xs">
            <strong>
              <a href="https://saeedpk.vercel.app" className="text-blue-400 ">Saeed Pk</a>
            </strong>
          </div>
            <div className="hidden md:block ">Crafted by ⚡<strong><a href="https://saeedpk.vercel.app" className="text-blue-400">Saeed Pk</a></strong> </div>
          </button>
        <form action={async()=>{
          "use server"
          await signOut();
        }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
