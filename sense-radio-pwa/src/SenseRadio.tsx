import React from "react";
import {
  AppShell,
  ComponentGroup,
  ComponentGroupTags,
  LogoFreshPrintSvg,
  LogoLedArtSvg,
  LogoListenNowSvg,
  LogoNestMediaSvg,
  LogoSenseRadioSvg,
  PlayButtonSvg,
  RadioPage,
  SocialButtonsSvg,
  SpeakerBackgroundSvg,
  StripedBackground,
  StyleVariant,
  ThemeNameTags,
  Button,
} from "@molitio/ui-core";

export const SenseRadio: React.FC = () => {
  return (
    <AppShell themeName={ThemeNameTags.BLACK_YELLOW}>
      <RadioPage
        themeName={ThemeNameTags.BLACK_YELLOW}
        radio={{
          playUrl:
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3",
        }}
        playButton={
          <SpeakerBackgroundSvg
            dimensions={{ height: "64vh" }}
            playAreaIcon={<LogoListenNowSvg dimensions={{ height: "7%" }} />}
            centerItem={<PlayButtonSvg dimensions={{ height: "20%" }} />}
          ></SpeakerBackgroundSvg>
        }
        logo={<LogoSenseRadioSvg dimensions={{ height: "6rem" }} />}
        socialButtons={[<SocialButtonsSvg dimensions={{ height: "3rem" }} />]}
        background={<StripedBackground />}
        pageFooter={
          <ComponentGroup
            groupingType={ComponentGroupTags.HORIZONTAL_FLEX}
            dimensions={{ height: "10vh" }}
            itemPadding="0.8rem"
          >
            <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX}>
              <LogoFreshPrintSvg dimensions={{ height: "8vh" }} />
              <LogoLedArtSvg dimensions={{ height: "8vh" }} />
              <LogoNestMediaSvg dimensions={{ height: "8vh" }} />
            </ComponentGroup>
            <ComponentGroup
              groupingType={ComponentGroupTags.VERTICAL_FLEX}
              fontColor="#6D6E72"
              fontSize="0.8rem"
              itemPadding="2px"
            >
              <span>
                Tel/Viber: +36 30 277 3939
                <br />
                Email: hello@radiosense.hu
              </span>
              <span>
                © 2021 Radio Sense Hungary. All rights reserved.
                <br />
                by nestmedia
              </span>
            </ComponentGroup>
            <ComponentGroup
              groupingType={ComponentGroupTags.HORIZONTAL_FLEX}
              itemGap="1rem"
            >
              <Button styleVariant={StyleVariant.ROUNDED} padding="0.5rem">
                MYONLINE RADIO
              </Button>
              <Button styleVariant={StyleVariant.ROUNDED} padding="0.5rem">
                ONLINE STREAM
              </Button>
            </ComponentGroup>
          </ComponentGroup>
        }
      ></RadioPage>
    </AppShell>
  );
};
