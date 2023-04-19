const fetcher = async ({ url, method, body, json = true }) => {
	const res = await fetch(url, {
		method,
		...(body && { body: JSON.stringify(body) }),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		//error handle
		throw new Error('API Error!');
	}

	if (json) {
		const data = await res.json();
		return data.data;
	}
};

export const register = (user) => {
	return fetcher({ url: '/api/register', method: 'post', body: user });
};

export const signin = (user) => {
	return fetcher({
		url: '/api/signin',
		method: 'post',
		body: user,
		json: false,
	});
};
