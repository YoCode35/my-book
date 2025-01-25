"use client";

import useDotsPerRow from "../../../components/dots/useResponsiveDots";
import DotsRectangle from "../../../components/dots/DotsRectangle";
import MyTodoListDetailsProject from "./projects/mytodolist/myTodoListDetailsProject";
import StudentsDetailsProject from "../../pages/portfolio/projects/students/studentsDetailsProject";
import SeriesDetailsProject from "./projects/series/seriesDetailsProject";
import AuctionsDetailsProject from "./projects/auctions/auctionsDetailsProject";

export default function Portfolio() {
  const dotsPerRow = useDotsPerRow();

  return (
    <main className=" bg-cover
                      bg-no-repeat 
                      bg-[url('/img/bkgd_black-and-colored-spots.png')]
                      pb-24"
    >

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <h2 id="portfolio" className="title-page">Portfolio</h2>

      <MyTodoListDetailsProject />

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotsPerRow={dotsPerRow}
        dotColor="#fff000"
      />

      <StudentsDetailsProject />

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
      
    </main>
  );
}
