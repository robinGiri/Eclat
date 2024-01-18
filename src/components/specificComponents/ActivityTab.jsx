import React, { useState } from "react";
import '../specificComponents/customShadow.css'
const RecentOrders = [
  { id: 1, date: "2023-01-01", total: 50.0, items: ["Handcrafted Backpack", "Eco-Friendly Tote"] },
  { id: 2, date: "2023-02-15", total: 75.5, items: ["Leather Crossbody Bag", "Canvas Messenger Bag", "Travel Backpack"] },
  { id: 3, date: "2023-03-05", total: 92.3, items: ["Stylish Clutch", "Weekender Duffel", "Professional Laptop Bag"] },
  { id: 4, date: "2023-04-20", total: 64.8, items: ["Convertible Shoulder Bag", "Rolltop Laptop Backpack", "Premium Luggage Set"] },
];


const OrderHistory = [
  { id: 1, date: "2022-01-01", total: 50.0, items: ["Classic Tote", "Messenger Bag"] },
  { id: 2, date: "2022-02-15", total: 75.5, items: ["Leather Backpack", "Canvas Satchel", "Travel Duffel"] },
  { id: 3, date: "2022-03-05", total: 92.3, items: ["Crossbody Purse", "Weekender Bag", "Laptop Briefcase"] },
  { id: 4, date: "2022-04-20", total: 64.8, items: ["Convertible Clutch", "Rolltop Backpack", "Luggage Set"] },
];


function ActivityTab() {
  const [ordersRecent, setOrdersRecent] = useState(RecentOrders);
  const [ordersHistory, setOrdersHistory] = useState(OrderHistory);


  return (
    <div className="mx-10">
      <div className="">
      <h1 className="font-semibold text-neutral-700 py-5 text-lg">Recent Orders</h1>
      {ordersRecent.map((order) => (
        <div key={order.id} className="custom-shadow rounded-md p-5 mb-4">
          <h2 className="text-sm font-semibold mb-2">Order #{order.id}</h2>
          <p className="text-sm font-medium">Date: {order.date}</p>
          <p className="text-sm mb-2 font-medium">Total: ${order.total.toFixed(2)}</p>
          <ul className="text-xs list-disc list-inside">
            {order.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {ordersRecent.length === 0 && (
        <p className="text-gray-500">No past orders available.</p>
      )}

      <h1 className="font-semibold text-neutral-700 mt-7 py-5 text-lg">Order History</h1>
      {ordersHistory.map((order) => (
        <div key={order.id} className="custom-shadow rounded-md p-5 mb-4 opacity-80">
          <h2 className="text-sm font-semibold mb-2">Order #{order.id}</h2>
          <p className="text-sm font-medium">Date: {order.date}</p>
          <p className="text-sm mb-2 font-medium">Total: ${order.total.toFixed(2)}</p>
          <ul className="text-xs list-disc list-inside">
            {order.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {ordersHistory.length === 0 && (
        <p className="text-gray-500">No past orders available.</p>
      )}
    </div>
    </div>
  );
}

export default ActivityTab;
