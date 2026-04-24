"use client";
import { useState } from "react";
import useReveal from "@/lib/animations/reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [phoneErr, setPhoneErr] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const section = useReveal(300, 5);

  const handlePhone = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    setForm((p) => ({ ...p, phone: digits }));
    if (digits.length > 0 && digits.length < 10)
      setPhoneErr("Enter valid 10-digit number");
    else if (digits.length === 10 && digits[0] === "0")
      setPhoneErr("Number shouldn't start with 0");
    else setPhoneErr("");
  };

  const valid =
    form.name.trim() &&
    form.email.includes("@") &&
    form.message.trim() &&
    (form.phone === "" || (form.phone.length === 10 && form.phone[0] !== "0"));

  const handleSubmit = async () => {
    if (!valid) return;
    setSending(true);

    await fetch("https://inputhaven.com/api/v1/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _form_id: "45fa336c85ee59cea61c966b6504490a",
        name: form.name,
        email: form.email,
        phone: form.phone ? `+91${form.phone}` : "",
        message: form.message,
      }),
    });

    setSending(false);
    setSent(true);
  };

  return (
    <section className="py-2 px-3" id="contact">
      <div
        ref={section.ref}
        style={section.style}
        className={`max-w-4xl ${section.className} mx-auto`}
      >
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-3">
            Contact
          </p>
          <h2 className="font-grotesk text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white">
            Let's work together
          </h2>
          <p className="text-stone-500 dark:text-stone-400 mt-4 text-base">
            Got a project or question in mind? Drop a message or book a call
            directly.
          </p>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 border bg-white border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-xl">
                  ✓
                </div>
                <p className="font-grotesk text-xl font-bold text-stone-900 dark:text-white">
                  Message sent!
                </p>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-2 text-xs text-stone-400 underline underline-offset-4 hover:text-stone-600 dark:hover:text-stone-200"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <label className="text-xs text-stone-500 dark:text-stone-400 tracking-wide uppercase mb-2 block">
                    Name <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white text-sm placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:border-stone-400 dark:focus:border-stone-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-stone-500 dark:text-stone-400 tracking-wide uppercase mb-2 block">
                    Email <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white text-sm placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:border-stone-400 dark:focus:border-stone-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-stone-500 dark:text-stone-400 tracking-wide uppercase mb-2 block">
                    Phone{" "}
                    <span className="text-stone-300 dark:text-stone-600 normal-case tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <div className="flex items-center gap-0 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700 focus-within:border-stone-400 dark:focus-within:border-stone-500 transition-colors">
                    <span className="px-3 py-3 bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 text-sm border-r border-stone-200 dark:border-stone-700 select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="98XXXXXXXX"
                      value={form.phone}
                      onChange={(e) => handlePhone(e.target.value)}
                      className="flex-1 px-4 py-3 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white text-sm placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none"
                    />
                  </div>
                  {phoneErr && (
                    <p className="text-xs text-red-400 mt-1.5">{phoneErr}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs text-stone-500 dark:text-stone-400 tracking-wide uppercase mb-2 block">
                    Message <span className="text-stone-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white text-sm placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:border-stone-400 dark:focus:border-stone-500 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!valid || sending}
                  className="w-full py-3.5 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-sm font-medium hover:bg-stone-700 dark:hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {sending ? "Sending..." : "Send Message →"}
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white flex-1 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-lg mb-5">
                  📞
                </div>
                <h3 className="font-grotesk text-xl font-bold text-stone-900 dark:text-white mb-2">
                  Book a free call
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                  15 minutes. No pressure. We'll talk about your project or
                  doubt and figure out if we're a good fit.
                </p>
              </div>
              <a
                href="https://cal.com/virat-pod/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white text-sm font-medium text-center hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors duration-200 block"
              >
                Pick a time →
              </a>
            </div>

            <div className="bg-white border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm">📍</span>
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  India · Available remotely
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm">⚡</span>
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  Replies within 24 hours
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm">🟢</span>
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
