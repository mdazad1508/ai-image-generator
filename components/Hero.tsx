import React, { useState } from "react";
import { Input, InputRef } from "antd";
import { Button } from "antd";
import { useRecoilValue } from "recoil";
import { aiState } from "./atoms/initialState";
import { useSetRecoilState } from "recoil";
import Leaf from "./Leaf";
import axios from "axios";

const Home = () => {
  const { prompt } = useRecoilValue(aiState);
  const setAiState = useSetRecoilState(aiState);
  const [x, setX] = useState("");

  const generateImage = async (): Promise<void> => {
    setAiState((prev) => {
      return {
        ...prev,
        isLoading: true,
      };
    });
    const url = "http://localhost:8000/generate";
    const data = {
      prompt: x,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.image);
      setAiState((prev) => {
        return {
          ...prev,
          image: result.image,
          isLoading: false,
        };
      });
    } catch (err) {
      console.log("error occured " + err);
    }

    /* if(response.ok){
    setAiState((prev)=>{
     return {
      ...prev,
      image:result.image
     }
    }) */

    //}
  };

  return (
    <div className="flex  justify-center flex-col  items-center p-20">
      <h1 className=" text-5xl ">
        <span className=" text-fuchsia-600"> AI </span>
        IMAGE
        <span className=" text-fuchsia-600"> GENERATOR </span>
      </h1>
      <div>
        <Input
          placeholder="Enter prompt..."
          className=" w-80 mt-20 m-3"
          onChange={(e) => setX(e.target.value)}
        />
        <Button
          type="primary"
          className="bg-fuchsia-600  md:w-40 sm: ml-32 md:ml-0"
          onClick={generateImage}
        >
          Generate
        </Button>
      </div>
      <Leaf />
      <p >Developed by Azad</p>
    </div>
  );
};

export default Home;
