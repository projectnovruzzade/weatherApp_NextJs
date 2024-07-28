import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import MainContent from "@/components/MainContent";
import { getData } from "./endpoints/endpoints";

async function Home({searchParams}) {

  const data = await getData(searchParams.search);

  return (
    <section>
      <SearchBar/>
      <MainContent data={data}/>
    </section>
  );
}


export default Home;