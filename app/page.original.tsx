"use client";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import localFont from "next/font/local";
import Image from "next/image";
import { useEffect, useId, useState } from "react";

const gallaudet = localFont({
  src: "/fonts/gallaudet-regular.ttf",
});

export default function Home() {
  const { isDragging } = useDraggable({ id: "draggable-id" });

  useEffect(() => {
    if (isDragging) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDragging]);

  const [items, setItems] = useState([
    "Tom Anderson",
    "Jean-Claude Van Damme",
    "Luke Skywalker",
    "Arnold Schwarzenegger",
    "Tony Hawk",
    "Steve Jobs",
    "Daft Punk",
    "Harambe",
  ]);

  const sensors = useSensors(
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
  );

  const id = useId();

  // Initialize itemStatuses with empty strings
  const [itemStatuses, setItemStatuses] = useState(
    items.map((_, index) => `top-${index + 1}`),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldItems = [...items];
        const newItems = arrayMove(
          oldItems,
          oldItems.indexOf(String(active.id)),
          oldItems.indexOf(String(over.id)),
        );

        // Update itemStatuses
        setItemStatuses((oldStatuses) => {
          const newStatuses = [...oldStatuses];
          newItems.forEach((item, index) => {
            newStatuses[newItems.indexOf(item)] = `top-${index + 1}`;
          });
          return newStatuses;
        });

        return newItems;
      });
    }
  }

  function SortableItem({ id }: { id: string }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      zIndex: isDragging ? 2 : 1,
    };

    // Get the status of the item
    const status = itemStatuses[items.indexOf(id)];

    // Create a unique class based on the item's value
    const uniqueClass = `item-${id.replace(/\s+/g, "-").toLowerCase()}`;

    const myspaceImages: { [key: string]: string } = {
      Tom: "tom.webp",
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`${status} ${uniqueClass}`}
      >
        <Image
          src={`/images/myspace/${myspaceImages[id] || "default.webp"}`}
          alt={id}
          width={100}
          height={100}
        />
        {id}
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-[1280px] px-4 lg:px-10">
        <header className="my-4">
          <div className="text-xl">
            <span className="pr-0.5 font-bold">chris</span>h/rtm/n
          </div>
          {/* <div>
            <p>Content</p>
            <Link href="#" className="pill">
              Professional
            </Link>
            <Link href="#" className="pill">
              Personal
            </Link>
          </div> */}
        </header>
        <section className="mb-28 mt-10 max-w-[540px] lg:mt-20 lg:max-w-[900px]">
          <h1 className="text-4xl font-bold lg:text-6xl">
            Full-Stack Engineer.
          </h1>
          <h2>
            But <span className="text-native-rust">design</span>-minded and{" "}
            <span className="text-blue-600">MySpace</span>-inspired.
          </h2>
          {/* <p className="mt-4 text-lg lg:mt-6 lg:text-xl">
            A [ui/ux/design] engineer, a woodworker, and a{" "}
            <Link href="#" className="fun-fact">
              legitimate cyborg
            </Link>
            .
          </p> */}
        </section>

        <h2>Top 8 Influencers</h2>
        <DndContext
          collisionDetection={closestCenter}
          id={id}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div className="myspace-grid-nested grid max-w-prose grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* <main>
          <section className="my-16 md:my-32">
            <div className="mb-6">
              <h2 className={`${gallaudet.className} text-9xl`}>Skills</h2>
              <h2 className="text-xl font-bold md:text-2xl">Skills</h2>
            </div>

            <h3 className="text-md mb-1">
              <SVGIcon name="code" className="mb-1 mr-2 inline-block h-6 w-4" />
              Development{" "}
            </h3>
            <div>
              <span className="pill">React.js</span>
              <span className="pill">Next.js</span>
              <span className="pill">Sass</span>
              <span className="pill">Tailwind CSS</span>
              <span className="pill">CSS-in-JS</span>
              <Link href="#" className="fun-fact">
                <span className="pill">Drupal</span>
              </Link>
              <span className="pill">Git</span>
            </div>

            <h3 className="text-md mb-1 mt-8">
              <SVGIcon
                name="photograph"
                className="mb-1 mr-2 inline-block h-6 w-4"
              />
              Design
            </h3>
            <div>
              {Design.map((value, index) => {
                return (
                  <span key={index} className="pill">
                    {value}
                  </span>
                );
              })}
            </div>

            <h3 className="text-md mb-1 mt-8">
              <SVGIcon
                name="scale"
                className="mb-1 mr-2 inline-block h-6 w-4"
              />
              Principles
            </h3>
            <div>
              {Principles.map((value, index) => {
                return (
                  <span key={index} className="pill">
                    {value}
                  </span>
                );
              })}
            </div>
          </section>
        </main> */}

        {/* <footer className="mb-20">
          <h3 className="text-xl font-bold md:text-2xl ">Footer Section</h3>
          <p className="text-native-gray">
            This is the footer section of the page.
          </p>
          <p className={`${gallaudet.className} text-9xl`}>lets talk</p>
          <p className="text-4xl font-bold lg:text-6xl">Lets talk</p>
          <p>
            on scroll, you see the &apos;sign language&apos; titles and it
            transitions into regular text titles.
          </p>
        </footer> */}

        {/* <svg
          width="100%"
          height="height"
          viewBox="0 0 1440 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72,0 Q72,0 72,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M144,0 Q144,0 144,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M216,0 Q216,0 216,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M288,0 Q288,0 288,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M360,0 Q360,0 360,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M432,0 Q432,0 432,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M504,0 Q504,0 504,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M576,0 Q576,0 576,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M648,0 Q648,0 648,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M720,0 Q720,0 720,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M792,0 Q792,0 792,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M864,0 Q864,0 864,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M936,0 Q936,0 936,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M1008,0 Q1008,0 1008,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M1080,0 Q1080,0 1080,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M1152,0 Q1152,0 1152,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M1224,0 Q1224,0 1224,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M1296,0 Q1296,0 1296,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M1368,0 Q1368,0 1368,1200"
            stroke="#E4E7EB"
            strokeWidth="1"
            strokeOpacity="1"
          ></path>
          <path
            d="M0,45 Q0,45 1440,45"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,90 Q0,90 1440,90"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,135 Q0,135 1440,135"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,180 Q0,180 1440,180"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,225 Q0,225 1440,225"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,270 Q0,270 1440,270"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,315 Q0,315 1440,315"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,360 Q0,360 1440,360"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,405 Q0,405 1440,405"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,450 Q0,450 1440,450"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,495 Q0,495 1440,495"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,540 Q0,540 1440,540"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,585 Q0,585 1440,585"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,630 Q0,630 1440,630"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,675 Q0,675 1440,675"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,720 Q0,720 1440,720"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,765 Q0,765 1440,765"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,810 Q0,810 1440,810"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,855 Q0,855 1440,855"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,900 Q0,900 1440,900"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,945 Q0,945 1440,945"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,990 Q0,990 1440,990"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,1035 Q0,1035 1440,1035"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,1080 Q0,1080 1440,1080"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,1125 Q0,1125 1440,1125"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
          <path
            d="M0,1170 Q0,1170 1440,1170"
            stroke="#E4E7EB"
            strokeOpacity="1"
            strokeWidth="1"
          ></path>
        </svg> */}
      </div>
    </>
  );
}
