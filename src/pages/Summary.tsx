import { useSnapshot } from "valtio";
import state from "../store";

const Summary = () => {
  const snap = useSnapshot(state);
  console.log(snap);
  return <div>summary</div>;
};

export default Summary;
