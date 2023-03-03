import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import "../../../src/App.css";
import Task from './card'

function TaskCard(props: TaskCard) {
    return (
        <Draggable draggableId={props.item.id.toString()} index={props.index} key={props.item.id}>
            {(provided, snapshot) => {
                return (
                    <div className={"task_card"}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            ...provided.draggableProps.style,
                            userSelect: "none",
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                            backgroundColor: snapshot.isDragging ? "#232323" : "#444444",
                            opacity: snapshot.isDragging ? "0.8" : "1",
                            color: "#fff",
                            borderRadius: "4px"
                        }}
                    >
                        <Task 
                            data={props.item}
                            features={props.columFeactures}/>
                    </div>
                );
            }}
        </Draggable>
    );
}

interface TaskCard {
    item: any,
    index: number,
    columFeactures: any
};

export default memo(TaskCard);
