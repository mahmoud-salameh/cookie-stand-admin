import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  function submitForm(event) {
    event.preventDefault();
    const answeredQuestion = {
      Location: event.target.Location.value,
      Minimum: event.target.Minimum.value,
      Maximum: event.target.Maximum.value,
      Average: event.target.Average.value,
    };
    setData((answers) => [...answers, answeredQuestion]);
  }
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-green-50">


        <header className='bg-green-500 p-6'>

        <h1 className='text-5xl'>Cookie Stand Admin</h1>

        </header>

        <form className="flex-col w-3/4 p-2 mx-auto my-8 bg-green-300" onSubmit={submitForm}>
        <fieldset>  
          <h1 className="my-3 text-2xl text-center" type ='text'>Cookie Stand Admin</h1>  
          <div className="flex">
          <label className="mx-1">Location</label>
          <input name="Location"  className="flex-auto bg-gray-100" />
          </div>
          <div className="flex w-3/4 my-5" >
          <div className="flex-col w-1/4">
         <label >Minimum Custumer per Hour</label>
          <input type='integer' className="" name="Minimum" />
         </div>
         <div className="flex-col w-1/4">
          <label >Maximum Custumer per Hour</label>
          <input type='integer'  className=""name="Maximum" />
          </div>
          <div className="flex-col w-1/4">
            <div className="flex"></div><label >Average Cookies per Sales</label>
          <input type='integer'  className="" name="Average" />
          </div>
          <button className="px-20 py-5 bg-green-500 text-gray-50">Create</button>
          </div>
        </fieldset>  
        </form>

        <table className="w-1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="">location</th>
              <th className="">minCustomers</th>
              <th className="">maxCustomers</th>
              <th className="">Average</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr>
                <td className="pl-2 border border-gray-700">
                  {i.Location}
                </td>
                <td className="pl-2 border border-gray-700">
                  {i.Minimum}
                </td>
                <td className="pl-2 border border-gray-700">
                  {i.Maximum}
                </td>
                <td className="pl-2 border border-gray-700">
                  {i.Average}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      <footer className="bg-green-500 p-6 text-3xl">&copy;2021</footer>
      </main>
    </div>
  );
}