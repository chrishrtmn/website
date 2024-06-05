import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export default function handleDragEnd(event: DragEndEvent, items: any[]) {
  const { active, over } = event;

  if (over) {
    const oldIndex = items.findIndex((item) => item.name === active.id);
    const newIndex = items.findIndex((item) => item.name === over.id);

    if (oldIndex !== newIndex) {
      return arrayMove(items, oldIndex, newIndex);
    }
  }

  return items;
}
