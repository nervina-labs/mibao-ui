import styles from './button.module.scss';
import React, { useMemo } from 'react';
import classNames from 'classnames';
import * as _ from 'lodash';
import { useClassNameArray } from '../../utils';

type NativeButtonProps = React.ButtonHTMLAttributes<any>

export const ButtonTypeSet = ['Default', 'Primary'] as const
export type ButtonType = typeof ButtonTypeSet[number]

export const ButtonSizeSet = ['Large', 'Middle', 'Small'] as const
export type ButtonSize = typeof ButtonSizeSet[number]

export interface ButtonProps extends NativeButtonProps {
  block?: boolean
  outline?: boolean
  uiType?: ButtonType
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = (props) => {
  const propsClassNames = useClassNameArray(props.className)
  const nativeButtonProps = useMemo(() => _.omit(props, 'uiType', 'block', 'size'), [props])
  const uiType = props.uiType ?? ButtonTypeSet[0]

  return (
    <button
      {...nativeButtonProps}
      className={classNames(styles.button, {
        [styles.block]: props.block,
        [styles.primary]: uiType === 'Primary',
        [styles.default]: uiType === 'Default',
        [styles.large]: props.size === 'Large',
        [styles.small]: props.size === 'Small',
        [styles.outline]: props.outline,
      }, ...propsClassNames)}
    >{props.children}</button>
  );
}
