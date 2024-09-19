"use client"
import * as React from 'react';
import { useEffect } from 'react'
import Image from "next/image";
import logo from "../public/logo.png"
import sidebtn from "../public/sidebtnimg.jpg";


import { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {

 
    const navitem = [["Home", "/"], ["About", "./About"], ["Login", "./Login"], ["Vision", "./Vision"], ["Mission", "./Mission"]];

    


    const [nav, setNav] = useState(0); 
    const [cart, setCart] = useState(0);
    const [totalamt, settotalamt] = useState(0);
    const [devWidth, setDevWidth] = useState(0);


    const sidenavset = () => {
        if (nav) {
            setNav(0);
        }
        else {
            setNav(1);
        }

    }
    const setcart = () => {

        if (cart) {
            setCart(0);

        }
        else {
            setCart(1);
        }

    }
    useEffect(() => {
       
        setwidth();
    }, [])

    const setwidth = () => {
        setDevWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", setwidth);
        return () => window.removeEventListener("resize", setwidth);
    }, [devWidth])



    const removeitem = () => {
        console.log("yes");
    }
    return (

        <div className='pb-[50px]'>
            <div className=" fixed navbar w-[100%] h-[50px] bg-gray-950 flex justify-between text-white" >
                <div className="first flex">
                    <button onClick={sidenavset} className="side-bar-btn visible lg:hidden bg-gray-950 w-[40px] h-[40px] m-1"><Image src={sidebtn} alt='side bar logo' /></button>
                    

                </div>
                <div style={{}} className=" middle hidden lg:flex">
                    <ul className='flex my-[7px] '>
                        {
                            navitem.map((item, index) => (
                                <Link href={item[1]} key={index} ><li key={index} className='mx-5 font-semibold text-[25px] text-center hover:text-orange-500 cursor-pointer '>{item[0]}</li></Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="logo w-[45px] h-[45px] my-[2.5px] mx-3 "><Image className="rounded-full border-[2px] border-white" src={logo} alt="img"></Image></div>
               
            </div>
            {<div style={{ float: "left" }} className={nav ? "w-fit mx-0 fixed z-1  bg-gray-900 text-white  my-[50px]" : "w-fit fixed bg-gray-900 z-1 text-white mx-[-500px] my-[50px]"}>
                <ul className=' '>
                    {
                        navitem.map((item, index) => (
                            <Link href={item[1]} key={index} ><li key={index} style={{ borderBottom: "2px solid orange" }} className='mx-3 font-semibold text-[20px] py-3 px-3 sm:px-5 lg:px-8  hover:text-orange-500 cursor-pointer ' > <button onClick={sidenavset}>{item[0]}</button></li></Link>
                        ))
                    }
                </ul>
            </div>
            }
          
           




        </div>

    )
}

export default Navbar
