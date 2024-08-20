import { Card, Stack } from "@mui/material"

export default function Cards() {
    return (
        <Card variant="outlined">
            <Stack spacing={2}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>
        </Card>
    )
}