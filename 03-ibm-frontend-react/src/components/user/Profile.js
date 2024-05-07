import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <>
            <h1>User Profile</h1>
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Aadhar: {userData.aadhaar}</p>
                    <p>Salary: {userData.salary}</p>
                    {userData.avatar && <img width={'300px'} src={userData.avatar} alt="Avatar" />}
                </div>
            )}
            <UpdateProfile />
        </>
    );
};

export default Profile;
