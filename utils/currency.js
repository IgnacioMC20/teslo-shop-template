import { QrCode } from "@mui/icons-material"

export const format = (value) => {
    // Crear formateador
    const formatter = new Intl.NumberFormat('es-GT', {
        style: 'currency',
        currency: 'GTQ',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    return formatter.format(value) // Q.2,500
}