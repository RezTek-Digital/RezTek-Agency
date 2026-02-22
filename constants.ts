/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, JournalArticle } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'The Single-Sided (One-Pager)',
    tagline: 'The Digital Business Card.',
    description: 'Fast, punchy, and mobile-ready. Perfect for the local shop that needs a solid home base without the fluff.',
    longDescription: 'Fast, punchy, and mobile-ready. Perfect for the local shop that needs a solid home base without the fluff. Price range: $500 - $2,500.',
    price: 500,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: ['Single Page Design', 'Mobile Responsive', 'Contact Form', 'Fast Loading']
  },
  {
    id: 's2',
    name: 'The Full Album (Standard Site)',
    tagline: 'For the growing brand.',
    description: '5-15 pages of custom-tailored digital real estate. SEO-baked, user-friendly, and built on a foundation that won\'t crack.',
    longDescription: 'For the growing brand. 5-15 pages of custom-tailored digital real estate. SEO-baked, user-friendly, and built on a foundation that won\'t crack. Price range: $1,500 - $5,000.',
    price: 1500,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000',
    features: ['5-15 Custom Pages', 'SEO Ready', 'Content Management', 'Analytics Integration']
  },
  {
    id: 's3',
    name: 'The General Store (E-com)',
    tagline: 'Sell your goods.',
    description: 'A reliable, secure shopfront that handles the heavy lifting so you can focus on making your products.',
    longDescription: 'Sell your goods. A reliable, secure shopfront that handles the heavy lifting so you can focus on making your products. Price range: $2,000 - $6,000+.',
    price: 2000,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
    features: ['Product Management', 'Secure Checkout', 'Inventory Tracking', 'Payment Gateway']
  },
  {
    id: 's4',
    name: 'Get Found (SEO)',
    tagline: 'Skip the "magic tricks".',
    description: 'We skip the "magic tricks" and focus on the fundamentals: making sure your neighbors (and Google) can actually find you.',
    longDescription: 'We skip the "magic tricks" and focus on the fundamentals: making sure your neighbors (and Google) can actually find you. Price: $159 - $500/month.',
    price: 159,
    category: 'SEO',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1000',
    features: ['Keyword Research', 'Local Citations', 'On-Page Optimization', 'Monthly Reporting']
  },
  {
    id: 's6',
    name: 'The Map Maker (GBP)',
    tagline: 'Polish your profile.',
    description: 'We’ll polish your Google Business Profile until it shines, making you the obvious choice on the local map.',
    longDescription: 'We’ll polish your Google Business Profile until it shines, making you the obvious choice on the local map. Price: $199 - $499.',
    price: 199,
    category: 'GBP Optimization',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    features: ['Profile Setup', 'Keyword Optimization', 'Photo Uploads', 'Business Info Verification']
  },
  {
    id: 's8',
    name: 'The Care Plan (Maintenance)',
    tagline: 'Keep the engine tuned.',
    description: 'Hosting, backups, and security. We keep the engine tuned so you don\'t have to learn what a "server" is.',
    longDescription: 'Hosting, backups, and security. We keep the engine tuned so you don\'t have to learn what a "server" is. Price: $60 - $200/month.',
    price: 60,
    category: 'Maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    features: ['Secure Hosting', 'Regular Backups', 'Software Updates', 'Security Monitoring']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Case for \"Quiet\" Design",
        date: "May 15, 2025",
        excerpt: "Why the loudest websites are usually the most annoying.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "In an era of infinite scroll and auto-play videos, silence has become a luxury. Users are increasingly overwhelmed by digital noise, leading to shorter attention spans and higher bounce rates."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Quiet design isn't about doing less; it's about doing better. It's about respecting the user's intelligence and their time. By removing distractions, we allow the core message to resonate more deeply."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#EF4444] pl-6 italic text-xl text-[#2C2A26] my-10 font-sans font-medium" },
                "\"Design is not just what it looks like and feels like. Design is how it works through the silence.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "At RezTek Digital, we believe that the most powerful digital experiences are those that don't demand attention, but earn it through clarity and purpose."
            )
        )
    },
    {
        id: 2,
        title: "Sustainable Code",
        date: "April 20, 2025",
        excerpt: "Building digital tools that don't end up in the \"e-waste\" pile next year.",
        image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Technical debt is the silent killer of innovation. When we build quickly without regard for the future, we create systems that are fragile and difficult to maintain."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Sustainable code is about writing for humans first, and machines second. It's about creating architectures that are flexible enough to evolve as the business grows."
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "Clean lines of logic"),
                React.createElement("p", null, "Built with care and intent."),
                React.createElement("p", null, "The foundation holds"),
                React.createElement("p", null, "While the world shifts."),
                React.createElement("p", null, "This is the art"),
                React.createElement("p", null, "Of code that lasts.")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Every line we write is a commitment to quality. We don't just ship products; we ship legacies."
            )
        )
    }
];

export const BRAND_NAME = 'RezTek Digital';
export const PRIMARY_COLOR = 'zinc-900'; 
export const ACCENT_COLOR = 'red-600';
