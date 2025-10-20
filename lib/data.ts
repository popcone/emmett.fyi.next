// export const getProjects = async () => {
//   const url = `${process.env.DATA_API_URL}/items/portfolio_projects?fields=*.*`
//   const response = await fetch(url)
//   if (!response.ok) {
//     throw new Error(`Failed to fetch projects: ${response.statusText}`)
//   }
//   const data = await response.json()
//   return data.data || []
// }

// export const getTechnologies = async () => {
//   const url = `${process.env.DATA_API_URL}/items/portfolio_technologies?fields=id,technology`
//   const response = await fetch(url)
//   if (!response.ok) {
//     throw new Error(`Failed to fetch technologies: ${response.statusText}`)
//   }
//   const data = await response.json()
//   return data.data || []
// }

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
