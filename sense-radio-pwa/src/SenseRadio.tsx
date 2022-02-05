import React from "react";
import {
  RadioPage,
  StyledThemeContextProvider,
  ThemeNameTags,
} from "@molitio/ui-core";

export const SenseRadio: React.FC = () => {
  return (
    <StyledThemeContextProvider themeName={ThemeNameTags.BLACK_YELLOW}>
      <RadioPage
        radio={{
          playUrl:
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3",
        }}
      ></RadioPage>
    </StyledThemeContextProvider>
  );
};
