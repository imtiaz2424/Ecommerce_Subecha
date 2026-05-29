"use client";

import {
  useEffect,
  useState,
  useContext,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "../../context/AuthContext";

export default function ProfilePage() {

  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  );

  const [user, setUser] = useState({
    name: "Imtiaz Sharif",
    email: "imtiaz@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
  });

  const { logout } = useContext(AuthContext);

  // Load saved data

  useEffect(() => {

    const savedUser =
      localStorage.getItem("profileUser");

    const savedImage =
      localStorage.getItem("profileImage");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedImage) {
      setProfileImage(savedImage);
    }

  }, []);

  // Save profile

  const handleSave = () => {

    localStorage.setItem(
      "profileUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "profileImage",
      profileImage
    );

    alert("Profile Updated Successfully");

    setIsEditing(false);
  };

  // Input change

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  // Image upload

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setProfileImage(imageUrl);
    }

  };

  // Logout

  const handleLogout = () => {

  logout();

  localStorage.removeItem("profileUser");
  localStorage.removeItem("profileImage");

  alert("Logged Out");

  router.push("/");
};

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* Sidebar */}

        <div className="bg-white rounded-[40px] shadow-xl p-10 text-center h-fit">

          {/* Profile Image */}

          <div className="relative w-fit mx-auto">

            <img
              src={profileImage}
              alt="Profile"
              className="w-44 h-44 rounded-full object-cover border-4 border-black"
            />

            {isEditing && (

              <label className="absolute bottom-2 right-2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-xl">

                ✎

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />

              </label>

            )}

          </div>

          <h1 className="text-4xl font-black mt-8 mb-2">
            {user.name}
          </h1>

          <p className="text-gray-500 mb-8">
            Premium Customer
          </p>

          <div className="space-y-4">

            {!isEditing ? (

              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-black text-white py-4 rounded-2xl text-lg font-bold hover:bg-gray-800 transition"
              >
                Edit Profile
              </button>

            ) : (

              <button
                onClick={handleSave}
                className="w-full bg-green-500 text-white py-4 rounded-2xl text-lg font-bold hover:bg-green-600 transition"
              >
                Save Changes
              </button>

            )}

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-4 rounded-2xl text-lg font-bold hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Main Content */}

        <div className="lg:col-span-2 space-y-10">

          {/* Personal Information */}

          <div className="bg-white rounded-[40px] shadow-xl p-10">

            <div className="flex justify-between items-center mb-10">

              <div>

                <p className="uppercase tracking-[5px] text-gray-500 mb-3">
                  User Information
                </p>

                <h2 className="text-5xl font-black">
                  My Profile
                </h2>

              </div>

              <Link
                href="/"
                className="bg-black text-white px-6 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition"
              >
                Home
              </Link>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Name */}

              <div>

                <label className="block text-gray-500 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-5 py-4 rounded-2xl border outline-none text-xl ${
                    isEditing
                      ? "border-black bg-white"
                      : "border-gray-200 bg-gray-100"
                  }`}
                />

              </div>

              {/* Email */}

              <div>

                <label className="block text-gray-500 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-5 py-4 rounded-2xl border outline-none text-xl ${
                    isEditing
                      ? "border-black bg-white"
                      : "border-gray-200 bg-gray-100"
                  }`}
                />

              </div>

              {/* Phone */}

              <div>

                <label className="block text-gray-500 mb-3">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-5 py-4 rounded-2xl border outline-none text-xl ${
                    isEditing
                      ? "border-black bg-white"
                      : "border-gray-200 bg-gray-100"
                  }`}
                />

              </div>

              {/* Address */}

              <div>

                <label className="block text-gray-500 mb-3">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-5 py-4 rounded-2xl border outline-none text-xl ${
                    isEditing
                      ? "border-black bg-white"
                      : "border-gray-200 bg-gray-100"
                  }`}
                />

              </div>

            </div>

          </div>

          {/* Recent Orders */}

          <div className="bg-white rounded-[40px] shadow-xl p-10">

            <div className="flex justify-between items-center mb-10">

              <div>

                <p className="uppercase tracking-[5px] text-gray-500 mb-3">
                  Orders
                </p>

                <h2 className="text-5xl font-black">
                  Recent Orders
                </h2>

              </div>

              <Link
                href="/"
                className="bg-gray-200 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition"
              >
                Shop More
              </Link>

            </div>

            <div className="space-y-6">

              <div className="border border-gray-200 rounded-3xl p-6 flex flex-col lg:flex-row justify-between items-center gap-6">

                <div>

                  <p className="text-gray-500 mb-2">
                    Order ID
                  </p>

                  <h3 className="text-2xl font-black">
                    #SB12345
                  </h3>

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Product
                  </p>

                  <h3 className="text-2xl font-black">
                    Smart Watch
                  </h3>

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Status
                  </p>

                  <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold">
                    Delivered
                  </span>

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Total
                  </p>

                  <h3 className="text-3xl font-black">
                    $99
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}