const baseUrl = 'https://api.spacexdata.com/v2'
const urls = {
  launches: {
    latest: `${baseUrl}/launches/latest`,
    next: `${baseUrl}/launches/next`,
    all: `${baseUrl}/launches/all`,
  },
  rockets: `${baseUrl}/rockets`,
  launchpads: `${baseUrl}/launchpads`,
}

const fetchData = url =>
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
      throw new Error('Request failed: no response')
    })
    .then(myJson => myJson)

const fetchNextLaunchData = () => fetchData(urls.launches.next)
const fetchLatestLaunchData = () => fetchData(urls.launches.latest)
const fetchAllLaunchData = () => fetchData(urls.launches.all)
const fetchRocketData = () => fetchData(urls.rockets)
const fetchLaunchpadData = () => fetchData(urls.launchpads)

export default {
  fetchNextLaunchData,
  fetchLatestLaunchData,
  fetchAllLaunchData,
  fetchRocketData,
  fetchLaunchpadData,
}
