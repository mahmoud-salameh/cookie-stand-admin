import Link from 'next/link'
import React from 'react'




export default function overview() {
    return (
        


        <header className="flex items-center justify-between p-4 bg-green-500">
        <h1 className='text-3xl'>
          Cookie Stand Admin
        </h1>
        <Link href="/"><a>Return to Main page</a></Link>
        
      </header>

        
    )
}