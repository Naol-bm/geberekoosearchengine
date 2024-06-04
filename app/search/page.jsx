import SearchList from "../../components/searchlist";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex justify-start items-start gap-4 bg-white flex-col p-4 mt-[2.5em]">
      <div className="flex flex-col gap-2 w-full top-0 bg-white py-2">
        <div className="w-full flex justify-start font-bold text-lg items-start">
          Search with location
        </div>
        <div className="flex justify-start items-center gap-2 w-full">
          <Input
            className="rounded-[5px] h-[45px]  border-gray-700 focus:border-sky-900 border-2 placeholder:text-gray-400"
            type="text"
            placeholder="search..."
            defaultValue="Jimma"
          />
          <Button className="bg-green-700 hover:bg-green-700 text-white font-semibold w-[10em] h-[45px] rounded-[5px]">
            Search
          </Button>
        </div>
      </div>

      <div className="flex justify-start items-center gap-2 w-full">
        <div className=" text-green-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
          1 Exact Matches
        </div>
        <div className=" text-yellow-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
          2 private
        </div>
        <div className=" text-red-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
          6 Governement
        </div>
      </div>
      <div className="w-full flex justify-start font-semibold items-start">
        Exact Match
      </div>
      <SearchList
        locations={"jimma"}
        disc={
          "The coffee farm in Jimma covers 65 hectares of land and produced 110 quintals of cucumbers in 2024. The farm is privately owned and generated a profit of 2.4 million for the year."
        }
        showemail={true}
      />
      {/* <div className="bg-gray-200/70 h-[2px] mt-4 w-full"></div> */}
      <div className="w-full flex justify-start font-semibold items-start">
        You may also like
      </div>
      <SearchList
        locations={"bahirdar"}
        disc={
          "The wheat farm in Amhara covers 45 hectares of land and produced 180 quintals of wheat in 2024. The farm is privately owned and generated a profit of 3.5 million for the year."
        }
      />
      <SearchList
        locations={"afar"}
        disc={
          "The carrot farm in Somali covers 60 hectares of land and produced 90 quintals of carrots in 2024. The farm is privately owned and generated a profit of 2 million for the year."
        }
      />
      <SearchList
        locations={"gonder"}
        disc={
          "The wheat farm in Amhara covers 45 hectares of land and produced 180 quintals of wheat in 2024. The farm is privately owned and generated a profit of 3.5 million for the year."
        }
      />
    </div>
  );
}
