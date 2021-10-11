import {
  ChakraProvider,
  ThemeProvider,
  extendTheme,
} from '@chakra-ui/react';
import { StoryContext } from '@storybook/react';
import React from 'react';
import { Button } from '@chakra-ui/button';

const withChakra = (StoryFn: () => React.JSX, context: StoryContext) => {
  console.log(extendTheme()) // direction.toLowerCase();

  return (
    <ChakraProvider theme={extendTheme()}>
      <Button>Button</Button>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
