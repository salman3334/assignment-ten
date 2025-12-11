import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user, logout, updateProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(user, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt={user?.displayName}
          className="w-32 h-32 rounded-full object-cover"
        />

        <div className="flex-1 w-full">
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                value={user?.email}
                className="input input-bordered w-full"
                disabled
              />
            </div>

            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className={`btn btn-primary ${loading ? "loading" : ""}`}
              >
                Update Profile
              </button>
              <button
                type="button"
                onClick={logout}
                className="btn btn-outline btn-error"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
