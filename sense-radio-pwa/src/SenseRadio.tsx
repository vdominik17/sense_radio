import React from "react";
import {
  RadioPage,
  StyledThemeContextProvider,
  ThemeNameTags,
} from "@molitio/ui-core";

export const SenseRadio: React.FC = () => {
  return (
    <StyledThemeContextProvider themeName={ThemeNameTags.BLACK_YELLOW}>
      <div>
        <RadioPage
          radio={{
            playUrl:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3",
          }}
          logo={
            <img
              src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/radio_sense_new_logo2.svg`}
            ></img>
          }
        ></RadioPage>
      </div>
    </StyledThemeContextProvider>
  );
};
