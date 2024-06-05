"use client";

import MyspaceGridItem from "@/components/myspace/MyspaceGridItem";
import { MyspaceFriends } from "@/utilities/constants/constants";
import handleDragEnd from "@/utilities/handleDragEnd";
import useDragAndDrop from "@/utilities/useDragAndDrop";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";

const MyspaceGridList = () => {
  const [items, setItems] = useState(MyspaceFriends);
  const { sensors, id } = useDragAndDrop();

  const handleDragEndFunction = (event: DragEndEvent) => {
    const updatedItems = handleDragEnd(event, items);
    setItems(updatedItems);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      id={id}
      onDragEnd={handleDragEndFunction}
      sensors={sensors}
    >
      <SortableContext
        items={items.map((item) => item.name)}
        strategy={rectSortingStrategy}
      >
        <div className="myspace-grid-nested grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {items.map((item) => (
            <MyspaceGridItem key={item.name} id={item.name} items={[item]} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default MyspaceGridList;
