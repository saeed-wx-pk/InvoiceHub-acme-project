import SideNav from '@/app/ui/dashboard/sidenav';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from '@/icons/icon';
import { UserGroupIcon } from '@heroicons/react/24/outline';
 
export const experimental_ppr = true
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        <div className="flex justify-center">
          <div className="bg-slate-200 shadow-md w-fit mt-5 p-5 rounded-lg">
            <div className="text-xs flex font-bold items-center">
              <UserGroupIcon className='w-7 mr-2'/>
              {' '}Follow me on socials
            </div>
            <div className="flex gap-1 mt-5">
              <div className="rounded-lg w-8 h-8 hover:bg-slate-200 hover:border-blue-500 transition border border-blue-300 shadow-sm hover:shadow-lg  flex justify-center items-center">
                <InstagramIcon color='#111'/>
              </div>
              <div className="rounded-lg w-8 h-8 hover:bg-slate-200 hover:border-blue-500 transition border border-blue-300 shadow-sm hover:shadow-lg flex justify-center items-center">
                <XIcon color='#111'/>
              </div>
              <div className="rounded-lg w-8 h-8 hover:bg-slate-200 hover:border-blue-500 transition border border-blue-300 shadow-sm hover:shadow-lg flex justify-center items-center">
                <LinkedinIcon color='#111'/>
              </div>
              <div className="rounded-lg w-8 h-8 hover:bg-slate-200 hover:border-blue-500 transition border border-blue-300 shadow-sm hover:shadow-lg flex justify-center items-center">
                <FacebookIcon color='#111'/>
              </div>
              <div className="rounded-lg w-8 h-8 hover:bg-slate-200 hover:border-blue-500 transition border border-blue-300 shadow-sm hover:shadow-lg flex justify-center items-center">
                <GithubIcon color='#111'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}