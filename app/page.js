"use client";
import CardForFeature from "@/components/Card";
import List from "@/components/List";
import { Button } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
export default function Home() {
  return (
    <main className="">
      <div className="bg-black flex justify-center items-center">
        <div className="bg-gray-900 w-[100vw] md:w-[80vw] my-10 py-10 px-5 rounded-lg shadow-xl">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="font-semibold text-white text-center mb-3 text-3xl">
              The next generation of anime platform
            </h1>
            <h2 className="line-clamp-2 font-normal text-center mb-3 text-blue-300">
              Track, Share, and Discover your Favorite Anime and Manga with
              Animecine
            </h2>
          </div>
          <div className=" justify-items-center grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto">
            <CardForFeature
              imgUrl={"https://anilist.co/img/landing/stats.svg"}
              title={"Discover your obsession"}
              desc={
                " What are your highest rated genres or most watched voice actors Follow your watching habits over time with in-depth statistics"
              }
            />
            <CardForFeature
              imgUrl={"https://anilist.co/img/landing/apps.svg"}
              title={"Bring animeCine anywhere"}
              desc={
                "Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows."
              }
            />
            <CardForFeature
              imgUrl={"https://anilist.co/img/landing/social.svg"}
              title={"Join the conversation"}
              desc={
                "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations."
              }
            />
            <CardForFeature
              imgUrl={"https://anilist.co/img/landing/custom.svg"}
              title={"Tweak it to your liking"}
              desc={
                "	Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode."
              }
            />
          </div>
        </div>
      </div>
      <section className="px-5 py-2 bg-black flex flex-col gap-2">
        <Card className="bg-black">
          <CardHeader className="font-semibold justify-center">
            Popular Anime
          </CardHeader>
          <div className="flex gap-[7px] flex-wrap justify-center items-center">
            <List
              queryKey={["top/anime"]}
              limitNumber={4}
              showPagination={false}
              pathname={"topanime"}
            />
          </div>
        </Card>
        <Card className="bg-black">
          <CardHeader className="font-semibold justify-center">
            Popular Manga
          </CardHeader>
          <div className="flex gap-[7px] flex-wrap justify-center items-center">
            <List
              queryKey={["top/manga"]}
              limitNumber={4}
              showPagination={false}
              pathname={"topmanga"}
            />
          </div>
        </Card>
        <Card className="bg-black">
          <CardHeader className="font-semibold justify-center">
            Upcoming Anime
          </CardHeader>
          <div className="flex gap-[7px] flex-wrap justify-center items-center">
            <List
              queryKey={["seasons/upcoming"]}
              limitNumber={4}
              showPagination={false}
              pathname={"upcoming"}
            />
          </div>
        </Card>
      </section>
    </main>
  );
}
