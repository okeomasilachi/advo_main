import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";
const Search = ({ placeholder, className }: { placeholder: string, className: string }) => {
  return (
    <label className={"relative block " + className}>
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </span>
      <Input
        className="block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
        placeholder={placeholder}
        type="text"
        name="search"
      />
    </label>
  );
};

export default Search;
