import React from "react";
import useWebsiteTitle from "../../../../hooks/useWebsiteTitle";

const ManageCategorySummary = () => {
  const summaryData = [
    {
      name: "Lifetime Orders",
      value: 1000,
    },
    {
      name: "Today Orders",
      value: 100,
    },
    {
      name: "Today Sell",
      value: 80,
    },
    {
      name: "Total Customer",
      value: 8000,
    },
    {
      name: "Total Delivered",
      value: 6000,
    },
    {
      name: "Total Reservation",
      value: 90,
    },
  ];

  const latestSummary = [
    {
      title: "Hot Category",
      data: [
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
      ],
    },
    {
      title: "All Category",
      data: [
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
      ],
    },
    {
      title: "Top Category",
      data: [
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
      ],
    },
  ];

  // set website title
  useWebsiteTitle("Food Management | Manage Category");

  return (
    <div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:gap-6 md:gap-5 gap-4">
        {summaryData?.map((summary) => (
          <div
            key={summary?.name}
            className="p-3 bg-gray-200 rounded-md flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-3xl font-semibold">{summary?.value}</h2>
            <h3 className="text-lg font-medium">{summary?.name}</h3>
          </div>
        ))}
      </div>

      <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-5 gap-4">
        {latestSummary?.map((summary) => (
          <div className="h-96 p-4 border rounded-md overflow-y-auto">
            <h4 className="text-lg font-medium pb-4 mb-4 border-b">
              {summary?.title}
            </h4>
            {summary?.data?.map((customer) => (
              <div key={customer?.phone} className="border-b mb-2 pb-2">
                <h2 className="font-medium">Name: {customer?.name}</h2>
                <span className="text-sm font-light">
                  <p>Phone: {customer?.phone}</p>
                  <p>Order No: {customer?.order}</p>
                  <p>Table No: {customer?.table}</p>
                  <p>Time: {customer?.time}</p>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCategorySummary;
