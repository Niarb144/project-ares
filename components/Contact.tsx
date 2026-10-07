"use client";

import React, { useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          captchaToken,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setCaptchaToken(null);
      } else {
        setStatus(data.error || "Something went wrong");
      }
    } catch {
      setStatus("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        w-full
        bg-[#f7f7f5]
        px-5
        py-20
        md:px-8
        lg:px-12
        lg:py-28
      "
    >
      <div className="mx-auto max-w-[1500px]">
        <div
          className="
            grid
            grid-cols-1
            gap-14
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-24
          "
        >
          {/* =========================
              LEFT — CONTACT DETAILS
          ========================== */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Contact
                </span>
              </div>

              <h2
                className="
                  text-5xl
                  font-medium
                  leading-[0.95]
                  tracking-[-0.045em]
                  text-neutral-950
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Get in touch
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-neutral-500 md:text-base">
                Have a project in mind, an opportunity, or just want to talk
                about building something interesting? Send me a message.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-12 space-y-8 lg:mt-20">
              {/* Email */}
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Email
                </p>

                <Link
                  href="mailto:teddybrian543@gmail.com"
                  className="
                    text-sm
                    font-medium
                    text-neutral-900
                    transition-colors
                    hover:text-blue-600
                    md:text-base
                  "
                >
                  teddybrian543@gmail.com
                </Link>
              </div>

              {/* Phone */}
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Phone
                </p>

                <Link
                  href="tel:+254706182796"
                  className="
                    text-sm
                    font-medium
                    text-neutral-900
                    transition-colors
                    hover:text-blue-600
                    md:text-base
                  "
                >
                  +254 706 182 796
                </Link>
              </div>

              {/* Location */}
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Location
                </p>

                <p className="text-sm font-medium leading-6 text-neutral-900 md:text-base">
                  Nairobi, Kenya
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Follow me
                </p>

                <div className="flex items-center gap-3">
                  <Link
                    href="https://github.com/Niarb144"
                    target="_blank"
                    aria-label="GitHub"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-neutral-950
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-600
                    "
                  >
                    <FaGithub size={15} />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/brian-teddy-omondi/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-neutral-950
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-600
                    "
                  >
                    <FaLinkedinIn size={14} />
                  </Link>

                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-neutral-950
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-600
                    "
                  >
                    <FaInstagram size={14} />
                  </Link>

                  <Link
                    href="#"
                    aria-label="X"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-neutral-950
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-600
                    "
                  >
                    <FaXTwitter size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT — FORM
          ========================== */}
          <div>
            <form onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  md:grid-cols-2
                "
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-neutral-500
                    "
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="
                      w-full
                      rounded-xl
                      border
                      
                      bg-neutral-300
                      px-4
                      py-3.5
                      text-sm
                      text-neutral-900
                      outline-none
                      transition-all
                      placeholder:text-neutral-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-neutral-500
                    "
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="
                      w-full
                      rounded-xl
                      border
                      
                      bg-neutral-300
                      px-4
                      py-3.5
                      text-sm
                      text-neutral-900
                      outline-none
                      transition-all
                      placeholder:text-neutral-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-neutral-500
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write something..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    
                    bg-neutral-300
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-neutral-900
                    outline-none
                    transition-all
                    placeholder:text-neutral-400
                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />
              </div>

              {/* Captcha */}
              <div className="mt-5 overflow-hidden">
                <ReCAPTCHA
                  sitekey={
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
                  }
                  onChange={(token) =>
                    setCaptchaToken(token)
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !captchaToken}
                className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-neutral-950
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-600
                  cursor-pointer
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                {loading ? "Sending..." : "Send message"}
              </button>

              {/* Status */}
              {status && (
                <p
                  className={`
                    mt-4
                    text-sm
                    ${
                      status.includes("success")
                        ? "text-emerald-600"
                        : "text-red-500"
                    }
                  `}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}