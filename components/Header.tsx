import UtilityNav from "@/components/UtilityNav";

export default function Header() {
  return (
    <header className="my-4">
      <div className="justify-content-between flex">
        <UtilityNav />
        <div>
          <span className="pr-0.5 font-bold">chris</span>h/rtm/n
        </div>
      </div>
    </header>
  );
}
