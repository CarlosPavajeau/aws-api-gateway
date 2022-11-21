function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports.handler = async (event) => {
    console.log('Event: ', event);

    if (event.queryStringParameters && event.queryStringParameters['number']) {
        const number = parseInt(event.queryStringParameters['number']);
        const result = fibonacci(number);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                number,
                fibonacci: result,
            }),
        }
    }

    return {
        statusCode: 400,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: 'Missing number parameter',
        }),
    }
}