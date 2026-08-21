/*
 * DESIGN: Nordic Institutional Minimalism
 * - Clean application form
 * - Clear process explanation
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Building2, User, Info } from "lucide-react";
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

const applicationSteps = [
  {
    number: "01",
    title: "Submit Application",
    description: "Complete the online application form with your details",
  },
  {
    number: "02",
    title: "Review Process",
    description: "Our team reviews your application within 5-7 business days",
  },
  {
    number: "03",
    title: "Fee Payment",
    description: "Upon approval, receive invoice for annual membership fee",
  },
  {
    number: "04",
    title: "Activation",
    description: "Membership activated upon payment confirmation",
  },
];

export default function MembershipApplication() {
  const [memberType, setMemberType] = useState<string>("");
  const [orgType, setOrgType] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, memberType, orgType, industry }),
      });

      if (!response.ok) {
        const { error } = await response.json().catch(() => ({}));
        throw new Error(error || "Request failed");
      }

      toast.success("Application submitted successfully!", {
        description:
          "We will review your application and contact you within 5-7 business days.",
      });
      form.reset();
      setMemberType("");
      setOrgType("");
      setIndustry("");
    } catch (error) {
      toast.error("Application could not be sent.", {
        description:
          "Please try again, or email us directly at office@eeaa-alliance.com.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Apply Now
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Membership Application
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Begin your journey with EEAA by completing the application form
              below. Our team will review your submission and guide you through
              the membership process.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 border-b border-[var(--color-stone-dark)]">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="font-mono text-4xl text-[var(--color-stone-dark)] mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg text-[var(--color-navy)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--color-gray-cool)] text-sm">
                  {step.description}
                </p>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-[var(--color-stone-dark)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Spam honeypot - hidden from users, ignored by the server when filled */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {/* Member Type Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium text-[var(--color-navy)]">
                    Membership Type *
                  </Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setMemberType("legal")}
                      className={`p-6 rounded-sm border-2 text-left transition-all ${
                        memberType === "legal"
                          ? "border-[var(--color-copper)] bg-[var(--color-copper)]/5"
                          : "border-[var(--color-stone-dark)] hover:border-[var(--color-copper)]/50"
                      }`}
                    >
                      <Building2
                        className={`w-8 h-8 mb-3 ${
                          memberType === "legal"
                            ? "text-[var(--color-copper)]"
                            : "text-[var(--color-gray-cool)]"
                        }`}
                      />
                      <h4 className="font-serif text-lg text-[var(--color-navy)] mb-1">
                        Legal Entity
                      </h4>
                      <p className="text-sm text-[var(--color-gray-cool)]">
                        Companies, institutions, organizations
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMemberType("individual")}
                      className={`p-6 rounded-sm border-2 text-left transition-all ${
                        memberType === "individual"
                          ? "border-[var(--color-copper)] bg-[var(--color-copper)]/5"
                          : "border-[var(--color-stone-dark)] hover:border-[var(--color-copper)]/50"
                      }`}
                    >
                      <User
                        className={`w-8 h-8 mb-3 ${
                          memberType === "individual"
                            ? "text-[var(--color-copper)]"
                            : "text-[var(--color-gray-cool)]"
                        }`}
                      />
                      <h4 className="font-serif text-lg text-[var(--color-navy)] mb-1">
                        Individual
                      </h4>
                      <p className="text-sm text-[var(--color-gray-cool)]">
                        Professionals, consultants, experts
                      </p>
                    </button>
                  </div>
                </div>

                {memberType && (
                  <>
                    {/* Contact Information */}
                    <div className="space-y-6 pt-8 border-t border-[var(--color-stone-dark)]">
                      <h3 className="font-serif text-xl text-[var(--color-navy)]">
                        Contact Information
                      </h3>

                      {memberType === "legal" && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="orgName">Organization Name *</Label>
                            <Input
                              id="orgName"
                              name="orgName"
                              placeholder="Enter organization name"
                              required
                              className="mt-2"
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="orgType">
                                Organization Type *
                              </Label>
                              <Select
                                required
                                value={orgType}
                                onValueChange={setOrgType}
                              >
                                <SelectTrigger id="orgType" className="mt-2">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="company">
                                    Company
                                  </SelectItem>
                                  <SelectItem value="institution">
                                    Institution
                                  </SelectItem>
                                  <SelectItem value="ngo">NGO</SelectItem>
                                  <SelectItem value="chamber">
                                    Chamber of Commerce
                                  </SelectItem>
                                  <SelectItem value="university">
                                    University
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="industry">Industry *</Label>
                              <Select
                                required
                                value={industry}
                                onValueChange={setIndustry}
                              >
                                <SelectTrigger id="industry" className="mt-2">
                                  <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="manufacturing">
                                    Manufacturing
                                  </SelectItem>
                                  <SelectItem value="technology">
                                    Technology
                                  </SelectItem>
                                  <SelectItem value="finance">
                                    Finance
                                  </SelectItem>
                                  <SelectItem value="trade">Trade</SelectItem>
                                  <SelectItem value="logistics">
                                    Logistics
                                  </SelectItem>
                                  <SelectItem value="consulting">
                                    Consulting
                                  </SelectItem>
                                  <SelectItem value="education">
                                    Education
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">
                            {memberType === "legal"
                              ? "Contact Person First Name"
                              : "First Name"}{" "}
                            *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="Enter first name"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">
                            {memberType === "legal"
                              ? "Contact Person Last Name"
                              : "Last Name"}{" "}
                            *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Enter last name"
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {memberType === "legal" && (
                        <div>
                          <Label htmlFor="position">Position/Title *</Label>
                          <Input
                            id="position"
                            name="position"
                            placeholder="Enter position"
                            required
                            className="mt-2"
                          />
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter phone number"
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-6 pt-8 border-t border-[var(--color-stone-dark)]">
                      <h3 className="font-serif text-xl text-[var(--color-navy)]">
                        Address
                      </h3>

                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="Enter street address"
                          required
                          className="mt-2"
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="Enter city"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            placeholder="Enter postal code"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            name="country"
                            placeholder="Enter country"
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interest Areas */}
                    <div className="space-y-6 pt-8 border-t border-[var(--color-stone-dark)]">
                      <h3 className="font-serif text-xl text-[var(--color-navy)]">
                        Interest Areas
                      </h3>

                      <div>
                        <Label htmlFor="interests">
                          What are your primary interests in Europe-Asia
                          cooperation?
                        </Label>
                        <Textarea
                          id="interests"
                          name="interests"
                          placeholder="Describe your interests, goals, and how EEAA can support your objectives..."
                          rows={4}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="markets">
                          Which Asian markets are you most interested in?
                        </Label>
                        <Input
                          id="markets"
                          name="markets"
                          placeholder="e.g., China, Japan, Korea, ASEAN, Central Asia"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-8 border-t border-[var(--color-stone-dark)]">
                      <div className="flex items-start gap-3 mb-6 p-4 bg-[var(--color-stone)] rounded-sm">
                        <Info className="w-5 h-5 text-[var(--color-copper)] shrink-0 mt-0.5" />
                        <p className="text-sm text-[var(--color-gray-cool)]">
                          By submitting this application, you agree to EEAA's
                          terms and conditions. Membership is subject to
                          approval and payment of the annual membership fee.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Application
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Fee Information */}
                <div className="bg-[var(--color-stone)] p-8 rounded-sm">
                  <h3 className="font-serif text-xl text-[var(--color-navy)] mb-4">
                    Membership Fees
                  </h3>
                  <p className="text-[var(--color-gray-cool)] text-sm leading-relaxed mb-4">
                    Annual membership fees are determined based on membership
                    type and organizational size. Specific fee information will
                    be provided upon application review.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-[var(--color-navy)]">
                      <Check className="w-4 h-4 text-[var(--color-copper)]" />
                      Transparent fee structure
                    </li>
                    <li className="flex items-center gap-2 text-[var(--color-navy)]">
                      <Check className="w-4 h-4 text-[var(--color-copper)]" />
                      Annual billing cycle
                    </li>
                    <li className="flex items-center gap-2 text-[var(--color-navy)]">
                      <Check className="w-4 h-4 text-[var(--color-copper)]" />
                      Multiple payment options
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="border border-[var(--color-stone-dark)] p-8 rounded-sm">
                  <h3 className="font-serif text-xl text-[var(--color-navy)] mb-4">
                    Questions?
                  </h3>
                  <p className="text-[var(--color-gray-cool)] text-sm leading-relaxed mb-4">
                    Our membership team is happy to assist you with any
                    questions about the application process.
                  </p>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-[var(--color-navy)] text-[var(--color-navy)]"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
