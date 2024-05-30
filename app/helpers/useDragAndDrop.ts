import {
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useEffect } from "react";

export default function useDragAndDrop() {
  const id = "draggable-id";
  const { isDragging } = useDraggable({ id });

  const sensors = useSensors(
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
  );

  // Prevent page scrolling while dragging.
  useEffect(() => {
    if (isDragging) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDragging]);

  return { sensors, id, isDragging };
}
