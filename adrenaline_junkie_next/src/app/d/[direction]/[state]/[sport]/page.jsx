"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import sports from "@/data/sports";
import Background from "./components/background_image";

export default function Sport() {
  const params = useParams();
  const { sport } = params;
  const pathname = usePathname();
  const splitPath = pathname.split("/");
  const sportData = sports[splitPath[3]][splitPath[4]];

  const sportToSplit = sportData.name;
  const splitSport = sportToSplit.split(" ").join("").toLowerCase();

  console.log(splitSport);
  return (
    <>
      <Background imgData={splitSport} data={sportData} />
    </>
  );
}
