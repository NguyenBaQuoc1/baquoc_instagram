import Home from "../Pages/Home";
import Shorts from "../Pages/Shorts";
import Subscriptions from "../Pages/Subscriptions";



const publicRouter = [
    {path : '/' , component : Home},
    {path : '/shorts' , component : Shorts},
    {path : '/subscriptions' , component : Subscriptions},

]

export default publicRouter