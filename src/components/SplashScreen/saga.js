import { call, put, takeLatest } from 'redux-saga/effects'
import { PRELOAD_ASSETS_REQUESTED } from './action-types'
import { preloadAssetsFailed, preloadAssetsSucceeded } from './actions'
import { Image } from 'react-native'
import { Asset, Font } from 'expo'
import {
  FontAwesome,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font))
}

const _cacheResourcesAsync = async () => {
  const imageAssets = cacheImages([
    // require('../../assets/img/falcon.jpg')
  ])

  const fontAssets = cacheFonts([
    { Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf') },
    FontAwesome.font,
    Entypo.font,
    MaterialIcons.font,
    MaterialCommunityIcons.font,
  ])

  await Promise.all([...imageAssets, ...fontAssets])
}

function* fetchAllData() {
  try {
    const assets = yield call(_cacheResourcesAsync)
    yield put(preloadAssetsSucceeded({ assets }))
  } catch (error) {
    yield put(preloadAssetsFailed({ errorMessage: error.message }))
  }
}

export default function* mySaga3() {
  yield takeLatest(PRELOAD_ASSETS_REQUESTED, fetchAllData)
}
