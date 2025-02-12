"use client";

import DotsRectangle from "../../components/dots/DotsRectangle";
import MyTodoListDetailsProject from "./mytodolist/myTodoListDetailsProject";
import StudentsDetailsProject from "./students/studentsDetailsProject";
import SeriesDetailsProject from "./series/seriesDetailsProject";
import AuctionsDetailsProject from "../projets/auctions/auctionsDetailsProject";
import LicDetailsProject from "./lic/licDetailsProject";
import { LABELS, PAGE_NAMES } from "../../components/navbar/route";

export default function Projects() {

  return (
    <main className=" bg-cover
                      bg-no-repeat 
                      bg-[url('/img/bkgd_black-and-colored-spots.webp')]
                      pb-24"
    >

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotColor="#fff000"
      />

      <h2 id={PAGE_NAMES.PROJECTS} className="title-page">{LABELS.PROJECTS}</h2>

      <MyTodoListDetailsProject />

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotColor="#fff000"
      />

      <StudentsDetailsProject />

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotColor="#fff000"
      />

      <SeriesDetailsProject />

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotColor="#fff000"
      />

      <AuctionsDetailsProject />

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotColor="#fff000"
      />

      <LicDetailsProject />

    </main>
  );
}
