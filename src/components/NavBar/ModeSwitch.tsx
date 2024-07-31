import { useState, useEffect } from "react";
import styled from "styled-components";
import SunIcon from "../../assets/sunIcon.svg";

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background: #333;
  transition: background-color 0.3s;
  cursor: pointer;
`;

const Knob = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 3px;
  left: ${({ isOn }) => (isOn ? "32px" : "3px")};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.3s;
`;

const Icon = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ isOn }) => (isOn ? "right: 8px;" : "left: 8px;")}
  font-size: 18px;
  color: ${({ isOn }) => (isOn ? "#000" : "#FFD700")};
`;

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isOn]);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <Switch isOn={isOn} onClick={handleToggle}>
      <Knob isOn={isOn} />
      <Icon isOn={isOn}>
        {isOn ? "🌙" : <img src={SunIcon} alt="Sun Icon" />}
      </Icon>
    </Switch>
  );
};

export default ToggleSwitch;
