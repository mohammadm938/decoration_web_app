import PortfolioCard from "../ui/PortfolioCard";
import { portfolio } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          mb-16
          "
        >
          <div>
            <span className="text-[#C9A227]">نمونه کارها</span>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              "
            >
              پروژه های اجرا شده
            </h2>
          </div>

          <button
            className="
            mt-6
            md:mt-0
            border
            border-[#C9A227]
            text-[#C9A227]
            px-6
            py-3
            rounded-full
            hover:bg-[#C9A227]
            hover:text-white
            transition
            "
          >
            مشاهده همه پروژه ها
          </button>
        </div>

        {/* Grid */}

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          "
        >
          <div className="lg:col-span-2">
            <PortfolioCard {...portfolio[0]} />
          </div>

          <PortfolioCard {...portfolio[1]} />

          <PortfolioCard {...portfolio[2]} />

          <div className="lg:col-span-2">
            <PortfolioCard {...portfolio[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
