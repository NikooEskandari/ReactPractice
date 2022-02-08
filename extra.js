$(function () {
    class StrActions {
        constructor(str) {
            this.value = str;
        }

        reverseWords() {
            if (typeof this.value === 'undefined' || this.value === null || typeof this.value.split === 'undefined') {
                return false;
            }
            let valToArray = this.value.split(".");
            let reversed = (typeof valToArray !== 'undefined' && typeof valToArray.reverse !== 'undefined') ? valToArray.reverse() : [];
            return reversed.join(".");
        }

        findPermutaion() {
            if (typeof this.value === 'undefined' || typeof this.value.length === 'undefined') {
                return false;
            }

            if (this.value.length > 5) {
                return false;
            }

            let permutatios = [];
            let used_characters = [];

            this.permuteStr(this.value, this.value, used_characters, permutatios);

        }

        permuteStr(originalStr, strrr, used_characters, permutatios) {
            for (let i = 0; i < strrr.length; i++) {
                if (strrr !== '') {
                    if (used_characters.indexOf(strrr[i]) === -1) {
                        used_characters.push(strrr[i]);

                        let strToPush = originalStr.substring(0, originalStr.indexOf(strrr[i]));
                        let strToPass = strrr.substring(strrr.indexOf(strrr[i]));

                        //console.log('strToPush', strToPush);
                        //console.log('strToPass', strToPass);

                        if (typeof strToPush !== 'undefined' && typeof strToPush.length !== 'undefined'
                            && strToPush.length > 1) {
                            permutatios.push(strToPush);
                        }

                        if (typeof strToPass !== 'undefined' && typeof strToPass.length !== 'undefined'
                            && strToPass.length > 0) {

                            if (strToPass.length > 1) {
                                permutatios.push(strToPass);
                            }

                            // for (let j = 0; j < strToPass.length; j++) {
                            //     let strToPass2 = strToPass.substring(strToPass.indexOf(strToPass[j]));
                            //
                            //     console.log('strToPass2', strToPass2);
                            //     this.permuteStr(originalStr, strToPass2, used_characters, permutatios);
                            // }

                            //console.log('permutatios', permutatios);

                        } else {
                            //console.log(permutatios);
                            return permutatios;
                        }
                    }
                }

            }
        }
    }

    //***********************************

    let S = '';
    let str = new StrActions(S);
    //console.log(str.reverseWords());

    //***********************************

    let T = 'i.like.this.program.very.much';
    let strT = new StrActions(T);
    //console.log(strT.reverseWords());

    //***********************************

    let U = '1.2';
    let strU = new StrActions(U);
    //console.log(strU.reverseWords());

    //***********************************

    let A = 'ABCD';
    let strA = new StrActions(A);
    //strA.findPermutaion();
});