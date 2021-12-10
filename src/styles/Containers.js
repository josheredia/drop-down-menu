import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12), 0px 2px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Title = styled.button`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding: 12px;
  color: #000000;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  position: absolute;
  top: 61px;
  left: 0px;
  display: flex;
  flex-direction: column;
  min-width: 75%;
  background: #ffffff;
  border: 4px solid #000000;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    position: relative;
    top: 0px;
  }
`;

export const Subtitle = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 12px 24px;

  font-size: 14px;
  line-height: 20px;
  width: 100%;
  color: #000000;
`;

export const SubtitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 4px solid #000000;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.2);
`;
