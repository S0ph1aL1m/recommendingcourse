async function generateCourse() {
    const keyword = document.getElementById("keyword").value; // 사용자가 입력한 키워드
    const resultDiv = document.getElementById("result");

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer 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` // API 키 삽입
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `${keyword}에 맞는 관광 코스를 추천해주세요.`,
                max_tokens: 150
            })
        });

        const data = await response.json();
        resultDiv.textContent = data.choices[0].text.trim(); // GPT 결과 표시
    } catch (error) {
        resultDiv.textContent = "추천을 가져오는 데 문제가 발생했습니다.";
        console.error(error); // 에러 메시지 출력
    }
}
