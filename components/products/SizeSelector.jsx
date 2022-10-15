import { Button } from "@mui/material"
import { Box } from "@mui/system"

export const SizeSelector = ({selectedSize, sizes}) => {
  return (
    <Box>
        {
            sizes.map( size => (
                <Button
                    key={size}
                    size='small'
                    color={selectedSize === size ? 'secondary' : 'info'}
                >
                    {size}
                </Button>
            ))
        }
    </Box>
  )
}
