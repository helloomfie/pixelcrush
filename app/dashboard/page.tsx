"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Search,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

type user = {
  id: string;
  email: string;
  firstName: string;
  age: number;
  gender: string;
  orientation: string;
  location: string;
  height: string;
  occupation: string;
  education: string;
  status: string;
  subscription: string;
  matchmaker: string;
  videoReady: boolean;
  meetingReady: boolean;
  partnerId: string;
  relationshipStatus: string;
  createdDate: string;
  notes: string;
};

type preference = {
  description: string;
  kids: string;
  religion: string;
  lifestyle: string;
  cannabis: string;
  gaming: string;
  reading: string;
  fitness: string;
  social: string;
  goals: string;
  quiz: string;
  lookingFor: string;
  updatedDate: string;
};

type advanced = {
  openness: string;
  pace: string;
  curiosity: string;
  dealBreakers: string;
  loveLanguage: string;
  communication: string;
  sexualPreferences: string;
  updatedDate: string;
  matchmakerNotes: string;
};

const users: user[] = [
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
    createdDate: "2025-01-15",
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
    createdDate: "2025-01-15",
    notes: "Likes going on walks",
  },
];

const preferences: Record<string, preference> = {
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
    updatedDate: "2025-01-15",
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
    updatedDate: "2025-01-15",
  },
};

const advanced: Record<string, advanced> = {
  PC001: {
    openness: "Open",
    pace: "Fast",
    curiosity: "Experienced",
    dealBreakers: "Smoking",
    loveLanguage: "Quality time",
    communication: "In-person",
    sexualPreferences: "Private details",
    updatedDate: "2025-01-20",
    matchmakerNotes: "Very focused on attractiveness",
  },
  PC002: {
    openness: "Conservative",
    pace: "Slow",
    curiosity: "Curious",
    dealBreakers: "Heavy drinking",
    loveLanguage: "Receiving gifts",
    communication: "Texting",
    sexualPreferences: "Private details",
    updatedDate: "2025-01-20",
    matchmakerNotes: "Needs emotional connection first",
  },
};

