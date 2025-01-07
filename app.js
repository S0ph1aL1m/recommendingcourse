async function generateCourse() {
    const keyword = document.getElementById("keyword").value;
    const resultDiv = document.getElementById("result");

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer YOUR_OPENAI_API_KEY`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `${keyword}에 맞는 관광 코스를 추천해주세요.`,
                max_tokens: 150
            })
        });

        const data = await response.json();
        resultDiv.textContent = data.choices[0].text.trim();
    } catch (error) {
        resultDiv.textContent = "추천을 가져오는 데 문제가 발생했습니다.";
        console.error(error);
    }
}
