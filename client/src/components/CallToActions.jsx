import { Button } from "flowbite-react";
export default function CallToActions() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">How to travel without money</h2>
        <p className="text-gray-500 my-2">100 ways to travel without money</p>
        <Button className="rounded-tl-xl rounded-bl-none">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Travel and Chill
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://www.google.com" />
      </div>
    </div>
  );
}
