import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Facebook, Github, Linkedin, Copy } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <nav
        className="absolute top-0 left-0 z-40 w-full bg-local bg-top bg-no-repeat hero"
        // style={{ backgroundImage: 'url("/grid.png")' }}
      >
        <div className="flex items-center justify-between px-4 py-6 ">
          <Link href="/">
            <img src="/logo-light.png" alt="logo" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Menu color="#19304E" size={24} />
            </SheetTrigger>
            <SheetContent>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      {children}
      <footer className="flex flex-col gap-16 px-4 pt-16 pb-4 mt-40 text-center text-white bg-blue">
        <div className="">
          <h3 className="mb-3 text-2xl font-medium">
            Never miss out on what I'm up to?
          </h3>
          <p className="mb-6">
            If you never want to miss out on my articles here on my site,
            subscribe to my newsletter!
          </p>
          <div className="flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Email"
              className="text-dark-blue2"
            />
            <Button
              variant="primary"
              size="lg"
              className="bg-dark-blue2 hover:bg-dark-blue2/80 focus:bg-dark-blue2/80"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div>
          <p>Find me elsewhere on the web as well:</p>
          <div className="flex justify-center gap-4 mt-3">
            <Button variant="outline" size="icon">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="text-sm">
          <Separator decorative className="bg-white/40 " />
          <p className="mt-2">
            &copy;Raymart Formalejo 2023 All rights reserved.
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Layout;
