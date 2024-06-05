import Header from "@/components/Header";
import AnimatedLogoCloud from "@/components/home/AnimatedLogoCloud";
import Hero from "@/components/home/Hero";
import MyspaceContainer from "@/components/myspace/MyspaceContainer";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 lg:px-10">
      <Header />
      <main>
        <Hero />
        <AnimatedLogoCloud />
        <MyspaceContainer />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
