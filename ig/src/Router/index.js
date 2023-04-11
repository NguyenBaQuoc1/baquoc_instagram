import Home from "../Page/Home";
import Short from "../Page/Shorts";
import Subribe from "../Page/Subribe";
import Subscriptions from "../Page/Subscriptions";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/short", component: Short },
  { path: "/subscriptions", component: Subscriptions },

];

export default publicRouter;
