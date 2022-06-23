import React, { RefObject } from 'react';
import {
  RefreshControlProps,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

import { DEVICE_HEIGHT, IS_IOS, STATUS_BAR } from 'helpers/constants';

type SectionProps = {
  width?: number;
  height?: number;
  bgColor?: string;
  flexCount?: number;
  clientTop?: number;
  minHeight?: number;
  offsetTop?: number;
  clientLeft?: number;
  offsetLeft?: number;
  fullWidth?: boolean;
  height100?: boolean;
  safeAreaBg?: string;
  hiddenBar?: boolean;
  offsetRight?: number;
  clientRight?: number;
  fullHeight?: boolean;
  isScrolled?: boolean;
  withHeader?: boolean;
  withShadow?: boolean;
  clientBottom?: number;
  offsetBottom?: number;
  borderRadius?: number;
  contentWrap?: boolean;
  withSafeArea?: boolean;
  rowDirection?: boolean;
  absoluteFill?: boolean;
  disableStyles?: boolean;
  scrollEnabled?: boolean;
  withBottomTab?: boolean;
  children: React.ReactNode;
  offsetHorizontal?: boolean;
  centerContentVertically?: boolean;
  centerContentHorizontally?: boolean;
  showsVerticalScrollIndicator?: boolean;
  scrollRef?: RefObject<KeyboardAwareScrollView>;
  justifyContent?: 'space-evenly' | 'space-between';
  controlRefresh?: React.ReactElement<
    RefreshControlProps,
    | string
    | ((props: any) => React.ReactElement<any, any> | null)
    | { new (props: any): React.Component<any, any, any> }
  >;
};

const Section = ({
  width,
  height,
  children,
  fullWidth,
  scrollRef,
  height100,
  minHeight,
  hiddenBar,
  withShadow,
  isScrolled,
  fullHeight,
  withHeader,
  contentWrap,
  rowDirection,
  borderRadius,
  withSafeArea,
  absoluteFill,
  withBottomTab,
  flexCount = 1,
  offsetTop = 0,
  clientTop = 0,
  justifyContent,
  controlRefresh,
  clientLeft = 0,
  offsetLeft = 0,
  offsetRight = 0,
  clientRight = 0,
  offsetBottom = 0,
  clientBottom = 0,
  offsetHorizontal,
  scrollEnabled = true,
  disableStyles = false,
  centerContentVertically,
  centerContentHorizontally,
  bgColor = '#ADD8E6',
  safeAreaBg = 'white',
  showsVerticalScrollIndicator = false,
}: SectionProps) => (
  <View
    style={
      disableStyles
        ? {}
        : {
            flex: flexCount,
            backgroundColor: bgColor,

            //? can add different style for wrapper
          }
    }>
    {isScrolled ? (
      <View>
        <KeyboardAwareScrollView
          ref={scrollRef}
          bounces={false}
          enableOnAndroid
          nestedScrollEnabled={true}
          removeClippedSubviews={false}
          scrollEnabled={scrollEnabled}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          refreshControl={controlRefresh}>
          <ChildContainer
            width={width}
            height={height}
            bgColor={bgColor}
            minHeight={minHeight}
            offsetTop={offsetTop}
            height100={height100}
            clientTop={clientTop}
            fullWidth={fullWidth}
            offsetLeft={offsetLeft}
            fullHeight={fullHeight}
            clientLeft={clientLeft}
            withShadow={withShadow}
            contentWrap={contentWrap}
            offsetRight={offsetRight}
            clientRight={clientRight}
            borderRadius={borderRadius}
            rowDirection={rowDirection}
            offsetBottom={offsetBottom}
            clientBottom={clientBottom}
            justifyContent={justifyContent}
            offsetHorizontal={offsetHorizontal}
            centerContentVertically={centerContentVertically}
            centerContentHorizontally={centerContentHorizontally}>
            {hiddenBar && <StatusBar hidden />}
            {withSafeArea && (
              <SafeAreaView
                edges={['top']}
                style={{
                  backgroundColor: safeAreaBg,
                }}
              />
            )}
            {withHeader && (
              <HeaderContainer>
                <Icon name="arrow-left" size={24} color="#36303F" />
                <Text>Notification</Text>
                <Icon name="calendar-week" size={24} color="#36303F" />
              </HeaderContainer>
            )}

            {children}
          </ChildContainer>
        </KeyboardAwareScrollView>
      </View>
    ) : (
      <ChildContainer
        width={width}
        height={height}
        bgColor={bgColor}
        minHeight={minHeight}
        offsetTop={offsetTop}
        height100={height100}
        clientTop={clientTop}
        fullWidth={fullWidth}
        withShadow={withShadow}
        fullHeight={fullHeight}
        offsetLeft={offsetLeft}
        clientLeft={clientLeft}
        offsetRight={offsetRight}
        contentWrap={contentWrap}
        clientRight={clientRight}
        borderRadius={borderRadius}
        rowDirection={rowDirection}
        offsetBottom={offsetBottom}
        clientBottom={clientBottom}
        absoluteFill={absoluteFill}
        withBottomTab={withBottomTab}
        justifyContent={justifyContent}
        offsetHorizontal={offsetHorizontal}
        centerContentVertically={centerContentVertically}
        centerContentHorizontally={centerContentHorizontally}
        style={
          withShadow && {
            elevation: 2,
            shadowRadius: 2.22,
            shadowColor: '#000',
            shadowOpacity: 0.22,
            shadowOffset: {
              width: 0,
              height: 1,
            },
          }
        }>
        {hiddenBar && <StatusBar hidden />}
        {withSafeArea && (
          <SafeAreaView
            edges={['top']}
            style={{
              backgroundColor: safeAreaBg,
            }}
          />
        )}
        {withHeader && (
          <HeaderContainer>
            <Icon name="arrow-left" size={24} color="#36303F" />
            <Text>Notification</Text>
            <Icon name="calendar-week" size={24} color="#36303F" />
          </HeaderContainer>
        )}
        {children}
      </ChildContainer>
    )}
  </View>
);

const ChildContainer = styled.View<SectionProps>`
  margin-top: ${props => props.offsetTop}px;
  margin-left: ${props => props.offsetLeft}px;
  padding-left: ${props => props.clientLeft}px;
  margin-right: ${props => props.offsetRight}px;
  padding-right: ${props => props.clientRight}px;
  margin-bottom: ${props => props.offsetBottom}px;
  padding-bottom: ${props => props.clientBottom}px;
  flex-direction: ${props => (props.rowDirection ? 'row' : 'column')};
  padding-top: ${props =>
    props.clientTop ? props.clientTop : IS_IOS ? 0 : 24}px;
  ${props => props.height100 && 'height: 100%'};
  ${props => props.fullWidth && 'width: 100%;'};
  ${props => props.contentWrap && 'flex-wrap: wrap'};
  ${props => props.contentWrap && 'flex-wrap: wrap'};
  ${props => props.width && `width: ${props.width}px;`};
  ${props => props.height && `height: ${props.height}px;`};
  ${props => props.absoluteFill && StyleSheet.absoluteFill};
  ${props => props.bgColor && `background-color: ${props.bgColor};`};
  ${props => props.minHeight && `min-height: ${props.minHeight}px;`};
  ${props => props.centerContentHorizontally && 'align-items: center;'};
  ${props => props.centerContentVertically && 'justify-content: center;'};
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}px;`};
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props => props.fullHeight && `height: ${DEVICE_HEIGHT - STATUS_BAR}px;`};
  ${props =>
    props.offsetHorizontal &&
    `padding-left: 24px;
  padding-right: 24px;
  `};
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 12px;
  background-color: white;
`;

export default Section;
