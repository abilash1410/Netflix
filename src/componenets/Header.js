import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebasecosole/firebase";
import { useDispatch } from "react-redux";
import { addProfileUsers, addUser, removeProfileUsers, removeUser } from "../reduxStore/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGPTSearch } from "../reduxStore/GPTSlice";
import MultiLingual from "./MultiLingual";

const Header = () => {
  const userStore = useSelector((store) => store.user.loggedInUser);
  const isUser = userStore;
  const navigate = useNavigate();
  const [isAbsolute, setIsAbsolute] = useState(true);
  const dispatch = useDispatch();
  let monitorAuthStateChange = (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/signed up so add current signed in/signed up user to the redux-store
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
          })
        );
        //navigate("/browse");
        setIsAbsolute(false);
        
      } else {
        // User is signed out so clear the redux-store
        dispatch(removeUser());
        dispatch(removeProfileUsers());
        navigate("/");
        setIsAbsolute(true);
      }
    });
  };
  useEffect(() => {
    const authMonitor = monitorAuthStateChange(dispatch);

    // when a component is un-mounted then clear the event listner (which will return unsubscribe)
    return () => authMonitor;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfull
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearchClick = () => {
    dispatch(toggleGPTSearch());
  };


  return (
    <div
      className={
        "flex justify-between px-8 py-2 z-10 absolute bg-gradient-to-b from-black" +
        (!isAbsolute &&
          "w-full sticky justify-between px-8 py-2 z-10 bg-gradient-to-b from-black")
      }
    >
      <Link to="/browse">
        <img alt="Netflix-logo" src={NETFLIX_LOGO} className="w-48"></img>
      </Link>
      {isUser && (
        <div>
          <div className="p-4 flex flex-row">
            <div className="items-center flex "></div>
            <MultiLingual />
            <button
              className="bg-red-700 text-white font-bold py-2 px-4 mr-4 mt-1 rounded-lg hover:bg-opacity-75"
              onClick={() => handleSearchClick()}
            >
              GPT Search
            </button>

            <img
              className="w-10 h-10"
              alt="userProfile-icon"
              //src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              src={isUser.photoURL}
            ></img>
            <button
              className="p-1 m-1 font-bold text-white"
              onClick={handleSignOut}
            >
              ( Sign out ){" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
