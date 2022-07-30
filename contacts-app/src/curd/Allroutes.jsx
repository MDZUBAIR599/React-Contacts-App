import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../rotes/Navbar";
import Create from "./Create";
import Delete from "./Delete";
import Read from "./Read";
import Update from "./Update";

export default function Allroutes() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update/:update_id" element={<Update />} />
        <Route path="/delete/:delete_id" element={<Delete />} />
      </Routes>
    </div>
  );
}
