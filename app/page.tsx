"use client";

import React, { useMemo, useState } from "react";
import { Heart, Lock, Headphones, Video, Users, Calendar, Search, Sparkles, CheckCircle2, UserRound, MessageCircleHeart } from "lucide-react";
import { motion } from "framer-motion";

const users = [
  {
    id: "PC001",
    email: "john@email.com",
    firstName: "James",
    age: 31,
    gender: "Man",
    orientation: "Straight",
    location: "NYC, NY",
    height: "6'1",
    occupation: "Software Engineer",
    education: "Bachelor's",
    status: "Active",
    subscription: "Premium",
    matchmaker: "Sarah M",
    videoReady: true,
    meetingReady: false,
    partnerId: "PC002",
    relationshipStatus: "Dating",
    notes: "Prefers coffee dates",
  },
  {
    id: "PC002",
    email: "rachel@email.com",
    firstName: "Rachel",
    age: 28,
    gender: "Woman",
    orientation: "Straight",
    location: "NYC, NY",
    height: "5'6",
    occupation: "Account Executive",
    education: "Bachelor's",
    status: "Active",
    subscription: "Premium",
    matchmaker: "Sarah M",
    videoReady: true,
    meetingReady: false,
    partnerId: "PC001",
    relationshipStatus: "Dating",
    notes: "Likes going on walks",
  },
];

const preferences = {
  PC001: {
    description: "Software engineer who loves hiking and cooking",
    kids: "No kids - want kids",
    religion: "Christian",
    lifestyle: "Non-smoker / Non-drinker",
    cannabis: "Occasionally",
    gaming: "Regular gamer",
    reading: "Fiction lover",
    fitness: "Some exercise",
    social: "Minimal use",
    goals: "Serious Relationship",
    quiz: "Introvert: 8, Adventurous: 6",
    lookingFor: "25-35, Creative, NYC",
  },
  PC002: {
    description: "Marketing manager, loves travel and yoga",
    kids: "Has kids",
    religion: "Spiritual",
    lifestyle: "Social smoker / Social drinker",
    cannabis: "Never",
    gaming: "None",
    reading: "Bookworm",
    fitness: "Athlete",
    social: "Content creator",
    goals: "Marriage",
    quiz: "Extrovert: 6, Adventurous: 6",
    lookingFor: "25-35, Technical, NYC",
  },
};

const advanced = {
  PC001: {
    openness: "Open",
    pace: "Fast",
    curiosity: "Experienced",
    dealBreakers: "Smoking",
    loveLanguage: "Quality time",
    communication: "In-person",
    matchmakerNotes: "Very focused on attractiveness",
  },
  PC002: {
    openness: "Conservative",
    pace: "Slow",
    curiosity: "Curious",
    dealBreakers: "Heavy drinking",
    loveLanguage: "Receiving gifts",
    communication: "Texting",
    matchmakerNotes: "Needs emotional connection first",
  },
};

const matchmakers = [
  {
    id: "MM000",
    name: "Sarah Mitchell",
    email: "sarah@pixelcrush.com",
    specialty: "25-35, tech professionals",
    capacity: 50,
    activeClients: 23,
    successRate: 78,
  },
];

const matches = [
  {
    id: "M001",
    user1: "PC001",
    user2: "PC002",
    matchmaker: "Sarah M",
    status: "Audio Completed",
    user1Interest: "Interested",
    user2Interest: "Needs Time",
    finalStatus: "Successful",
    notes: "Great chemistry on calls",
  },
];

const sessions = [
  {
    id: "CS001",
    matchId: "M001",
    type: "Audio",
    meetLink: "meet.google.com/abc-def-ghi",
    duration: "45 minutes",
    bothJoined: true,
    user1Feedback: "Really enjoyed conversation",
    user2Feedback: "Want to continue",
    nextAction: "Schedule video call",
  },
];

