import { Fragment } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { title } from "process";

const Blogs = () => {
  return (
    <Fragment>
      <section className="px-4 pt-5">
        {/* BLOGS */}
        <article className="mt-20">
          <figure>
            <img className="rounded-lg" src="/img2.png" alt="blog image" />
            <figcaption>
              <h3 className="mt-4 text-2xl font-bold text-dark-blue2">
                Mastering minimalism an layering complexity with strategy game
              </h3>
            </figcaption>
          </figure>

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

          {/* TIME */}
          <div className="flex justify-center gap-5 my-10 ">
            <div className="flex flex-col items-center ">
              <p className="text-[11px] text-gray/70">Published at</p>
              <p className="text-[13px] text-dark-blue2/80 font-normal">
                July 14, 2023
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-[11px] text-gray/70">Updated at</p>
              <p className="text-[13px] text-dark-blue2/80 font-normal">
                July 23, 2023
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-[11px] text-gray/70">Reading time</p>
              <p className="text-[13px] text-dark-blue2/80 font-normal">
                5mins
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-[11px] text-gray/70">Views</p>
              <p className="text-[13px] text-dark-blue2/80 font-normal">23</p>
            </div>
          </div>
          {/* BODY BLOG */}
          <div>
            <p className="mt-5 text-[#4b5563] leading-7">
              Thronefall, which comes out in Early Access on August 2, aims to
              simplify strategy games by offering a minimalist experience in
              building and defending your kingdom. Game Developer spoke with
              Jonas Tyroller and Paul Schnepf of Grizzly Games to discuss how
              their own dwindling gaming time inspired them to simplify such a
              complex genre, the importance of layering complexity to make
              things more approachable for players, and how subtracting a simple
              (but core) element of strategy games opened up a wealth of
              interesting design possibilities. Game Developer: Thronefall aims
              to streamline and simplify city-building strategy (while throwing
              a little hack and slash in there). What appealed to you about
              making this complicated genre more approachable to people who find
              them daunting? Schnepf: This urge for minimalism is something that
              has been a theme for everything we have done so far at Grizzly
              Games. I suppose it developed for a couple of different reasons:
              First of all, we just found ourselves having less and less time to
              actually play games. Getting older and caught in the usual swamp
              of work and responsibilities, we realized we don’t have the 100
              hours to sink into the next super complex game anymore. We felt
              there was a need for wholesome and deep, but also less
              time-consuming, experiences. The other great thing about making
              those kinds of accessible games is that they are—surprise!—very
              accessible. This means that something that was reserved to a more
              core audience before is suddenly experience-able for many more
              people, including those that have had no prior gaming experience.
              Sharing what we love with people we love, no matter their
              background, just feels great. How did you distill the core
              elements of a strategy game into Thronefall? How did you capture
              the essence of a strategy game while simplifying it greatly?
              Tyroller: The way we like to find our game ideas is through a
              rigorous prototyping process. That means we make tons of little
              mini-games and small game-like experiences to try out a huge
              variety of ideas. We do not approach this from a game mechanics
              perspective, but from an experience perspective. We decide on an
              experience we want the player to have and then work our way
              backwards on how to best provide that experience in a simple and
              appealing fashion.
            </p>
          </div>

          {/* RELATED ARTICLES */}
          <footer className="text-[#4b5563] leading-7 mt-28">
            <h3>Related Aritcles:</h3>
            <ul className="list-disc list-inside">
              {[
                {
                  title:
                    "Should responsive images work with container queries?",
                  id: 2,
                },
                {
                  title:
                    "Should responsive images work with container queries?",
                  id: 3,
                },
                {
                  title:
                    "Should responsive images work with container queries?",
                  id: 4,
                },
              ].map(({ title, id }) => {
                return (
                  <li key={id}>
                    <a href={id + ""}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </footer>
        </article>
      </section>
    </Fragment>
  );
};

export default Blogs;
