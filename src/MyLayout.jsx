
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";

export const MyLayout = ({ children }) => (
  <RALayout>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);