const waitlist = [
  {
    email: "rachel@email.com",
    name: "Rachel Adams",
    age: 28,
    location: "NYC, NY",
    description: "Marketing manager, loves travel and yoga",
    source: "Instagram",
    priority: "High",
    notes: "Excited about privacy approach!",
  },
];

const features = [
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

function PixelHeart({ rainbow = false }) {
  return (
    <div className="relative mx-auto h-14 w-16">
      <div className="absolute left-2 top-0 h-8 w-8 rounded-sm bg-[#ff4658] shadow-[8px_0_0_#ff4658,16px_8px_0_#ff4658,0_8px_0_#ff4658,8px_16px_0_#ff4658]" />
      {rainbow && <div className="absolute left-4 top-9 h-2 w-9 bg-yellow-300 shadow-[0_4px_0_#35d06f,0_8px_0_#2b87ff,0_12px_0_#8d56db]" />}
    </div>
  );
}

function CoupleCard({
  image,
}: {
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-[2rem] border border-white/25 bg-white/15 p-5 shadow-xl backdrop-blur"
    >
      <img
        src={image}
        alt="pixelcrush couple"
        className="mx-auto h-44 w-auto object-contain pixelated"
      />
    </motion.div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/15 p-4 text-center shadow-lg backdrop-blur">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-white/80">{label}</p>
    </div>
  );
}

function Badge({ children }) {
  return <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/20">{children}</span>;
}

function ClientProfile({ user }) {
  const pref = preferences[user.id];
  const adv = advanced[user.id];
  return (
    <div className="rounded-[2rem] bg-white p-5 text-[#30244d] shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7766df]">private profile</p>
          <h3 className="mt-1 text-3xl font-black">{user.firstName}, {user.age}</h3>
          <p className="font-semibold text-[#6a5d83]">{user.occupation} · {user.location}</p>
        </div>
        <div className="rounded-2xl bg-[#ff4658] px-4 py-2 text-sm font-black text-white">{user.relationshipStatus}</div>
      </div>
      <p className="mt-4 rounded-2xl bg-[#f3efff] p-4 text-sm font-semibold leading-6">{pref.description}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <Info label="Goal" value={pref.goals} />
        <Info label="Looking For" value={pref.lookingFor} />
        <Info label="Religion" value={pref.religion} />
        <Info label="Lifestyle" value={pref.lifestyle} />
        <Info label="Love Language" value={adv.loveLanguage} />
        <Info label="Pace" value={adv.pace} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>{user.subscription}</Badge>
        <Badge>{user.videoReady ? "video ready" : "Audio First"}</Badge>
        <Badge>{user.matchmaker}</Badge>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl bg-[#f7f4ff] p-3">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#8c7fc4]">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}

export default function PixelCrushApp() {
  
  
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("PC001");

  const selected = users.find((u) => u.id === selectedId) || users[0];
  const filteredUsers = useMemo(() => {
    const q = query.toLowerCase();
    return users.filter((u) => [u.firstName, u.location, u.occupation, u.matchmaker, u.relationshipStatus].join(" ").toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#8997ff] via-[#766cdc] to-[#8d59c7] text-white pixelated">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#8191f5]/80 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ff4658] shadow-lg"><Heart fill="white" className="h-6 w-6" /></div>
            <h1 className="text-3xl font-black tracking-tight drop-shadow-md">pixelcrush</h1>
          </div>
          <div className="hidden gap-2 md:flex">
            <Badge>no swiping</Badge><Badge>Audio First</Badge><Badge>private</Badge>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-black uppercase tracking-[0.3em] text-white/70">dating, reimagined</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mt-4 max-w-3xl text-6xl font-black leading-[0.95] drop-shadow-lg md:text-7xl">no swiping. no anxiety. just real connections.</motion.h2>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-white/85">your personal matchmaker handles everything from introductions to rejections. progressive intimacy, complete privacy, and hand-holding until you find your person.</p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-3xl border border-white/25 bg-white/15 p-5 text-center"><Heart fill="#ff4658" className="mx-auto h-12 w-12 text-[#ff4658]" /><p className="mt-2 font-black">Audio First</p></div>
            <div className="rounded-3xl border border-white/25 bg-white/15 p-5 text-center"><Video className="mx-auto h-12 w-12" /><p className="mt-2 font-black">Then Video</p></div>
            <div className="rounded-3xl border border-white/25 bg-white/15 p-5 text-center"><Users className="mx-auto h-12 w-12" /><p className="mt-2 font-black">Finally Meet</p></div>
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

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat label="active users" value={users.length} />
          <Stat label="matches" value={matches.length} />
          <Stat label="sessions" value={sessions.length} />
          <Stat label="waitlist" value={waitlist.length} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black">Matchmaker Dashboard</h2>
            <Search className="h-6 w-6 text-white/70" />
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search clients..." className="mt-5 w-full rounded-2xl border border-white/20 bg-white/20 px-4 py-3 font-bold text-white placeholder:text-white/55 outline-none" />
          <div className="mt-5 space-y-3">
            {filteredUsers.map((user) => (
              <button key={user.id} onClick={() => setSelectedId(user.id)} className={`w-full rounded-3xl p-4 text-left transition ${selectedId === user.id ? "bg-[#ff4658] shadow-xl" : "bg-white/15 hover:bg-white/25"}`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xl font-black">{user.firstName}</p>
                    <p className="text-sm font-semibold text-white/80">{user.occupation} · {user.location}</p>
                  </div>
                  {user.videoReady && <CheckCircle2 className="h-6 w-6" />}
                </div>
              </button>
            ))}
          </div>
        </div>
        <ClientProfile user={selected} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-center text-5xl font-black">Why PixelCrush Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon, title, desc]) => (
            <div key={title} className="rounded-[2rem] bg-gradient-to-br from-[#ec7ed0] to-[#ff536f] p-6 shadow-xl">
              <Icon className="h-8 w-8" />
              <h3 className="mt-4 text-2xl font-black">{title}</h3>
              <p className="mt-3 text-lg font-semibold leading-8 text-white/90">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-center text-5xl font-black">How It Works</h2>
        <div className="mt-8 space-y-5">
          {howItWorks.map(([num, title, desc]) => (
            <div key={num} className="rounded-[2rem] border border-white/20 bg-white/15 p-6 text-center shadow-xl backdrop-blur">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#ff4658] text-2xl font-black">{num}</div>
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold leading-8 text-white/85">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-5 text-[#30244d] shadow-2xl">
            <h3 className="text-2xl font-black">Current Match</h3>
            <p className="mt-2 font-bold text-[#6a5d83]">{matches[0].id} · {matches[0].status}</p>
            <p className="mt-4 rounded-2xl bg-[#f3efff] p-4 font-semibold">{matches[0].notes}</p>
          </div>
          <div className="rounded-[2rem] bg-white p-5 text-[#30244d] shadow-2xl">
            <h3 className="text-2xl font-black">Next Session</h3>
            <p className="mt-2 font-bold text-[#6a5d83]">{sessions[0].type} · {sessions[0].duration}</p>
            <p className="mt-4 rounded-2xl bg-[#f3efff] p-4 font-semibold">{sessions[0].nextAction}</p>
          </div>
          <div className="rounded-[2rem] bg-white p-5 text-[#30244d] shadow-2xl">
            <h3 className="text-2xl font-black">matchmaker</h3>
            <p className="mt-2 font-bold text-[#6a5d83]">{matchmakers[0].name}</p>
            <p className="mt-4 rounded-2xl bg-[#f3efff] p-4 font-semibold">{matchmakers[0].activeClients}/{matchmakers[0].capacity} clients · {matchmakers[0].successRate}% success</p>
          </div>
        </div>
      </section>
    </main>
  );
}
