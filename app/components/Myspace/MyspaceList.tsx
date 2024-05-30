import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import handleDragEnd from "../../helpers/handleDragEnd";
import useDragAndDrop from "../../helpers/useDragAndDrop";
import MyspaceItem from "./MyspaceItem";

interface MyspaceListProps {
  items: any[];
  setItems: (items: any[]) => void;
}

const MyspaceList: React.FC<MyspaceListProps> = ({ items, setItems }) => {
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
            <MyspaceItem key={item.name} id={item.name} items={[item]} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default MyspaceList;
