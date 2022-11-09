import React from "react";
import Swal from "sweetalert2";
import { getAuth, deleteUser } from "firebase/auth";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Toggle from "../../components/Toggle";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import { useNavigate } from "react-router-dom";

const UserSettings = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  // set website title
  useWebsiteTitle("User | Settings");

  return (
    <div className="mx-4 md:mx-32 lg:mx-40 h-screen">
      <div className="m-2">
        <Breadcrumbs />
      </div>
      <div className="border rounded-md">
        <h3 className="uppercase font-semibold p-2">Settings</h3>
        <div className="border-t">
          <div className="flex flex-col gap-5 items-center justify-center m-3 md:m-6 lg:m-10">
            <Input
              inputTitle="Email Address"
              inputType="email"
              inputPlaceHolder="company@email.com"
            />
            <Input
              inputTitle="Current Password"
              inputType="password"
              inputPlaceHolder="Current Password"
            />
            <Input
              inputTitle="New Password"
              inputType="password"
              inputPlaceHolder="New Password"
            />
            <Input
              inputTitle="Confirm New Password"
              inputType="password"
              inputPlaceHolder="Confirm New Password"
            />
            <Input
              inputTitle="Phone"
              inputType="tel"
              inputPlaceHolder="+8801700000000"
            />
            <Toggle toggleTitle="Deactivate Account" />

            <div className="grid grid-cols-2 items-center w-full md:4/6 lg:w-3/6">
              <h3 className="text-sm md:text-text-[16px] lg:text-[16px] font-medium">
                Delete Account
              </h3>
              <button
                className="btn btn-sm btn-outline btn-primary"
                onClick={() =>
                  Swal.fire({
                    icon: "warning",
                    title: "Are you sure?",
                    text: "This can not be undone",
                    showCancelButton: true,
                    confirmButtonText: "Yes",
                    customClass: {
                      actions: "my-actions",
                      cancelButton: "order-2 right-gap",
                      confirmButton: "order-1",
                    },
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/");

                      deleteUser(user)
                        .then(() => {
                          // User deleted.
                          Swal.fire({
                            icon: "success",
                            title: "Your account has been deleted successfully",
                          });
                        })
                        .catch((error) => {
                          // An error ocurred
                          Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: `${error}`,
                          });
                        });
                    }
                  })
                }
              >
                Delete Account
              </button>
            </div>
            <div className="grid w-full md:w-3/6 lg:w-3/6">
              <div className="flex justify-end gap-x-2">
                <Button buttonTitle="Save" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
