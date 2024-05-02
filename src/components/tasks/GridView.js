import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const data = [
  {
    id: "gray",
    content: "Item-1",
  },
  {
    id: "pink",
    content: "Item-2",
  },
  {
    id: "yellow",
    content: "Item-3",
  },
  {
    id: "rose",
    content: "Item-4",
  },
  {
    id: "belly",
    content: "Item-5",
  },
  {
    id: "naima",
    content: "Item-6",
  },
  {
    id: "nila",
    content: "Item-7",
  },
  {
    id: "humasha",
    content: "Item-8",
  },
  {
    id: "mina",
    content: "Item-9",
  },
];

// a little function to help us with reordering the result
const GridView = () => {
  const [characters, updateCharacters] = useState(data);
  function handleOnDragEnd(result) {
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <div className="grid grid-cols-3 gap-10 mt-10">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-white px-8 py-5 rounded-xl"
            >
              <h2 className="mb-5">Todo</h2>
              {characters.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-slate-100 px-5 py-5 rounded-lg my-3"
                    >
                      {" "}
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default GridView;