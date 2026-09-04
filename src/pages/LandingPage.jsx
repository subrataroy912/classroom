import React, { useState } from 'react';
import {
  Video,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Share2,
} from 'lucide-react';

export default function LandingPage({ onLogin }) {
  const [inviteCode, setInviteCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-sand-50 text-[#30261f] selection:bg-sand-300 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-sand-300 flex items-center justify-center font-bold text-white shadow-sm">
              C
            </div>
            <span className="font-bold text-lg tracking-tight text-[#30261f]">
              Class<span className="text-[#8c7457]">Hub</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleSubmit}
              className="text-sm font-medium text-[#665c54] hover:text-[#30261f] px-3 py-2 transition-colors cursor-pointer"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="text-sm font-medium bg-sand-300 hover:bg-[#bfa78d] text-white px-4 py-2 rounded-lg transition shadow-xs cursor-pointer"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Warm ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-sand-200/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sand-200 bg-sand-100 text-[#665c54] text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sand-300" />
            <span>Interactive real-time classrooms for modern learners</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#30261f] leading-tight mb-6">
            Where classrooms turn into <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-[#a37f57] to-sand-300 bg-clip-text text-transparent">
              connected communities
            </span>
          </h1>

          <p className="text-lg text-[#665c54] max-w-2xl mx-auto mb-10 leading-relaxed">
            Create groups, host crystal-clear real-time lectures, collaborate on shared files, and discuss assignments—all in one streamlined dashboard.
          </p>

          {/* Dual Action: Join with Code OR Create Class */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
            <form onSubmit={handleSubmit} className="flex w-full rounded-lg border border-sand-200 bg-white p-1.5 shadow-xs focus-within:border-sand-300 focus-within:ring-2 focus-within:ring-sand-300/30 transition">
              <input
                type="text"
                placeholder="Enter 6-char class code"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                maxLength={8}
                className="w-full bg-transparent px-3 py-1.5 text-sm text-[#30261f] placeholder:text-stone-400 focus:outline-none uppercase tracking-wider font-mono"
              />
              <button
                type="submit"
                className="bg-sand-300 hover:bg-[#bfa78d] text-white text-xs font-semibold px-4 py-2 rounded-md transition whitespace-nowrap cursor-pointer"
              >
                Join Class
              </button>
            </form>

            <span className="text-xs text-[#8c8279] font-medium uppercase">or</span>

            <a
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sand-100 hover:bg-sand-200 text-[#30261f] text-sm font-semibold px-5 py-3 rounded-lg border border-sand-200 transition"
            >
              <span>Create Class</span>
              <ArrowRight className="w-4 h-4 text-[#665c54]" />
            </a>
          </div>

          {/* Social Proof / Guarantee */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#665c54]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#758a5c]" /> Free up to 100 members
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#758a5c]" /> Sub-second latency video & chat
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#758a5c]" /> No downloads required
            </span>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-20 border-t border-sand-200 bg-sand-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#30261f] mb-3">
              Designed for serious study, not distraction
            </h2>
            <p className="text-[#665c54] text-sm">
              Everything your cohort needs to stay aligned without leaving the workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-sand-200 hover:border-sand-300 transition shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-sand-100 text-[#8c7457] flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#30261f] mb-2">Live Audio & Video Rooms</h3>
              <p className="text-sm text-[#665c54] leading-relaxed">
                Hop straight into active discussion rooms. Screen share presentations, run code reviews, or raise hands during lectures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sand-200 hover:border-sand-300 transition shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-sand-100 text-[#8c7457] flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#30261f] mb-2">Organized Topic Channels</h3>
              <p className="text-sm text-[#665c54] leading-relaxed">
                Keep questions out of the main announcements channel. Use dedicated spaces for homework help, resources, and chat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sand-200 hover:border-sand-300 transition shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-sand-100 text-[#8c7457] flex items-center justify-center mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#30261f] mb-2">Instant Invite Links & Roles</h3>
              <p className="text-sm text-[#665c54] leading-relaxed">
                Share a simple 6-digit code or URL. Assign Host, TA, and Student roles with fine-grained moderation controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sand-200 py-8 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c8279]">
          <p>© {new Date().getFullYear()} ClassHub Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-[#30261f] transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#30261f] transition">Terms of Service</a>
            <a href="/support" className="hover:text-[#30261f] transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}