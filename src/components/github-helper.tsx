export default async function GithubHelper() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const userCall =  await fetch('https://api.github.com/users/felipepitoko')

    const userData = await userCall.json()

    return <pre>{JSON.stringify(userData, null, 2)}</pre>
}