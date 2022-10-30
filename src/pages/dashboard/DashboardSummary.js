import React from "react";

const DashboardSummary = () => {
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
      title: "Latest Order",
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
      title: "Latest Reservation",
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
      title: "Latest Online Order",
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

  return (
    <div>
      <div className="flex md:grid lg:gird lg:grid-cols-6 md:grid-cols-4 gap-4 pb-2 overflow-auto">
        {summaryData?.map((summary) => (
          <div className="p-3 bg-gray-200 rounded-md flex flex-col text-center" key={summary?.name}>
            <h2 className="text-2xl font-semibold">{summary?.value}</h2>
            <h3 className="text-md font-medium">{summary?.name}</h3>
          </div>
        ))}
      </div>

      {/* for medium and large device */}
      <div className="mt-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {latestSummary?.map((summary) => (
          <div className="h-64 md:h-86 lg:h-96 p-2 border rounded-md overflow-y-auto scroll-smooth" key={summary?.title}>
            <h4 className="text-lg font-medium pb-3 mb-3 border-b">
              {summary?.title}
            </h4>
            {summary?.data?.map((customer) => (
              <div className="border-b mb-2 pb-2" key={customer?.time}>
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

export default DashboardSummary;
