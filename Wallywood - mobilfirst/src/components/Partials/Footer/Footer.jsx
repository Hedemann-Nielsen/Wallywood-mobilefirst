import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Footer.module.scss";

import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    
    getData();
  }, []); 

  const getData = async () => {
    const url = "http://localhost:3000/orgs?attributes=id,name,address,zipcode,city";
    try {
      const result = await axios.get(url);
      setFooter(result.data[0]);
    } catch (error) {
      console.error(error);
    }
  };


  

  return (
    <>
      <footer className={style.footer}>
        <div className={style.leftSection}>
          <div>
            <h2 className={style.name}>wallywood</h2>
            <p>{footer.address}</p>
            <p>{footer.zipcode} {footer.city}</p>
          </div>
          <div className={style.contactInfo}>
            <p>cvr: 12345678</p>
            <Link to="mailto:info@plakatshoppen.dk">mail: info@plakatshoppen.dk</Link>
            <Link to="tel:+4598123456">mobil: +45 98123456</Link>
          </div>
        </div>
        <div className={style.social}>
          <FaPinterestSquare />
          <FaInstagramSquare />
          <FaFacebookSquare />
          <FaTwitterSquare />
        </div>
      </footer>
    </>
  );
};
