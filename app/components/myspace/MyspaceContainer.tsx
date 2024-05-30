import MyspaceGridList from "./MyspaceGridList";
import MyspaceTextarea from "./MyspaceTextarea";

const MyspaceContainer = () => {
  return (
    <>
      <section className="max-w-prose">
        <h4 className="bg-orange-300 font-semibold text-orange-600">
          Chris&apos;s Friend Space
        </h4>
        <div>
          Chris has <span className="font-semibold text-red-600">123</span>{" "}
          Friends.
        </div>
        <MyspaceGridList />
        <div className="font-semibold text-red-600">
          View All of Chris&apos;s Friends
        </div>
      </section>
      <MyspaceTextarea />
    </>
  );
};

export default MyspaceContainer;
