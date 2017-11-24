import { StyleSheet, Platform } from 'react-native';

import { colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    ...Platform.select({
      ios: { marginTop: 20 }
    })
  },
  headerIcon: {
    fontSize: fonts.huge,
    color: colors.white
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center'
  },
  headerTitleText: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider
  },
  messageHeaderTitle: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.dark
  },
  messageHeaderDate: {
    fontSize: fonts.small,
    color: colors.gray
  },
  messageContent: {
    paddingVertical: 20
  },
  messageContentText: {
    fontSize: fonts.regular,
    color: colors.gray
  }
});
