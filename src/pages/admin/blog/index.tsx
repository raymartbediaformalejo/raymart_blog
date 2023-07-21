import * as React from "react";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { Fragment } from "react";
import { Input } from "@/components/ui/input";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const categories = [
  { title: "Blog" },
  { title: "TIL" },
  { title: "Resources" },
  { title: "Projects" },
];

const topics = [
  { title: "React" },
  { title: "HTML" },
  { title: "CSS" },
  { title: "Tailwindcss" },
  { title: "JS" },
  { title: "NodeJS" },
  { title: "Non-technical discussion" },
];

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    [{ align: [] }],
    ["code-block"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

const PostPage = () => {
  const [editorValue, setEditorValue] = useState<string>(""); // State to store the editor value

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
    console.log(value); // Log the editor value to the console
  };
  return (
    <Fragment>
      <div className="px-4 pt-20">
        <h2 className="font-semibold text-blue text-[20px] mb-6">
          Create blog post
        </h2>
        {/* CATEGORY */}
        <label htmlFor="categories" className="text-[#747577] text-sm">
          Category:
        </label>
        <Autocomplete
          size="small"
          multiple
          id="categories"
          options={categories}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          renderInput={(params) => <TextField {...params} />}
        />

        {/* TOPIC */}
        <label htmlFor="topics" className="text-[#747577] text-sm">
          Topic:
        </label>

        <Autocomplete
          size="small"
          multiple
          id="topics"
          options={topics}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          renderInput={(params) => <TextField {...params} />}
        />

        {/* TITLE */}
        <label htmlFor="title" className="text-[#747577] text-sm">
          Title:
        </label>
        <Input id="title" />
        <label htmlFor="summary" className="text-[#747577] text-sm">
          Summary:
        </label>
        <Input id="summary" />

        {/* COVER PHOTO */}
        <div>
          <label htmlFor="cover-photo" className="text-[#747577] text-sm">
            Cover photo:
          </label>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              id="cover-photo"
              type="file"
              className="block w-full text-sm text-grayDark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border file:border-[#747577]/30 file:text-sm file:font-semibold file:bg-blue/10 file:text-blue hover:file:bg-blue/20 "
            />
          </label>
        </div>

        {/* IS FEATURED BLOG */}
        <div className="">
          <Checkbox id="isFeatured" className="p-0 m-0 " />
          <label
            htmlFor="isFeatured"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Is featured blog post?
          </label>
        </div>

        {/* EDITOR */}
        <QuillNoSSRWrapper
          theme="snow"
          modules={modules}
          formats={formats}
          value={editorValue}
          onChange={handleEditorChange}
        />
      </div>
    </Fragment>
  );
};

export default PostPage;
