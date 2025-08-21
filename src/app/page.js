import Image from "next/image";
import Hero from "./Components/Hero";
import ProductHighlights from "./Components/Product-Highlights";


export default function Home() {
  return (
     <div>
       <Hero/>
       <ProductHighlights />
      
     </div>
  );
}
