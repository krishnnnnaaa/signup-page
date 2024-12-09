import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Forms() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="w-full my-8">
          <AccordionTrigger className="flex w-full space-x-2 bg-gray-200 p-2 rounded-lg">
            <div>
              <span className="mx-2 bg-gray-300 py-1 px-2 rounded-xl">1</span>{" "}
              Identity Proof{" "}
              <span className="text-red-600 mr-[0.5rem!important] font-bold inline-block">
                *
              </span>{" "}
              (PAN Card / Passport / Aadhar Card)
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex md:flex-row flex-col w-full md:space-x-4">
            <div className="flex flex-col space-y-2 w-full md:w-2/4 mt-4">
              <div>Document Number</div>
              <Input
                placeholder="Enter Document Number"
                className="px-2 py-2 border-2 border-gray-400 rounded-md"
              />
              <Button className="bg-blue-600 rounded-2xl w-fit text-white py-1">
                Save & continue
              </Button>
            </div>
            <div className="flex flex-col space-y-2 w-full md:w-2/4 mt-4">
              <div className="flex items-center">
                Upload Document{" "}
                <Info className="mx-2 fill-black text-white" size={15} />{" "}
                <span className="text-gray-400">(.jpeg, .png, .pdf)</span>
              </div>
              <div className="flex items-center justify-center border-2 border-gray-400 rounded-md py-1">
                <Input placeholder="Upload Here" className="px-2 " />
                <Button className="bg-blue-600 rounded-lg mr-2 w-[180px] text-white py-1">
                  Choose here
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="w-full my-8">
          <AccordionTrigger className="flex w-full space-x-2 bg-gray-200 p-2 rounded-lg">
            <div>
              <span className="mx-2 bg-gray-300 py-1 px-2 rounded-xl">2</span>{" "}
              Address Proof{" "}
              <span className="text-red-600 mr-[0.5rem!important] font-bold inline-block">
                *
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex md:flex-row flex-col w-full md:space-x-4">
            <div className="flex flex-col space-y-2 w-full md:w-2/4 mt-4">
              <div>
                Select Document Type{" "}
                <span className="text-gray-400">
                  (Choose document different from your identify proof)
                </span>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Type1">Type1</SelectItem>
                  <SelectItem value="Type2">Type2</SelectItem>
                  <SelectItem value="Type3">Type3</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 rounded-2xl w-fit text-white py-1">
                Save & continue
              </Button>
            </div>
            <div className="flex flex-col space-y-2 w-full  md:w-2/4 mt-4">
              <div className="flex items-center">
                Upload Selected Documents{" "}
                <Info className="mx-2 fill-black text-white" size={15} />{" "}
                <span className="text-gray-400">(.jpeg, .png, .pdf)</span>
              </div>
              <div className="flex items-center justify-center border-2 border-gray-400 rounded-md py-1">
                <Input placeholder="Upload Here" className="px-2 " />
                <Button className="bg-blue-600 rounded-lg mr-2 w-[180px] text-white py-1">
                  Choose here
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="w-full my-8">
          <AccordionTrigger className="flex w-full space-x-2 bg-gray-200 p-2 rounded-lg">
            <div>
              <span className="mx-2 bg-gray-300 py-1 px-2 rounded-xl">3</span>{" "}
              Passport Size Photograph{" "}
              <span className="text-red-600 mr-[0.5rem!important] font-bold inline-block">
                *
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex w-full space-x-4">
            <div className="flex flex-col space-y-2 w-full md:w-2/4 mt-4">
              <div className="flex items-center">
                Upload Photograph{" "}
                <Info className="mx-2 fill-black text-white" size={15} />{" "}
                <span className="text-gray-400">(img should be max of 2mb)</span>
              </div>
              <div className="flex items-center justify-center border-2 border-gray-400 rounded-md py-1">
                <Input placeholder="Upload here" className="px-2 " />
                <Button className="bg-blue-600 rounded-lg mr-2 w-[180px] text-white py-1">
                  Choose here
                </Button>
              </div>
              <Button className="bg-blue-600 rounded-2xl w-fit text-white py-1">
                Save & continue
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="w-full my-8">
          <AccordionTrigger className="flex w-full space-x-2 bg-gray-200 p-2 rounded-lg">
            <div>
              <span className="mx-2 bg-gray-300 py-1 px-2 rounded-xl">4</span>{" "}
              Virtual Verification Proof{" "}
              <span className="text-red-600 mr-[0.5rem!important] font-bold inline-block">
                *
              </span>
              <span className="text-gray-400">(Video Format)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex w-full space-x-4">
            <div className="flex flex-col space-y-2 w-2/4 mt-4">
              <div className="flex items-center">
                Generate OTP{" "}
              </div>
              <Button className="bg-blue-600 rounded-2xl w-fit text-white py-1">
                Send Code
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="border-2 border-gray-400 rounded-3xl">Next</Button>
    </div>
  );
}
