import React, {useState} from 'react';
import { DragDropContext, DropResult} from "react-beautiful-dnd";
import Column from "../src/components/columns.drop/Column";
import {data_mock} from "./mock/kanban_data";
import {AvatarGroup, Avatar} from '@mui/material'

const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function App() {
  const [columns, setColumns] = useState(data_mock);

  return (
      <div className={'content'}>
        <div className={'dashboard'}>
          <div className='nav'>
            <span className='nav_title'>Task Board</span>
            <span className='nav_avatars'>
              <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {
                Object.entries(columns).map(([columnId, column]) => {

                  return (
                      <div className={"column_card"}
                          key={columnId}
                           style={{
                             borderTop: "4px solid",
                             borderColor:column.features.color
                           }}
                      >
                        <div className={"card_Header"}>
                          <span className={"card_title"}>
                            {column.features.status}
                          </span>
                        </div>

                        <div>
                          <Column
                              droppableId={columnId}
                              column={column}
                          />
                        </div>
                      </div>
                  );
                })}
            </DragDropContext>
          </div>
        </div>
      </div>
  );
}

export default App;

