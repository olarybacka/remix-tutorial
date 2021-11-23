import type { LinksFunction } from "remix";
import stylesUrl from "../styles/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
const IndexRoute = () => <div>Index route</div>;
export default IndexRoute;
