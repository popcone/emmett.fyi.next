export const getProjects = async () => {
  const url = `${process.env.DATA_API_URL}/items/portfolio_projects?fields=*.*`
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
  const url = `${process.env.DATA_API_URL}/items/portfolio_technologies?fields=id,technology`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(error)
    return []
  }
}
