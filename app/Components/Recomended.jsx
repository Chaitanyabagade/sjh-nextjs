import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DevelopmentBoardsimg from "../public/ProductCatogery/Developmentboards.jpg"
import Battery from "../public/ProductCatogery/Battery.jpg"
import DroneParts from "../public/ProductCatogery/Droneparts.jpg"
import Sensors from "../public/ProductCatogery/Sensors.jpg"
import Motors from "../public/ProductCatogery/Motors.jpg"
import IotWireless from "../public/ProductCatogery/iot.jpg"
import ElecComponent from "../public/ProductCatogery/ElectronicComponents.jpg"
import ModulesDisplay from '../public/ProductCatogery/modulesanddisplay.jpg'
import FullProjects from "../public/ProductCatogery/DIYProjects.jpg"
import CustomProject from "../public/ProductCatogery/customProject.jpg"

const Recomended = () => {
      {/*                      path          , imgage ,                 title ,                     description          */}
    const recomended=[["development-board",DevelopmentBoardsimg,'Development Boards','Ex. Arduino, Node mcu, Raspberry pi'],
                      ["battery",Battery,'Batteries | Chargers and Accessories',''],
                      ['drone-part',DroneParts,'Drone Parts','Ex. Motors, Battery, Propeller'],
                      ['sensor',Sensors,'Sensors Modules','Ex. IR sensor, Altrasonic Sensor'],
                      ['motor',Motors,'Servo Motors |Motors | Drivers | Pumps | Actuators',''],
                      ['iot-wireless',IotWireless,'IoT and Wireless','Ex. Esp32, WIFI Module'],
                      ['e-components',ElecComponent,' Electronic Components','Ex. Resistor, Diode, Transister, Capacitor'],
                      ['module-display',ModulesDisplay,'Electronic Modules and Displays','Ex. OLED Display'],
                      ['full-project',FullProjects,'Projects','Ex. Arduino Car, Esp32 Car, Bluetooth Car etc.'],
                      ['Custom-Project',CustomProject,'Customize Projects On Your Demand',''],
                      ["development-board",DevelopmentBoardsimg,'Development Boards','Ex. Arduino, Node mcu, Raspberry pi'],
                      ["development-board",DevelopmentBoardsimg,'Development Boards','Ex. Arduino, Node mcu, Raspberry pi'],
                      ["development-board",DevelopmentBoardsimg,'Development Boards','Ex. Arduino, Node mcu, Raspberry pi'],
                      ["development-board",DevelopmentBoardsimg,'Development Boards','Ex. Arduino, Node mcu, Raspberry pi']
                    ]

    return (
        <>  <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-5 pl-5'>Categories</h1>
            <div className=" flex-wrap justify-center mt-2 p-2 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
             {
              recomended.map((item, index) => (
                <Link href={`/Products/${item[0]}`} className="m-3  hover:shadow-2xl   border-[1px]  border-gray-300 rounded-[15px]  h-[310px]">
                    <Image className='w-[86%] ml-[7%] mt-[15px] mb-2 rounded-[15px] ' src={item[1]} alt="img" />
                  <div className="names"><p className='pl-4 pr-4'>{item[2]}</p> <p className='pl-4 pr-4'>{item[3]}</p></div>  
                </Link>
              ))
            }
               
            </div>

        </>
    );
}
export default Recomended
