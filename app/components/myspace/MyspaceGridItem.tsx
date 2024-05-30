import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

export default function MyspaceGridItem({
  id,
  items,
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

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {items?.[0]?.imagePath && (
        <Image src={items[0].imagePath} alt={id} width={100} height={100} />
      )}
      {id}
    </div>
  );
}
