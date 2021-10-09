import './button.module.scss';
import React from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "@chakra-ui/react"
import * as _ from 'lodash';

export interface ButtonProps extends BaseButtonProps {
  block?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <BaseButton {..._.omit(props, 'children')}>{props.children}</BaseButton>
  );
}
