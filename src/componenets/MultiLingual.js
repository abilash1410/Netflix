import React from "react";
import { useDispatch } from "react-redux";
import { setPreferredLang } from "../reduxStore/AppConfigSlice";
import { SUPPORTED_LANGUAGE } from "../utils/MultiLingual/languageConfig";

const MultiLingual = () => {
  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    dispatch(setPreferredLang(e.target.value));
  };
  return (
    <div>
      <select
        className=" font-semibold w-24 p-1 text-white m-2 bg-black border border-white rounded-lg bg-opacity-85"
        onChange={(e) => {
          handleLanguageChange(e);
        }}
      >
        {SUPPORTED_LANGUAGE.map((lang) => (
          <option
            className="font-semibold"
            key={lang.identifier}
            value={lang.languageName}
          >
            {lang.languageName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiLingual;