const matchmakers = [
  {
    id: "MM000",
    name: "Sarah Mitchell",
    email: "sarah@pixelcrush.com",
    specialty: "25-35, Tech professionals",
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
    createdDate: "2025-01-20",
    audioDate: "2025-01-22",
    videoDate: "2025-01-25",
    meetingDate: "2025-01-30",
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
    scheduledTime: "2025-01-22 8:00 PM",
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
    signupDate: "2025-08-23",
    notes: "Excited about privacy approach!",
  },
];

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
}) {
  return (
    <div className="border border-white/20 bg-white/15 p-5 shadow-lg backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-4xl font-black text-white">{value}</p>
          <p className="mt-1 text-sm font-bold text-white/75">{label}</p>
        </div>
        <Icon className="h-8 w-8 text-white/70" />
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="bg-white/20 px-3 py-1 text-xs font-black text-white ring-1 ring-white/20">{children}</span>;
}

function Field({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-[#f7f4ff] p-3">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#8c7fc4]">{label}</p>
      <p className="mt-1 font-bold text-[#30244d]">{value}</p>
    </div>
  );
}

function ClientProfile({ user }: { user: user }) {
  const pref = preferences[user.id];
  const adv = advanced[user.id];

  return (
    <div className="bg-white p-5 text-[#30244d] shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7766df]">private profile</p>
          <h2 className="mt-1 text-4xl font-black">{user.firstName}, {user.age}</h2>
          <p className="font-semibold text-[#6a5d83]">{user.occupation} · {user.location}</p>
        </div>
        <div className="bg-[#ff4658] px-4 py-2 text-sm font-black text-white">{user.relationshipStatus}</div>
      </div>

      <p className="mt-4 bg-[#f3efff] p-4 text-sm font-semibold leading-6">{pref.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <Field label="goal" value={pref.goals} />
        <Field label="looking for" value={pref.lookingFor} />
        <Field label="kids" value={pref.kids} />
        <Field label="religion" value={pref.religion} />
        <Field label="lifestyle" value={pref.lifestyle} />
        <Field label="fitness" value={pref.fitness} />
        <Field label="love language" value={adv.loveLanguage} />
        <Field label="pace" value={adv.pace} />
        <Field label="communication" value={adv.communication} />
        <Field label="deal breakers" value={adv.dealBreakers} />
      </div>

      <div className="mt-4 bg-[#fff1f5] p-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#ff4658]">matchmaker notes</p>
        <p className="mt-2 text-sm font-bold leading-6">{adv.matchmakerNotes}. {user.notes}.</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>{user.subscription}</Badge>
        <Badge>{user.videoReady ? "video ready" : "audio only"}</Badge>
        <Badge>{user.meetingReady ? "meeting ready" : "not meeting ready"}</Badge>
        <Badge>{user.matchmaker}</Badge>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("PC001");

  const selected = users.find((user) => user.id === selectedId) || users[0];
  const activeMatch = matches.find((match) => match.user1 === selected.id || match.user2 === selected.id) || matches[0];
  const activeSession = sessions.find((session) => session.matchId === activeMatch.id) || sessions[0];
  const matchmaker = matchmakers[0];

  const filteredUsers = useMemo(() => {
    const search = query.toLowerCase();
    return users.filter((user) =>
      [user.id, user.firstName, user.email, user.location, user.occupation, user.matchmaker, user.relationshipStatus]
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#8997ff] via-[#766cdc] to-[#8d59c7] p-6 text-white pixelated">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border border-white/20 bg-white/15 p-5 shadow-xl backdrop-blur">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> back home
            </Link>
            <h1 className="mt-3 text-5xl font-black">matchmaker crm</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold text-white/75">
              private operator dashboard for users, preferences, matches, scheduling, feedback, waitlist, and relationship states.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>database mode</Badge>
            <Badge>spreadsheet seed</Badge>
            <Badge>supabase later</Badge>
          </div>
        </div>

        <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
          <StatCard label="active users" value={users.length} icon={Users} />
          <StatCard label="matches" value={matches.length} icon={Heart} />
          <StatCard label="sessions" value={sessions.length} icon={Calendar} />
          <StatCard label="waitlist" value={waitlist.length} icon={Clock} />
          <StatCard label="success rate" value={`${matchmaker.successRate}%`} icon={Sparkles} />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-black">clients</h2>
              <Search className="h-6 w-6 text-white/70" />
            </div>

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="search users, notes, city, status..."
              className="mt-5 w-full border border-white/20 bg-white/20 px-4 py-3 font-bold text-white placeholder:text-white/55 outline-none"
            />

            <div className="mt-5 space-y-3">
              {filteredUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => setSelectedId(user.id)}
                  className={`w-full border border-white/10 p-4 text-left transition ${selectedId === user.id ? "bg-[#ff4658] shadow-xl" : "bg-white/15 hover:bg-white/25"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xl font-black">{user.firstName}</p>
                      <p className="text-sm font-semibold text-white/80">{user.id} · {user.occupation}</p>
                    </div>
                    {user.videoReady && <CheckCircle2 className="h-6 w-6" />}
                  </div>
                  <p className="mt-2 text-xs font-bold text-white/70">{user.location} · {user.relationshipStatus} · {user.matchmaker}</p>
                </button>
              ))}
            </div>
          </div>

          <ClientProfile user={selected} />
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-3">
          <div className="bg-white p-5 text-[#30244d] shadow-2xl">
            <h3 className="text-2xl font-black">current match</h3>
            <p className="mt-2 font-bold text-[#6a5d83]">{activeMatch.id} · {activeMatch.status}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <Field label="user 1" value={activeMatch.user1} />
              <Field label="user 2" value={activeMatch.user2} />
              <Field label="interest 1" value={activeMatch.user1Interest} />
              <Field label="interest 2" value={activeMatch.user2Interest} />
            </div>
            <p className="mt-4 bg-[#f3efff] p-4 font-semibold">{activeMatch.notes}</p>
          </div>

          <div className="bg-white p-5 text-[#30244d] shadow-2xl">
            <h3 className="text-2xl font-black">next session</h3>
            <p className="mt-2 font-bold text-[#6a5d83]">{activeSession.type} · {activeSession.duration}</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Field label="scheduled" value={activeSession.scheduledTime} />
              <Field label="meet link" value={activeSession.meetLink} />
              <Field label="both joined" value={activeSession.bothJoined ? "yes" : "no"} />
            </div>
            <p className="mt-4 bg-[#f3efff] p-4 font-semibold">{activeSession.nextAction}</p>
          </div>

          <div className="bg-white p-5 text-[#30244d] shadow-2xl">
            <h3 className="text-2xl font-black">matchmaker</h3>
            <p className="mt-2 font-bold text-[#6a5d83]">{matchmaker.name}</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Field label="specialty" value={matchmaker.specialty} />
              <Field label="client load" value={`${matchmaker.activeClients}/${matchmaker.capacity}`} />
              <Field label="email" value={matchmaker.email} />
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
            <h3 className="text-2xl font-black">match pipeline</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm font-bold">
                <thead className="border-b border-white/20 text-white/70">
                  <tr>
                    <th className="py-3 pr-4">match</th>
                    <th className="py-3 pr-4">users</th>
                    <th className="py-3 pr-4">stage</th>
                    <th className="py-3 pr-4">audio</th>
                    <th className="py-3 pr-4">video</th>
                    <th className="py-3 pr-4">outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match) => (
                    <tr key={match.id} className="border-b border-white/10">
                      <td className="py-3 pr-4">{match.id}</td>
                      <td className="py-3 pr-4">{match.user1} + {match.user2}</td>
                      <td className="py-3 pr-4">{match.status}</td>
                      <td className="py-3 pr-4">{match.audioDate}</td>
                      <td className="py-3 pr-4">{match.videoDate}</td>
                      <td className="py-3 pr-4">{match.finalStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
            <h3 className="text-2xl font-black">waitlist</h3>
            <div className="mt-4 space-y-3">
              {waitlist.map((person) => (
                <div key={person.email} className="bg-white/15 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xl font-black">{person.name}</p>
                    <Badge>{person.priority}</Badge>
                  </div>
                  <p className="mt-1 text-sm font-bold text-white/75">{person.age} · {person.location} · {person.source}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/80">{person.description}</p>
                  <p className="mt-3 bg-white/15 p-3 text-xs font-bold text-white/75">{person.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
