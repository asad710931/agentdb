
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InputField from "../components/inputField";
import ButtonField from "../components/buttonField";
import Header from "../components/header";

const LoginPage = () => {

  const [userauth, setUserauth] = useState({ email: "", password: "", errorStatus: "" });

  const authAdmin = async () => {
    if (userauth.email === "" || userauth.password === "") {
      console.log("data required");
      setUserauth({ ...userauth, errorStatus: "Email and Password Fields cant be empty." })
    } else {
      const response = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify(userauth),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        const data = await response.json()
        if (data.message === 'ok') {
          window.location.href = "/dashboard";
        } else {
          console.log('Wrong email and password')
          setUserauth({ ...userauth, errorStatus: "Invalid email or password. Please try again." })

        }
      } else {
        console.log('Wrong email and password')
        setUserauth({ ...userauth, errorStatus: "Invalid email or password. Please try again." })
      }

    }
  }

  return <div className="loginPage bg-gray-100 p-5">
    <div>
      <Header />
    </div>
    <div className="max-w-sm mx-auto mt-10 bg-white p-5 rounded-sm">
      <div className="flex items-center justify-center space-y-4 flex-col">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bangladesh_Jamaat-e-Islami_Emblem.svg/960px-Bangladesh_Jamaat-e-Islami_Emblem.svg.png"
          width="100px" alt="Admin Login"
        />
      </div>
      <h2 className="text-3xl font-bold text-center space-y-16">Admin Portal</h2>
      <br />
      <form className="space-y-5">
        <div>
          <InputField name="email" label="Email Address:" placeholder="raozan@jib.com" value={userauth.email} onChange={(e: any) => setUserauth({ ...userauth, email: e.target.value })} />
        </div>
        <div>
          <InputField name="password" label="Password:" placeholder="*********" value={userauth.password} onChange={(e: any) => setUserauth({ ...userauth, password: e.target.value })} />
        </div>
        {/* Remember Me */}
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-slate-600">
            Keep me logged in
          </label>
        </div>
        <p className="text-red-500 font-17">{userauth.errorStatus}</p>
        {/* Submit Button */}
        <ButtonField value="LogIn" onClick={authAdmin} disabled={false} />
        <p className="text-sm text-slate-500">Secure System Access • <span className="font-semibold text-slate-700">v2.4.0</span>
        </p>
      </form>
    </div>
  </div>
}

export default LoginPage;