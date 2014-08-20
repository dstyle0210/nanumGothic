nanumGothic
===========

##나눔고딕 V4 사용법
### 구글 API을 기본 데이터를 기준으로 작성되었습니다.

1. 압축파일을 다운로드 받습니다.
2. 압축을 해제하면 "nanumGothic.css" 및 "fonts" 폴더가 생성됩니다.
3. 모든 파일을 사용하고자 하는 웹저장소에 업로드 합니다.
4. nanumGothic.css 을 열어, 경로를 맞추어 줍니다.
5. 사용하고자 하는 웹페이지에 "nanumGothic.css" 파일 및 js을 연결해줍니다.


    <link rel="stylesheet" type="text/css" href="nanumGothic.css" id="nanumGothicCSS" /> <!-- id부분을 수정하지 마세요. -->
    <script type="text/javascript" src="nanumGothic.js"></script>



=========================================

##TODO.
1. css 및 js min파일로 연결
 grunt-contrib-uglify
 grunt-contrib-cssmin


=========================================

##현재까지의 오류
1. 사파리에서 한문을 사용시 정상적으로 표시되지 않는 한자들이 있음.
- 나눔고딕 안에 한자가 존재하지 않을수 있음.
- 3.0버젼에서는 포함되었다고는 하나.. 용량이 상당히 작은걸로 보아 없을듯?
