import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';
import {COLORS} from '../constants/theme'
const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: '#483d8b' },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
   backgroundColor: '#6B151B', padding: 5, width:320, borderRadius: 10, marginHorizontal: 2 
  },
  text: {
    textAlign: 'center', color: '#FFF', fontSize: 15
  },
});

export default memo(Button);
