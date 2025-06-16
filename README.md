# Portfolio React version

## 🔧 기술 스택

- React
- Tailwind CSS (반응형 디자인)
- Firebase (데이터 저장 및 인증)
- Yarn (패키지 관리)

## Getting Started

### installation package

`yarn install`

### run server

`yarn start`

## 추가 effect

- About에서 위쪽 Center 기준으로 드래그 시 흔들리는 motion

## 추후 사용 코드

        {/* 노션 팝업으로 열때 API 필요 */}
        {popupUrl && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden relative shadow-xl">
              {/* 닫기 버튼 */}
              <button
                onClick={() => setPopupUrl(null)}
                className="absolute top-3 right-3 text-gray-800 hover:text-red-500 z-10"
              >
                ✕
              </button>

              {/* iframe */}
              <iframe
                src={popupUrl}
                title="Notion"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}
