function searchPlayer() {
  const query = document.getElementById('searchInput').value.trim();
  const resultSection = document.getElementById('resultSection');

  if (!query) {
    alert('헌터 닉네임을 입력해 주세요!');
    return;
  }

  // 검색 결과창 보이기
  resultSection.style.display = 'block';

  // 이름 반영
  document.getElementById('profileName').innerText = query;

  // 가상의 통계 데이터 생성 (검색할 때마다 멋지게 시뮬레이션)
  let kd = (Math.random() * 1.5 + 1.3).toFixed(2);
  let kills = Math.floor(Math.random() * 600 + 1100);
  let deaths = Math.floor(kills / kd);

  document.getElementById('statKd').innerText = kd;
  document.getElementById('statKills').innerText = `${kills} / ${deaths}`;
  document.getElementById('statBounty').innerText = (Math.random() * 15 + 60).toFixed(1) + '%';
  document.getElementById('statHours').innerText = Math.floor(Math.random() * 300 + 600) + '시간';

  // 최근 매치 샘플 데이터
  const mockMatches = [
    { result: '승리 (현상금 탈취 성공)', detail: '킬: 4 | 어시스트: 1 | 사용 무기: Lebel 1886 / Dolch 96', win: true },
    { result: '패배 (교전 중 사망)', detail: '킬: 1 | 어시스트: 2 | 사용 무기: Mosin-Nagant / Romero 77', win: false },
    { result: '승리 (솔로 서버 와이프)', detail: '킬: 6 | 어시스트: 0 | 사용 무기: Vetterli 71 Karabiner', win: true },
    { result: '승리 (현상금 탈취 성공)', detail: '킬: 3 | 어시스트: 3 | 사용 무기: Crown & King Auto-5', win: true },
    { result: '패배 (보스 레이드 중 백스탭)', detail: '킬: 0 | 어시스트: 1 | 사용 무기: Centennial / Uppercut', win: false }
  ];

  let matchesHtml = '';
  mockMatches.forEach(m => {
    matchesHtml += `
      <div class="match-item">
        <div>
          <div class="match-result ${m.win ? 'win' : 'loss'}">${m.result}</div>
          <div class="match-detail">${m.detail}</div>
        </div>
      </div>
    `;
  });

  document.getElementById('matchList').innerHTML = matchesHtml;

  // 부드럽게 결과로 스크롤 이동
  resultSection.scrollIntoView({ behavior: 'smooth' });
}
