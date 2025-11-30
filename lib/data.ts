export const getProjects = async () => {
  const url = `${process.env.DATA_URL}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getTechnologies = async () => {
  const url = `${process.env.TECHNOLOGIES_URL}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(error)
    return []
  }
}
