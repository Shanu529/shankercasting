import React, { useEffect, useState } from "react";
import api from "../../api/axios";

function DashboardOverview() {

  const [starts, setStart] = useState({
    totalBlogs: 0,
    totalContacts: 0,
    totalUsers: 0,
    totalSubscribersNewsletters: 0
  });
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/api/dashboard");
        setStart(res.data);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    fetchStats();
  }, [setStart]); //  fixed

  useEffect(()=>{
    const fatchActivity = async ()=>{
      try {
        const res = await api.get("/api/dashboard/activity")
        console.log("here is activity", res.data);
        setActivity(res.data);
        
      } catch (error) {
        console.log("Something went wrong", error);

      }
    }
    fatchActivity();
  },[setActivity])
  
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Welcome back, Admin 👋 Here’s what’s happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 text-sm">Total Blogs</h3>
          <p className="text-3xl font-bold mt-3 text-gray-900">
            {starts.totalBlogs}
          </p>
          <p className="text-xs text-green-600 mt-2">Live data</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 text-sm">Total Contacts</h3>
          <p className="text-3xl font-bold mt-3 text-gray-900">
            {starts.totalContacts}
          </p>
          <p className="text-xs text-blue-600 mt-2">Live data</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 text-sm">Newsletter Subscribers</h3>
          <p className="text-3xl font-bold mt-3 text-gray-900">
            {starts.totalSubscribersNewsletters}
          </p>
          <p className="text-xs text-purple-600 mt-2">Live data</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 text-sm">Active Users</h3>
          <p className="text-3xl font-bold mt-3 text-gray-900">
            {starts.totalUsers}
          </p>
          <p className="text-xs text-orange-600 mt-2">Live data</p>
        </div>

      </div>


       {/* this one to update */}
     <div className="bg-white p-6 rounded-xl shadow">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Recent Activity
  </h3>

  <ul className="space-y-4 text-sm text-gray-600">

    {activity.length === 0 && (
      <li>No recent activity</li>
    )}

    {activity.map((item, index) => (
      <li key={index} className="flex justify-between">
        <span>{item.message}</span>
        <span className="text-gray-400">
          {new Date(item.createdAt).toLocaleString()}
        </span>
      </li>
    ))}

  </ul>
</div>


    </div>
  );
}

export default DashboardOverview;
