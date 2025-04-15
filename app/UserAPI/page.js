"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [user, setUser] = useState([]);
  const userGet = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(data);
  }
  useEffect(() => {
    userGet();
  }
  , []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 mt-15">
      <h1 className='text-3xl mb-20'>Users</h1>
      <ul>
        {user.map((user, index) => (
          <li key={index} className='mb-3'>
            <p className="inline font-semibold text-xl"><span className="text-gray-400 mr-2 text-sm">{index+1}.</span>{user.name}</p>
            <Link href={`/UserAPI/${user.id}`} className="text-blue-500 hover:underline ml-3">View Profile</Link>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Page;
