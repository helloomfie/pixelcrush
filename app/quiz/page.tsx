"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Heart, Sparkles } from "lucide-react";

type quizField = {
  key: string;
  label: string;
  type: "text" | "textarea" | "select" | "scale";
  options?: string[];
  placeholder?: string;
};

type quizSection = {
  id: string;
  title: string;
  description: string;
  fields: quizField[];
};

const quizSections: quizSection[] = [
  {
    id: "basic-profile",
    title: "basic profile",
    description: "core user details for the private matchmaking database.",
    fields: [
      { key: "firstName", label: "first name", type: "text", placeholder: "james" },
      { key: "age", label: "age", type: "text", placeholder: "31" },
      { key: "gender", label: "gender", type: "select", options: ["woman", "man", "nonbinary", "other", "prefer not to say"] },
      { key: "orientation", label: "orientation", type: "select", options: ["straight", "gay", "bi", "queer", "pan", "other"] },
      { key: "location", label: "location", type: "text", placeholder: "nyc, ny" },
      { key: "height", label: "height", type: "text", placeholder: "5'6" },
      { key: "occupation", label: "occupation", type: "text", placeholder: "software engineer" },
      { key: "education", label: "education", type: "select", options: ["high school", "some college", "bachelor's", "master's", "phd", "trade school", "other"] },
    ],
  },
  {
    id: "relationship-goals",
    title: "relationship goals",
    description: "what the user wants and what kind of connection they are ready for.",
    fields: [
      { key: "goals", label: "relationship goal", type: "select", options: ["serious relationship", "marriage", "long-term dating", "exploring", "friendship first"] },
      { key: "kids", label: "kids", type: "select", options: ["no kids - want kids", "no kids - unsure", "no kids - do not want kids", "has kids", "has kids - wants more", "has kids - does not want more"] },
      { key: "pace", label: "dating pace", type: "select", options: ["slow", "medium", "fast"] },
      { key: "openness", label: "openness", type: "select", options: ["conservative", "moderate", "open"] },
      { key: "curiosity", label: "relationship curiosity", type: "select", options: ["new", "curious", "experienced"] },
      { key: "lookingFor", label: "looking for", type: "textarea", placeholder: "age range, lifestyle, values, location, personality..." },
    ],
  },
  {
    id: "lifestyle-values",
    title: "lifestyle + values",
    description: "daily-life compatibility fields from the database.",
    fields: [
      { key: "religion", label: "religion / spirituality", type: "select", options: ["christian", "jewish", "muslim", "spiritual", "agnostic", "atheist", "other", "prefer not to say"] },
      { key: "lifestyle", label: "smoking / drinking", type: "select", options: ["non-smoker / non-drinker", "non-smoker / social drinker", "social smoker / social drinker", "smoker / drinker", "sober"] },
      { key: "cannabis", label: "cannabis", type: "select", options: ["never", "occasionally", "socially", "regularly", "prefer not to say"] },
      { key: "fitness", label: "fitness", type: "select", options: ["not active", "some exercise", "active", "athlete"] },
      { key: "reading", label: "reading", type: "select", options: ["not really", "fiction lover", "nonfiction lover", "bookworm", "sometimes"] },
      { key: "gaming", label: "gaming", type: "select", options: ["none", "casual gamer", "regular gamer", "competitive gamer"] },
      { key: "social", label: "social media", type: "select", options: ["minimal use", "normal use", "content creator", "very online"] },
    ],
  },
  {
    id: "personality-quiz",
    title: "personality signals",
    description: "lightweight scoring fields for matchmaker context.",
    fields: [
      { key: "introvertScore", label: "introvert score", type: "scale" },
      { key: "adventurousScore", label: "adventurous score", type: "scale" },
      { key: "romanticScore", label: "romantic score", type: "scale" },
      { key: "routineScore", label: "routine-oriented score", type: "scale" },
      { key: "conflictScore", label: "direct communication score", type: "scale" },
    ],
  },
  {
    id: "communication-intimacy",
    title: "communication + intimacy",
    description: "fields that support progressive audio → video → in-person matching.",
    fields: [
      { key: "loveLanguage", label: "love language", type: "select", options: ["quality time", "acts of service", "words of affirmation", "physical touch", "receiving gifts"] },
      { key: "communication", label: "preferred communication", type: "select", options: ["texting", "phone calls", "voice notes", "video calls", "in-person"] },
      { key: "audioComfort", label: "audio date comfort", type: "scale" },
      { key: "videoComfort", label: "video date comfort", type: "scale" },
      { key: "meetingComfort", label: "in-person meeting comfort", type: "scale" },
      { key: "dealBreakers", label: "deal breakers", type: "textarea", placeholder: "smoking, heavy drinking, politics, distance, kids, etc." },
    ],
  },
  {
    id: "matchmaker-notes",
    title: "matchmaker notes",
    description: "private qualitative notes for human-guided matching.",
    fields: [
      { key: "description", label: "short profile description", type: "textarea", placeholder: "software engineer who loves hiking and cooking" },
      { key: "matchmakerNotes", label: "private matchmaker notes", type: "textarea", placeholder: "what should the matchmaker know before pairing this person?" },
    ],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="bg-white/20 px-3 py-1 text-xs font-black text-white ring-1 ring-white/20">{children}</span>;
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: quizField;
  value: string;
  onChange: (value: string) => void;
}) {
  if (field.type === "textarea") {
    return (
      <textarea
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={field.placeholder}
        className="min-h-24 w-full border border-white/20 bg-white/15 px-4 py-3 text-sm font-bold text-white placeholder:text-white/40 outline-none"
      />
    );
  }

  if (field.type === "select") {
    return (
      <select
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border border-white/20 bg-white/15 px-4 py-3 text-sm font-bold text-white outline-none"
      >
        <option value="" className="text-black">select one</option>
        {field.options?.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (field.type === "scale") {
    return (
      <div className="grid grid-cols-5 gap-2">
        {["1", "2", "3", "4", "5"].map((score) => (
          <button
            key={score}
            type="button"
            onClick={() => onChange(score)}
            className={`border px-4 py-3 text-sm font-black ${value === score ? "border-[#ff4658] bg-[#ff4658] text-white" : "border-white/20 bg-white/15 text-white/70"}`}
          >
            {score}
          </button>
        ))}
      </div>
    );
  }

  return (
    <input
      value={value || ""}
      onChange={(event) => onChange(event.target.value)}
      placeholder={field.placeholder}
      className="w-full border border-white/20 bg-white/15 px-4 py-3 text-sm font-bold text-white placeholder:text-white/40 outline-none"
    />
  );
}

export default function QuizPage() {
  const [activeSection, setActiveSection] = useState(quizSections[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const section = quizSections.find((item) => item.id === activeSection) || quizSections[0];

  const progress = useMemo(() => {
    const allFields = quizSections.flatMap((item) => item.fields);
    const completed = allFields.filter((field) => answers[field.key]?.trim()).length;
    return Math.round((completed / allFields.length) * 100);
  }, [answers]);

  function updateAnswer(key: string, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  const quizPayload = {
    user: {
      firstName: answers.firstName || "",
      age: answers.age || "",
      gender: answers.gender || "",
      orientation: answers.orientation || "",
      location: answers.location || "",
      height: answers.height || "",
      occupation: answers.occupation || "",
      education: answers.education || "",
      status: "waitlist",
    },
    preferences: {
      description: answers.description || "",
      kids: answers.kids || "",
      religion: answers.religion || "",
      lifestyle: answers.lifestyle || "",
      cannabis: answers.cannabis || "",
      gaming: answers.gaming || "",
      reading: answers.reading || "",
      fitness: answers.fitness || "",
      social: answers.social || "",
      goals: answers.goals || "",
      quiz: `introvert: ${answers.introvertScore || ""}, adventurous: ${answers.adventurousScore || ""}, romantic: ${answers.romanticScore || ""}, routine: ${answers.routineScore || ""}, direct: ${answers.conflictScore || ""}`,
      lookingFor: answers.lookingFor || "",
    },
    advanced: {
      openness: answers.openness || "",
      pace: answers.pace || "",
      curiosity: answers.curiosity || "",
      dealBreakers: answers.dealBreakers || "",
      loveLanguage: answers.loveLanguage || "",
      communication: answers.communication || "",
      audioComfort: answers.audioComfort || "",
      videoComfort: answers.videoComfort || "",
      meetingComfort: answers.meetingComfort || "",
      matchmakerNotes: answers.matchmakerNotes || "",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#8997ff] via-[#766cdc] to-[#8d59c7] p-6 text-white pixelated">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border border-white/20 bg-white/15 p-5 shadow-xl backdrop-blur">
          <div>
            <Link href="/" className="text-sm font-black text-white/75 hover:text-white">
              <span className="inline-flex items-center gap-2">← back home</span>
            </Link>
            <h1 className="mt-3 text-5xl font-black">compatibility quiz builder</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold text-white/75">
              a database-aligned onboarding quiz for user records, preferences, advanced matching notes, and future supabase tables.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>{progress}% complete</Badge>
            <Badge>db mapped</Badge>
            <Badge>supabase ready</Badge>
          </div>
        </div>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
            <h2 className="text-2xl font-black">quiz sections</h2>
            <div className="mt-5 space-y-3">
              {quizSections.map((item) => {
                const done = item.fields.every((field) => answers[field.key]?.trim());
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full border border-white/10 p-4 text-left transition ${activeSection === item.id ? "bg-[#ff4658] shadow-xl" : "bg-white/15 hover:bg-white/25"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black">{item.title}</p>
                      {done && <CheckCircle2 className="h-5 w-5" />}
                    </div>
                    <p className="mt-2 text-xs font-bold text-white/70">{item.fields.length} fields</p>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-white/60">active section</p>
                <h2 className="mt-1 text-4xl font-black">{section.title}</h2>
                <p className="mt-2 max-w-2xl text-sm font-semibold text-white/75">{section.description}</p>
              </div>
              <Heart fill="#ff4658" className="h-10 w-10 text-[#ff4658]" />
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {section.fields.map((field) => (
                <label key={field.key} className={field.type === "textarea" ? "md:col-span-2" : ""}>
                  <p className="mb-2 text-xs font-black uppercase tracking-widest text-white/65">{field.label}</p>
                  <FieldInput
                    field={field}
                    value={answers[field.key] || ""}
                    onChange={(value) => updateAnswer(field.key, value)}
                  />
                </label>
              ))}
            </div>
          </section>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6" />
              <h2 className="text-2xl font-black">database preview</h2>
            </div>
            <pre className="mt-4 max-h-[520px] overflow-auto border border-white/10 bg-black/20 p-4 text-xs font-bold leading-6 text-white/80">
{JSON.stringify(quizPayload, null, 2)}
            </pre>
          </div>

          <div className="border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur">
            <h2 className="text-2xl font-black">what this feeds later</h2>
            <div className="mt-4 space-y-3 text-sm font-bold leading-6 text-white/80">
              <p className="bg-white/15 p-4">users table: identity, location, status, subscription, matchmaker assignment.</p>
              <p className="bg-white/15 p-4">preferences table: values, lifestyle, goals, quiz scores, looking-for notes.</p>
              <p className="bg-white/15 p-4">advanced table: communication style, pace, openness, comfort levels, deal breakers.</p>
              <p className="bg-white/15 p-4">waitlist table: early signup flow before full account activation.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
