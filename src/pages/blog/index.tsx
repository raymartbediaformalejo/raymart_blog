import { Fragment } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Blogs = () => {
  return (
    <Fragment>
      <div className="px-4 pt-20 ">
        <label className="relative block mb-4">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            {/* <svg className="w-5 h-5 fill-slate-300" viewBox="0 0 20 20"></svg> */}
            <Search className="text-[#374151]/60  h-5 w-5 text-center" />
          </span>
          <input
            className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm text-dark-blue2 placeholder:italic placeholder:text-slate-400 border-[#374151]  pl-9 focus:outline-none focus:border-sky focus:ring-sky focus:ring-1 sm:text-sm"
            placeholder="Search for blog post..."
            type="text"
            name="search"
          />
        </label>

        {/* FITLER BY TOPIC */}
        <div className="flex flex-wrap gap-3">
          {[
            { topic: "React", numberOfPost: 51 },
            { topic: "JS", numberOfPost: 29 },
            { topic: "HTML", numberOfPost: 21 },
            { topic: "CSS", numberOfPost: 15 },
            { topic: "NodeJS", numberOfPost: 11 },
            { topic: "Non-technical discussion", numberOfPost: 5 },
          ].map(({ topic, numberOfPost }) => {
            return (
              <Badge
                key={topic}
                variant="topic"
                className="font-poppins font-normal text-sm text-[#374151] rounded-[4px] m-0 p-0"
              >
                <p className="px-2">{topic}</p>
                <p className="bg-[#374151] text-white font-thin px-2 py-1">
                  {numberOfPost}
                </p>
              </Badge>
            );
          })}
        </div>

        {/* BLOGS */}
        <div className="mt-20">
          <div className="p-6 rounded-lg text-re bg-light-blue/20">
            <img className="rounded-t-lg" src="/img2.png" alt="blog image" />
            <h3 className="mt-4 text-2xl font-bold text-dark-blue2">
              Mastering minimalism an layering complexity with strategy game
            </h3>
            <p className="text-sm text-gray">July 14, 2023</p>

            <div className="flex gap-1 mt-2">
              {["html", "css", "js"].map((tag) => {
                return (
                  <Badge
                    key={tag}
                    variant={"tags"}
                    style={{
                      color: "rgb(100 116 139)",
                      fontWeight: "normal",
                    }}
                  >
                    {`#${tag}`}
                  </Badge>
                );
              })}
            </div>

            <p className="mt-5 text-grayDark">
              Here’s why the developers are making games for people who don’t
              have time for the genre. Here’s why the developers are making
              games for people who don’t have time for the genre.{" "}
            </p>
            <Button className="mt-4" variant={"primary"} size={"lgRoundFull"}>
              Read more
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blogs;
