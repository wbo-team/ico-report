##이미지 사이즈 기준 정립

*이미지 파일명명 규칙 : Size_Ratio_DPR*
현재 제공되고 있는 이미지
- 이미지 1 ( jumbotron )
- 이미지 2 ( 무료 리포트 받아보기 )
- 이미지 3 ( Txid validation )

*이미지 제공 사이즈 근거*
- SmartPhone : 767 px
- Tablets : 768px - 991px
- Small labtops : 992 - 1199 px
- Desktop : 1200 px
- Etc : 1680 px 이상 ( macbook pro 15`)

## 디렉토리 정리
`src` : 디렉토리에 작업중인 코드 담음
`dist` : 디렉토리에 작업완료되고 Minified 된 코드 담김
*배포 버전* : `/dist/index.html`

## Gulp
`Gulp build task` 로 dist 업데이트
`gulp.task('build', ['mincss','minjs','minhtml']);` 지정
`mincss`, `minjs`, `minhtml` 결과물은 같은 위치의 dist 디렉토리에 담김.

###Gulp install dependencies
`npm install gulp`
`npm install --save-dev`
