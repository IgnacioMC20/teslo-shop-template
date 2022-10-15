import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"

export const ItemCounter = () => {

    const [items, setItems] = useState(1);

    const add = () => {
        setItems(items + 1);

    }

    const remove = () => {
        if (items <= 1) return;
        setItems(items - 1);
    }

    return (
        <Box display='flex' alignItems='center'>
            <IconButton onClick={remove}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}> {items} </Typography>
            <IconButton onClick={add}>
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}
