"use client";

import Hero from "@/components/Hero";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <Hero />
    </RecoilRoot>
  );
}
