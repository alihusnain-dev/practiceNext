"use client"
import axios from 'axios';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const page = ({ params }) => {
    const { id } = params;
    const [user, setUser] = useState([]);
    const userGet = async () => {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
      setUser(data);
    }
    useEffect(() => {
      userGet();
    }
    , []);
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 mt-15">
        <h1 className='text-3xl mb-20'>User Profile</h1>
        <div className='mb-3'>
            <p className="inline font-semibold text-xl"><span className="text-gray-400 mr-2 text-sm">Name:</span>{user.name}</p><br/>
            <p className="inline font-semibold text-xl"><span className="text-gray-400 mr-2 text-sm">Email:</span>{user.email}</p><br/>
            <p className="inline font-semibold text-xl"><span className="text-gray-400 mr-2 text-sm">Phone:</span>{user.phone}</p><br/>
            <p className="inline font-semibold text-xl"><span className="text-gray-400 mr-2 text-sm">Website:</span>{user.website}</p><br/>
        </div>
    </div>
    </>
  )
}

export default page