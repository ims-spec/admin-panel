import { Card } from "@mui/material";
import './cards.css'



export default function Cards({gauge, title}) {
  return (
      <Card variant="outlined" className="shadow">
        <h3 className="box">{title}</h3>
        {gauge}
      </Card>
  );
}
