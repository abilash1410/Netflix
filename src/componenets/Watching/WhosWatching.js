import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import {
  NETFLIX_GREEN_ICON,
  NETFLIX_USER_ICON_BLUE,
  NETFLIX_USER_ICON_BLUE_2,
  NETFLIX_USER_ICON_RED,
} from "../../utils/constants";
import { addProfileUsers } from "../../reduxStore/userSlice";
import { useNavigate } from "react-router-dom";

const WhosWatching = () => {
  const profielUserStore = useSelector((store) => store.user.profileUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nickName = useRef();
  const profileImgArr = [
    NETFLIX_USER_ICON_BLUE,
    NETFLIX_USER_ICON_RED,
    NETFLIX_GREEN_ICON,
    NETFLIX_USER_ICON_BLUE_2

  ];
  const [profileImgSelection,setProfileImgSelection] = useState(null);
  const [isAddProfile, setIsAddProfile] = useState(false);
  const addUser = (e) => {
    setIsAddProfile(true);
  };

  const navigateToBrowsePage = () => {
    navigate("/browse");
  };

  const submitAddProfileDetails = () => {
    dispatch(
      addProfileUsers({
        name: nickName.current.value,
        profileImg: profileImgSelection,
      })
    );

    setIsAddProfile(false);
  };
  return (
    <div className="bg-black h-screen">
      <Header></Header>
      {!isAddProfile && (
        <div className="flex flex-col justify-center items-center mt-36">
          <h1 className="text-white font-bold text-4xl">Who's Watching ?</h1>
          <div className="flex flex-row">
            <div className="flex flex-row items-center p-4 cursor-pointer">
              {profielUserStore.map((profile,index) => (
                <div key = {index}className="ml-5">
                  <div>
                    <img
                      className={"w-52"}
                      onClick={() => {navigateToBrowsePage()}}
                      alt="user-profile-icon"
                      src={profile.profileImg}
                    ></img>
                  </div>

                  <p className="text-white font-bold mt-5">{profile.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col  justify-center p-4 cursor-pointer">
              <div className="flex">
                <button
                  onClick={(e) => {
                    addUser();
                  }}
                  className="bg-white p-2 font-bold border border-white"
                >
                  Add Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAddProfile && (
        <div className="flex flex-col mt-36 w-1/2 justify-center ml-[30%] ">
          <h1 className="text-white text-3xl mb-10">Add a new profile</h1>
          <p className="text-white text-xl"></p>
          <input
            type="text"
            ref={nickName}
            className="bg-white p-2 rounded-lg"
            placeholder="Type your nickname"
          ></input>

          <div className="flex flex-row mt-8">
            
            {profileImgArr.map((img,index) => (
              <div key = {index} className="flex items-center">
                <img 
                  onClick={() => {
                    setProfileImgSelection(img)
                  }}
                  className={!profileImgSelection?"w-32 cursor-pointer ml-5":'w-32 cursor-pointer ml-5 border border-b-red-700'}
                  alt="user-profile-icon 1"
                  src={img}
                ></img>
              </div>
            ))}
          </div>
          <button
            onClick={(e) => {
              submitAddProfileDetails();
            }}
            className="w-48 justify-center text-black hover:bg-opacity-75 rounded-lg bg-white p-1 mt-5 font-bold border"
          >
            Let's Do It
          </button>
        </div>
      )}
    </div>
  );
};

export default WhosWatching;
