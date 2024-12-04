import GameCard from "./GameCard";

// Define the shape of a game object
interface Game {
  name: string;
  genre: string;
  link: string;
}

export default function Console() {
  const games: Game[] = [
    { name: "Game 1", genre: "Action", link: "/game1" },
    { name: "Game 2", genre: "Puzzle", link: "/game2" },
    { name: "Game 3", genre: "RPG", link: "/game3" },
    { name: "Game 4", genre: "Adventure", link: "/game4" },
    { name: "Game 5", genre: "Shooter", link: "/game5" },
    { name: "Game 6", genre: "Strategy", link: "/game6" },
    { name: "Game 7", genre: "Adventure", link: "/game7" },
    { name: "Game 8", genre: "Shooter", link: "/game8" },
    { name: "Game 9", genre: "Strategy", link: "/game9" },
  ];

  return (
    <>
      <div className="flex gap-10 flex-wrap overflow-auto bg-grey w-[85%] h-[90%] border p-64 items-center justify-center rounded-lg">
        {games.map((game, index) => (
          <GameCard
            key={index}
            name={game.name}
            genre={game.genre}
            link={game.link}
          />
        ))}
      </div>
    </>
  );
}
