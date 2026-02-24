/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, JournalArticle } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'The One-Pager',
    tagline: 'Compact and focused.',
    description: 'Does what it needs to, looks good doing it.',
    longDescription: 'Compact and focused. Does what it needs to, looks good doing it. Perfect for a clear, concise message.',
    price: 500,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: ['Single Page Design', 'Mobile Responsive', 'Contact Form', 'Fast Loading']
  },
  {
    id: 's2',
    name: 'Full Site',
    tagline: 'Built for the business that\'s going places.',
    description: 'SEO-ready, well-structured, made to last.',
    longDescription: 'Built for the business that\'s going places. SEO-ready, well-structured, made to last. A comprehensive digital home.',
    price: 1500,
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000',
    features: ['Custom Pages', 'SEO Ready', 'Content Management', 'Analytics Integration']
  },
  {
    id: 's3',
    name: 'E-Comm Site',
    tagline: 'A reliable digital shopfront.',
    description: 'Clean, secure, and easier to run than you\'d expect.',
    longDescription: 'A reliable digital shopfront. Clean, secure, and easier to run than you\'d expect. Built for conversion and ease of use.',
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
    longDescription: 'We skip the "magic tricks" and focus on the fundamentals: making sure your neighbors (and Google) can actually find you.',
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
    longDescription: 'We’ll polish your Google Business Profile until it shines, making you the obvious choice on the local map.',
    price: 199,
    category: 'GBP Optimization',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    features: ['Profile Setup', 'Keyword Optimization', 'Photo Uploads', 'Business Info Verification']
  },
  {
    id: 's8',
    name: 'The Care Plan',
    tagline: 'Keeping the lights on.',
    description: 'We keep an eye on things so you don\'t have to. Hosting, backups, security — sorted.',
    longDescription: 'We keep an eye on things so you don\'t have to. Hosting, backups, security — sorted.',
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
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "We believe in design that respects the user's time and attention. In a world of digital noise, clarity is a competitive advantage."
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
                "Code should be built to last. We focus on clean, maintainable architectures that grow with your business, rather than disposable solutions."
            )
        )
    }
];

export const BRAND_NAME = 'RezTek Digital';
export const PRIMARY_COLOR = 'zinc-900'; 
export const ACCENT_COLOR = 'red-600';
