import { StyleSheet, Platform } from 'react-native';

import { colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.default
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    ...Platform.select({
      ios: { marginTop: 20 }
    })
  },
  headerTitle: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white
  },
  headerIcon: {
    fontSize: fonts.huge,
    color: colors.white
  },
  list: {
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  loading: {
    marginTop: 20
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider
  },
  listItemTitle: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.dark
  },
  listItemSubject: {
    fontSize: fonts.regular,
    color: colors.dark
  },
  listItemDate: {
    fontSize: fonts.small,
    color: colors.gray
  }
});
