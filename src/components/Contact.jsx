import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "42, Jayanagar 4th Block,\nBengaluru, Karnataka 560011",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210\n+91 80 4567 8901",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@shraddhabuild.in\nprojects@shraddhabuild.in",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:30 AM – 7:00 PM\nSun: By appointment",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const update = (key) => (e) => {
    setForm((currentForm) => ({
      ...currentForm,
      [key]: e.target.value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8ef9a945-e3f0-4fc8-b9b6-9bdd6aa9ddfc",

          subject: `Free consultation request from ${form.name}`,

          from_name: "Shraddha Build Solutions",

          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          service: form.service || "Not specified",
          message: form.message,

          // Optional: tells Web3Forms where the request came from
          page_url: window.location.href,
        }),
      });

      const result = await response.json();

      if (result.success) {
        resetForm();
        setStatus("success");
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div
          className="section-head"
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <span
            className="eyebrow reveal"
            style={{ justifyContent: "center" }}
          >
            Get In Touch
          </span>

          <h2 className="section-title reveal" data-delay="1">
            Start your free consultation
          </h2>

          <p
            className="section-subtitle reveal"
            data-delay="2"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Tell us about your project and our team will get back to you
            within 24 hours with a no-obligation consultation.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Information */}
          <div className="contact__info reveal">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="contact__item">
                  <div className="contact__item-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="contact__item-label">
                      {item.label}
                    </h3>

                    <p className="contact__item-value">
                      {item.value.split("\n").map((line, idx) => (
                        <span
                          key={idx}
                          style={{ display: "block" }}
                        >
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="contact__map">
              <iframe
                title="Shraddha Build Solutions location"
                src="https://www.google.com/maps?q=Jayanagar+Bengaluru&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="contact__form reveal"
            data-delay="1"
            onSubmit={handleSubmit}
          >
            {/* SUCCESS STATE */}
            {status === "success" && (
              <div className="contact__success">
                <CheckCircle2
                  size={56}
                  strokeWidth={1.5}
                  className="contact__success-icon"
                />

                <h3>Thank you!</h3>

                <p>
                  Your consultation request has been sent successfully.
                  Our team will get back to you within 24 hours.
                </p>

                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => setStatus("idle")}
                >
                  Send another request
                </button>
              </div>
            )}

            {/* ERROR STATE */}
            {status === "error" && (
              <div className="contact__success">
                <AlertCircle
                  size={56}
                  strokeWidth={1.5}
                  className="contact__success-icon"
                />

                <h3>Something went wrong</h3>

                <p>
                  We couldn't send your request right now. Please try
                  again in a moment.
                </p>

                <button
                  type="button"
                  className="btn btn--gold"
                  onClick={() => setStatus("idle")}
                >
                  Try Again
                </button>
              </div>
            )}

            {/* FORM */}
            {(status === "idle" || status === "sending") && (
              <>
                <div className="contact__row">
                  <label className="contact__field">
                    <span>Full Name *</span>

                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      disabled={status === "sending"}
                    />
                  </label>

                  <label className="contact__field">
                    <span>Phone Number</span>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+91 98765 43210"
                      disabled={status === "sending"}
                    />
                  </label>
                </div>

                <label className="contact__field">
                  <span>Email Address *</span>

                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    disabled={status === "sending"}
                  />
                </label>

                <label className="contact__field">
                  <span>Service Required</span>

                  <select
                    value={form.service}
                    onChange={update("service")}
                    disabled={status === "sending"}
                  >
                    <option value="">Select a service</option>

                    <option value="Residential Construction">
                      Residential Construction
                    </option>

                    <option value="Commercial Construction">
                      Commercial Construction
                    </option>

                    <option value="Interior Design">
                      Interior Design
                    </option>

                    <option value="Renovation & Remodeling">
                      Renovation &amp; Remodeling
                    </option>

                    <option value="Turnkey Project">
                      Turnkey Project
                    </option>

                    <option value="Consulting & Planning">
                      Consulting &amp; Planning
                    </option>
                  </select>
                </label>

                <label className="contact__field">
                  <span>Project Details *</span>

                  <textarea
                    required
                    rows="4"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project, location, and budget..."
                    disabled={status === "sending"}
                  />
                </label>

                <button
                  type="submit"
                  className="btn btn--gold contact__submit"
                  disabled={status === "sending"}
                  style={{
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor:
                      status === "sending"
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  <Send size={17} strokeWidth={2.2} />

                  {status === "sending"
                    ? "Sending Request..."
                    : "Send Request"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}