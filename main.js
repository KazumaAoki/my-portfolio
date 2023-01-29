const buttonBeforeN = document.getElementById("before-button-native");
const buttonNextN = document.getElementById("next-button-native");
const imgNative = document.getElementById("img-native");
const disNative = document.getElementById("discription-native");

const buttonBeforeH = document.getElementById("before-button-hobby");
const buttonNextH = document.getElementById("next-button-hobby");
const imgHobby = document.getElementById("img-hobby");
const disHobby = document.getElementById("discription-hobby");

const img = [
  "https://mapitdata.blob.core.windows.net/map03-comppng/ja/highlight/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C__%E9%AB%98%E5%BA%A7%E9%83%A1_%E5%AF%92%E5%B7%9D%E7%94%BA.png",
  "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGx5cm8knTLo61O84kVTxOan841a30-aIJSoqkmlQNsP4-Qv0KVqX9M9vYFUiwJk7TXMQmAfMjQmV_HnHE_0RlLOj9HM6OW9nZW-fEzBvceDKXkAiQXm5-tq80nFwRNJdVDJmc0R2I61hIZSiBRzUV-8yujkacz3-zhaQ-NJ_zN_sy0cgE1wElJaeNcwQ2Y2g5EFgQ9wb-nWD5A_HcXPyzSdDrJIMtRFlv3D_H0k6OxPKZhJ4vbJRPPrmfATbRLbUd6PrePuVSScAHWLdLjnaAh2M9PpHSoUytbxswQu3_MFA/The_Samukawa_Shrine_02.jpg",
  "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGx_wASfeGdgFlI7r3Epang10NM3ngtXYeM6Uif4iAFvkMNMqod4yOy-fGddrzVWrljQDUwLDdg7YFgd65_4ABVDxekkVSLCfzW8WIi7__njJ_ozt4jeMC7ch2A8SmqoAYk4rq0a0jGXsPcQJ4hSmoJ97N3WshyBIZ2Uro-X7bGbbNLhUXR5pBmLGOW1gvUOtZ3_OokUi89gmaYL3aANX9_tRAPJ9TjNFp06ciQ7QprSKaUc12cPYZtEcnYWnQ_DNwQ==/img-thm1-gantan-1-sp.jpg",
];
const dis = [
  "僕の出身地は神奈川県の寒川町です。茅ヶ崎市や藤沢市に隣接していて、湘南の海が近いです",
  "寒川町には寒川神社という割と有名な神社があります。石田純一や阿部寛などの芸能人も参拝しに来るそうです。",
  "年始年始は参拝客で溢れかえります。また、屋台も多数出店しており、地元民は大体ここで友達と年越しを迎えます。",
];

const img_hobby = ["skate.jpg", "soccer.jpg", "bili.jpg"];
const dis_hobby = [
  "スケートボードを大学に入学してから始めました。全然うまくならないので誰か教えてほしいです。",
  "フットサルをするのが好きです。最近は年齢による衰えを感じていてすぐ疲れてしまいます。",
  "大学に入学してからビリヤードをやるようになりました。頻度はそんなにですが、毎回やるときは8時間くらいぶっ通しでやります。そこら辺の立ち仕事並みにきついです。",
];

imgNative.src = img[0];
disNative.textContent = dis[0];

imgHobby.src = img_hobby[0];
disHobby.textContent = dis_hobby[0];

let i_native = 0;
let i_hobby = 0;

const slideNext = function (i) {
  if (i === 2) {
    i = 0;
  } else {
    i++;
  }
  return i;
};
const slideBefore = function (i) {
  if (i === 0) {
    i = 2;
  } else {
    i--;
  }
  return i;
};
const changeDisplay_N = function (i) {
  imgNative.src = img[i];
  disNative.textContent = dis[i];
};
const changeDisplay_H = function (i) {
  imgHobby.src = img_hobby[i];
  disHobby.textContent = dis_hobby[i];
};

buttonBeforeN.onclick = function () {
  i_native = slideBefore(i_native);
  changeDisplay_N(i_native);
};
buttonNextN.onclick = function () {
  i_native = slideNext(i_native);
  changeDisplay_N(i_native);
};

buttonBeforeH.onclick = function () {
  i_hobby = slideBefore(i_hobby);
  changeDisplay_H(i_hobby);
};
buttonNextH.onclick = function () {
  i_hobby = slideNext(i_hobby);
  changeDisplay_H(i_hobby);
};
