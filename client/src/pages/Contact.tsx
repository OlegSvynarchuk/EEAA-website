/*
 * DESIGN: Nordic Institutional Minimalism
 * - Clean contact form
 * - Headquarters information
 * - Professional institutional presentation
 */

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const contactReasons = [
  { value: "general", label: "General Inquiry" },
  { value: "membership", label: "Membership Information" },
  { value: "services", label: "Services Inquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "media", label: "Media / Press Inquiry" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!", {
      description: "We will respond to your inquiry within 2-3 business days.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Get in Touch
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              We welcome inquiries from businesses, institutions, and
              individuals interested in Europe-Asia economic cooperation. Our
              team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    placeholder="Enter your organization name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="reason">Inquiry Type *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactReasons.map((reason) => (
                        <SelectItem key={reason.value} value={reason.value}>
                          {reason.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Enter message subject"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message..."
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {/* Headquarters */}
                <div className="bg-[var(--color-navy)] text-white p-8 rounded-sm">
                  <h3 className="font-serif text-xl mb-6">Headquarters</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[var(--color-copper)]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p className="text-white/70 text-sm">
                          Omladinska staza 2b
                          <br />
                          Vrnjačka Banja
                          <br />
                          Republic of Serbia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[var(--color-copper)]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <a
                          href="mailto:office@eeaa-alliance.com"
                          className="text-white/70 text-sm hover:text-[var(--color-copper)] transition-colors"
                        >
                          office@eeaa-alliance.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[var(--color-copper)]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Office Hours</h4>
                        <p className="text-white/70 text-sm">
                          Monday – Friday
                          <br />
                          9:00 AM – 5:00 PM CET
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* International Branches */}
                <div className="border border-[var(--color-stone-dark)] p-8 rounded-sm">
                  <h3 className="font-serif text-xl text-[var(--color-navy)] mb-4">
                    International Presence
                  </h3>
                  <p className="text-[var(--color-gray-cool)] text-sm leading-relaxed mb-4">
                    EEAA is expanding its presence across Europe and Asia.
                    Information about regional offices and representatives will
                    be published as they are established.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-copper)]">
                    <ArrowRight className="w-4 h-4" />
                    Coming soon
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-[var(--color-stone)] p-6 rounded-sm">
                  <h4 className="font-medium text-[var(--color-navy)] mb-2">
                    Response Time
                  </h4>
                  <p className="text-[var(--color-gray-cool)] text-sm">
                    We aim to respond to all inquiries within 2-3 business days.
                    For urgent matters, please indicate so in your message
                    subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-4">
              Visit Our Headquarters
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Our headquarters is located in Vrnjačka Banja, Serbia — a historic
              spa town known for its natural springs and central European
              location, providing an ideal setting for international
              cooperation.
            </p>
            <div className="bg-white p-8 rounded-sm">
              <div className="aspect-video bg-[var(--color-stone-dark)] rounded flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[var(--color-copper)] mx-auto mb-4" />
                  <p className="text-[var(--color-navy)] font-serif text-lg">
                    Vrnjačka Banja, Serbia
                  </p>
                  <p className="text-[var(--color-gray-cool)] text-sm mt-2">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
