export default function ServiceCard({ title, description, icon }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-md
      hover:shadow-xl
      hover:-translate-y-2
      transition-all
      duration-300
      text-center
      "
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-black">{title}</h3>

      <p className="text-gray-600 mt-3">{description}</p>
    </div>
  );
}
