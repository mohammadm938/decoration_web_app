"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function WhyChooseUs() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "پروژه موفق",
    },
    {
      value: 12,
      suffix: "+",
      label: "سال تجربه",
    },

    {
      value: 100,
      suffix: "%",
      label: "رضایت مشتری",
    },
  ];

  return (
    <section className="bg-[#111111] py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-[#C9A227]" />

            <span
              className="
              text-[#C9A227]
              text-sm
              md:text-base
              font-medium
              "
            >
              چرا دکور شاهان
            </span>

            <div className="w-16 h-px bg-[#C9A227]" />
          </div>

          <h2
            className="
            text-white
            text-4xl
            md:text-5xl
            font-bold
            leading-[1.8]
            mt-6
            "
          >
            طراحی و اجرای
            <span className="text-[#C9A227]"> دکوراسیون داخلی مدرن</span>
          </h2>

          <p
            className="
            text-gray-400
            text-base
            md:text-lg
            leading-9
            mt-8
            max-w-3xl
            mx-auto
            "
          >
            دکور شاهان با بهره‌گیری از متریال درجه یک و تیم اجرایی متخصص،
            پروژه‌های مسکونی و تجاری را با بالاترین کیفیت طراحی و اجرا می‌کند.
            هدف ما خلق فضاهایی زیبا، کاربردی و ماندگار برای مشتریان است.
          </p>

          <button
            className="
            mt-10
            bg-[#C9A227]
            hover:bg-[#b38d1f]
            text-white
            px-8
            py-4
            rounded-full
            transition-all
            duration-300
            hover:scale-105
            "
          >
            دریافت مشاوره رایگان
          </button>
        </motion.div>

        {/* Divider */}

        <div className="mt-24 mb-12 text-center">
          <p className="text-gray-500">
            اعتماد مشتریان، نتیجه سال‌ها تجربه و کیفیت اجرا
          </p>
        </div>

        {/* Stats */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              className="
              bg-white/3
              backdrop-blur-xl
              border
              border-white/8
              rounded-4xl
              p-10
              text-center
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >
              <h3
                className="
                text-[#C9A227]
                text-4xl
                font-bold
                "
              >
                <CountUp end={item.value} duration={3} />
                {item.suffix}
              </h3>

              <p
                className="
                text-gray-300
                mt-4
                text-lg
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
