const questionsList = {
  1: ["이번 여행은 어디로?", "내가 걷는 길이 곧 코스", "계획은 필수"],
  2: ["여행경비는?", "당장 국제거지만 안되면 되지!", "걸어다니는 게산기로 변신"],
  3: ["여행을 다녀온 후", "홈스윗홈... 침대로 점프!", "캐리어를 열고 물건을 정리한다."],
  4: ["여행지에서 식사할 때", "유명한 맛집 헌터", "처음 본 순간 사랑에 빠진 길거리 가게"],
  5: ["여행지에서 길을 잃었을 때", "왔던 길로 돌아가는 헨젤과 그레텔", "자꾸 걸어 나가면 길이 나오겠지.."],
  6: ["화려한 건축물을 보면서 드는 생각은?", "어떤 방법으로 지었을까? 고민한다", "와 멋있다 감탄한다."],
  7: ["아침에 늦잠을 잔 친구에게", "여행은 역시 피곤하지", "내일은 시간 지키자"],
  8: ["친구에게 차사고가 났다고 전화 왔을 때 나의 대답은?", "괜찮아? 다친데는 없어?", "보험들었어?"],
  9: ["친구가 쓸데없는 기념품을 살 때", "그래 니가 행복하다면", "그거 결국 쓰레기 된다"],
  10: ["나는 여행지를 선택할 때 주로", "사람이 많은 도시로", "나무가 많은 자연으로"],
  11: ["숙소를 구할 때", "저녁에 바베큐파티를 여는 곳", "조용하고 아늑한 곳"],
  12: ["여행지에 대한 감상을", "말로 내뱉어야 직성이 풀린다", "내 마음속에 저...장 마음에 담고 느낀다."]
};


