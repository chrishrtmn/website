import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

export default function MyspaceItem({
  id,
}: {
  id: string;
  items: { name: string; imagePath: string }[];
}) {
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

  const myspaceImages: { [key: string]: string } = {
    Tom: "tom.webp",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
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
