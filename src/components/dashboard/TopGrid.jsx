import Grid from "@mui/material/Grid"; // Grid version 1
import Cards from "../mui/Cards";
import { Gauge } from "@mui/x-charts/Gauge";
import { useEffect, useState } from "react";
import { supabaseClient } from "../../utils/supabase";

const titleTasks = "Кол-во тасков";
const titleCats = "Кол-во категории";

export default function TopGrid() {
  const [todoLength, setTodoLength] = useState(0);
  const [categoriesLength, setCategoriesLength] = useState(0);

  useEffect(() => {
    const getTodosLength = async () => {
      const { data } = await supabaseClient
        .from("todos")
        .select()
        .limit();

      setTodoLength(data.length);
    };
    

    const getCategoriesLength = async () => {
      const { data } = await supabaseClient
        .from("categories")
        .select()
        .limit();

      setCategoriesLength(data.length);
    };

    getCategoriesLength();
    getTodosLength();
  }, []);

  const tasksGauge = (
    <Gauge
      value={todoLength}
      startAngle={-125}
      endAngle={125}
      innerRadius="80%"
      outerRadius="100%"
      height={100}
      // ...
    />
  );

  const catsGauge = (
    <Gauge
      value={categoriesLength}
      startAngle={-125}
      endAngle={125}
      innerRadius="80%"
      outerRadius="100%"
      height={100}
      // ...
    />
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* <Title title="My Custom Page" /> */}
          <Cards gauge={tasksGauge} title={titleTasks} />
        </Grid>
        <Grid item xs={4}>
          <Cards gauge={catsGauge} title={titleCats} />
        </Grid>
        {/* <Grid item xs={4}>
          <Cards gauge={gaugeList} title={titleCats} />
        </Grid> */}
      </Grid>
    </>
  );
}
