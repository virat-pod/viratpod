"use client";
import { useState } from "react";
import useReveal from "@/lib/animations/reveal";

const faqs = [
  {
    q: "Are you available for freelance work?",
    a: "Yes, I'm currently open to freelance and contract projects. Whether it's a full product or just a specific feature — reach out and we'll figure it out.",
  },
  {
    q: "How long does a typical project take?",
    a: "Depends on scope. A landing page takes 3–5 days. A full stack app with auth, database, and dashboard usually takes 2–4 weeks. I always give a clear timeline before starting.",
  },
  {
    q: "What do you actually deliver?",
    a: "Clean, documented code pushed to your repo. Deployed and live on your domain. Mobile responsive. I don't disappear after handing over — I stay available for fixes.",
  },
  {
    q: "Do you work with non-technical clients?",
    a: "Absolutely. I handle everything from design to deployment. You just tell me what you need it to do — I handle the how.",
  },
  {
    q: "What's your communication like during a project?",
    a: "Daily or every-other-day updates. You'll always know where things stand. No radio silence, no surprises at the end.",
  },
  {
    q: "Why should I hire you over someone more experienced?",
    a: "I'm hungry, fast, and I actually care about the output. Senior devs juggle 5 clients — I focus on yours. And my rates reflect where I am, not where I'm going.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const section = useReveal(300, 5);

  return (
    <section className="py-2 px-3 sm:px-6">
      <div
        ref={section.ref}
        style={section.style}
        className={`max-w-4xl ${section.className} mx-auto`}
      >

        <div className="mb-1 sm:mb-7 sm:mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-3">
            FAQ
          </p>
          <h2 className="font-grotesk text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white">
            Still on the fence?
          </h2>
          <p className="text-stone-500 dark:text-stone-400 mt-1.5 sm:mt-3 text-base leading-relaxed">
            Honest answers to things people actually wonder before hiring a dev.
          </p>
        </div>


        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 text-left group"
              >
                <span className="font-grotesk text-base sm:text-lg font-medium text-stone-800 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors duration-200">
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded-full border border-stone-300 text-stone-400 dark:text-stone-500 text-xs transition-transform duration-300"
                  style={{
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: open === i ? "200px" : "0px",
                  opacity: open === i ? 1 : 0,
                }}
              >
                <p className="pt-4 text-stone-500 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 sm:pt-8 border-t border-stone-100 dark:border-stone-800">
          <div>
            <p className="font-grotesk text-lg font-semibold text-stone-900 dark:text-white">
              Still have questions?
            </p>
            <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
              I reply within 24 hours.
            </p>
          </div>
          <a
            href="https://cal.com/virat-pod/30min?overlayCalendar=true"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-sm font-medium hover:bg-stone-700 dark:hover:bg-stone-100 transition-colors duration-200"
          >
            Let's talk →
          </a>
        </div>
      </div>
    </section>
  );
}
