import React from "react";
import { 
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
} from 'react-native'
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
  isCommented: boolean;
}

export function Button({ isLoading, isCommented, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={[styles.container, { opacity: (isCommented || isLoading) ? 0.4 : 1 }]}
      disabled={isCommented || isLoading}
      {...rest}  
    >
      {
        isLoading 
          ? 
          <ActivityIndicator 
            color={theme.colors.text_on_brand_color}
          />
          :
          <Text style={styles.title}>
            Enviar Feedback
          </Text>
      }
    </TouchableOpacity>
  );
}