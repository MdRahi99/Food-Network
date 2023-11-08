import FoodDetails from "./foodDetails/page";
import SocialLinks from "./socialLinks/page";

const Contents = () => {
    return (
        <div className="grid grid-cols-12">
           <div className="col-span-1">
           <SocialLinks />
           </div>
           <div className="col-span-11">
           <FoodDetails />
           </div>
        </div>
    );
};

export default Contents;