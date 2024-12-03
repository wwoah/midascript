export default function Search() {
  return (
    <>
      <div className="bg-black rounded-xl">
        <form
          className="bg-custom-gradient bg-clip-text text-transparent  p-4 rounded-lg "
          id="gameSearch"
        >
          <div className="flex gap-12 justify-center items-center">
            <label className="flex gap-2">
              Title:
              <input
                className="rounded-lg text-black"
                type="text"
                name="Title"
              />
            </label>

            <label className="flex gap-2">
              Genre:
              <select
                className="rounded-lg p text-center text-black"
                name="games"
                id="games"
                form="gameSearch"
              >
                <option value="">Select</option>
                <option value="strategy">Strategy</option>
                <option value="creative">Creative</option>
                <option value="horror">Horror</option>
                <option value="misc">Misc</option>
              </select>
            </label>

            <input
              className="shadow-lg rounded-lg p-1 bg-custom-gradient text-white"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
    </>
  );
}
