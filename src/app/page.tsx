import Link from "next/link";
import { Fragment } from "react";
import About from "~/components/about/about.component";
import Fyq from "~/components/fyq/fyq.component";
import HomeImages from "~/components/home-imgs/home-images.component";
import HomeComponent from "~/components/home/Home.component";
import Navigation from "~/components/navigation/navigation.component";
import NewsLetter from "~/components/newsletter/newsletter.component";

export default function HomePage() {
  return (
    <div>
            <HomeComponent />
            <About />
            <HomeImages />
            <Fyq />
            <NewsLetter />
            {/*
             */}
        </div>
  );
}
