import React, { useState } from "react";
import "../SCSS/styles.scss";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineSearch, AiTwotoneHome, AiOutlineAudit } from "react-icons/ai";
import { PiSuitcaseSimpleFill, PiSpiralFill } from "react-icons/pi";
import { ImUsers } from "react-icons/im";
import { TbMoneybag } from "react-icons/tb";
import { FaHandshake, FaHandHoldingUsd, FaCoins } from "react-icons/fa";
import { RxMixerHorizontal } from "react-icons/rx";
import { SiWolframmathematica } from "react-icons/si";
import {
  BsPersonCheckFill,
  BsPersonXFill,
  BsPersonFillGear,
} from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import {
  MdOutlineNotificationsNone,
  MdOutlineArrowDropDown,
  MdOutlineSavings,
  MdEnergySavingsLeaf,
  MdPhonelinkRing,
} from "react-icons/md";

const Navigation: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img className="logo" src="lendsqr-logo.png" alt="" />
          </li>
          <li>
            <input type="text" />
            <span>
              <AiOutlineSearch />
            </span>
          </li>
          <li>
            <ul>
              <li className="docs">
                <a href="">Docs</a>
              </li>
              <li className="notification">
                <MdOutlineNotificationsNone style={{ fontSize: "25px" }} />
              </li>
              <li className="adminProfile">
                <img
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                  src="IMG-20231112-WA0003.jpg"
                  alt=""
                />{" "}
                <p style={{ fontSize: "15px", marginLeft: "5px" }}>Andak</p>{" "}
                <MdOutlineArrowDropDown
                  style={{ fontSize: "25px", cursor: "pointer" }}
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <aside>
        <h2>
          <PiSuitcaseSimpleFill />
          Switch Organization
        </h2>
        <ul>
          <p>
            <AiTwotoneHome />
            Dashboard
          </p>

          <ul className="customers">
            <small>CUSTOMERS</small>
            <li className="theUsers">
              <ImUsers />
              Users
            </li>
            <li>
              <IoIosPeople />
              Guarantors
            </li>
            <li>
              <TbMoneybag />
              Loans
            </li>
            <li>
              <FaHandshake />
              Decision Models
            </li>
            <li>
              <MdOutlineSavings />
              Savings
            </li>
            <li>
              <FaHandHoldingUsd />
              Loan Requests
            </li>
            <li>
              <BsPersonCheckFill />
              Whitelist
            </li>
            <li>
              <BsPersonXFill />
              Karma
            </li>
          </ul>

          {/* business */}
          <ul className="business">
            <small>BUSINESSES</small>
            <li>
              <PiSuitcaseSimpleFill />
              Organization
            </li>
            <li>
              <FaHandHoldingUsd />
              Loan Products
            </li>
            <li>
              <MdEnergySavingsLeaf />
              Savings Products
            </li>
            <li>
              <FaCoins />
              Fees and Charges
            </li>
            <li>
              <MdPhonelinkRing />
              Transactions
            </li>
            <li>
              <PiSpiralFill />
              Services
            </li>
            <li>
              <BsPersonFillGear />
              Service Account
            </li>
            <li>
              <HiOutlineClipboardDocumentList />
              Settlements
            </li>
            <li>
              <ImStatsDots />
              Reports
            </li>
          </ul>

          {/* settings */}
          <ul className="settings">
            <small>Settngs</small>
            <li>
              <RxMixerHorizontal />
              Preferences
            </li>
            <li>
              <SiWolframmathematica />
              Fees and Pricing
            </li>
            <li>
              <AiOutlineAudit />
              Audit Logs
            </li>
          </ul>
        </ul>
      </aside>
    </>
  );
};

export default Navigation;
