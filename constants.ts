/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, JournalArticle } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Digital Brochure Site',
    tagline: 'Your first digital step.',
    description: 'A professional one-page website designed to establish your online presence effectively and affordably.',
    longDescription: 'Perfect for businesses with no current online presence. We create a high-impact, single-page "Digital Brochure" that captures your brand essence and provides all essential information to your customers. Price range: $500 - $2,500.',
    price: 500,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: ['Single Page Design', 'Mobile Responsive', 'Contact Form', 'Fast Loading']
  },
  {
    id: 's2',
    name: 'Standard Business Website',
    tagline: 'Established & professional.',
    description: 'A comprehensive 5-15 page website for established businesses looking to grow their digital footprint.',
    longDescription: 'Our core offering for businesses that need more than just a landing page. We build a professional, multi-page site that showcases your services, team, and values in detail. Price range: $1,500 - $5,000.',
    price: 1500,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000',
    features: ['5-15 Custom Pages', 'SEO Ready', 'Content Management', 'Analytics Integration']
  },
  {
    id: 's3',
    name: 'E-commerce Starter',
    tagline: 'Sell to the world.',
    description: 'A robust online store for local retailers ready to expand into the digital marketplace.',
    longDescription: 'Start selling your products online with a secure, user-friendly e-commerce platform. We handle the technical setup so you can focus on your customers. Price range: $2,000 - $6,000+.',
    price: 2000,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
    features: ['Product Management', 'Secure Checkout', 'Inventory Tracking', 'Payment Gateway']
  },
  {
    id: 's4',
    name: 'Local SEO Starter',
    tagline: 'Get found locally.',
    description: 'Essential SEO package for businesses new to search engine optimization.',
    longDescription: 'Improve your local search rankings and get noticed by customers in your area. This starter package covers the fundamentals of local SEO. Price: $159 - $500/month.',
    price: 159,
    category: 'SEO',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1000',
    features: ['Keyword Research', 'Local Citations', 'On-Page Optimization', 'Monthly Reporting']
  },
  {
    id: 's5',
    name: 'Standard SEO Retainer',
    tagline: 'Competitive edge.',
    description: 'Advanced SEO strategies for businesses in competitive industries.',
    longDescription: 'Stay ahead of the competition with ongoing, high-level SEO management. We dive deep into technical SEO and content strategy to drive consistent growth. Price: $750 - $2,000/month.',
    price: 750,
    category: 'SEO',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: ['Technical SEO Audit', 'Backlink Strategy', 'Competitor Analysis', 'Content Optimization']
  },
  {
    id: 's6',
    name: 'GBP Optimization',
    tagline: 'Maximize visibility.',
    description: 'One-time setup and optimization of your Google Business Profile.',
    longDescription: 'A crucial service for any local business. We optimize your Google Business Profile to ensure you appear in local map packs and search results. Price: $199 - $499.',
    price: 199,
    category: 'GBP Optimization',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    features: ['Profile Setup', 'Keyword Optimization', 'Photo Uploads', 'Business Info Verification']
  },
  {
    id: 's7',
    name: 'Monthly GBP Management',
    tagline: 'Stay active & engaged.',
    description: 'Ongoing management of your Google Business Profile including posts and reviews.',
    longDescription: 'Keep your profile fresh and engaging with regular posts, Q&A management, and review responses. We help you build trust with potential customers. Price: $125 - $475/month.',
    price: 125,
    category: 'GBP Optimization',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
    features: ['Weekly Posts', 'Review Management', 'Q&A Monitoring', 'Performance Tracking']
  },
  {
    id: 's8',
    name: 'Hosting & Maintenance',
    tagline: 'Peace of mind.',
    description: 'Reliable hosting and ongoing maintenance for your website.',
    longDescription: 'Ensure your website stays secure, updated, and fast with our comprehensive care plans. We handle the technical details so you don\'t have to. Price: $60 - $200/month.',
    price: 60,
    category: 'Maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    features: ['Secure Hosting', 'Regular Backups', 'Software Updates', 'Security Monitoring']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Case for Quiet Design",
        date: "May 15, 2025",
        excerpt: "Why the loudest websites are often the least effective.",
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
        excerpt: "Building for the long term in a throwaway digital culture.",
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
