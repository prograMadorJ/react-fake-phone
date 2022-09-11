import React, { useState } from 'react';
import styled from 'styled-components';

export default function () {
  const [screenState, setScreenState] = useState({
    isTurnOn: false,
    countLogo: 1,
  });

  const centerButtonProps = {
    onClick: () => {
      setScreenState((state) => ({
        ...state,
        isTurnOn: !state.isTurnOn,
      }));

      const timer = setTimeout(() => {
        if (screenState.isTurnOn && screenState.countLogo < 8) {
          setScreenState((state) => ({
            ...state,
            countLogo: state.countLogo + 1,
          }));
        } else if (screenState.isTurnOn) {
          setScreenState((state) => ({
            ...state,
            countLogo: 1,
          }));
        }
        clearTimeout(timer);
      }, 400);
    },
  };

  return (
    <WrapContainer>
      <ControllsSideContainer>
        <PowerButton />
        <VolumeUpButton />
        <VolumeDownButton />
      </ControllsSideContainer>
      <ShapeContainer>
        <Display>
          <Screen {...screenState} />
        </Display>
        <ControllsContainer>
          <CenterButton {...centerButtonProps} />
        </ControllsContainer>
      </ShapeContainer>
    </WrapContainer>
  );
}

function Screen(props) {
  const ScreenWrapperProps = {
    'data-turn': props.isTurnOn ? 'on' : 'off',
  };

  return (
    <ScreenWrapper {...ScreenWrapperProps}>
      <StartScreenLogo countLogo={props.countLogo} />
    </ScreenWrapper>
  );
}

function StartScreenLogo({ countLogo }) {
  const logos = [
    'https://thumbs.gfycat.com/CookedMadeupAmericansaddlebred-size_restricted.gif',
    'https://phoneky.co.uk/thumbs/screensavers/down/computer/windowsxpm_en3ie9l8.gif',
    'https://c.tenor.com/AbOMNr-6T28AAAAC/android-one2020-dark-boot-animation.gif',
    'https://phoneky.co.uk/thumbs/screensavers/down/logo-brands/nokiastart_6eep9zcd.gif',
    'https://c.tenor.com/gBRnmeiiYUkAAAAC/sony-ericsson-boot-up.gif',
    'https://i.giphy.com/media/zMidPY5SCWC5y/giphy.webp',
    'https://phoneky.co.uk/thumbs/screensavers/down/logo-brands/moto_luuldp4i.gif',
    'https://i.gifer.com/embedded/download/BK4E.gif',
  ];

  const transform = () => {
    if (
      logos[countLogo - 1].includes(
        'CookedMadeupAmericansaddlebred-size_restricted.gif'
      ) ||
      logos[countLogo - 1].includes('BK4E.gif')
    ) {
      return 'scale(2)';
    } else {
      return 'scale(1)';
    }
  };

  const style = {
    width: '100%',
    height: '100%',
    filter: 'saturate(0.5)',
    transform: transform(),
  };

  return <img src={logos[countLogo - 1]} style={style} />;
}

const WrapContainer = styled.div`
  position: relative;
  max-width: 230px;
  min-width: 230px;
  margin: 20px 10px;
`;

const ShapeContainer = styled.div`
  position: relative;
  border: solid 1px #333;
  min-height: 400px;
  max-height: 400px;
  max-width: 230px;
  min-width: 230px;

  border-radius: 20px;
  background: #0e0e0e;
  padding: 30px 5px 60px 5px;
  box-shadow: 0 0 0.5pt 0.5pt #fff5 inset, 0 0 15px -4px #000;
`;

const Display = styled.div`
  background: #000;
  min-height: 400px;
  max-height: 400px;
  min-width: 100%;
  background: linear-gradient(to top right, #010101 10%, #010101 90%);
  overflow: hidden;
`;

const ScreenWrapper = styled.div`
  min-height: inherit;
  min-width: 100%;
  opacity: 0;
  transition: opacity .4s;
  display: flex;
  align-items: center;
  

  &[data-turn='on'] {
    opacity: 1;
  }
`;

const ControllsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const ControllsSideContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 25px;
  right: -13px;
  z-index: 0;
`;

const CenterButton = styled.button`
  border-width: 1pt;
  border-radius: 30px;
  padding: 8px 25px;
  outline: solid 1pt #666;
  background: #060606;
  box-shadow: 0 0 1px 1px #050505f5 inset;
  cursor: pointer;
`;

const SideButtonStyle = styled.button`
  border-radius: 30px;
  padding: 20px 2px;
  outline: solid 1pt #555;
  background: #030303;
  box-shadow: 0 0 1px 1px #050505f1 inset;
  cursor: pointer;
`;

const PowerButton = styled(SideButtonStyle)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px 2px;
`;

const VolumeButtonStyle = styled(SideButtonStyle)`
  padding: 18px 2px;
  position: absolute;
  right: 0;
`;

const VolumeUpButton = styled(VolumeButtonStyle)`
  top: 70px;
`;

const VolumeDownButton = styled(VolumeButtonStyle)`
  top: 120px;
`;
