import { T, Var, Num, DateTime, Branch, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

type TicketStatus = "open" | "in-progress" | "resolved" | "closed";

interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  created: Date;
  updated: Date;
}

const tickets: Ticket[] = [
  {
    id: "CS-1042",
    subject: "Cannot reset password after email change",
    status: "open",
    created: new Date(2026, 1, 18, 9, 15),
    updated: new Date(2026, 1, 18, 9, 15),
  },
  {
    id: "CS-1041",
    subject: "Billing discrepancy on February invoice",
    status: "in-progress",
    created: new Date(2026, 1, 17, 14, 30),
    updated: new Date(2026, 1, 18, 11, 45),
  },
  {
    id: "CS-1040",
    subject: "API rate limiting returns incorrect error code",
    status: "open",
    created: new Date(2026, 1, 17, 8, 0),
    updated: new Date(2026, 1, 17, 16, 20),
  },
  {
    id: "CS-1039",
    subject: "Export feature times out on large datasets",
    status: "resolved",
    created: new Date(2026, 1, 15, 10, 0),
    updated: new Date(2026, 1, 17, 9, 30),
  },
  {
    id: "CS-1038",
    subject: "SSO integration with Okta not redirecting",
    status: "resolved",
    created: new Date(2026, 1, 14, 16, 45),
    updated: new Date(2026, 1, 16, 13, 0),
  },
  {
    id: "CS-1037",
    subject: "Dashboard widgets not loading on Safari",
    status: "closed",
    created: new Date(2026, 1, 12, 11, 30),
    updated: new Date(2026, 1, 14, 10, 15),
  },
];

const openCount = tickets.filter(
  (t) => t.status === "open" || t.status === "in-progress"
).length;

const avgResponseTime = 4.2;
const satisfactionRate = 94.7;

// FAQ items defined inline with <T> for static analysis

function StatusBadge({ status }: { status: TicketStatus }) {
  const colors: Record<TicketStatus, string> = {
    open: "bg-amber-900/50 text-amber-400 border-amber-800",
    "in-progress": "bg-blue-900/50 text-blue-400 border-blue-800",
    resolved: "bg-emerald-900/50 text-emerald-400 border-emerald-800",
    closed: "bg-neutral-800 text-neutral-500 border-neutral-700",
  };

  return (
    <span
      className={`inline-block text-xs px-2 py-0.5 rounded border ${colors[status]}`}
    >
      <Branch
        branch={status}
        open={<T>Open</T>}
        in-progress={<T>In Progress</T>}
        resolved={<T>Resolved</T>}
        closed={<T>Closed</T>}
      />
    </span>
  );
}

