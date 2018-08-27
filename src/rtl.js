/*!
 * Auto Direction. (RTL To LTR) for any right-to-left language available on this planet!
 * It detects text direction based on first character only. it can also ignore white spaces from the beginning for detection
 * based on SiamakMokhtri(@sia_mac)'s work
 * Under Licence MIT.
 * Created at May 2017.
 * @see https://codepen.io/hadifarnoud/pen/rmdxWe
 */

export function isRTL(str) {
  const letters = [];

  const allRTL = new RegExp(
    "^[\u0590-\u05fe\u0600-۾܀-ݎݐ-ݾހ-\u07be߀-\u07fe\u0800-\u083e\u0840-\u085e\u08a0-\u08fe\u0900-ॾ]|\ud802[\udf60-\udf7e]+$"
  );

  let cursor = 1;

  for (let i = 0; i <= cursor; i++) {
    letters[i] = str.substring(i - 1, i);
    if (/\s/.test(letters[i])) {
      cursor++;
    }
    if (allRTL.test(letters[i])) {
      return true;
    }
  }

  return false;
}

