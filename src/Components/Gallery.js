import React from "react";
import { useState } from "react";
import GalleryWrapper from "./GalleryWrapper";
import "../Styles/Gallery.css";
import Sandipani from "../Data/Sandipani.json";
import Sako from "../Data/Sako.json";
import Dewangaji from "../Data/Dewangaji.json";
import Swargayatra from "../Data/Swargajatra.json";
import Hoiboichoi from "../Data/Hoiboichoi.json";

export const Gallery = () => {
  const [Active, setActive] = useState(1);

  const menuItems = [
    {
      id: 1,
      title: "Sako (সাঁকো)",
    },
    {
      id: 2,
      title: "Sandipani (সন্দীপনী)",
    },
    {
      id: 3,
      title: "Dewangajir Kissa (দেওয়ানগাজীর কিসসা)",
    },
    {
      id: 4,
      title: "Swargayatra (স্বর্গযাত্রা)",
    },
    {
      id: 5,
      title: "Hoiboichoi (হৈ বই চৈ)",
    },
  ];
  const display = () => {
    switch (Active) {
      case 1:
        return <GalleryWrapper images={Sako} />;
      case 2:
        return <GalleryWrapper images={Sandipani} />;
      case 3:
        return <GalleryWrapper images={Dewangaji} />;
      case 4:
        return <GalleryWrapper images={Swargayatra} />;
      case 5:
        return <GalleryWrapper images={Hoiboichoi} />;
      default:
        return <GalleryWrapper images={Sako} />;
    }
  };
  return (
    <div className="container">
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={Active === item.id ? "Active" : ""}
            >
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="display-gallery">{display()}</div>
    </div>
  );
};