export default async function Home() {
  const gt = await getGT();

  // Pre-translate ticket subjects so they appear in all locales
  const translatedSubjects: Record<string, string> = {
    "Cannot reset password after email change": gt("Cannot reset password after email change"),
    "Billing discrepancy on February invoice": gt("Billing discrepancy on February invoice"),
    "API rate limiting returns incorrect error code": gt("API rate limiting returns incorrect error code"),
    "Export feature times out on large datasets": gt("Export feature times out on large datasets"),
    "SSO integration with Okta not redirecting": gt("SSO integration with Okta not redirecting"),
    "Dashboard widgets not loading on Safari": gt("Dashboard widgets not loading on Safari"),
  };

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              Customer Support
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/customer-support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            <T>Support overview</T>
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              Track open tickets, response times, and customer satisfaction.
              Switch languages to see how all content adapts to your locale.
            </T>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
            <p className="text-xs text-neutral-500 uppercase tracking-wide mb-2">
              <T>Open tickets</T>
            </p>
            <p className="text-3xl font-light text-neutral-100">
              <Num>{openCount}</Num>
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              <Plural
                n={openCount}
                singular={<T>ticket requires attention</T>}
                plural={<T>tickets require attention</T>}
              />
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
            <p className="text-xs text-neutral-500 uppercase tracking-wide mb-2">
              <T>Avg. response time</T>
            </p>
            <p className="text-3xl font-light text-neutral-100">
              <Num>{avgResponseTime}</Num>
              <span className="text-lg text-neutral-500 ml-1">h</span>
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              <T>across all channels</T>
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
            <p className="text-xs text-neutral-500 uppercase tracking-wide mb-2">
              <T>Satisfaction rate</T>
            </p>
            <p className="text-3xl font-light text-neutral-100">
              <Num>{satisfactionRate}</Num>
              <span className="text-lg text-neutral-500 ml-1">%</span>
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              <T>last 30 days</T>
            </p>
          </div>
        </div>

        {/* Ticket List */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Recent tickets</T>
          </h3>
          <div className="space-y-2">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between border border-neutral-800 rounded-md px-4 py-3 bg-neutral-900/30"
              >
                <div className="flex-1 min-w-0 mr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs text-neutral-600 font-mono">
                      {ticket.id}
                    </span>
                    <StatusBadge status={ticket.status} />
                  </div>
                  <p className="text-sm text-neutral-300 truncate">
                    {translatedSubjects[ticket.subject] ?? ticket.subject}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-neutral-600">
                    <T>Updated</T>
                  </p>
                  <p className="text-xs text-neutral-400">
                    <DateTime options={{ dateStyle: "medium", timeStyle: "short" }}>
                      {ticket.updated}
                    </DateTime>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Frequently asked questions</T>
          </h3>
          <div className="space-y-4">
            <div className="border border-neutral-800 rounded-md p-4 bg-neutral-900/30">
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                <T>How do I reset my password?</T>
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                <T>Navigate to Settings, then Security, and select Reset Password. You will receive a confirmation email within a few minutes. If you do not receive it, check your spam folder or contact support.</T>
              </p>
            </div>
            <div className="border border-neutral-800 rounded-md p-4 bg-neutral-900/30">
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                <T>What are your support hours?</T>
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                <T>Our support team is available Monday through Friday, 9:00 AM to 6:00 PM in your local time zone. For critical issues, emergency support is available around the clock.</T>
              </p>
            </div>
            <div className="border border-neutral-800 rounded-md p-4 bg-neutral-900/30">
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                <T>How do I upgrade my plan?</T>
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                <T>Go to your Account Settings and select Subscription. Choose the plan that fits your needs and follow the prompts. Changes take effect immediately and billing is prorated.</T>
              </p>
            </div>
            <div className="border border-neutral-800 rounded-md p-4 bg-neutral-900/30">
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                <T>Can I export my data?</T>
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                <T>Yes. Navigate to Settings, then Data Management, and select Export. You can export in CSV, JSON, or PDF format. Large exports are processed in the background and you will be notified when ready.</T>
              </p>
            </div>
            <div className="border border-neutral-800 rounded-md p-4 bg-neutral-900/30">
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                <T>How do I contact a human agent?</T>
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                <T>Use the contact form below, email us at support@example.com, or call our helpline. During business hours, average wait time is under five minutes.</T>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Contact us</T>
          </h3>
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  <T>Name</T>
                </label>
                <input
                  type="text"
                  disabled
                  placeholder={gt("Your full name")}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-300 placeholder-neutral-600"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  <T>Email</T>
                </label>
                <input
                  type="email"
                  disabled
                  placeholder={gt("you@example.com")}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-300 placeholder-neutral-600"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  <T>Subject</T>
                </label>
                <input
                  type="text"
                  disabled
                  placeholder={gt("Brief description of your issue")}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-300 placeholder-neutral-600"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  <T>Message</T>
                </label>
                <textarea
                  disabled
                  rows={4}
                  placeholder={gt("Describe your issue in detail...")}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-300 placeholder-neutral-600 resize-none"
                />
              </div>
              <button
                disabled
                className="bg-neutral-800 border border-neutral-700 text-neutral-400 text-sm px-4 py-2 rounded-md cursor-not-allowed"
              >
                <T>Submit request</T>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-xs text-neutral-600 leading-relaxed max-w-xl">
            <T>
              This is a demo application built with gt-next to showcase
              multilingual customer support features. No actual support tickets
              are created or processed. All data shown is static and for
              demonstration purposes only.
            </T>
          </p>
        </div>
      </main>
    </div>
  );
}
