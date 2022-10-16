import styled from "@emotion/styled";
import ScrollSection from "../../component/selectLocation/scrollSection";
import Map from "../../component/selectLocation/map";

const SelectLocation = () => {
  return (
    <SelectLocations>
      <SelectHeaderP>지역을 선택해 주세요</SelectHeaderP>
      <MapSection>
        <Map />
        <ScrollSection />
      </MapSection>
    </SelectLocations>
  );
};

export default SelectLocation;

const SelectLocations = styled.section`
  background: ${({ theme }) => theme.color.primary};
  width: 100vw;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SelectHeaderP = styled.p`
  width: 300px;
  height: 100px;
  margin: 0 auto;
  ${({ theme }) => theme.font.h2};
`;
const MapSection = styled.article``;
