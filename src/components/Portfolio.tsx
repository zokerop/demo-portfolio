import React, { useEffect, useState } from "react";
import PortofolioList from "./PortofolioList";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../data";
const list = [
  {
    id: "feature",
    title: "Feature",
  },
  {
    id: "web",
    title: "Web App",
  },
  {
    id: "mobile",
    title: "Mobile App",
  },
  {
    id: "design",
    title: "Design App",
  },
  {
    id: "content",
    title: "Content App",
  },
];
const Portfolio = () => {
  const [seleted, setSelected] = useState("feature");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (seleted) {
      case "feature":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        break;
    }
  }, [seleted]);
  return (
    <div className="flex flex-col items-center" id="portfolio">
      <h1 className="text-[50px]">Portfolio</h1>
      <ul className="flex m-2 list-none">
        {list.map((i) => (
          <PortofolioList
            title={i.title}
            active={seleted === i.id}
            setSeleted={setSelected}
            id={i.id}
          />
        ))}
      </ul>
      <div className="container w-[70%] flex items-center justify-center flex-wrap">

        {data.map((o)=>(
           <div className="item-port">
           <img className="rounded-lg"
             src={o.img}
             alt=""
           />
           <h3>{o.title}</h3>
         </div>
        ))}
       
       
      </div>
    </div>
  );
};

export default Portfolio;
