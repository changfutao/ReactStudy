import React from 'react';
// { color: 'blue', fontSize: 16 } 表示如果没有给Provider 提供value时的默认值
export const ThemeContext = React.createContext({ color: 'blue', fontSize: 16 })