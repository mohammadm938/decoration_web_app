import Image from "next/image";

export default function PortfolioCard({ title, category, image }) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      h-[420px]
      cursor-pointer
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className="
        object-cover
        duration-700
        transition-all
        group-hover:scale-110
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/30
        to-transparent
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        p-8
        "
      >
        <span
          className="
          text-[#C9A227]
          text-sm
          "
        >
          {category}
        </span>

        <h3
          className="
          text-white
          text-2xl
          font-bold
          mt-2
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
