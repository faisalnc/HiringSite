'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'How can I apply for a position?',
    answer: 'You can apply directly through our Careers page by filling out the application form and submitting your CV.',
  },
  {
    question: 'What’s the interview process like?',
    answer: 'Our process is transparent and structured to evaluate both skill and cultural fit. Expect a mix of technical assessments and personal interactions.',
  },
  {
    question: 'What do you look for in candidates?',
    answer: 'We value curiosity, strong communication, technical excellence, and a team-first attitude.',
  },
  {
    question: 'What benefits do you offer?',
    answer: 'We offer competitive salaries, flexible work hours, wellness support, and ongoing learning opportunities.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
<section className="bg-white pt-20 pb-0">
      <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have <span className="text-black">Questions?</span>
          </h2>
          <p className="text-lg text-gray-800">
            Here’s What You Need<br className="hidden md:block" /> to Know
          </p>
        </div>

        {/* Right: FAQ items */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-sm ${
                openIndex === idx ? 'bg-gray-100 shadow-md' : 'bg-white hover:shadow-md'
              } transition duration-200`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left p-6"
              >
                <span className={`font-medium text-lg ${openIndex === idx ? 'font-semibold' : ''}`}>
                  {item.question}
                </span>
                <span className="text-2xl">{openIndex === idx ? '−' : '+'}</span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    className="px-6 pb-6 text-gray-600 text-base leading-relaxed"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
