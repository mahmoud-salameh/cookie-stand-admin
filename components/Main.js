// import Link from 'next/link'
// export default function Header(props){
//     return(
     
// <main className=" bg-green-50">

// {/* 
//         <header className='flex items-center justify-between bg-green-500 p-6'>

//         <h1 className='text-5xl'>Cookie Stand Admin</h1>
//         <Link href="/overview"><a className=' p-2 bg-green-100 text-right'>Overview</a></Link>
//         </header> */}

//         <form className="flex-col w-3/4 p-2 mx-auto my-8 bg-green-300" onSubmit={submitForm}>
//         <fieldset>  
//           <h1 className="my-3 text-2xl text-center" >Cookie Stand Admin</h1>  
//           <div className="flex">
//           <label className="mx-1">Location</label>
//           <input name="Location"  className="flex-auto bg-gray-100" />
//           </div>
//           <div className="flex w-3/4 my-5" >
//           <div className="flex-col w-1/4">
//          <label >Minimum Custumer per Hour</label>
//           <input type='integer' className="" name="Minimum" />
//          </div>
//          <div className="flex-col w-1/4">
//           <label >Maximum Custumer per Hour</label>
//           <input type='integer'  className=""name="Maximum" />
//           </div>
//           <div className="flex-col w-1/4">
//             <div className="flex"></div><label >Average Cookies per Sales</label>
//           <input type='integer'  className="" name="Average" />
//           </div>
//           <button className="px-20 py-5 bg-green-500 text-gray-50">Create</button>
//           </div>
//         </fieldset>  
//         </form>
        
//         {data.length ?

//         <table className="w-1/2 mx-auto my-4">
//           <thead>
//             <tr>
//               <th className="">location</th>
//               <th className="">minCustomers</th>
//               <th className="">maxCustomers</th>
//               <th className="">Average</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((i) => (
//               <tr>
//                 <td className="pl-2 border border-gray-700">
//                   {i.Location}
//                 </td>
//                 <td className="pl-2 border border-gray-700">
//                   {i.Minimum}
//                 </td>
//                 <td className="pl-2 border border-gray-700">
//                   {i.Maximum}
//                 </td>
//                 <td className="pl-2 border border-gray-700">
//                   {i.Average}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>:
//          <p className="text-center">No Cookies Stands Available</p>
//         }
//          <footer className="bg-green-500 p-6 text-3xl">{`${data.length} Locations World Wide`}</footer>
//       </main>
//     );
//   }
