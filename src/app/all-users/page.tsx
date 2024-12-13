import React from 'react';
import Header from '../components/Header';
import AllUsers from '../components/AllUsers';

function UserPage() {
  return (
    <>
      <section>
        <Header />
      </section>
      <br />
      <div className="container mx-auto py-8">
      <h1 className="text-2xl text-black font-bold mb-4">All User</h1>
      <AllUsers />
    </div>
    </>
  )
}

export default UserPage;