import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={29} height={27} viewBox="0 0 27 27" fill="none">
      <Path
        d="M26.383 15.589a1.715 1.715 0 00-.068-.058l-.027-.021-.044-.034-.033-.023a1.494 1.494 0 00-.192-.117 1.287 1.287 0 00-.114-.056 1.78 1.78 0 00-.146-.058l-.012-.004a1.846 1.846 0 00-1.046-.042l-.007.001a1.6 1.6 0 00-.068.02l-.022.006c-.52-.15-2.588-.716-7.456-1.73a8.852 8.852 0 01-1.054-.465l.248-.504a.425.425 0 00-.762-.376l-.23.466a12.095 12.095 0 01-.714-.468l.318-.36a.425.425 0 10-.638-.563l-.358.406a11.205 11.205 0 01-.712-.638l.346-.287a.425.425 0 00-.543-.654l-.389.322c-.178-.204-.353-.42-.521-.65l.442-.238a.425.425 0 10-.404-.748l-.515.278A9.7 9.7 0 0110.61 6.6a.431.431 0 00-.022-.06c-.035-.076-.359-.739-1.034-.739-.667 0-1.276.633-1.911 1.99-.358.193-1.55.783-2.505.604l-.032-.005-.07-.017-.059-.015-.058-.02-.064-.022-.055-.023-.06-.027c-.021-.01-.041-.023-.061-.034-.017-.009-.033-.017-.049-.027a1.289 1.289 0 01-.104-.07 10.7 10.7 0 00-.506-.36l-.01-.007c-1.018-.67-1.825-.864-2.403-.577-.44.219-.69.681-.742 1.375l-.002.038c-.002.033-.005.067-.006.101a4.07 4.07 0 00-.003.234v.034l-.002.046c-.002.13-.007.278-.015.444v.002c-.11 2.356-.727 7.52-.822 8.301l-.001.013-.003.02c0 .009-.002.016-.003.022v.01l-.003.017c0 .01-.002.016-.002.018v.003a.379.379 0 00-.002.027v.018L0 17.918v1.423c0 1.02.83 1.85 1.849 1.85h8.517a.425.425 0 100-.851H1.849a1 1 0 01-.999-.999v-.998h14.992c.001 0 .054.003.15.005a3.56 3.56 0 00-1.23 1.992H11.82a.425.425 0 100 .85H15.769l.038.002a27.588 27.588 0 004.014-.206c3.163-.405 5.42-1.342 6.71-2.786.68-.761.613-1.932-.148-2.611zm-2.704.244l-.022.021-.028.027-.043.037-.03.026a2.77 2.77 0 01-.047.038l-.029.023-.058.044-.023.017a3.04 3.04 0 01-.087.06l-.013.01a3.344 3.344 0 01-.078.05l-.032.02-.063.037-.04.023a3.52 3.52 0 01-.166.09l-.045.024a7.815 7.815 0 01-.18.086c-.015.008-.032.015-.048.022a6.844 6.844 0 01-.2.086l-.043.018a6.322 6.322 0 01-.097.038l-.031.012a8.124 8.124 0 01-.133.05l-.02.006-.116.04-.046.016-.095.031-.054.017c-.03.01-.06.02-.09.028l-.059.018-.09.027-.06.017-.092.025-.063.017-.094.025-.063.017-.1.024-.06.015a13.518 13.518 0 01-.3.068l-.032.007-.172.035-.032.007-.04.007-.102.02-.06.01-.117.022a12.804 12.804 0 01-.444.072 4.64 4.64 0 01-.053.008l-.009-.07-.009-.076c-.134-1.026-.675-1.886-1.21-2.506 2.703.58 4.345.985 5.218 1.214zM9.554 6.65c.093 0 .203.136.25.222.277.952.665 1.79 1.11 2.525l-.528.285a.425.425 0 10.404.748l.594-.32c.2.279.41.54.62.784l-.522.434a.425.425 0 10.543.654l.561-.465c.271.27.543.514.806.732l-.422.48a.425.425 0 00.637.562l.46-.521c.314.225.619.422.904.592l-.291.591a.425.425 0 10.763.376l.274-.556a9.72 9.72 0 001.122.491c.204.15 1.081.833 1.608 1.824l-.04-.002-.134-.008-.167-.012-.134-.012-.164-.015-.133-.015a10.397 10.397 0 01-.16-.02c-.045-.005-.089-.012-.133-.018l-.158-.023-.131-.021-.157-.027a13.06 13.06 0 01-.692-.15 10.527 10.527 0 01-.423-.116l-.125-.038a9.081 9.081 0 01-.675-.235 9.812 9.812 0 01-1.018-.463l-.115-.061-.131-.073-.113-.064-.13-.076-.111-.068-.128-.08-.11-.07-.125-.085-.108-.073-.123-.088-.107-.077-.122-.092-.104-.08-.12-.096-.103-.082-.119-.101-.1-.085-.118-.105-.097-.088c-.04-.036-.078-.073-.117-.11l-.095-.09-.117-.115-.091-.091c-.04-.04-.078-.082-.117-.123l-.088-.091-.12-.133-.08-.088c-.045-.05-.09-.102-.133-.153l-.064-.074a12.887 12.887 0 01-.332-.41l-.045-.06-.09-.118-.05-.068a9.403 9.403 0 01-.206-.288l-.046-.066a12.362 12.362 0 01-.084-.124l-.033-.05a11.914 11.914 0 01-.11-.169l-.03-.048c-.027-.04-.052-.082-.077-.122l-.04-.065a12.827 12.827 0 01-.26-.442l-.032-.057a14.263 14.263 0 01-.076-.139l-.011-.022c-.028-.05-.054-.1-.08-.15l-.028-.054a13.534 13.534 0 01-.05-.098l-.03-.06a13.966 13.966 0 01-.116-.236l-.025-.053a12.845 12.845 0 01-.122-.266l-.014-.03a16.13 16.13 0 01-.042-.097l-.018-.043a10.833 10.833 0 01-.051-.122l-.03-.073a8.674 8.674 0 01-.047-.115l-.012-.03a11.324 11.324 0 01-.074-.192l-.006-.019a8.451 8.451 0 01-.025-.066l-.008-.023a17.02 17.02 0 01-.02-.057l-.007-.018a7.728 7.728 0 01-.044-.13c.674-1.428 1.082-1.47 1.128-1.47zM.904 17.492c.104-.868.326-2.767.51-4.62a4.19 4.19 0 011.044.76c.926.92 1.432 2.217 1.507 3.86H.905zm3.912 0a7.939 7.939 0 00-.412-2.289 3.72 3.72 0 001.345-.18l.201-.067c1.36-.452 2.534-.842 4.295 1a12.96 12.96 0 001.778 1.536H4.816zm11.063.002a1.618 1.618 0 00-.077-.002h-2.166c-.878-.442-1.958-1.266-2.776-2.123-2.133-2.232-3.75-1.694-5.178-1.22l-.198.066a2.948 2.948 0 01-1.476.087c-.78-1.44-1.919-2.077-2.508-2.323.055-.6.104-1.174.14-1.685.807.538 2.266 1.31 3.999 1.322h.003a.425.425 0 00.002-.85C3.75 10.753 2.178 9.66 1.696 9.287v-.015l.003-.084.001-.033.002-.072v-.036l.002-.067v-.032-.093c0-.334.047-.588.133-.746a.363.363 0 01.18-.17c.158-.056.447-.023.865.168l.074.035.038.019c.028.014.057.028.086.044l.012.006c.237.126.495.29.766.486l.026.02c.043.03.085.062.129.095a2.177 2.177 0 00.214.143l.02.012c.035.02.07.038.104.055l.031.016c.027.012.053.025.08.036l.034.015c.073.03.148.057.225.08l.024.007c.033.01.067.019.1.027l.018.004c.205.049.424.074.656.074.337 0 .674-.053.99-.131l.005-.002c.101-.025.2-.053.297-.083l.064-.02.051-.017L7.013 9l.034-.011c.262-.093.495-.194.681-.284l.004.01.01.026.025.068.012.032.037.096.006.014.038.096.015.037.034.082.015.036.049.117.015.034.04.093.02.046a13.727 13.727 0 00.123.266l.021.045.049.102.023.048.028.056a5.153 5.153 0 01-1.373.597.425.425 0 10.218.822 5.984 5.984 0 001.554-.668l.012.021a9.28 9.28 0 00.115.197l.014.024.1.166a15.44 15.44 0 00.112.18l.033.05.112.172.022.033a12.793 12.793 0 00.235.341l.026.038.129.177.034.046.104.138.04.053.142.18c1.015 1.268 2.208 2.28 3.544 3.008.101.055.204.11.308.161l.102.05c.07.034.14.069.21.101.042.02.084.037.125.056l.193.086.136.055c.062.026.124.052.187.076l.143.053.184.068.148.05c.061.02.123.042.184.061a11.14 11.14 0 00.678.192 10.183 10.183 0 00.507.115 12.917 12.917 0 00.544.098l.165.024c.065.01.13.018.195.026l.166.02c.066.008.132.014.198.02l.166.016.204.015.165.01.21.01.163.006h.032c.032.142.055.283.066.423l-.069.008-.082.008a25.224 25.224 0 01-.605.05c-.722.05-1.332.06-1.705.06-.315 0-.503-.007-.504-.007zm10.018.14c-1.15 1.286-3.23 2.13-6.183 2.508a26.708 26.708 0 01-3.938.198h-.136c.518-1.72 2.302-2.023 2.474-2.049.018 0 .035-.002.054-.004h.013l.042-.004.092-.006.024-.002.111-.009.058-.005h.004l.053-.005.085-.007.075-.007.081-.008.04-.004.079-.008.067-.007.128-.014c.012 0 .023-.002.035-.003.009-.001.017-.003.026-.003a25.416 25.416 0 00.315-.039h.004c.262-.034.538-.075.82-.124 1.521-.265 3.23-.77 4.087-1.729a.985.985 0 01.077-.077l.011-.01.01-.007c.021-.018.043-.036.066-.052l.01-.007.007-.005a1.008 1.008 0 01.086-.053h.001a.91.91 0 01.302-.106l.04-.006a1.03 1.03 0 01.165-.009l.022.001.071.006.024.004a1.027 1.027 0 01.243.068l.034.015c.018.008.034.017.051.026l.034.019c.018.01.035.022.052.034l.028.019a1 1 0 01.156 1.47z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
