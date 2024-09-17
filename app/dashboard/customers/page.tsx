import React, { Suspense } from 'react'
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

const page = async({
  searchParams
}:{
  searchParams?:{
    query?:string;
    page?:string;
  }
}) => {
  const query = searchParams?.query || '';
  
  const customers = await fetchFilteredCustomers(query)
  
  
  return (
     <div className="w-full">
      
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense  >
          <Search placeholder="Search Customers..." />
          
        </Suspense>
      </div>
       <Suspense  >
        <Table customers={customers}/>
      </Suspense>
      
    </div>
  )
}

export default page
