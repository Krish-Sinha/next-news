export const Feed = ({ pageNumber, articles }) => {
	return <>Hello World</>
}

export const getServerSideProps = async (pageContext) => {
	const pageNumber = pageContext.query.pageid

	if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			},
		}
	}

	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
			},
		}
	)

	const apiJson = await apiResponse.json()
}

export default Feed
