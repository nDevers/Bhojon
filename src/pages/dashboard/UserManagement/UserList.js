import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Pagination from "../../../components/Pagination";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const UserList = () => {
  // set website title
  useWebsiteTitle("User | User List");

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between border-b p-2 mb-4">
        <h2 className="uppercase font-semibold">User list</h2>

        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-xs input-bordered"
            />
            <button className="btn btn-xs flex items-center gap-x-2 uppercase">
              <BiSearch /> Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="form-control">
            <label className="input-group input-group-xs">
              <span className="btn btn-xs bg-gray-700">From</span>
              <input
                type="date"
                placeholder="Start Date"
                className="input input-bordered input-xs"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-xs">
              <span className="btn btn-xs bg-gray-700">To</span>
              <input
                type="date"
                placeholder="End Date"
                className="input input-bordered input-xs"
              />
            </label>
          </div>

          <button className="btn btn-xs">Search</button>
          <button className="btn btn-xs">Reset</button>
        </div>
      </div>

      <div className="  -smooth   bar-thin   bar-thumb-gray-400 p-2">
        <table className="table table-zebra table-compact w-full">
          <thead className="text-gray-600">
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Customer Name</th>
              <th>Username</th>
              <th>Email Address</th>
              <th>About</th>
              <th>Last Login</th>
              <th>Last Logout</th>
              <th>IP Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>
                <span className="avatar">
                  <span className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </span>
                </span>
              </td>
              <td>Quality Control</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden</td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>Littel, Schaden </td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
};

export default UserList;
