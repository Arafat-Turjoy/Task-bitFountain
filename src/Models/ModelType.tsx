import Button from "@material-ui/core/Button";

import { modelItemType } from "../App";

import { Wrapper } from "./ModelType.styles";

type Props = {
  device: modelItemType;
  selectMedicalDevice: (selectItem: modelItemType) => void;
};

const Device: React.FC<Props> = ({ device, selectMedicalDevice }) => (
  <Wrapper>
    <div>
      <h3>{device.BrandId}</h3>
      <h3>{device.Name}</h3>
      <h3>{device.TypeId}</h3>
      <p>{device.Comment}</p>
      <p>{device.Description}</p>
    </div>
    <Button onClick={() => selectMedicalDevice(device)}>
      select a medical device
    </Button>
  </Wrapper>
);

export default Device;
