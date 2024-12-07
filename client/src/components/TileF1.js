function capitalizeWords(sentence) {
  return sentence
    .split(" ") // Split the sentence into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
    .join(" "); // Join the words back into a sentence
}

export default function TileF1({ item, img }) {
  return (
    <div className="flex flex-col h-1/2 mt-8 w-full items-center">
      <h1 className=" text-8xl font-medium font-londrina text-center pt-12 pb-4">
        {capitalizeWords(item.nombre)}
      </h1>
      <h1 className=" text-6xl font-medium font-londrina text-center">
        {item.tipo}
      </h1>
      <div className="py-5">
        <img src={img} className="object-cover h-[30rem] py-6" />
      </div>
    </div>
  );
}
