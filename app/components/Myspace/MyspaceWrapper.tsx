import MyspaceList from "./MyspaceList";

interface MyspaceWrapperProps {
  items: any[];
  setItems: (items: any[]) => void;
}

const MyspaceWrapper: React.FC<MyspaceWrapperProps> = ({ items, setItems }) => {
  return (
    <section className="max-w-prose">
      <h4 className="bg-orange-300 font-semibold text-orange-600">
        Chris&apos;s Friend Space
      </h4>
      <div>
        Chris has <span className="font-semibold text-red-600">123</span>{" "}
        Friends.
      </div>
      <MyspaceList items={items} setItems={setItems} />
      <div className="font-semibold text-red-600">
        View All of Chris&apos;s Friends
      </div>
    </section>
  );
};

export default MyspaceWrapper;
