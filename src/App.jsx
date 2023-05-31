import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Router from "./router";
import { authenticated } from "./store";

const App = () => {
  const [auth, setAuth] = useRecoilState(authenticated)
  const [mounted, setMounted] = useState(false)
  const getUser = async () => {
    try{
      let response = await axios.get('/me')
      setAuth({
        check:true,
        user:response.data.data
      })
    }catch(e){

    }
    setMounted(true)
  }

  useEffect(() => {
    getUser()
    console.log(auth.check)
    console.log(auth)
  },[auth.check, mounted])

  if(!mounted){
    return (
      <div className="row justify-content-center align-items-center">
        <svg widths='100' height='100' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx={50} cy={50} r={0} fill="none" stroke="#e90c59" strokeWidth={2}>
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s" />
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s" />
          </circle>
          <circle cx={50} cy={50} r={0} fill="none" stroke="#46dff0" strokeWidth={2}>
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s" />
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s" />
          </circle>
        </svg>

      </div>
    )
  }
  return (
    <>
      <Router />
    </>
  );
};

export default App;
