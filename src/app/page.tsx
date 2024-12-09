import FormComponent from "@/component/FormComponent";
import Navbar from "@/component/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full">
    <Navbar/>
    <FormComponent/>
   </div>
  );
}
