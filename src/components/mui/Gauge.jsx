import { Gauge } from "@mui/x-charts/Gauge";

export default function GaugeList({}) {
  return (
    <Gauge
      value={75}
      startAngle={0}
      endAngle={360}
      innerRadius="80%"
      outerRadius="100%"
      height={100}
      // ...
    />
  );
}
