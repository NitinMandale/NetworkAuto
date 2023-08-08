import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

const TableComponent = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([
    {
      description: "Optometrist",
      country: "Nicaragua",
      address:
        "3581 Monica Pike, Port Sharonborough, WI 85970 3581 Monica Pike,3581 Monica Pike, Port Sharonborough, WI 85 Port Sharonborough, WI 85",
    },
    {
      description: "Research scientist (physical sciences)",
      country: "Germany",
      address: "Unit 3183 Box 7251, DPO AP 02211",
    },
    {
      description: "Public house manager",
      country: "Ireland",
      address: "16644 Tony Ports, East Crystalport, WI 35180",
    },
    {
      description: "Database administrator",
      country: "Bolivia",
      address: "472 Kristina Cove Suite 121, Christineside, RI 92461",
    },
    {
      description: "Quarry manager",
      country: "Antigua and Barbuda",
      address: "4086 Robin Road, Lake Richard, CO 92602",
    },
    {
      description: "Professor Emeritus",
      country: "Denmark",
      address: "57510 Sullivan Flat, Kellymouth, RI 44330",
    },
    {
      description: "Clinical embryologist",
      country: "San Marino",
      address: "239 Larsen Inlet Suite 125, New Carolynstad, OR 02314",
    },
    {
      description: "Information officer",
      country: "Korea",
      address: "246 Frank Mountain, Mckenzieport, MS 83408",
    },
    {
      description: "Civil engineer, contracting",
      country: "Iraq",
      address: "242 Clark Forks Apt. 057, North Craigville, DE 27266",
    },
    {
      description: "Commissioning editor",
      country: "Mayotte",
      address: "PSC 2038, Box 0408, APO AE 55357",
    },
    {
        description: "Optometrist",
        country: "Nicaragua",
        address:
          "3581 Monica Pike, Port Sharonborough, WI 85970 3581 Monica Pike,3581 Monica Pike, Port Sharonborough, WI 85 Port Sharonborough, WI 85",
      },
      {
        description: "Research scientist (physical sciences)",
        country: "Germany",
        address: "Unit 3183 Box 7251, DPO AP 02211",
      },
      {
        description: "Public house manager",
        country: "Ireland",
        address: "16644 Tony Ports, East Crystalport, WI 35180",
      },
      {
        description: "Database administrator",
        country: "Bolivia",
        address: "472 Kristina Cove Suite 121, Christineside, RI 92461",
      },
      {
        description: "Quarry manager",
        country: "Antigua and Barbuda",
        address: "4086 Robin Road, Lake Richard, CO 92602",
      },
      {
        description: "Professor Emeritus",
        country: "Denmark",
        address: "57510 Sullivan Flat, Kellymouth, RI 44330",
      },
      {
        description: "Clinical embryologist",
        country: "San Marino",
        address: "239 Larsen Inlet Suite 125, New Carolynstad, OR 02314",
      },
      {
        description: "Information officer",
        country: "Korea",
        address: "246 Frank Mountain, Mckenzieport, MS 83408",
      },
      {
        description: "Civil engineer, contracting",
        country: "Iraq",
        address: "242 Clark Forks Apt. 057, North Craigville, DE 27266",
      },
      {
        description: "Commissioning editor",
        country: "Mayotte",
        address: "PSC 2038, Box 0408, APO AE 55357",
      },
  ]);
  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }
  const csrftoken = getCookie('csrftoken');
  // Set the CSRF token in the request headers
  axios.defaults.headers.post["X-CSRFToken"] = csrftoken;

  const instance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true, // This ensures cookies (sessions) are sent with every request
  });
//   const route = Ro
  useEffect(()=>{
    const getEmergencyAddress = async () => {
      try {
        const response = await instance.get("/getEmergencyAddresses", {
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
          },
        });
    
        
        console.log("s", response.data);
        if (response.data.error) {
          alert(response.data.error);
          return;
        } else {
          // navigate("/");
          console.log("first");
        }
      } catch (error) {
        // Handle any errors that may occur during the API call
        console.error("Error sending data:", error);
      }
      }
    getEmergencyAddress();
  }
    );

 
  const TableColumn = () =>
    data.map((item) => (
      <tr key={item.id}>
        <td><input className="rowCheckbox" type="checkbox"></input></td>
        <td>{item.description}</td>
        <td>{item.country}</td>
        <td>{item.address}</td>
      </tr>
    ));

    const addForm=()=>{
    }

  return (
    <div className="tableComponent">
      <div className="tableHeader">
        {/* <div className="tableSearchContainer"> */}
        <Link className="addbtn" to="/dashboard/add-address">+ Add</Link>
        {/* <div onClick={addForm} className="addbtn">
            + Add 
        </div> */}
        {/* </div> */}
        <div className="tableSearchContainer">
          <input
            className="tableSearch"
            placeholder="Search for Admins"
            type="text"
          />
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
            <th><input className="headerCheckbox" type="checkbox"></input></th>
              <th>Description</th>
              <th>Country</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <TableColumn />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
