import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"

export const ItemCounter = ({currentQuantity, maxValue, updateQuantity}) => {

    const add = () => {
        if (currentQuantity == maxValue) return;
        updateQuantity(currentQuantity + 1);

    }

    const remove = () => {
        if (currentQuantity <= 1) return;
        updateQuantity(currentQuantity - 1);
    }

    return (
        <Box display='flex' alignItems='center'>
            <IconButton onClick={remove}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}> {currentQuantity} </Typography>
            <IconButton onClick={add}>
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}