const resultContentsList = {
  "ISTJ":
    ["ISTJ 성격 유형을 가진 사람들은 현실적이고, 조직적이며, 계획을 선호합니다. 따라서, 잘 계획된 투어나 역사적인 장소, 조용하고 평온한 휴양지를 추천드립니다. 계획적인 여행을 즐길 수 있는 도시로는 도쿄를 추천합니다. 도쿄는 깨끗하고 효율적인 교통 시스템과 잘 조직된 관광 명소를 제공합니다. 역사적인 장소를 탐험하는 데에는 프랑스의 파리를 추천합니다. 파리는 루브르 박물관 같은 역사적인 명소와 아름다운 건축물들을 탐험할 수 있습니다.",
    "일본-도쿄", "발리"],
  "ISFJ": 
    ["몸에서 사리가 나올 것 같다. 여행 중 친구끼리 싸움이 나면 제일 먼저 말리고 들 타입. 여행은 항상 즐겁고 행복해야만 한다. 성격이 워낙 꼼꼼해 모두를 만족시킬 수 있는 계획을 들고 온다. 스페인 바르셀로나를 추천한다. 지지고 볶고 싸우다가도 타파스에 술 한 잔이면 화해할 수 있다. 도시 분위기가 평화로워 ISFJ가 애쓰지 않아도 싸움이 알아서 해결되는 곳을 추천합니다!",
    "스페인/바르셀로나", "스위스/그린델발트"],
  "INFJ":
    ["여행을 광고하는 유형. 여행을 마음먹은 순간부터 되돌아오는 비행기 상황까지 모든 과정을 SNS를 통해 생중계한다. 친구의 친구의 친구까지도 알 정도. ‘맛있다, 예쁘다’를 연발하며 모든 순간 기뻐한다. 어딜 찍어도 성공적인 이탈리아 로마를 추천. 맛과 멋 그리고 자랑, 셋 다 잡을 수 있어요! 포토스팟을 찾아 찰칵찰칵 셀카 찍고, 랜드마크 앞에서 단체 사진을 찍기 최고의 여행지에요!",
    "이태리/로마", "미국/뉴욕"],
  "INTJ":   
    ["INTJ의 여행은 철저한 계획 위에서 이루어집니다. 더하여 지적 호기심을 충족시키려는 성향도 강합니다. 현지 투어 서비스를 이용하는 것도 좋은 선택이 될 수 있을 겁니다! 스페인은 많은 미술관과 고궁 등이 있어 지적 호기심을 채우기 안성맞춤인 도시입니다. 더불어 교통 수단이 잘 발달되어 있어 근교의 다른 도시를 왕복하기에도 안성맞춤이라고 할 수 있겠습니다. 빽빽하지 않은 도시와 분위기는 여행지에 대한 계획과 실천에도 도움이 되지 않을까요?",
    "스페인/마드리드", "프랑스/파리"],
  "ISTP": 
    ["ISTP 성격 유형을 가진 사람들은 자유로운 정신을 가지고 있고, 새로운 경험을 즐기며, 실용적인 활동을 선호합니다. 따라서, 야외 활동이 풍부한 국립공원이나, 다양한 경험을 제공하는 도시, 혹은 흥미로운 역사와 문화를 탐험할 수 있는 곳을 추천드립니다. 자유로움을 즐기며 실용적인 활동에 참여할 수 있는 국가로는 뉴질랜드를 추천합니다. 뉴질랜드의 국립공원과 하이킹 코스는 ISTP 유형에게 완벽한 여행 경험을 제공합니다",
    "뉴질랜드","이탈리아/로마"],
  "ISFP":
    ["호기심이 많은 예술가 유형으로, 다정하고 온화하며 사람들에게 친절합니다. 사람이 많은 곳을 싫어하며 흐름에 맡기는 편입니다. 자유로움을 추구하는 성향이 강하며 마음이 여유롭습니다. 분쟁을 싫어하고 조화롭게 지내는걸 좋아하며 개인 프라이버시를 존중받기를 원합니다.",
    "인도네시아/발리", "캐나다/퀘벡시티"],
  "INFP": 
    ["INFP는 깊이 있는 역사와 문화가 있는 장소를 선호합니다. 퀘벡 시티의 중세 풍경과 호이안의 고풍스러운 분위기는 INFP의 감성적인 면을 자극합니다. INFP는 혼자만의 시간을 즐기며, 이런 도시에서 자신만의 페이스로 여행을 즐길 수 있습니다. 예술과 문화를 사랑하는 INFP는 퀘벡 시티의 미술관이나 호이안의 전통 공예품 시장을 좋아할 것입니다. 조용하고 평화로운 환경에서 내면의 세계를 탐구하는 것을 좋아합니다.",
    "캐나다/벡시티", "베트남/호이안"],
  "INTP":
    ["INTP의 여행은 관심있는 분야에 대한 호기심과 효율적인 계획 위에서 이루어집니다. 여행에서도 분석/논리/객관적 사실에 관심을 두곤 합니다.",
    "피렌체", "교토"],
  "ESTP":
    ["ESTP 성격 유형을 가진 사람들은 활동적이고, 사람들과 어울리는 것을 좋아하며, 새로운 경험에 열려 있습니다. 따라서, 야외 활동이나 스포츠, 사람들과의 교류가 많은 곳, 혹은 다양한 이벤트와 즐길 거리가 있는 도시를 추천드립니다. 액티비티가 많은 곳으로는 캐나다의 밴쿠버를 추천합니다. 밴쿠버는 등산, 스키, 카누 등 다양한 야외 활동을 즐길 수 있습니다. 사람들과의 교류가 많은 곳으로는 스페인의 바르셀로나를 추천합니다.",
    "캐나다/밴쿠버", "스페인/바르셀로나"],
  "ESFP":
    ["자유로움을 좋아하며 현재를 즐기는 성격으로 삶에 대한 열정으로 뭉쳐있습니다. 하고 싶은 건 꼭 해야 되고, 하기 싫은 건 끝까지 미루는 성격입니다. 매우 사교적이며 사람을 좋아하는 만큼 새로운 사람들과 새로운 환경에 빠르게 적응합니다.",
    "미국/라스베가스", "홍콩"],
  "ENFP":
    ["ENFP는 활기차고 다양한 문화가 공존하는 도시를 좋아합니다. 바르셀로나의 다채로운 건축물과 토론토의 다문화적 특성은 ENFP의 호기심을 자극합니다. 새로운 사람들을 만나고 다양한 활동에 참여하는 것을 즐깁니다. 바르셀로나의 거리 공연이나 토론토의 축제에서 에너지를 얻을 수 있습니다. 자유롭고 창의적인 분위기에서 자신의 아이디어와 생각을 표현하는 것을 좋아합니다.",
    "스페인/바르셀로나", "캐나다/토론토"],
  "ENTP": 
    ["논쟁을 즐기는 변론가형 여행자 지적 여행에 대한 욕구가 엄청납니다.논쟁을 위해서는 지성이 뒷받침해 줘야 하는데, ENTP는 이러한 이유로 유익이 되는 여행을 선호하는 편. 다녀와서 한 줄의 지식이라도 남는 여행. 거리 곳곳 지식 거리가 많은 프랑스 파리를 추천. ENTP가 루브르 박물관이라도 둘러보는 날, 동행이라면 미리미리 앉아 있을 만한 주변 카페를 탐색해봐요!",
    "프랑스/파리", "오스트리아/빈"],
  "ESTJ":
    ["ESTJ는 실용적이고 현실적인 성격 특성으로 여행에서도 이런 모습이 반영될 가능성이 높습니다. 여행에도 분명한 계획과 목적을 원하며 내면의 성취도 얻길 바라는 유형입니다. 바티칸은 로마 북서부에 있는 가톨릭 교황국으로 로마 가톨릭 문화의 본산지이자 상징이라고 할 수 있습니다. 크지 않은 여행지답게 가톨릭과 관련된 역사와 문화가 살아있어 간결하고 확실한 여행을 하기 좋은 장소입니다. 명소들간의 거리가 멀지 않아 확실한 계획으로 이동하기 좋은 것도 장점!",
    "바티칸", "바티칸"],
  "ESFJ": 
    ["ESFJ는 여행 중에도 사회적 상호작용을 중요시합니다. 로마와 뉴욕은 많은 사람들이 모이는 활기찬 도시로, ESFJ에게 이상적인 장소입니다. 이들은 역사와 현대가 조화를 이루는 곳에서 많은 것을 배우고 경험하는 것을 좋아합니다. 로마의 고대 유적이나 뉴욕의 다양한 문화 명소를 방문하면서 즐거움을 느낍니다. 가족이나 친구들과 함께 여행하며 추억을 쌓는 것을 중요하게 생각합니다.",
    "이태리/로마","미국/뉴욕"],
  "ENFJ": 
    ["혹시라도 동행자가 칫솔을 안 챙겼을까 싶어 하나, 아니 두 개 더 챙기는 타입. 평소에는 참 좋은데 급한 일정이 생겨 빠르게 이동해야 할 때 걸림돌이 됩니다. 소가 풀이나 씹고 아무 일도 일어나지 않을 것만 같은 곳. 스위스 그린델발트를 추천합니다. 평화로운 곳에서의 ENFJ는 친절한 신사 느낌이다. 바쁘게 돌아다녀야 하는 여행지는 ENFJ에게는 별로 추천하지 않습니다.",
    "스위스/그린델발트", "미국/하와이"],
  "ENTJ": 
   ["리더쉽이 강하고 목표 지향적인 성격으로, 계획을 세우고 이를 실행하는데 능숙합니다. 일을 너무 사랑해서 워커홀릭이라는 말이 가장 잘 어울리고 도전을 즐깁니다. 사람들과의 소통을 즐기는 만큼 주장이 강하고 논쟁을 좋아하며 활발한 활동을 선호합니다.",
    "일본/도쿄","미국/뉴욕"],
};
export default {questionsList , resultContentsList}
