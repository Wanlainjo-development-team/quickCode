import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLogo, setText } from '../features/useHeaderSlice'
import { useRoute } from '@react-navigation/native'

const BankingNavigation = () => {
  const dispatch = useDispatch()
  const route = useRoute()

  return (
    <View>
      <Text>BankingNavigation</Text>
    </View>
  )
}

export default BankingNavigation