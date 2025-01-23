"use client";

import useDotsPerRow from "../../../components/dots/useResponsiveDots";
import DotsRectangle from "../../../components/dots/DotsRectangle";
import MyTodoListDetailProject from "../../pages/portfolio/projects/mytodolist/myTodoListDetailProject";
import SeriesDetailsProject from "../../pages/portfolio/projects/series/seriesDetailProject";
import AuctionsDetailsProject from "../../pages/portfolio/projects/auctions/auctionsDetailProject";

export default function Portfolio() {
  const dotsPerRow = useDotsPerRow();

  return (
    <div className="bg-cover bg-no-repeat bg-[url('/img/colored_spots.png')] pb-24">

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <h2 id="portfolio" className="title-page">Portfolio</h2>

      <MyTodoListDetailProject />

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <SeriesDetailsProject />

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <AuctionsDetailsProject />
      
    </div>
  );
}
