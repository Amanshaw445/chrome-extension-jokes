async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        if (data.type === 'single') {
            document.getElementById('joke').innerText = data.joke;
        } else if (data.type === 'twopart') {
            document.getElementById('joke').innerText = `${data.setup} ${data.delivery}`;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

fetchJoke();

document.getElementById('new-joke-btn').addEventListener('click', fetchJoke);

