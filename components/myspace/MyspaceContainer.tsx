import MyspaceGridList from "@/components/myspace/MyspaceGridList";
import MyspaceTextarea from "@/components/myspace/MyspaceTextarea";

const MyspaceContainer = () => {
  return (
    <>
      <section className="max-w-prose">
        <div className="bg-orange-200 font-semibold text-orange-900">
          Chris&apos;s Friend Space
        </div>
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
