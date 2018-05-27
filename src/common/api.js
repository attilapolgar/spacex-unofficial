const baseUrl = 'https://api.spacexdata.com/v2'
const urls = {
  launches: {
    latest: `${baseUrl}/launches/latest`,
    next: `${baseUrl}/launches/next`,
    all: `${baseUrl}/launches/all`
  }
}

const fetchNextLaunchData = () => {
  return fetch(urls.launches.next)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Request failed: no response')
      }
    })
    .then(myJson => myJson)
}
const fetchLatestLaunchData = () => {
  return fetch(urls.launches.latest)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Request failed: no response')
      }
    })
    .then(myJson => myJson)
}
const fetchAllLaunchData = () => {
  return fetch(urls.launches.all)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Request failed: no response')
      }
    })
    .then(myJson => myJson)
}

export default {
  fetchNextLaunchData,
  fetchLatestLaunchData,
  fetchAllLaunchData
}
