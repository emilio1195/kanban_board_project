import React, { memo } from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../card.drag/taskCard";

import { Property } from "csstype";
import { height } from "@mui/system";

const Column = (props: Column) => {

    return (
        <Droppable droppableId={props.droppableId} key={props.droppableId.toString()}>
            {(provided, snapshot) => {
                return (
                    <div className="column_content"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            backgroundColor: snapshot.isDraggingOver ? props.column.features.color : "rgba(255,255,255,0)",
                            opacity: snapshot.isDraggingOver ? "0.5" : 1,
                            padding: 10,
                            width: 250,
                            minHeight: 300,
                            borderRadius: "10px",
                            overflowY: "auto"
                        }}
                    >
                        {
                            props.column?.items?.map((item: any, index: number) => {
                                return(
                                    <TaskCard
                                        item={item}
                                        index={index}
                                        columFeactures={props.column.features}/>
                                );
                            })
                        }
                        {provided.placeholder}
                    </div>
                );
            }}
        </Droppable>
    );
};

interface Column {
    droppableId: string,
    column: any,
};

export default memo(Column);
