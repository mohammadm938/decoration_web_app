import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      relative
      h-screen
      bg-cover
      bg-center
      "
      style={{
        backgroundImage: "url('/images/hero.webp')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div
        className="
        relative
        z-10
        container
        mx-auto
        px-6
        h-full
        flex
        items-center
        "
      >
        <div className="max-w-3xl">
          <h1
            className="
            text-white
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            "
          >
            طراحی و اجرای
            <span className="text-[#C9A227]"> دکوراسیون داخلی</span>
            <span> </span>
            مدرن
          </h1>

          <p
            className="
            mt-6
            text-gray-200
            text-lg
            md:text-xl
            "
          >
            اجرای تخصصی کابینت، دیوارپوش، کفپوش، سقف کاذب و ماربل شیت
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/portfolio"
              className="
              bg-[#C9A227]
              text-white
              px-8
              py-3
              rounded-xl
              "
            >
              مشاهده نمونه کارها
            </Link>

            <Link
              href="/contact"
              className="
              border
              border-white
              text-white
              px-8
              py-3
              rounded-xl
              "
            >
              دریافت مشاوره رایگان
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
