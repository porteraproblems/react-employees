import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import employeeAPI from "../utils/employeeAPI";
import "../stlyes/DataArea.css"
import DataAreaContext from "../utils/DataAreaContext";

const DataArea = () => {
    const [developerState, setDeveloperState] =useState({
        users: [],
        order: "decend",
        filteredUsers: [],
        headings: [
            {name: "Image", width: "10%", order: "decend"},
            {name: "name", width: "10%", order: "decend"},
            {name: "phone", width: "20%", order: "decend"},
            {name: "email", width: "20%", order: "decend"},
            {name: "dob", width: "10%", order: "decend"},
        ]
    });
    
}