import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  return (
    <Accordion className="mb-14">
      <h1 className="text-3xl font-semibold font-serif text-slate-800 my-8">
        Let's Read The Blogs
      </h1>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What is <b className="font-bold">Context API</b> ?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="text-left">
            The React Context API allows a React app to create global variables
            that can be shared easily and Directly.This is an alternative to
            "prop drilling," which involves passing props from grandparent to
            child to parent and so on.Context is also promoted as a simpler,
            lighter approach to Redux state management.Context API allows us to
            exchange state across the entire app or a portion of it with
            simplicity and easily.We dont need to go through a long process.
            Context API Helps us to Increase Performances.The following Diagram
            will make it more clear
            <img
              src="https://uploads.toptal.io/blog/image/129071/toptal-blog-image-1549323314875-d6bc9c753a4c9ac2911e8af17732023d.png"
              alt=""
            />
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What is <b className="font-bold">Semantic Tags</b> ?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Semantic HTML tags provide information about their contents in
            addition to how they appear on a page.Simply said, a semantic
            element tells the browser and the developer what it means.For
            example the Non Semantic elements like: div and span - Tells nothing
            about its content. but the semantic elements like :form, table , and
            article - Clearly defines its content.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Differences Between{" "}
            <b className="font-bold">Block, Inline ,& Inline-Block</b>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="text-left">
            <span className="font-bold">Inline: </span> The element does not
            begin on a new line and takes up only the space it required. You
            can't change the width or height of the window. <br />
            <span className="font-bold">Inline-block: </span> It's formatted
            similarly to the inline element, with the exception that it doesn't
            begin on a new line. You can, however, change the width and height
            of the image. <br />
            <span className="font-bold">Block: </span> The element will begin on
            a new line and take up the entire available width. You can also
            change the width and height of the image.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
