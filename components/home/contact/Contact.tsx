"use client";

import { FormEvent, useState } from "react";

import { CheckCircle, Loader2, Send, XCircle } from "lucide-react";

import { SectionHeading } from "@/components/helper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/data";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      );
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div id="contact" className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="Get In"
        title_2="Touch"
        description="Have a project in mind or just want to say hi? I'd love to hear from you!"
      />
      <div className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CONTACT INFO */}
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-anchor-placement="top-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let&apos;s Talk</h3>
                <p className="text-muted-foreground">
                  I&apos;m always open to new opportunities, collaborations, or
                  just a friendly chat. Whether you have a project in mind or
                  want to discuss the latest in tech, feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-500 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              {/* SOCIAL ICONS */}
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-anchor-placement="top-center"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={status === "loading"}
                    className="bg-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="join@example.com"
                    required
                    disabled={status === "loading"}
                    className="bg-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  disabled={status === "loading"}
                  className="bg-gray-100"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  disabled={status === "loading"}
                  className="bg-gray-100 h-40"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg">
                  <CheckCircle className="size-5 shrink-0" />
                  <span className="text-sm font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg">
                  <XCircle className="size-5 shrink-0" />
                  <span className="text-sm font-medium">
                    {errorMessage ||
                      "Failed to send message. Please try again."}
                  </span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-white"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
