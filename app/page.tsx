"use client";

import React from "react";
import Link from "next/link";
import { Heart, Lock, Headphones, Video, Users, Sparkles, UserRound, MessageCircleHeart } from "lucide-react";
import { motion } from "framer-motion";

type feature = [React.ElementType, string, string];

const features: feature[] = [
  [Lock, "Complete Privacy", "No browsing profiles. No public photos. Nobody sees you until you're ready."],
  [UserRound, "Personal matchmaker", "A real person learns your preferences, handles rejections, and guides the process."],
  [Headphones, "Progressive Intimacy", "Start with audio, progress to video, then meet when both people are comfortable."],
  [MessageCircleHeart, "Rejection-Free Zone", "Your matchmaker delivers the news and finds better matches without direct rejection."],
  [Sparkles, "Smart Compatibility", "Private quizzes help your matchmaker find real compatibility, not just attractive faces."],
  [Heart, "Until The End", "Support from the first call to wedding bells, focused on long-term happiness."],
];

const howItWorks = [
  ["1", "Join & Quiz", "Complete the compatibility assessment and Get Matched with your personal matchmaker."],
  ["2", "Get Matched", "Your matchmaker finds compatible people and arranges anonymous audio calls."],
  ["3", "Audio Dates", "Voice-only calls help you notice personality before visual distraction."],
  ["4", "Progress Naturally", "When both people are ready, add video, then meet in person."],
  ["5", "Close the Deal", "Archive your profile and start your relationship with ongoing support."],
];

function CoupleCard({
  image,
}: {
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="border border-white/25 bg-white/15 p-5 shadow-xl backdrop-blur"
    >
      <img
        src={image}
        alt="pixelcrush couple"
        className="mx-auto h-44 w-auto object-contain pixelated"
      />
    </motion.div>
  );
}

function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="bg-white/20 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/20">
      {children}
    </span>
  );
}

export default function PixelCrushApp() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#8997ff] via-[#766cdc] to-[#8d59c7] text-white pixelated">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#8191f5]/80 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center bg-[#ff4658] shadow-lg">
              <Heart fill="white" className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-black tracking-tight drop-shadow-md">pixelcrush</h1>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Badge>no swiping</Badge>
            <Badge>audio first</Badge>
            <Badge>private</Badge>
            <Link href="/dashboard" className="ml-2 bg-white px-4 py-2 text-xs font-black text-[#7567da] shadow-lg">
              dashboard
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black uppercase tracking-[0.3em] text-white/70"
          >
            dating, reimagined
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-6xl font-black leading-[0.95] drop-shadow-lg md:text-7xl"
          >
            no swiping. no anxiety. just real connections.
          </motion.h2>

          <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-white/85">
            your personal matchmaker handles everything from introductions to rejections. progressive intimacy, complete privacy, and hand-holding until you find your person.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="bg-[#ff4658] px-6 py-4 text-sm font-black text-white shadow-xl">
              open dashboard
            </Link>
            <a href="#how-it-works" className="border border-white/30 bg-white/15 px-6 py-4 text-sm font-black text-white shadow-xl backdrop-blur">
              how it works
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
            <div className="border border-white/25 bg-white/15 p-5 text-center">
              <Heart fill="#ff4658" className="mx-auto h-12 w-12 text-[#ff4658]" />
              <p className="mt-2 font-black">Audio First</p>
            </div>
            <div className="border border-white/25 bg-white/15 p-5 text-center">
              <Video className="mx-auto h-12 w-12" />
              <p className="mt-2 font-black">Then Video</p>
            </div>
            <div className="border border-white/25 bg-white/15 p-5 text-center">
              <Users className="mx-auto h-12 w-12" />
              <p className="mt-2 font-black">Finally Meet</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {[
            "/images/couple1.png",
            "/images/couple2.png",
            "/images/couple3.png",
            "/images/couple4.png",
            "/images/couple5.png",
            "/images/couple6.png",
            "/images/couple7.png",
            "/images/couple8.png",
            "/images/couple9.png"
          ].map((image) => (
            <CoupleCard key={image} image={image} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-center text-5xl font-black">Why PixelCrush Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon, title, desc], index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#ec7ed0] to-[#ff536f] p-6 shadow-xl"
            >
              <Icon className="h-8 w-8" />
              <h3 className="mt-4 text-2xl font-black">{title}</h3>
              <p className="mt-3 text-lg font-semibold leading-8 text-white/90">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-14 pb-24">
        <h2 className="text-center text-5xl font-black">How It Works</h2>
        <div className="mt-8 space-y-5">
          {howItWorks.map(([num, title, desc]) => (
            <div key={num} className="border border-white/20 bg-white/15 p-6 text-center shadow-xl backdrop-blur">
              <div className="mx-auto grid h-16 w-16 place-items-center bg-[#ff4658] text-2xl font-black">{num}</div>
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold leading-8 text-white/85">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
