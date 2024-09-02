"use client"
// import { useRouter } from "../../../node_modules/next/router";
import { useRouter } from "../../../node_modules/next/navigation";
import axios from "axios"
import "./sign.css"
import { useEffect, useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false);
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            router.push("/profile")
        }
        catch (error: any) {
            console.log("Login failed", error.message);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 ) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <>
            <div className="flex w-full">
                <div className="w-[30%] bg-blue-200 flex justify-evenly">
                    <div className="w-[90%] mt-[50%]">
                        <label className="text-black font-bold text-xl mb-5">Email</label><br />
                        <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Enter Email" className="h-11 rounded  mt-3 w-full mb-3" /><br />
                        <label className="text-black font-bold text-xl mb-5">Password</label><br />
                        <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Enter Password" className="h-11 rounded mt-3 w-full mb-3" /><br />
                        <label className="text-black font-bold text-xl mb-5">user Name</label><br />
                        {/* <input type="text" value={user.usertype} onChange={(e) => setUser({ ...user, usertype: e.target.value })} placeholder="Enter UserType" className="h-11 rounded mt-3" /><br /> */}
                        
                        <button onClick={onLogin} className="mt-5 p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No Login" : "Login"}</button>
                    </div>
                </div>
                <div className="w-full bg_img bg-red-500">
                    
                </div>
            </div>
        </>
    )
}