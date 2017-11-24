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
  newMessageHeader: {
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider
  },
  input: {
    height: 34,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: colors.gray,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 20
  },
  newMessageContent: {
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  textarea: {
    color: colors.gray
  },
  sendButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    borderRadius: 30,
    backgroundColor: colors.primary
  },
  sendButtonText: {
    fontWeight: 'bold',
    color: colors.white
  }
});
