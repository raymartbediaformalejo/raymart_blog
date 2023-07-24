import { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
const topics = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "NodeJs",
  },
  {
    id: 6,
    name: "Tailwindcss",
  },
  {
    id: 7,
    name: "Mysql",
  },
  {
    id: 8,
    name: "Non-technical discussion",
  },
];

const AllTopic = () => {
  return (
    <Fragment>
      <div className="flex flex-col mx-4 mt-24">
        <Button className="self-end mr-4">New topic</Button>
        <Table className="py-4 mt-6 bg-white">
          <TableHeader>
            <TableRow>
              {/* <TableHead>Image</TableHead> */}
              <TableHead>Name</TableHead>
              <TableHead>Action buttons</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map(({ id, name }) => {
              return (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell className="flex gap-2">
                    {/* EDIT */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-green">Edit</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-lg font-normal text-center font-inter text-grayDark/90">{`Edit topic ${name}`}</DialogTitle>
                        </DialogHeader>
                        <div className="py-4 ">
                          <div className="flex flex-col gap-4">
                            <div>
                              <label
                                htmlFor="name"
                                className="text-[#747577] text-sm text-right"
                              >
                                Name:
                              </label>
                              <Input
                                id="name"
                                // value={name}
                                placeholder={name}
                                className="mt-1"
                              />
                            </div>
                            <Button>Save</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* DELETE */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive">Delete</Button>
                      </DialogTrigger>
                      <DialogContent className="max-h-screen overflow-y-scroll lg:max-w-screen-lg">
                        <DialogHeader>
                          <DialogTitle className="text-lg font-normal text-center font-inter text-grayDark/90">{`Are you sure you want to delete topic "${name}"?`}</DialogTitle>
                        </DialogHeader>
                        <div className="py-4 ">
                          <div className="flex flex-col gap-4">
                            <Button className="text-[#6E6E6E] bg-transparent border border-[#6E6E6E] rounded-sm hover:border-blue hover:text-blue hover:bg-transparent">
                              Cancel
                            </Button>
                            <Button variant="destructive">Delete</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
};

export default AllTopic;
