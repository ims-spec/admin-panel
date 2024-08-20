import './dashboard.css'
import { Paper, Stack } from '@mui/material'
import { BasicGrid } from './Box'
import Cards from '../mui/Card'

export default function dashboard() {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
      {/* <BasicGrid /> */}
      <Paper elevation={2}>
        <Cards/>
      </Paper>
    </>
  )
}
