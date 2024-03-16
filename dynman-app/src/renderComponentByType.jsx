import TextComponent from "./components/TextComponent";
import DropdownComponent from "./components/DropdownComponent";
import LinkComponent from "./components/LinkComponent";
import ListComponent from "./components/ListComponent";
import ImageComponent from "./components/ImageComponent";
import TipComponent from "./components/TipComponent";

const renderComponentByType = (data, setHeightList) => {
  switch (data.type) {
    case "text":
      return <TextComponent item={data} />;
    case "dropdown":
      return <DropdownComponent item={data} setHeightList={setHeightList} />;
    case "link":
      return <LinkComponent item={data} />;
    case "list":
      return <ListComponent item={data} />;
    case "image":
      return <ImageComponent item={data} />;
    case "tip":
      return <TipComponent item={data} />;
    default:
      return null;
  }
};

export default renderComponentByType;
