import MasaustuMenu from "./MasaustuMenu";
import MobilMenu from "./MobilMenu";

const MiddleBar = () => {
  return (
    <>
      <nav className="lg:hidden">
        <MobilMenu />
      </nav>

      <nav className="hidden lg:flex">
        <MasaustuMenu  />
      </nav>
    </>
  );
};

export default MiddleBar;
