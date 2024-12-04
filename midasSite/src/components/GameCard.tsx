import React from "react";

const GameCard: React.FC<{ name: string; genre: string; link: string }> = ({
  name,
  genre,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white text-center border rounded-lg p-4 w-60 shadow-md hover:shadow-lg hover:bg-gray-300 transition cursor-pointer no-underline text-black"
    >
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-700 mb-4">{genre}</p>
    </a>
  );
};

export default GameCard;
