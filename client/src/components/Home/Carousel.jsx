import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import axios from "axios";

export default function Carousel1() {
  var items = [
    [
      "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    [
      "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    [
      "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  ];

  return (
    <div className="carousel-container">
      <div>
        <Carousel className="carousel-box">
          {items.map((item, i) => (
            <img key={i} src={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
