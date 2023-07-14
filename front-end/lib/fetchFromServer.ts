export default async function fetchAPIResponse(url: string, revalidate?: number) {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: revalidate ?? Infinity,
      },
    })
    return await response.json()
  } catch (error) {
    console.log("API RESPONSE ERROR", error)
  }
}
