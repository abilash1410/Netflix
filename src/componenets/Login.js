import React, { useState, useRef} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebasecosole/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProfileUsers, addUser } from "../reduxStore/userSlice";
import Header from "./Header";
import { NETFLIX_BANNER, NETFLIX_USER_ICON_RED } from "../utils/constants";


const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignInForm, setIsSignInForm] = useState(true);
  let emailID = useRef();
  let password = useRef();
  let name = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let nameJSon = {
    "person":{
      "name":'abi',
    }
  }

  let test = nameJSon.person?.name??'unknown';
  console.log(test);

  
  // let json = {
  //   method: "POST",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body:JSON.stringify({
  //     Id: 0,
  //     ProductName: "from-react JS",
  //     Price: 500,
  //     Quantity: 6,
  //     CreatedOn: "2014-12-31T23:59:59.938Z",
  //     CreatedBy: 14,
  //     UpdatedOn: "2014-12-31T23:59:59.938Z",
  //     UpdatedBy: 14,
  //     IsActive: false,
  //   }),
    
  // };
  // const getAll = async () => {
  //   const data = await fetch('https://personal-abbmtdk7.outsystemscloud.com/App1_APIProvider_CS/rest/Products/Add', json)
  //   //const data = await fetch("https://personal-abbmtdk7.outsystemscloud.com/App1_APIProvider_CS/rest/Products/GetAll");
  //   const json_data = await data.json();
  //   console.log(json_data);
  // };
  // useEffect(() => {
  //   getAll();
  // }, []);

  const navigateToBrowsePage = () => {

    navigate("/whosWatching");
  };
  const updateUserProfile = (user) => {
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: NETFLIX_USER_ICON_RED,
    })
      .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        // Profile updated and navigate to Browse page!
        navigateToBrowsePage();
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
  };

  const signIntoNetflix = () => {
    signInWithEmailAndPassword(
      auth,
      emailID.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in and do update Profile
        const user = userCredential.user;
        console.log("signed In-->" + user);

        dispatch(
          addProfileUsers({
            profileImg: user.photoURL,
            name: user.displayName,
          })
        );
       
        navigateToBrowsePage();
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
  };

  const signUpToNetflix = () => {
    createUserWithEmailAndPassword(
      auth,
      emailID.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up and do update Profile
        const user = userCredential.user;
        console.log("signed Up-->" + user);
        updateUserProfile(user);
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
  };

  const handleLogin = (e) => {
    const validationCheck = ValidateData(
      isSignInForm ? "Sign In" : "Sign Up",
      isSignInForm ? "" : name.current.value,
      emailID.current.value,
      password.current.value
    );
    setErrorMessage(validationCheck);

    if (validationCheck) return;
    if (isSignInForm) {
      //Sign in logic
      signIntoNetflix();
    } else {
      //Sign up logic
      signUpToNetflix();
    }
  };
  return (
    <div>
      <Header />
      <div className="fixed">
        <img alt="netflix-banner" src={NETFLIX_BANNER}></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={
          "w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80"
        }
      >
        <h1 className="font-bold text-3xl py-4">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {/* {(errorMessage !== '' && <div className="w-full h-10 text-black bg-yellow-600 rounded-lg">
         
        </div>)} */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="w-full p-2 my-4 bg-gray-700 rounded-md"
          ></input>
        )}
        <input
          ref={emailID}
          type="text"
          placeholder="Enter Email or Phone"
          className="w-full p-2 my-4 bg-gray-700 rounded-md"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 my-4 bg-gray-700 rounded-md"
        ></input>

        <p className="font-bold text-red-700">{errorMessage}</p>

        <button
          className="hover:bg-opacity-80 w-full p-2 my-6 bg-red-700 rounded-md"
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-wrap">
          <p>{isSignInForm ? "New to Netflix?" : "Already a member?"} </p>
          <Link
            onClick={() => {
              setIsSignInForm(!isSignInForm);
              setErrorMessage("");
              emailID.current.value = "";
              password.current.value = "";
            }}
            className="ml-2 cursor-pointer hover:border-b-2"
          >
            {isSignInForm ? "Sign up now." : "Sign In."}
          </Link>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Login;